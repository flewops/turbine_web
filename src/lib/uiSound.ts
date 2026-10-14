/**
 * Subtle UI sound effects for hover and click, synthesised with the Web Audio
 * API — no audio files to download.
 *
 * Browsers only allow audio after a user gesture, so the AudioContext is
 * created lazily on the first click; hover sounds start after that.
 * Disabled for visitors with "reduce motion" turned on.
 */

const HOVER_THROTTLE_MS = 45;

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let lastHover = 0;

// Off for people who ask the OS for less motion/stimulation.
const enabled =
  typeof window !== "undefined" &&
  !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Creates/resumes the audio context. Must be called from a user gesture. */
export function unlockAudio() {
  if (!enabled) return;
  if (!ctx) {
    const AudioCtor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtor) return;
    ctx = new AudioCtor();
    master = ctx.createGain();
    master.gain.value = 0.6;
    master.connect(ctx.destination);
  }
  if (ctx.state === "suspended") void ctx.resume();
}

let noise: AudioBuffer | null = null;

/** A short buffer of white noise, created once and reused for every tick. */
function noiseBuffer(audio: AudioContext) {
  if (!noise) {
    noise = audio.createBuffer(1, Math.ceil(audio.sampleRate * 0.05), audio.sampleRate);
    const data = noise.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  }
  return noise;
}

/** A very short burst of filtered noise — a dry, non-musical "tick". */
function tick(centre: number, volume: number, duration: number) {
  if (!enabled || !ctx || !master || ctx.state !== "running") return;

  const t = ctx.currentTime;
  const src = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();

  src.buffer = noiseBuffer(ctx);
  filter.type = "bandpass";
  filter.frequency.value = centre;
  filter.Q.value = 1.2;

  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(volume, t + 0.002);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

  src.connect(filter).connect(gain).connect(master);
  src.start(t);
  src.stop(t + duration + 0.01);
}

/** A soft, low body with a fast pitch drop — the "thump" of a pressed button. */
function thump(from: number, to: number, volume: number, duration: number) {
  if (!enabled || !ctx || !master || ctx.state !== "running") return;

  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(from, t);
  osc.frequency.exponentialRampToValueAtTime(to, t + duration);

  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(volume, t + 0.003);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

  osc.connect(gain).connect(master);
  osc.start(t);
  osc.stop(t + duration + 0.02);
}

/** Tiny, quiet tick — moving onto a link or button. Same sound every time. */
export function playHover() {
  const now = performance.now();
  if (now - lastHover < HOVER_THROTTLE_MS) return;
  lastHover = now;
  tick(3500, 0.05, 0.018);
}

/** Soft tap — pressing a link or button. */
export function playClick() {
  tick(2200, 0.09, 0.025);
  thump(240, 110, 0.22, 0.07);
}
