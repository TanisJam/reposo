import { TanisJam } from '@/atoms/Icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="relative w-full font-nanum_gothic uppercase text-xs tracking-wider py-8 text-parchment-300/60 text-center"
      style={{
        borderTop: '1px solid rgba(255, 184, 74, 0.12)',
        background:
          'linear-gradient(180deg, transparent 0%, rgba(13, 10, 7, 0.9) 100%)',
      }}
    >
      <p className="flex items-center justify-center gap-2">
        <span>&copy; 2024 — El Reposo del Cuervo</span>
        <span className="text-ember-300/60">·</span>
        <Link
          target="_blank"
          href="https://github.com/TanisJam"
          className="hover:text-ember-200 transition-colors"
        >
          <TanisJam className="inline-block w-5 h-5 hover:animate-spin" />
        </Link>
      </p>
    </footer>
  );
}
