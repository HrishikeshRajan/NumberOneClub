import { ButtonProps } from "@/components/ui/button";

export enum COLORS  {
    skobeloff = 'skobeloff',
    darkslategray  = 'darkslategray',
    sunglow =  'sunglow',
    mediumseagreen = 'mediumseagreen' 
} 


export enum MODE {
    solid = 'solid',
    ghost  = 'ghost',
} 


export interface ThemeConfig {
  background: string;
  text: string;
  border: string;
  hover: {
    background: string;
    text: string;
    border: string;
  };
  active: {
    background: string;
    text: string;
    border: string;
  };
}

export interface ButtonThemeConfig {
  [key: string]: {
    solid: ThemeConfig;
    ghost: ThemeConfig;
  };
}

export interface ThemedButtonProps extends ButtonProps {
  colorTheme?: keyof typeof COLORS;
  mode?: keyof typeof MODE;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}