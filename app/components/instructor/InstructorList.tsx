

import instructors from '@/app/seed/instructors';
import React from 'react'
import { withLink } from '../decorators/WithLink';
import CardWithInstructor, { InstructorCardProps } from '../InstructorCard';
import { instructor } from '../../seed/instructor';
import { ShowInCarousel } from '../Carousel';

 type InstructorListProps = {
    query?: string;
    page?: number;
 }
async function InstructorList( {query, page}:InstructorListProps) {


    async function fetchWithDelay() {
        return   await new Promise((resolve) => setTimeout(() => resolve(resolve({instructors})), 2000)); 
       }
       
       const data:any = await fetchWithDelay();

    const InstructorCardWithLink =  withLink<InstructorCardProps & { href: string }>(CardWithInstructor)
    let instructorsList:any[] = []

    if(Array.isArray(data?.instructors) && instructors.length > 0) {
        instructorsList = instructors.map((instructor) => (
            <InstructorCardWithLink
            key={instructor.id}
            name={instructor.name}
            company={instructor.company}
            rating={instructor.rating}
            image={instructor.image}
            backgroundColor={instructor.backgroundColor}
            href={`instructor/:${instructor.id}`}            />
        ))
    }

   

  return (
   <div className='xl:p-20'>
      <div className='mt-5 xl:-mt-5 flex-wrap  gap-10 xl:flex justify-start  hidden  '>
          
      {instructorsList}

    </div>
    <div className='mt-5 xl:mt-10 bg-darkslategra overflow-hidden flex justify-center xl:hidden'>
      
    <ShowInCarousel 
             items={instructorsList}
             autoplay={false}
             interval={5000}
             loop={false}
             className=' max-w-md sm:max-w-6xl md:max-w-full lg:max-w-full xl:max-w-full'
             itemClassName='pl-5  basis-auto sm:basis-auto sm:pl-5 md:basis-auto md:pl-5 lg:pl-5 lg:basis-auto'  
             contentClassName='-ml-0  '
            />
</div>
</div>
  )
}

export default InstructorList