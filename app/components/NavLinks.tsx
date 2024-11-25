"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CreatorsNavMenu } from "./CreatorsDropDown";
import { NavLinksValues } from "../seed/navLinks";

export function NavLinks({ className }: { className: string }) {
  const pathname = usePathname();

  return (
    <div className={className}>
      <CreatorsNavMenu />

      {NavLinksValues.map((link) => (
        <Link
          key={link.id}
          href={link.path}
          className={`relative transition-colors text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-border-skobeloff after:origin-left after:transition-transform ${
            pathname === link.path
              ? "after:scale-x-100"
              : "after:scale-x-0 hover:after:scale-x-100"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
