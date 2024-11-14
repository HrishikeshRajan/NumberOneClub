import React from 'react'
import { Heading } from '../components/Heading'
import SearchBox from '../components/SearchBox'
import CategoryCard from '../components/CategoryCard';
import { ShowInCarousel } from '../components/Carousel';
import { ExpertToggler } from '../components/ExpertToggler';
import CardWithInstructor from '../components/InstructorCard';

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

    const instructors = [

        <CardWithInstructor />,
        <CardWithInstructor />,
        <CardWithInstructor />,
        <CardWithInstructor />

    ]
    return (
        <section className="flex justify-center flex-col items-center w-full">
        <Heading title='What’s on your mind?' className=' yellow-green-gradient text-2xl md:text-4xl xl:text-6xl mt-20 font-extrabold font-euclid'  />
        <SearchBox query={query} />
        <div className='mt-5  '>

            <ShowInCarousel 
            items={cards}
            autoplay={true}
            interval={5000}
            itemClassName='pl-3'  
            />
        </div>

        <div className='mt-5 w-full'>
            <ExpertToggler />
        </div>

        <div className='mt-5 py-5'>
          <ShowInCarousel 
           items={instructors}
           autoplay={true}
           itemClassName='pl-10'  
          />

        </div>
    
        </section>
    )
}

export default page