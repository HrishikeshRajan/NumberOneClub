
import Link from "next/link";
import React from "react";

interface CustomLinkProps  {
  href: string; 
  children: React.ReactNode 
}

const EnableLink: React.FC<CustomLinkProps> = ({ children, href,  ...props }) => {
  return (
    <Link href={href} {...props} passHref>
        {children}
    </Link>
  );
};

export default EnableLink;
