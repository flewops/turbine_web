import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { Check, ChevronDown } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
  /** Muted extra text shown on the right, e.g. a release date. */
  hint?: string;
  disabled?: boolean;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  /** Shown when no option matches `value`. */
  placeholder?: string;
  disabled?: boolean;
  /** Adds a hidden input so the value is submitted with a surrounding form. */
  name?: string;
  /** Id of the visible label element. */
  labelId?: string;
  /** Larger padding to match form inputs. */
  size?: "md" | "lg";
  className?: string;
}

/**
 * Site-styled dropdown (WAI-ARIA "select-only combobox"): square, bordered,
 * with a listbox that matches the site instead of the OS menu.
 * Keyboard: ↑/↓, Home/End, Enter/Space, Esc, Tab, and type-to-jump.
 */
export default function Select({
  value,
  onChange,
  options,
  placeholder = "Select…",
  disabled = false,
  name,
  labelId,
  size = "md",
  className = "",
}: SelectProps) {
  const id = useId();
  const listId = `${id}-list`;
  const optionId = (i: number) => `${id}-opt-${i}`;

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const typed = useRef({ text: "", at: 0 });

  const selectedIndex = options.findIndex((o) => o.value === value);
  const selected = options[selectedIndex];

  const enabledFrom = (start: number, step: 1 | -1) => {
    for (let i = start; i >= 0 && i < options.length; i += step) {
      if (!options[i].disabled) return i;
    }
    return -1;
  };

  const openList = (at = selectedIndex >= 0 ? selectedIndex : enabledFrom(0, 1)) => {
    if (disabled || !options.length) return;
    setActive(Math.max(0, at));
    setOpen(true);
  };

  const choose = (i: number) => {
    const option = options[i];
    if (!option || option.disabled) return;
    setOpen(false);
    if (option.value !== value) onChange(option.value);
  };

  // Close when clicking outside.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // Keep the highlighted option visible inside the list.
  useEffect(() => {
    if (open) listRef.current?.querySelector(`#${CSS.escape(optionId(active))}`)?.scrollIntoView({ block: "nearest" });
    // optionId only depends on the stable `id`
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, active]);

  // Type-to-jump: match the start of a label, accumulating quickly typed letters.
  const jumpTo = (char: string) => {
    const now = Date.now();
    typed.current = { text: now - typed.current.at < 600 ? typed.current.text + char : char, at: now };
    const query = typed.current.text.toLowerCase();
    const start = open ? active : Math.max(selectedIndex, 0);
    for (let n = 1; n <= options.length; n++) {
      const i = (start + n) % options.length;
      if (!options[i].disabled && options[i].label.toLowerCase().startsWith(query)) return i;
    }
    return -1;
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    const last = options.length - 1;

    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        openList();
      } else if (e.key === "Home" || e.key === "End") {
        e.preventDefault();
        openList(e.key === "Home" ? enabledFrom(0, 1) : enabledFrom(last, -1));
      } else if (e.key.length === 1 && /\S/.test(e.key)) {
        const i = jumpTo(e.key);
        if (i >= 0) choose(i);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        const i = enabledFrom(active + 1, 1);
        if (i >= 0) setActive(i);
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        const i = enabledFrom(active - 1, -1);
        if (i >= 0) setActive(i);
        break;
      }
      case "Home":
      case "End":
        e.preventDefault();
        setActive(Math.max(0, e.key === "Home" ? enabledFrom(0, 1) : enabledFrom(last, -1)));
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        choose(active);
        break;
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        if (e.key.length === 1 && /\S/.test(e.key)) {
          const i = jumpTo(e.key);
          if (i >= 0) setActive(i);
        }
    }
  };

  const pad = size === "lg" ? "px-4 py-3.5" : "px-3 py-2.5";

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      {name && <input type="hidden" name={name} value={value} />}

      <div
        role="combobox"
        tabIndex={disabled ? -1 : 0}
        aria-controls={listId}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-labelledby={labelId ? `${labelId} ${id}-value` : `${id}-value`}
        aria-activedescendant={open ? optionId(active) : undefined}
        aria-disabled={disabled || undefined}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKeyDown}
        className={`flex w-full cursor-pointer select-none items-center justify-between gap-3 border-2 border-primary text-left text-sm font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary ${pad} ${
          disabled
            ? "cursor-not-allowed opacity-50"
            : open
              ? "bg-primary text-secondary"
              : "bg-secondary hover:bg-primary hover:text-secondary"
        }`}
      >
        <span id={`${id}-value`} className="flex min-w-0 items-baseline gap-2">
          <span className={`truncate ${selected ? "" : "opacity-60"}`}>{selected?.label ?? placeholder}</span>
          {selected?.hint && <span className="truncate text-xs font-medium opacity-60">{selected.hint}</span>}
        </span>
        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </div>

      {open && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          aria-labelledby={labelId}
          className="absolute inset-x-0 top-full z-40 -mt-[2px] max-h-72 overflow-y-auto border-2 border-primary bg-secondary shadow-[6px_6px_0_0_var(--color-primary)]"
        >
          {options.map((option, i) => {
            const isSelected = i === selectedIndex;
            const isActive = i === active;
            return (
              <li
                key={option.value}
                id={optionId(i)}
                role="option"
                aria-selected={isSelected}
                aria-disabled={option.disabled || undefined}
                onMouseEnter={() => !option.disabled && setActive(i)}
                onMouseDown={(e) => e.preventDefault()} // keep focus on the combobox
                onClick={() => choose(i)}
                className={`flex items-center gap-3 text-sm ${pad} ${
                  option.disabled
                    ? "cursor-not-allowed opacity-40"
                    : isActive
                      ? "cursor-pointer bg-primary text-secondary"
                      : "cursor-pointer"
                } ${i > 0 ? "border-t border-primary/15" : ""}`}
              >
                <Check className={`h-4 w-4 shrink-0 ${isSelected ? "" : "invisible"}`} aria-hidden="true" />
                <span className={`min-w-0 flex-1 truncate ${isSelected ? "font-bold" : "font-medium"}`}>{option.label}</span>
                {option.hint && <span className="shrink-0 text-xs opacity-60">{option.hint}</span>}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
