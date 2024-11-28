"use client";
import { useState } from "react";
import EnableClickAnimation from "./ui/animation/EnableClickAnimation";
import { CustomDialog } from "./ui/modals/Modal";
import Auth from "./auth/auth";
import ThemedButton from "./ui/theme/button/ThemedButton";
import clsx from "clsx";

export default function AuthButtons() {
  const [activeButton, setActiveButton] = useState("login");

  return (
    <div className="hidden lg:flex items-center space-x-4">
      <EnableClickAnimation>
      <ThemedButton
        onClick={() => setActiveButton("signin")}
          className={clsx(
            'px-10 py-5',
            {    
            'bg-Skobeloff text-white': activeButton === "signin", 
            'bg-transparent text-Skobeloff hover:bg-Skobeloff hover:text-white': activeButton !== "signin", 
          }
        )}
         >
          Sign in
         </ThemedButton>
      </EnableClickAnimation>

      <CustomDialog
        triggerOn={
         <ThemedButton
          onClick={() => setActiveButton("login")}
          className={clsx(
            'px-10 py-5',
            {    
            'bg-Skobeloff text-white': activeButton === "login", 
            'bg-transparent text-Skobeloff hover:bg-Skobeloff hover:text-white': activeButton !== "login", 
          }
        )}
         >
          Login
         </ThemedButton>
        }
        triggerText="login"
        triggerVariant="ghost"
        dialogTitle=""
        dialogDescription=""
        content={<Auth />}
      />
    </div>
  );
}
