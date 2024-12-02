import { motion } from "framer-motion";
import { animations } from "./config";
import { OTPSlotProps } from "./types";
import { cn } from "@/lib/utils";

export const Slot = ({ index, inputRef, onInputChange, onKeyDown, className, wrapperClassName }: OTPSlotProps) => (
  <motion.div
    variants={animations.item}
    className={cn("w-auto rounded-lg p-3 border-2 border-mediumseagreen flex items-center justify-center text-xl font-bold text-mediumseagreen", wrapperClassName)}
  >
    <input
      type="number"
      maxLength={1}
      ref={inputRef}
      className= {cn('w-full h-full text-center bg-transparent outline-none appearance-none',className)}
      onChange={(e) => onInputChange(e, index)}
      onKeyDown={(e) => onKeyDown(e, index)}

    />
  </motion.div>
);