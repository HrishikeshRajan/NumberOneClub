import { motion } from "framer-motion";
import { animations } from "./config";
import { OTPSlotProps } from "./types";

export const Slot = ({ index, inputRef, onInputChange, onKeyDown }: OTPSlotProps) => (
  <motion.div
    variants={animations.item}
    className="w-auto rounded-lg p-3 border-2 border-mediumseagreen flex items-center justify-center text-xl font-bold text-mediumseagreen"
  >
    <input
      type="number"
      maxLength={1}
      ref={inputRef}
      className="w-full h-full text-center bg-transparent outline-none appearance-none"
      onChange={(e) => onInputChange(e, index)}
      onKeyDown={(e) => onKeyDown(e, index)}
    />
  </motion.div>
);