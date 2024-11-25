enum NavLinkPath {
    CREATORS = '/creators',
    BENEFITS = '/benefits',
    PRICING = '/pricing',
    CALCULATOR = '/calculator'
  };


export const NavLinksValues = [
    {
        id:1,
        path: NavLinkPath.CREATORS,
        label: 'Creators',
        className: 'relative transition-colors nav-text after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-border-skobeloff after:origin-left after:transition-transform',
    },
    {
        id:2,
        path: NavLinkPath.BENEFITS,
        label: 'Benefits',
        className: 'relative transition-colors nav-text after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-border-skobeloff after:origin-left after:transition-transform',
    },
    {
        id:3,
        path: NavLinkPath.PRICING,
        label: 'Pricing',
        className: 'relative transition-colors nav-text after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-border-skobeloff after:origin-left after:transition-transform',
    },
    {   
        id:4,
        path: NavLinkPath.CALCULATOR,
        label: 'Calculator',
        className: 'relative transition-colors nav-text after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-border-skobeloff after:origin-left after:transition-transform',
    }
]