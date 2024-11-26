"use client";

import { Card } from "@/components/ui/card";
    import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    } from "@/components/ui/input-otp";
    import { Heading } from "../Heading";
    import CustomButton from "../ui/theme/CustomButton";
    import EnableClickAnimation from "../ui/animation/EnableClickAnimation";
    import Link from "next/link";

    type InputOTPFieldsProps = {
    className?: string;
    PhoneNumber?: string;
    };

    export function InputOTPFields({
    PhoneNumber,
    }: InputOTPFieldsProps) {



    return (
        <Card className="w-full h-auto pb-5 bg-white font-euclid rounded-3xl px-5 shadow-md">
        <Heading
            title="Sign in"
            className="text-darkslategray text-3xl md:text-3xl xl:text-4xl px-1 py-7 font-semibold text-left"
        />
        <div className="flex flex-col items-center justify-start text-left space-y-4 w-full">
            {/* Phone Number and Change Button */}
            <div className="flex flex-row  justify-between w-full ">
            <span className="text-darkslategray text-xs text-left  font-regular ">
                OTP sent to{" "}
                <span className="text-mediumseagreen text-xs font-regular">{PhoneNumber}</span> on
                WhatsApp
            </span>
            <Link href="#" className="text-[11px] md:text-xs w-28 flex flex-row text-mediumseagreen">Change Number?</Link>

            </div>

            {/* OTP Input */}
            <InputOTP maxLength={6}>
            <InputOTPGroup className="gap-2 md:gap-1 xl:gap-1 py-3 flex items-center justify-center">
                {[...Array(6)].map((_, index) => (
                <InputOTPSlot
                    key={index}
                    index={index}
                    className={`border-2 text-mediumseagreen text-xl xl:text-3xl rounded-lg p-5 md:p-8 xl:p-7 border-mediumseagreen
                      `}
                    style={{ borderRadius: "10px",  }} 
                />
                ))}
            </InputOTPGroup>
            </InputOTP>

            {/* Sign-in Button */}
    
            <CustomButton className="w-full max-w-full mt-4 text-white bg-mediumseagreen rounded-lg py-6  font-semibold text-sm md:text-base active:bg-mediumseagreen focus:outline-none focus-visible:ring-2 hover:bg-mediumseagreen ">
            <EnableClickAnimation>
            Sign in
            </EnableClickAnimation>

            </CustomButton>
        
            {/* Terms & Conditions */}
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
