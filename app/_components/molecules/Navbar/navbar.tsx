'use client';

import { Crow } from '@/atoms/Icons';
import { NavItem } from '@/atoms/NavItem';
import Link from 'next/link';
import { LINKS } from '@/app/_lib/links';

export default function Navbar() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md"
      style={{
        background:
          'linear-gradient(180deg, rgba(13, 10, 7, 0.85) 0%, rgba(13, 10, 7, 0.55) 100%)',
        borderBottom: '1px solid rgba(255, 184, 74, 0.15)',
      }}
    >
      <nav className="container mx-auto flex items-center justify-between h-14 px-4 sm:px-6 text-parchment-200">
        <Link
          href="/"
          className="group flex items-center gap-2 text-xl font-junge_regular"
        >
          <Crow className="w-7 h-7 fill-ember-300 group-hover:fill-ember-200 transition-colors" />
          <span className="tracking-wider group-hover:text-ember-200 transition-colors">
            RdC
          </span>
        </Link>

        <ul className="flex items-center font-nanum_gothic font-normal uppercase text-sm gap-1">
          <NavItem link="/#story">Historia</NavItem>
          <li className="px-3 py-2">
            <div className="dropdown dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-2 text-sm hover:text-ember-200 transition-colors cursor-pointer"
              >
                Links Útiles
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu z-[1] w-56 p-2 mt-2 shadow-xl rounded-sm"
                style={{
                  background: 'rgba(13, 10, 7, 0.95)',
                  border: '1px solid rgba(255, 184, 74, 0.2)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <li>
                  <Link
                    target="_blank"
                    className="text-parchment-200 hover:text-ember-200 hover:bg-ember-900/30"
                    href={LINKS.forgottenWiki}
                  >
                    Forgotten Realms Wiki
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="text-parchment-200 hover:text-ember-200 hover:bg-ember-900/30"
                    href={LINKS.tools}
                  >
                    5e Tools
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="text-parchment-200 hover:text-ember-200 hover:bg-ember-900/30"
                    href={LINKS.atlas}
                  >
                    Mapa de Faerûn
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="text-parchment-200 hover:text-ember-200 hover:bg-ember-900/30"
                    href={LINKS.reference}
                  >
                    Referencia Custom
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
