"use client";

import { OTPInput } from "./otp/Otp";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PhoneNumber from "./PhoneNumber";
import Success from "./Success";
import { fakeSendOTPApi, fakeVerifyOTPApi } from "@/mocks/api/auth";

type AuthProps = {
  onOver: (state: boolean) => void;
};

function Auth({ onOver }: AuthProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
  const [opt, setOtp] = useState<string>("");

  function back() {
    setStep(1);
  }
  async function handlePhoneNumberSubmit(number: string) {
    try {
      setPhoneNumber(number);
      const response = await fakeSendOTPApi(number);
      setOtp(response.otp);
      setStep(2);
    } catch (error) {
      if (error instanceof Error) {
        alert(`Error during phone number verification: ${error.message}`);
      }
    }
  }

  async function handleOtpVerify() {
    try {
      await fakeVerifyOTPApi({ otp: opt, phoneNumber });
      setStep(2);
    } catch (error) {
      if (error instanceof Error) {
        alert(`Error during phone number verification: ${error.message}`);
      }
    }
    setStep(3);
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
                <OTPInput onVerify={handleOtpVerify} phoneNumber={phoneNumber} back={back} />
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
