"use client";

import { OTPInput } from "./otp/Otp";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PhoneNumber from "./PhoneNumber";
import Success from "./Success";
import { fakeSendOTPApi, fakeVerifyOTPApi } from "@/mocks/api/auth";

type AuthProps = {
  onOver: (state:boolean) => void;
};

function Auth({onOver }:AuthProps) {

  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
  const [opt, setOtp] = useState<string>("");

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


  function handleCloseModal(state:boolean) {
    onOver(state)
  }
  return (
    <div className="flex flex-col inset-0  mx-0 z-10 w-full">
      <AnimatePresence>
        {step === 1 && (
              <motion.div
              initial={{ scale: .8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="w-full max-auto"
            >
              <PhoneNumber key="phone" onSubmit={handlePhoneNumberSubmit} />
          </motion.div>
        )}
        {step === 2 &&  (

          <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-full"
          > 
            <OTPInput key="otp" onVerify={handleOtpVerify} /> 
          </motion.div>
        )}
              {step === 3 && (  <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="w-full"
                > 
                      <Success callback={handleCloseModal} key="success" />
                </motion.div>) }
      </AnimatePresence>

    </div>
  );
}

export default Auth;
