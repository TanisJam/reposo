import { TanisJam } from '@/atoms/Icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mb-0.5 font-nanum_gothic font-normal uppercase container mx-auto bg-[--bg-color] py-4 md:px-8  text-base-100 text-center border border-b border-base-100">
      <p>
        &copy; 2024 - El Reposo del Cuervo -{' '}
        <span className="font-bold hover:animate-spin">
          <Link target="_blank" href="https://github.com/TanisJam">
            <TanisJam className="animate-bounce hover:animate-spin inline-block w-6 h-6" />
          </Link>
        </span>
      </p>
    </footer>
  );
}
