import { motion } from 'framer-motion'
import React from 'react'

function EnableTextEaseAnimation({children, key}:{children:React.ReactNode, key:string | number}) {
  return (
    <motion.span
    key={key} 
    initial={{ scale: .75 }}
    animate={{ scale: .9 }}
    exit={{ scale: 0.9}}
    transition={{
      duration: 0.3,
      ease: "easeInOut",
    }}
    className="font-semibold text-sm text-Skobeloff w-16 p-0 m-0 lg:w-20 text-center"
  >
    {children}
  </motion.span>
  )
}

export default EnableTextEaseAnimation