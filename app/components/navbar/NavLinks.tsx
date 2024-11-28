"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavLinkProps } from "./types";

export function NavLinks({ className, items }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <div className={className}>

      {Array.isArray(items) && items.length ? items?.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`relative transition-colors text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-border-skobeloff after:origin-left after:transition-transform ${
            pathname === link.path
              ? "after:scale-x-100"
              : "after:scale-x-0 hover:after:scale-x-100"
          }`}
        >
          {link.label}
        </Link>
      )): ''}
    </div>
  );
}
