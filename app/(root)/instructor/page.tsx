

import { ShowInCarousel } from '@/app/components/Carousel'
import InstructorList from '@/app/components/instructor/InstructorList'
import SearchBox from '@/app/components/SearchBox'
import InstructorSkeleton from '@/app/components/skeletons/Instructor'
import InstructorSkeletonList from '@/app/components/skeletons/InstructorSkeletonList'
import InstructorSortTab from '@/app/components/tab/InstructorSortTab'
import { useDuplicateComponents } from '@/app/hooks/useDuplicate'
import { categorySeed } from '@/app/seed/Category'
import { Suspense } from 'react'

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


  const  shimmers = useDuplicateComponents({duplicate:10, Component:InstructorSkeleton })

  return (
    <div className='overflow-hidden'>
      <div className='mt-28'>
      <SearchBox />
      </div>
       <InstructorSortTab seed={categorySeed} />
   
      <Suspense key={query + currentPage + tag} 
          fallback={
            <>
            <div className='xl:hidden'> 
              <ShowInCarousel 
             items={shimmers}
             autoplay={false}
             interval={5000}
             loop={false}
             className=' max-w-md sm:max-w-6xl md:max-w-full lg:max-w- xl:max-w-full'
             itemClassName='pl-5  basis-auto  sm:basis-auto md:basis-auto lg:p-5 lg:basis-auto xl:p-5 xl:basis-auto'  
             contentClassName='-ml-0 lg:ml-5'
            />
            </div>
            <div className=' mt-5 xl:mt-14  gap-10 xl:flex justify-center basis-auto hidden flex-wrap'>
              {shimmers}

            </div>
            </>
          } >
        <InstructorList query={query} page={currentPage} />       
      </Suspense>
    </div>
  )
}

export default Page
