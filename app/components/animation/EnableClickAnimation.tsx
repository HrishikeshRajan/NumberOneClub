import { motion } from "framer-motion";
import React from 'react'

function EnableClickAnimation({children}: {children: React.ReactNode}) {
  return (
    <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} >
        {children}
    </motion.div>
  )
}

export default EnableClickAnimation