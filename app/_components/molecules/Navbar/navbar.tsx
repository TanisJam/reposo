import { Crow } from '@/atoms/Icons';
import { NavItem } from '@/atoms/NavItem';

export default function Navbar() {
  return (
    <div className="flex container mx-auto bg-[--bg-color] text-gray-700 justify-between border-b border-base-100 divide-x divide-solid divide-base-100 h-14 border md:my-0.5 ">
      <div className="flex p-2">
        <a
          href="#"
          className="flex gap-2 hover:underline underline-offset-4 decoration-accent my-auto text-xl"
        >
          <Crow className="w-8 h-8" />
          <span>RdC</span>
        </a>
      </div>

      <ul className="flex font-nanum_gothic font-normal uppercase text-base divide-x divide-solid divide-base-100 ">
        <NavItem link="#">Historia</NavItem>
        <NavItem link="#">Herramientas</NavItem>
      </ul>
    </div>
  );
}
