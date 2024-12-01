import { Transition, Variants } from "framer-motion";

export const imageVariants:Variants = {
    hidden: { opacity: 0, scale:.5 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, delay: 0.2 } as Transition },
  };

export   const textVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, delay: 0.4 } as Transition,
    },
  };
  
export const textVariantss:Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "just" as const,
        stiffness: 100,
        delay: 2,
      } as Transition,
    },
  };