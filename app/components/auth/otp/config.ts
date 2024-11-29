export const OTP_LENGTH = 6;

export const animations = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100 } 
    },
  }
};