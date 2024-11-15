
import React from 'react'
import { Heading } from '../components/Heading'
import SearchBox from '../components/SearchBox'
import CategoryCard from '../components/CategoryCard';
import { ShowInCarousel } from '../components/Carousel';
import CardWithInstructor, { InstructorCardProps } from '../components/InstructorCard';
import ExpertTab from '../components/ExpertTab';
import Tab2Content from '../components/tab/Tab2Content';
import instructors from '../seed/instructors';
import { withLink } from '../components/decorators/WithLink';



async function page({searchParams}: {
    searchParams: Promise<{query:string}>
}) {

    const query = await (await (searchParams))?.query;
    const cards = [
        <CategoryCard 
        title='Marketing' 
        description='I am looking for a digital marketing expert' 
        />,
        <CategoryCard 
        title='Sales' 
        description='Can somebody help me build my sales team?' 
        />,
        <CategoryCard 
        title='Design' 
        description='Can someone please refer some good graphic designers?' 
        />,
        <CategoryCard 
        title='Finance' 
        description='My accounts are a nightmare! Please help me find a local CA' 
        />
    ]

   const InstructorCardWithLink =  withLink<InstructorCardProps & { href: string }>(CardWithInstructor)
   
    let instructorsList:any[] = []

    if(Array.isArray(instructors) && instructors.length > 0) {
        instructorsList = instructors.map((instructor) => (
            <InstructorCardWithLink
            key={instructor.id}
            name={instructor.name}
            company={instructor.company}
            rating={instructor.rating}
            image={instructor.image}
            backgroundColor={instructor.backgroundColor}
            href={`${instructor.id}`}            />
        ))
    }

    const tabsData = [
        {
          id: "findExpert",
          label: "Find Expert",
          content: 
          <div className='mt-5 py-5'>
            <ShowInCarousel 
             items={instructorsList}
             autoplay={true}
             className=' max-w-md sm:max-w-6xl md:max-w-6xl lg:max-w-full -ml-1'
             itemClassName='pl-5  basis-1/1  sm:basis-2/3 md:basis-1/3 lg:basis-1/5 xl:basis-1/4'  
             contentClassName=''
            />
  
          </div>
        },
        {
          id: "becomeExpert",
          label: "Become Expert",
          content: <Tab2Content />
        },

      ];
    return (
        <section className="flex justify-center flex-col items-center overflow-x-hidden">
        <Heading title='What’s on your mind?' 
          className=' yellow-green-gradient text-3xl sm:text-5xl mt-10  md:text-4xl xl:text-5xl font-extrabold font-euclid'
          />
        <SearchBox query={query} />
        <div className='mt-5 xl:mt-10 bg-darkslategra overflow-hidden flex justify-center'>
            <ShowInCarousel 
            items={cards}
            autoplay={true}
            interval={4000}
            className=' max-w-md sm:max-w-6xl md:max-w-full lg:max-w-full'
            itemClassName='pl-5  basis-2/3 sm:basis-2/3 md:basis-2/5 lg:basis-1/4'  
            />
        </div>

        <div className=' overflow-hidden mt-5 w-full'>
            <ExpertTab tabs={tabsData} />
        </div>    
        </section>
    )
}

export default page