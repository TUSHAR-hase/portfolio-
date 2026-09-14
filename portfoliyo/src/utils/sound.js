/**
 * Web Audio API synthesizer for subtle developer interface feedback.
 * Zero external audio assets needed; purely synthesized tones.
 */

class SoundEffects {
  constructor() {
    this.audioCtx = null;
    this.isMuted = false;
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("th-sound-muted");
        this.isMuted = saved === "true";
      } catch {
        this.isMuted = false;
      }
    }
  }

  init() {
    if (typeof window === "undefined") return null;
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("th-sound-muted", String(this.isMuted));
      } catch {
        // ignore
      }
    }
    return this.isMuted;
  }

  getMuted() {
    return this.isMuted;
  }

  playClick() {
    if (this.isMuted) return;
    try {
      const ctx = this.init();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(820, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // Ignore audio policy restriction before user gesture
    }
  }

  playKey() {
    if (this.isMuted) return;
    try {
      const ctx = this.init();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(320 + Math.random() * 80, ctx.currentTime);

      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.03);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.03);
    } catch {
      // Ignore
    }
  }

  playSuccess() {
    if (this.isMuted) return;
    try {
      const ctx = this.init();
      if (!ctx) return;
      const now = ctx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        gain.gain.setValueAtTime(0.035, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.14);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.14);
      });
    } catch {
      // Ignore
    }
  }

  playTerminalOpen() {
    if (this.isMuted) return;
    try {
      const ctx = this.init();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.09);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } catch {
      // Ignore
    }
  }
}

export const sound = new SoundEffects();

