"use client";
import Link from "next/link";
import { useState } from "react";
import CustomButton from "./ui/theme/CustomButton";
import EnableClickAnimation from "./ui/animation/EnableClickAnimation";
import { InputOTPFields } from "./auth/Otp";
import { CustomDialog } from "./ui/modals/Modal";

export default function AuthButtons() {
  const [activeButton, setActiveButton] = useState("login");

  return (
    <div className="hidden lg:flex items-center space-x-4">
      <EnableClickAnimation>
        <CustomButton
          variant={"ghost"}
          customStyle={`border-2 text-lg font-semibold rounded-3xl text-Skobeloff border-Skobeloff nav-btn hover:bg-Skobeloff hover:text-white
              ${
                activeButton === "signup"
                  ? "bg-Skobeloff text-white"
                  : "hover:bg-Skobeloff hover:text-white"
              } hover:text-white `}
          asChild
          onClick={() => setActiveButton("signup")}
        >
          <Link href="#" className="text-lg font-semibold">
            Sign Up
          </Link>
        </CustomButton>
      </EnableClickAnimation>

      <CustomDialog
        triggerOn={
          <CustomButton
            variant={"ghost"}
            customStyle={`border-2 text-lg font-semibold rounded-3xl text-Skobeloff border-Skobeloff nav-btn hover:bg-Skobeloff hover:text-white
            ${
              activeButton === "login"
                ? "bg-Skobeloff text-white"
                : "hover:bg-Skobeloff hover:text-white"
            } hover:text-white`}
            asChild
            onClick={() => setActiveButton("login")}
          >
            <Link href="#" className="text-lg font-semibold">
              Login
            </Link>
          </CustomButton>
        }
        triggerText="login"
        triggerVariant="ghost"
        dialogTitle=""
        dialogDescription=""
        content={<InputOTPFields PhoneNumber="+2348123456789" />}
      />
    </div>
  );
}
