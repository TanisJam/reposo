import Link from 'next/link';
import { ReactNode } from 'react';

interface NavItemProps {
  children: ReactNode;
  link: string;
  variant?: 'primary' | 'default';
  className?: string;
}

export default function NavItem({ children, link }: NavItemProps) {
  return (
    <li className="flex items-center px-3 py-2">
      <Link
        className="text-sm hover:text-ember-200 transition-colors"
        href={link}
      >
        {children}
      </Link>
    </li>
  );
}
