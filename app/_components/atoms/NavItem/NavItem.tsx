import Link from 'next/link';
import { ReactNode } from 'react';

interface NavItemProps {
  children: ReactNode;
  link: string;
  variant?: 'primary' | 'default';
  className?: string;
}

export default function NavItem({
  children,
  link,
  variant = 'default',
  className,
}: NavItemProps) {
  return (
    <li className="flex row items-center py-2 px-4">
      <Link
        className="flex items-center gap-2 mx-auto my-auto text-xl hover:underline underline-offset-4 decoration-accent"
        href={link}
      >
        {children}
      </Link>
    </li>
  );
}
