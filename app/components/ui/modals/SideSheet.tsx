"use client"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { CustomDialog } from "./Modal";
import { CreatorsNavMenu } from "../../CreatorsDropDown";
import { navItems } from "@/app/seed/navLinks";
import Auth from "../../auth/auth";
import { useState } from "react";
import { useSideSheet } from "../context/SideSheetContext";

function SideSheet() {

  const [closeModal, setCloseModal] = useState(false);

  function handleCloseModal() {
    setCloseModal(false);
  }

  const { isOpen, closeSheet } = useSideSheet();

  return (
    <Sheet key={"top"} open={isOpen} onOpenChange={(open) => !open && closeSheet()}>
     

      <SheetContent side={"top"} className="focus:outline-none">
        <VisuallyHidden.Root>
          <SheetTitle>Sidebar</SheetTitle>
        </VisuallyHidden.Root>

        <VisuallyHidden.Root>
          <SheetDescription>The is main sidebar</SheetDescription>
        </VisuallyHidden.Root>

        <Link
          href="#"
          className="flex items-center gap-2 p-2  transition-colors text-lg font-semibold text-Skobeloff"
          onClick={() => setCloseModal(!closeModal)}
        >
          <p className="text-sm capitalize">Login</p>
        </Link>
        {Array.isArray(navItems) &&
          navItems.length &&
          navItems.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              className="flex items-center gap-2 p-2  transition-colors text-lg font-semibold text-Skobeloff"
            >
              <p className="text-sm capitalize">{link.label}</p>
            </Link>
          ))}
        <CreatorsNavMenu />
      </SheetContent>

      <CustomDialog
        dialogTitle="Sign up"
        dialogDescription="This is signup modal"
        open={closeModal}
        setOpen={setCloseModal}
       className=" flex items-center justify-center rounded-5xl"
      >
        <Auth onOver={handleCloseModal} />
      </CustomDialog>
    </Sheet>
  );
}

export default SideSheet;
