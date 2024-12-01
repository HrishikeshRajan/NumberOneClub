
"use client";
import React, { createContext, useContext, useState } from "react";

interface SideSheetContextType {
  isOpen: boolean;
  openSheet: () => void;
  closeSheet: () => void;
}

const SideSheetContext = createContext<SideSheetContextType | undefined>(
  undefined
);

export const SideSheetProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSheet = () => setIsOpen(true);
  const closeSheet = () => setIsOpen(false);

  return (
    <SideSheetContext.Provider value={{ isOpen, openSheet, closeSheet }}>
      {children}
    </SideSheetContext.Provider>
  );
};

export const useSideSheet = () => {
  const context = useContext(SideSheetContext);
  if (!context) {
    throw new Error("useSideSheet must be used within a SideSheetProvider");
  }
  return context;
};
