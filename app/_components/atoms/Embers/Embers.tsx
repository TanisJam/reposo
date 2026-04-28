'use client';

import { useMemo } from 'react';

interface EmbersProps {
  count?: number;
  className?: string;
}

export default function Embers({ count = 30, className = '' }: EmbersProps) {
  const embers = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const seed = (i + 1) * 37;
        const left = (seed * 13) % 100;
        const delay = ((seed * 7) % 1200) / 100;
        const duration = 8 + ((seed * 3) % 12);
        const drift = ((seed * 11) % 80) - 40;
        const size = 2 + ((seed * 5) % 4);
        const opacity = 0.5 + ((seed * 17) % 50) / 100;
        return { left, delay, duration, drift, size, opacity, key: i };
      }),
    [count]
  );

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {embers.map((e) => (
        <span
          key={e.key}
          className="ember-dot animate-ember"
          style={{
            left: `${e.left}%`,
            width: `${e.size}px`,
            height: `${e.size}px`,
            opacity: e.opacity,
            animationDelay: `${e.delay}s`,
            animationDuration: `${e.duration}s`,
            ['--ember-drift' as string]: `${e.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
