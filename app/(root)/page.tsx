
import React from 'react'
import { Heading } from '../components/Heading'
import SearchBox from '../components/ui/theme/SearchBox'
import { ShowInCarousel } from '../components/ui/sliders/Carousel';
import CardWithInstructor from '../components/InstructorCard';
import ExpertTab from '../components/ExpertTab';
import Tab2Content from '../components/tab/Tab2Content';
import {instructors} from '../seed/instructors';
import CustomButton from '../components/ui/theme/CustomButton';
import EnableClickAnimation from '../components/ui/animation/EnableClickAnimation';
import EnableLink from '../components/ui/decorators/EnableLink';
import { categoryCards } from '../seed/Category';
import CategoryCard from '../components/CategoryCard';




async function page({searchParams}: {
    searchParams: Promise<{query:string}>
}) {

    const query = await (await (searchParams))?.query;



    let cards: React.ReactNode[] = [];

   

    if(Array.isArray(categoryCards) && categoryCards.length > 0) {
      cards = categoryCards.map((card) => (
       <EnableLink href={`category/:${card.id}`} key={card.id}>
           <CategoryCard
          key={card.id}
          title={card.name}
          description={card.description}
                    />
       </EnableLink>
      )) as never;
  }

    let instructorsList:React.ReactNode[] = []

    if(Array.isArray(instructors) && instructors.length > 0) {
        instructorsList = instructors.map((instructor) => (
         <EnableLink href={`instructor/:${instructor.id}`} key={instructor.id}>
             <CardWithInstructor
            key={instructor.id}
            name={instructor.name}
            company={instructor.company}
            rating={instructor.rating}
            image={instructor.image}
            backgroundColor={instructor.backgroundColor}
                      />
         </EnableLink>
        )) as never;
    }

    const tabsData = [
        {
          id: "findExpert",
          label: "Find Expert",
          content: 
          <div className='mt-5 py-5 w-full'>
            <ShowInCarousel 
             items={instructorsList}
             autoplay={true}
             interval={5000}
             className=' max-w-md sm:max-w-6xl md:max-w-full lg:max-w- xl:max-w-full'
             itemClassName='pl-5  basis-3/4  sm:basis-2/3 md:basis-2/5 lg:p-1 lg:basis-2/6 xl:basis-1/5'  
             contentClassName=''
            />
           <div className='w-full flex justify-center items-center'>
           <EnableClickAnimation>
               <EnableLink href='/instructor?tag=all'>
                  <CustomButton
                    customStyle='bg-transparent border-2 border-darkslategray  text-darkslategray rounded-3xl p-6  hover:bg-darkslategray hover:text-white'
                  >
                    View More
                    </CustomButton>
               </EnableLink>
            </EnableClickAnimation>
           </div>
  
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
            loop={true}
            className=' max-w-md sm:max-w-6xl md:max-w-full lg:max-w-full'
            itemClassName='pl-5  basis-2/3 sm:basis-2/3 md:basis-2/5 lg:basis-2/6 xl:basis-1/4'  
            contentClassName='ml-10'
            />
        </div>

        <div className=' overflow-hidden mt-5 w-full'>
            <ExpertTab tabs={tabsData} />
        </div>    
        </section>
    )
}

export default page