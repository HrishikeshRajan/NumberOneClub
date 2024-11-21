"use client"
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import EnableClickAnimation from '../animation/EnableClickAnimation'
import CustomButton from '../theme/CustomButton'

function InstructorSortTab() {
    const [activeTab, setActiveTab] = useState('All Experts')

    const handleTabClick = (tab: string) => {
      setActiveTab(tab)
    }
  return (
    <div className='mt-10 justify-center gap-10 w-full flex items-center relative'>
    {/* Sliding Yellow Background */}
    <motion.div
      className="absolute inset-0 bg-yellow-500 z-[-1] rounded-full"
      style={{
        left: activeTab === 'All Experts' ? '0%' :
              activeTab === 'Sales' ? '20%' :
              activeTab === 'Finance' ? '40%' :
              activeTab === 'Technology' ? '60%' : '80%',
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    />

    <EnableClickAnimation>
      <CustomButton
        variant={'ghost'}
        onClick={() => handleTabClick('All Experts')}
        className={`p-5 text-Skobeloff hover:bg-Skobeloff hover:text-white text-sm font-semibold shadow-none rounded-full border-Skobeloff border-2 ${activeTab === 'All Experts' ? 'bg-yellow-500 text-white' : ''}`}
      >
        All Experts
      </CustomButton>
    </EnableClickAnimation>

    <EnableClickAnimation>
      <CustomButton
        variant={'ghost'}
        onClick={() => handleTabClick('Sales')}
        className={`p-5 text-Skobeloff hover:bg-Skobeloff hover:text-white text-sm font-semibold shadow-none rounded-full border-Skobeloff border-2 ${activeTab === 'Sales' ? 'bg-yellow-500 text-white' : ''}`}
      >
        Sales
      </CustomButton>
    </EnableClickAnimation>

    <EnableClickAnimation>
      <CustomButton
        variant={'ghost'}
        onClick={() => handleTabClick('Finance')}
        className={`p-5 text-Skobeloff hover:bg-Skobeloff hover:text-white text-sm font-semibold shadow-none rounded-full border-Skobeloff border-2 ${activeTab === 'Finance' ? 'bg-yellow-500 text-white' : ''}`}
      >
        Finance
      </CustomButton>
    </EnableClickAnimation>

    <EnableClickAnimation>
      <CustomButton
        variant={'ghost'}
        onClick={() => handleTabClick('Technology')}
        className={`p-5 text-Skobeloff hover:bg-Skobeloff hover:text-white text-sm font-semibold shadow-none rounded-full border-Skobeloff border-2 ${activeTab === 'Technology' ? 'bg-yellow-500 text-white' : ''}`}
      >
        Technology
      </CustomButton>
    </EnableClickAnimation>

    <EnableClickAnimation>
      <CustomButton
        variant={'ghost'}
        onClick={() => handleTabClick('Personal Development')}
        className={`p-5 text-Skobeloff hover:bg-Skobeloff hover:text-white text-sm font-semibold shadow-none rounded-full border-Skobeloff border-2 ${activeTab === 'Personal Development' ? 'bg-yellow-500 text-white' : ''}`}
      >
        Personal Development
      </CustomButton>
    </EnableClickAnimation>
  </div>
  )
}

export default InstructorSortTab