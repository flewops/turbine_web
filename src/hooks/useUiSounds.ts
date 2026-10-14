import { useEffect } from "react";
import { playClick, playHover, unlockAudio } from "../lib/uiSound";

const INTERACTIVE = 'a[href], button:not(:disabled), [role="button"], summary, input[type="submit"], input[type="button"], select';

/** Plays hover/click sounds for every link and button on the page. Mount once. */
export function useUiSounds() {
  useEffect(() => {
    let hovered: Element | null = null;

    const interactive = (target: EventTarget | null) =>
      target instanceof Element ? target.closest(INTERACTIVE) : null;

    const onPointerOver = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return; // no hover sounds on touch
      const el = interactive(e.target);
      if (el && el !== hovered) playHover();
      hovered = el;
    };

    const onPointerDown = (e: PointerEvent) => {
      unlockAudio();
      if (interactive(e.target)) playClick();
    };

    // Keyboard activation (Enter/Space) fires click with detail 0.
    const onClick = (e: MouseEvent) => {
      if (e.detail === 0 && interactive(e.target)) {
        unlockAudio();
        playClick();
      }
    };

    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("pointerdown", onPointerDown, { passive: true, capture: true });
    document.addEventListener("click", onClick, { capture: true });
    return () => {
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerdown", onPointerDown, { capture: true });
      document.removeEventListener("click", onClick, { capture: true });
    };
  }, []);
}
