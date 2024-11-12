
import React from 'react'
import Image from 'next/image'
import Form from 'next/form';
async function SearchBox({query}:{query?:string}) {
  return (
<Form action='/' scroll={false} className='mt-8 w-full focus:outline-none'>
  <div className="flex items-center max-w-md px-2 mx-auto mt-4 md:max-w-2xl lg:max-w-3xl">
    <div className="flex items-center bg-white border-2 gap-2 border-sunglow rounded-full  px-4 py-2 w-full focus:outline-none focus-visible:ring-2 shadow-search-bar">
      <Image src="lens.svg" alt='lens icons' width={20} height={20} className="pointer-events-none"/>
      <input
        type="text"
        defaultValue={query}
        placeholder="Search for Courses, Events, Instructors, Experts etc"
        className="flex-grow outline-none text-gray-600 placeholder-gray-400 text-sm md:text-base w-full focus:outline-none"
      />
      <button 
        type='submit' 
        className="bg-Skobeloff gap-3 items-center flex text-white rounded-full px-5 py-2.5 ml-2 text-sm md:text-base font-medium focus:outline-none focus-visible:ring-2"
      >
        Search
        <Image src="right-arrow.svg" alt='lens icons' width={10} height={10} className="pointer-events-none"/>
      </button>
    </div>
  </div>
</Form>
  )
}

export default SearchBox