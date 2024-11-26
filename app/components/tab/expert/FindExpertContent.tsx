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
    <div className="mt-5 py-5 w-full">
      <ShowInCarousel
        items={instructorsList}
        autoplay={true}
        interval={5000}
        className="max-w-md sm:max-w-6xl md:max-w-full lg:max-w- xl:max-w-full"
        itemClassName="pl-5 basis-3/4 sm:basis-2/3 md:basis-2/5 lg:p-1 lg:basis-2/6 xl:basis-1/5"
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
