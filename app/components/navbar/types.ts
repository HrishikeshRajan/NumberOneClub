
export  interface NavLink {
    id: string;
    label: string;
    path: string;
  }

export interface NavLinkProps {
    className: string;
    items: NavLink[];
  }