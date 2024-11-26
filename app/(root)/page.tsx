import React from "react";
import { Heading } from "../components/Heading";
import SearchBox from "../components/ui/theme/SearchBox";
import { ShowInCarousel } from "../components/ui/sliders/Carousel";
import EnableLink from "../components/ui/decorators/EnableLink";
import { categoryCards } from "../seed/Category";
import CategoryCard from "../components/CategoryCard";
import TabExpert from "../components/tab/expert/TabExpert";

async function page({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = await (await searchParams)?.query;

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
    <section className="flex justify-center flex-col items-center overflow-x-hidden">
      <Heading
        title="What’s on your mind?"
        className=" yellow-green-gradient text-3xl sm:text-5xl mt-10  md:text-4xl xl:text-5xl font-extrabold font-euclid"
      />
      <SearchBox query={query} />
      <div className="mt-5 xl:mt-10 bg-darkslategra overflow-hidden flex justify-center">
        <ShowInCarousel
          items={cards}
          autoplay={true}
          interval={4000}
          loop={true}
          className=" max-w-md sm:max-w-6xl md:max-w-full lg:max-w-full"
          itemClassName="pl-5  basis-2/3 sm:basis-2/3 md:basis-2/5 lg:basis-2/6 xl:basis-1/4"
          contentClassName="ml-10"
        />
      </div>

      <div className=" overflow-hidden mt-5 w-full">
        <TabExpert />
      </div>
    </section>
  );
}

export default page;
