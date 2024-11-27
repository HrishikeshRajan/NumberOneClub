import { NavLink } from "../components/navbar/types";

enum NavLinkPath {
    CREATORS = '/creators',
    BENEFITS = '/benefits',
    PRICING = '/pricing',
    CALCULATOR = '/calculator'
  };


export const navItems: NavLink[] = [

    {
        id:'2',
        path: NavLinkPath.BENEFITS,
        label: 'Benefits',
 },
    {
        id:'3',
        path: NavLinkPath.PRICING,
        label: 'Pricing',
  },
    {   
        id:'4',
        path: NavLinkPath.CALCULATOR,
        label: 'Calculator',
  }
]