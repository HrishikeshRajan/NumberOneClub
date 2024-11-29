import { ButtonThemeConfig } from './types';


export enum opacity {
    Opaque_100 = 'opacity-100',
    Opaque_90 = 'opacity-90',  
    Opaque_80 = 'opacity-80',  
    Opaque_70 = 'opacity-70',   
    Opaque_60 = 'opacity-60',   
    Opaque_50 = 'opacity-50',  
    Opaque_40 = 'opacity-40',   
    Opaque_30 = 'opacity-30',   
    Opaque_20 = 'opacity-20',   
    Opaque_10 = 'opacity-10',   
    Opaque_0 = 'opacity-0'    
  }


type ThemeColors = {
    primary: string;
    hover: string;
    active: string;
  };
  
  const createButtonTheme = (colors: ThemeColors) => {
    const { primary, hover, active } = colors;
    
    return {
      solid: {
        background: `bg-${primary}`,
        text: 'text-white',
        border: `border-${primary}`,
        hover: {
          background: `hover:bg-${hover}`,
          text: 'hover:text-white',
          border: `hover:border-${hover}`
        },
        active: {
          background: `active:bg-${active}`,
          text: 'active:text-white',
          border: `active:border-${active}`
        }
      },
      ghost: {
        background: 'bg-transparent',
        text: `text-${primary}`,
        border: `border-${primary}`,
        hover: {
          background: `hover:bg-${primary}`,
          text: `hover:text-white`,
          border: `hover:border-${primary}`
        },
        active: {
          background: `active:bg-${primary}`,
          text: `active:text-${primary}`,
          border: `active:border-${primary}`
        }
      }
    };
  };
  

  export const buttonThemes: ButtonThemeConfig = {
    skobeloff: createButtonTheme({
      primary: 'Skobeloff',
      hover: 'Skobeloff',
      active: 'Skobeloff'
    }),
    darkslategray: createButtonTheme({
      primary: 'darkslategray',
      hover: 'darkslategray',
      active: 'darkslategray'
    }),
    sunglow: createButtonTheme({
      primary: 'sunglow',
      hover: 'sunglow',
      active: 'sunglow'
    }),
    mediumseagreen: createButtonTheme({
      primary: 'mediumseagreen',
      hover: 'mediumseagreen',
      active: 'mediumseagreen'
    })
  };


  