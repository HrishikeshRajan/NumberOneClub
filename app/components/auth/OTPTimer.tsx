"use client";
import useTimer from "@/hooks/useTimer";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { toast } from "sonner";

function OTPTimer({onTimeEnd}:{onTimeEnd?: () => void}) {
  const [time] = useTimer({ upperLimit: 300 });

  useEffect(() => {
    if (time === 0) {
      if (onTimeEnd) {
        toast.error("OTP has Expired", {
          description: "Please try to login again",
          className: "p-5",
          descriptionClassName: "text-red-300",
          richColors: true,
          position: "top-center",
        });
        onTimeEnd();
      }
    }
  }, [ time,onTimeEnd]);

  const minutes = `${Math.floor(time / 60)}`.padStart(2, "0");
  const seconds = `${time % 60}`.padStart(2, "0");

  const digitAnimation = {
    initial: { scale: 1, opacity: 1 },
    animate: { scale: [1.2, 0.9, 1], opacity: [1, 0.5, 1] },
    transition: { duration: 0.5, ease: "easeInOut" },
  };
  return (
    <span className="flex items-center space-x-0  text-red-600 shadow-red-300 text-sm font-bold">
      <motion.span {...digitAnimation} key={time + 1}>{minutes}</motion.span>
      <span>:</span>
      <motion.span {...digitAnimation} key={time + 3}>{seconds}</motion.span>
    </span>
  );
}

export default OTPTimer;
