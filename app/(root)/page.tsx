import React, { Suspense } from "react";
import { Heading } from "../components/Heading";
import SearchBox from "../components/ui/theme/SearchBox";
import { ShowInCarousel } from "../components/ui/sliders/Carousel";
import EnableLink from "../components/ui/decorators/EnableLink";
import { categoryCards } from "../seed/Category";
import CategoryCard from "../components/CategoryCard";
import TabExpert from "../components/tab/expert/TabExpert";

async function page() {
 
  let cards: React.ReactNode[] = [];

  if (Array.isArray(categoryCards) && categoryCards.length > 0) {
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

  return (
    <section className="flex justify-center flex-col items-center ">
      <Heading
        title="What’s on your mind?"
        className=" yellow-green-gradient text-3xl sm:text-5xl mt-10  md:text-4xl xl:text-5xl font-extrabold font-euclid"
      />
        <Suspense fallback={<div>Loading...</div>}>
        <SearchBox placeholder="Search for Courses, Events, Instructors, Experts etc" />
      </Suspense>
      <div className="mt-5 py-5 xl:mt-10 w-full  flex justify-center ">
        <ShowInCarousel
          items={cards}
          autoplay={false}
          interval={4000}
          loop={true}
          className=" w-full max-w-md sm:max-w-6xl md:max-w-full lg:max-w-full xl:max-w-full"
          itemClassName="pl-5 basis-auto xs:basis-auto sm:basis-auto md:basis-auto lg:basis-auto xl:pl-auto xl:basis-auto"
          contentClassName="ml-1 py-10 xl:ml-20"
        />
      </div>

      <div className=" overflow-hidden mt-5 w-full">
        <TabExpert />
      </div>
    </section>
  );
}

export default page;
