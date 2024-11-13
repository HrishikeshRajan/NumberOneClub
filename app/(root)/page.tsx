import React from 'react'
import { Heading } from '../components/Heading'
import SearchBox from '../components/SearchBox'
import CategoryCard from '../components/CategoryCard';
import { CustomCarousel } from '../components/Carousel';
import { CarouselSpacing } from '../components/GenericCarousel';

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
    return (
        <section className="flex justify-center flex-col items-center w-full">
        <Heading title='What’s on your mind?' className=' yellow-green-gradient text-2xl md:text-4xl xl:text-6xl mt-20 font-extrabold font-euclid'  />
        <SearchBox query={query} />
      <div className='mt-5  '>

            <CarouselSpacing 
             items={cards}
             autoplay={true}
            />
      </div>
        </section>
    )
}

export default page