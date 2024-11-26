

import instructors from '@/app/seed/instructors';
import React from 'react'
import { withLink } from '../ui/decorators/WithLink';
import CardWithInstructor, { InstructorCardProps } from '../InstructorCard';
import { instructor } from '../../seed/instructor';
import { ShowInCarousel } from '../Carousel';
import EnableLink from '../ui/decorators/EnableLink';

 type InstructorListProps = {
    query?: string;
    page?: number;
 }
async function InstructorList( {query, page}:InstructorListProps) {


    async function fetchWithDelay() {
        return   await new Promise((resolve) => setTimeout(() => resolve(resolve({instructors})), 2000)); 
       }
       
       const data:any = await fetchWithDelay();

   

  return (
<div className="xl:p-20">
  <div className="mt-5 xl:-mt-5 grid gap-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {Array.isArray(data?.instructors) && instructors.length > 0 &&
      instructors.map((instructor) => (
        <EnableLink key={instructor.id} href={`instructor/:${instructor.id}`} className="p-2 mt-0">
          <CardWithInstructor
            name={instructor.name}
            company={instructor.company}
            rating={instructor.rating}
            image={instructor.image}
            backgroundColor={instructor.backgroundColor}
            className='w-auto'
          />
        </EnableLink>
      ))
    }
  </div>
</div>

  )
}

export default InstructorList