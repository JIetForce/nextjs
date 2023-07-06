'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};
const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map(({ label, href }) => {
        const isActive = href === pathname;
        return (
          <Link key={label} href={href} className={isActive ? 'active' : ''}>
            {label}
          </Link>
        );
      })}
    </>
  );
};

export default Navigation;
