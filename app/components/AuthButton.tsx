"use client";
import { useState } from "react";
import EnableClickAnimation from "./ui/animation/EnableClickAnimation";
// import { CustomDialog } from "./ui/modals/Modal";
import Auth from "./auth/auth";
import ThemedButton from "./ui/theme/button/ThemedButton";
import clsx from "clsx";

import { CustomDialog } from "./ui/modals/Modal";

export default function AuthButtons() {
  const [activeButton, setActiveButton] = useState("login");
  const [closeModal, setCloseModal] = useState(false);

  function handleCloseModal() {
    setCloseModal(false);
  }

  return (
    <div className="hidden lg:flex items-center space-x-4">
      <EnableClickAnimation>
        <ThemedButton
          onClick={() => setActiveButton("signin")}
          className={clsx("px-10 py-5", {
            "bg-Skobeloff text-white": activeButton === "signin",
            "bg-transparent text-Skobeloff hover:bg-Skobeloff hover:text-white":
              activeButton !== "signin",
          })}
        >
          Sign in
        </ThemedButton>
      </EnableClickAnimation>
      <EnableClickAnimation>
        <ThemedButton
          onClick={() => {
            setActiveButton("login");
            setCloseModal(!closeModal);
          }}
          className={clsx("px-10 py-5", {
            "bg-Skobeloff text-white": activeButton === "login",
            "bg-transparent text-Skobeloff hover:bg-Skobeloff hover:text-white":
              activeButton !== "login",
          })}
        >
          Login
        </ThemedButton>
      </EnableClickAnimation>

      <CustomDialog
        dialogTitle="Sign up"
        dialogDescription="This is signup modal"
        open={closeModal}
        setOpen={setCloseModal}
      >
        <Auth onOver={handleCloseModal} />
      </CustomDialog>
    </div>
  );
}
