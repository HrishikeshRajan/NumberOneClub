"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Form from 'next/form';
import CustomButton from './theme/CustomButton';
import EnableClickAnimation from './ui/animation/EnableClickAnimation';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';


type SearchBoxProps = {
 query?:string,
 placeholder?: string,
 onClick?: (query: string) => void;
}
 function SearchBox({query, placeholder = 'Search here',  onClick}:SearchBoxProps) {
  
  const searchParams = useSearchParams()

  const pathname = usePathname()
   const  {replace} = useRouter()
  function handleSearch(term:string){
    const params = new URLSearchParams(searchParams);

    if(term){
      params.set('query', term)
    }else{
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`);
  }
 

  return (
<Form action='/' scroll={false} className='mt-8 lg:mt-10 w-full focus:outline-none'>
  <div className="flex items-center max-  w-md px-2 mx-auto mt-4 sm:max-w-2xl md:max-w-2xl lg:max-w-3xl">
    <div className="flex items-center bg-white border-2 gap-2 border-sunglow rounded-full  px-4 py-2 w-full focus:outline-none focus-visible:ring-2 shadow-search-bar">
      <Image src="lens.svg" alt='lens icons' width={20} height={20} className="pointer-events-none"/>
      <input
        type="text"
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        placeholder= {placeholder}
        className="flex-grow outline-none text-gray-600 placeholder-gray-400 text-sm md:text-base w-full focus:outline-none"
      />

       <EnableClickAnimation>
        <CustomButton
          customStyle="bg-Skobeloff gap-3 items-center flex text-white rounded-full px-5 py-2.5 ml-2 text-sm md:text-base font-medium focus:outline-none focus-visible:ring-2 hover:bg-darkslategray active:bg-darkslategray"
        >
            <>
            Search
            <Image src="right-arrow.svg" alt='lens icons' width={10} height={10} className="pointer-events-none"/>
            </>
        </CustomButton>
       </EnableClickAnimation>
    </div>
  </div>
</Form>
  )
}

export default SearchBox