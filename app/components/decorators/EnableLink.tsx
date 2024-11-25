import React, { ComponentProps } from "react";
import Link from "next/link";

interface CustomLinkProps extends ComponentProps<typeof Link> {
  href: string;
  children: React.ReactNode;
}

const EnableLink: React.FC<CustomLinkProps> = ({ children, href, ...props }) => {
  return (
    <Link href={href} {...props} passHref>
      {children}
    </Link>
  );
};

export default EnableLink;
