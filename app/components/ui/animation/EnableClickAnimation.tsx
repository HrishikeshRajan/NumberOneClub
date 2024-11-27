"use client"
import { motion } from "framer-motion";
import React from 'react'

function EnableClickAnimation({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} className={className}>
        {children}
    </motion.div>
  )
}

export default EnableClickAnimation