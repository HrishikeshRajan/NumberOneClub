import EnableClickAnimation from "../../ui/animation/EnableClickAnimation";
import EnableLink from "../../ui/decorators/EnableLink";
import { ShowInCarousel } from "../../ui/sliders/Carousel";
import CustomButton from "../../ui/theme/CustomButton";

function FindExpertContent({
  instructorsList,
}: {
  instructorsList: React.ReactNode[];
}) {
  return (
    <div className="mt-1  w-full ">
      <ShowInCarousel
        items={instructorsList}
        autoplay={true}
        interval={5000}

        className="max-w-md sm:max-w-6xl md:max-w-full lg:max-w-full xl:max-w-full"
        itemClassName="pl-5 mt-16 basis-auto xs:basis-auto sm:pl-10  sm:basis-auto md:pl-8  md:basis-auto lg:pl-8  lg:basis-auto xl:pl-10 xl:basis-auto"
        contentClassName="ml-1 py-10 xl:ml-20"
      />
      <div className="w-full flex justify-center items-center">
        <EnableClickAnimation>
          <EnableLink href="/instructor?tag=all">
            <CustomButton customStyle="bg-transparent border-2 border-darkslategray text-darkslategray rounded-3xl p-6 hover:bg-darkslategray hover:text-white">
              View More
            </CustomButton>
          </EnableLink>
        </EnableClickAnimation>
      </div>
    </div>
  );
}

export default FindExpertContent;
