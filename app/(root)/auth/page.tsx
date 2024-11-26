import { InputOTPFields } from "@/app/components/auth/Otp";
import { CustomDialog } from "@/app/components/ui/modals/Modal";
import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen p-2">
      <CustomDialog
        triggerText="login"
        triggerVariant="ghost"
        dialogTitle=""
        dialogDescription=""
        content={<InputOTPFields PhoneNumber="+2348123456789" />}
      />
    </div>
  );
}

export default page;
