'use client'
import React, { useEffect } from 'react'
import AuthWrapper from './Card'
import { motion } from 'framer-motion'
import { imageVariants, textVariants, textVariantss } from './config'
import Image from 'next/image'
import { Heading } from '../Heading'
import { useRouter } from 'next/navigation'
import { useSideSheet } from '../ui/context/SideSheetContext'

type SucessProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  callback: (state:boolean) => void
};
function Success({  callback }: SucessProps) {

  const router = useRouter();
  const { closeSheet } = useSideSheet();
  useEffect(() => {
    // Redirect to the dashboard after 2 seconds
    const timeout = setTimeout(() => {
      try {

        callback(false);
        closeSheet()

        router.push('/dashboard');
      } catch (error) {
        console.error('Redirection error:', error);
      }
    }, 3000);

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, [callback, router]);

  return (
    <AuthWrapper className=" w-full max-w-[539px] flex items-center justify-center flex-col py-5">
    {/* Success Image */}
    <motion.div
      className="w-full flex justify-center"
      initial="hidden"
      animate="visible"
      variants={imageVariants}
    >
      <Image
        src="success.svg"
        alt="alt"
        width={100}
        height={100}
        className="w-20 h-auto mt-10 mb-5"
      />
    </motion.div>

    <motion.div
      initial="hidden"
      animate="visible"
      variants={textVariants}
      transition={{ delay: 0.6 }}
    >
      <Heading title="OTP Verified" className="text-darkslategray text-lg" />
    </motion.div>

    {/* Logging In Text */}
    <motion.div
      initial="hidden"
      animate="visible"
      variants={textVariantss}
      transition={{ delay: 2 }} 
    >
      <small className="text-darkslategray py-3">Logging in...</small>
    </motion.div>
  </AuthWrapper>
  )
}

export default Success