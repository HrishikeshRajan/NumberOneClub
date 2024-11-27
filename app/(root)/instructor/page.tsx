


import InstructorList from '@/app/components/instructor/InstructorList'
import SearchBox from '@/app/components/ui/theme/SearchBox'
import InstructorSkeleton from '@/app/components/ui/skeletons/Instructor'
import InstructorSortTab from '@/app/components/tab/InstructorSortTab'
import React, { Suspense } from 'react'
import { categorySeed } from '@/app/seed/Category'

type InstuctorListProps = {
  searchParams?: Promise<{
      query?: string;
      page?: string;
      tag?:string;
    }>;    
}


async function Page(props: InstuctorListProps) {

  const searchParams = await props.searchParams
  const query = searchParams?.query || '';
  const tag = searchParams?.tag
  const currentPage = Number(searchParams?.page) || 1;



  return (
    <div className='overflow-hidden'>
      <div className='mt-28'>
        
      <Suspense fallback={<div>Loading...</div>}>
        <SearchBox placeholder="Search for experts by Name, Expertise" />
      </Suspense>
      </div>
       <InstructorSortTab seed={categorySeed} />
   
      <Suspense key={query + currentPage + tag} 
          fallback={
           <div className='xl:p-20'>
              <div className=' mt-5 xl:-mt-5 grid gap-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
               { Array.from({ length: 10 }).map((_, index) => <div key={index} className='p-2 mt-0'><InstructorSkeleton className='w-auto' key={index} /></div>) }
            </div>
           </div>
          } >
            
        <InstructorList query={query} page={currentPage} />       
      </Suspense>
    </div>
  )
}

export default Page
