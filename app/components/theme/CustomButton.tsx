import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";


interface CustomButtonProps extends ButtonProps {
  customStyle?: string; // Optional custom style class
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, customStyle, ...props }) => {
  return (
    <Button
      {...props}
      className={cn(
        "px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300",
        customStyle,
        props.className 
      )}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
