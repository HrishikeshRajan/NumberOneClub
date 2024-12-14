"use client";

import { OTPInput } from "./otp/Otp";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PhoneNumber from "./PhoneNumber";
import Success from "./Success";
import axios from "axios";
import { toast } from "sonner";

type AuthProps = {
  onOver: (state: boolean) => void;
};

function Auth({ onOver }: AuthProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);

  function back() {
    setStep(1);
  }

  async function handlePhoneNumberSubmit(number: string) {
    try {
      setPhoneNumber(number);

      const response = await axios.post("/api/auth/login", {
        phoneNumber: number,
      });

      if (!response.data || !response.status) {
        toast.error("OTP not sent. Please try again later.", {
          richColors: true,
        });
      } else {
        setStep(2);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return toast.error("Failed to sign in. Please try again later.", {
          richColors: true,
        });
      } else if (error instanceof Error) {
        return toast.error("Failed to sign in. Please try again later.", {
          richColors: true,
        });
      } else {
        return toast.error("Something went wrong. Please try again later.", {
          richColors: true,
        });
      }
    }
  }

  async function handleOtpVerify(number: string) {
    try {
      const response = await axios.post("/api/auth/verify", {
        phoneNumber: phoneNumber,
        otp:number
      });

      if (!response.data || !response.status) {
        toast.error("OTP not sent. Please try again later.", {
          richColors: true,
        });
      } else {
        setStep(3);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return toast.error(error?.response?.data?.error, {
          richColors: true,
          position: "top-center",
        });
      } else if (error instanceof Error) {
        return toast.error("Failed to verify OTP. Please try again later.", {
          richColors: true,
          position: "top-center",
        });
      } else {
        return toast.error("Something went wrong. Please try again later.", {
          richColors: true,
          position: "top-center",
        });
      }
    }
  }

  function handleCloseModal(state: boolean) {
    onOver(state);
  }

  return (
    <div className="flex flex-col inset-0  mx-0 z-10 w-full">
      <div className="flex flex-col inset-0 mx-0 z-10 w-full">
        <div className="relative w-full" style={{ minHeight: "400px" }}>
          <AnimatePresence>
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, scale: 0.8, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="absolute inset-0 w-full"
              >
                <PhoneNumber onSubmit={handlePhoneNumberSubmit} />
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, scale: 0.8, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="absolute inset-0 w-full"
              >
                <OTPInput
                  onVerify={handleOtpVerify}
                  phoneNumber={phoneNumber}
                  back={back}
                  onChangeNumber={() => back()}
                />
              </motion.div>
            )}
            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, scale: 0.8, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="absolute inset-0 w-full"
              >
                <Success callback={handleCloseModal} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Auth;
