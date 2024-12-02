"use client";

import { useEffect, useRef } from "react";
import { motion, Variants } from 'framer-motion';
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { animations, OTP_LENGTH } from "./config";
import { OTPInputProps } from "./types";
import { Slot } from "./Slot";
import { Heading } from "../../Heading";
import JellyButton from "../../ui/animation/EnableJiggleAnimation";
import EnableClickAnimation from "../../ui/animation/EnableClickAnimation";
import ThemedButton from "../../ui/theme/button/ThemedButton";
import useTimer from "@/hooks/useTimer";
import { toast } from "sonner";

export function OTPInput({ 
  phoneNumber, 
  onVerify, 
  onChangeNumber ,
  back
}: OTPInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const verifyButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {

    inputRefs?.current[0]?.focus();
  }, []);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (value.length > 1) {
      e.target.value = value.charAt(0);
    }

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    } else if (value && index === OTP_LENGTH - 1) {
      verifyButtonRef.current?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && !e.currentTarget.value) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "Enter" && index === OTP_LENGTH - 1) {
      verifyButtonRef.current?.click();
    }
  };

  const handleVerify = () => {
    const otp = inputRefs.current
      .map(input => input?.value)
      .join('');
    onVerify?.(otp);
  };


  const [time] = useTimer({upperLimit:10})


  useEffect(() => {
    if (time === 0) {
      if(back){
        toast.error('OTP has Expired',{
          description :'Please try to login again',
          className:"p-5",
          descriptionClassName:'text-red-300',
           richColors: true

        })
        back()
      }
    }
  }, [back, time]); 
  const minutes = `${Math.floor(time / 60)}`.padStart(2, "0");
  const seconds = `${time % 60}`.padStart(2, "0");

  const digitAnimation = {
    initial: { scale: 1, opacity: 1 },
    animate: { scale: [1.2, 0.9, 1], opacity: [1, 0.5, 1] },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

 
  return (
    <Card className="w-full h-auto pb-5 bg-white font-euclid rounded-3xl px-5 shadow-md">
      <Heading
        title="Sign in"
        className="text-darkslategray text-3xl md:text-3xl xl:text-4xl px-1 py-7 font-semibold text-left"
      />
      
      <div className="flex flex-col items-center justify-start text-left space-y-4 w-full">
        <div className="flex flex-row justify-between w-full">
          <span className="text-darkslategray text-xs text-left font-regular">
            OTP sent to{" "}
            <span className="text-mediumseagreen text-xs font-regular">
              {phoneNumber}
            </span>{" "}
            on WhatsApp
          </span>

          <span className="flex items-center space-x-1 text-red-600 shadow-red-300 text-lg font-bold">
              <motion.span {...digitAnimation}  key={time + 1}>
                {minutes}
              </motion.span>
              <span>:</span>
              <motion.span {...digitAnimation} key={`${time + 4}`}>
                {seconds}
              </motion.span>
            </span>
          <Link
            href="#"
            onClick={onChangeNumber}
            className="text-[11px] md:text-xs w-28 flex flex-row text-mediumseagreen"
          >
            Change Number?
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-6 gap-1"
          variants={animations.container}
          initial="hidden"
          animate="visible"
        >
          {Array(OTP_LENGTH).fill("").map((_, index) => (
            <Slot
              key={index}
              index={index}
              inputRef={(el) => (inputRefs.current[index] = el)}
              onInputChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          ))}
        </motion.div>

        <JellyButton className="w-full">
          <EnableClickAnimation>
            <ThemedButton
              onClick={handleVerify}
              colorTheme="mediumseagreen"
              className="w-full rounded-lg p-5 focus:ring-4 focus:ring-green-400 transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:opacity-80"
              ref={verifyButtonRef}
            >
              Verify
            </ThemedButton>
          </EnableClickAnimation>
        </JellyButton>

        <p className="text-darkslategray mt-2 text-xs md:text-sm text-center">
          By proceeding, I agree to the{" "}
          <span className="text-mediumseagreen cursor-pointer">
            Terms & Conditions
          </span>
        </p>
      </div>
    </Card>
  );
}