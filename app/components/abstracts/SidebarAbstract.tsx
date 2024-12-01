"use client";
import React from "react";
import { useSideSheet } from "../ui/context/SideSheetContext";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import SideSheet from "../ui/modals/SideSheet";
function SideSheetAbstract() {
  const { openSheet } = useSideSheet();
  return (
    <>
      <button
        onClick={openSheet}
        className="flex xl:hidden absolute top-5 left-5 p-2 focus:outline-none focus-visible:outline-none active:scale-90 transition-transform duration-200 ease-in-out focus:ring-0"
      >
        <Image
          src="/breadCrum.svg"
          alt="Menu"
          width={20}
          height={20}
          className="w-5 h-5 transition-all duration-300"
          priority
        />

        <VisuallyHidden.Root>Sidebar</VisuallyHidden.Root>
      </button>
      <SideSheet />
    </>
  );
}

export default SideSheetAbstract;
