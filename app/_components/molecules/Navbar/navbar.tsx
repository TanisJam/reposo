import { Crow } from '@/atoms/Icons';
import { NavItem } from '@/atoms/NavItem';
import Link from 'next/link';
import { LINKS } from '@/app/_lib/links';

export default function Navbar() {
  return (
    <div className="flex container mx-auto bg-[--bg-color] text-gray-700 justify-between border-b border-base-100 divide-x divide-solid divide-base-100 h-14 border md:my-0.5 ">
      <div className="flex p-2">
        <a
          href="\"
          className="flex gap-2 hover:underline underline-offset-4 decoration-accent my-auto text-xl"
        >
          <Crow className="w-8 h-8" />
          <span>RdC</span>
        </a>
      </div>

      <ul className="flex font-nanum_gothic font-normal uppercase text-base divide-x divide-solid divide-base-100 ">
        <NavItem link="#story">Historia</NavItem>
        <li className="flex row items-center py-2 px-4">
          <div className="dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="flex text-center items-center gap-2 mx-auto my-auto text-xl hover:underline underline-offset-4 decoration-accent"
            >
              Links Utiles
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu z-[1] w-52 p-2 border border-base-100 divide-y divide-solid divide-base-100 shadow rounded-sm bg-[--bg-color] "
            >
              <li>
                <Link
                  target="_blank"
                  className="flex gap-2 hover:underline focus:text-black active:text-accent active:font-extrabold underline-offset-4 decoration-accent"
                  href={LINKS.forgottenWiki}
                >
                  Forgotten Realms Wiki
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  className="flex gap-2 hover:underline focus:text-black active:text-accent active:font-extrabold underline-offset-4 decoration-accent"
                  href={LINKS.tools}
                >
                  5e Tools
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  className="flex gap-2 hover:underline focus:text-black active:text-accent active:font-extrabold underline-offset-4 decoration-accent"
                  href={LINKS.atlas}
                >
                  Mapa de Faerun
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  className="flex gap-2 hover:underline focus:text-black active:text-accent active:font-extrabold underline-offset-4 decoration-accent"
                  href={LINKS.reference}
                >
                  Referencia Custom
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
