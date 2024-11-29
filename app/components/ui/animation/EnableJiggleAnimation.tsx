import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface JellyButtonProps {
  children: React.ReactNode;
  className?: string;
}
const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };


const JellyButton = React.forwardRef<HTMLDivElement, JellyButtonProps>(
  ({ children, className }: JellyButtonProps, ref) => {
    return (
        <motion.div
        className="w-full"
        initial="hidden"
        animate="visible"
      >
      <motion.div
        className={cn(className)}
        ref={ref} 
        variants={itemVariants}
      >
        {children}
      </motion.div>
      </motion.div>
    );
  }
);

JellyButton.displayName = "JellyButton";
export default JellyButton;
