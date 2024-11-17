import React from "react";
import CustomButton from "../theme/CustomButton";
import { Heading } from "../Heading";
import VideoConference from "../VideoConference";
import AskNoa from "../AskNoa";
import EnableClickAnimation from "../animation/EnableClickAnimation";

interface MentorshipDetailsProps {
  title: string;
  tags: string[];
  description: string;
  expectations: string[];
  duration: number;
  price: number; 
}

const MentorshipDetails: React.FC<MentorshipDetailsProps> = ({
  title,
  tags,
  description,
  expectations,
  duration,
  price,
}) => {
  return (
    <div className="flex-1 max-w-full px-4 py-4 lg:max-w-6xl bg-white lg:p-6 rounded-2xl shadow font-euclid">
      <Heading  title={title} className=" text-lg lg:text-2xl font-semibold mb-4 text-Skobeloff" />
      <div className="flex gap-2 mt-2 w-full justify-start">
        {tags.map((tag) => (
          <CustomButton
            key={tag}
            className="px-4 py-1 text-xs lg:text-sm font-semibold bg-gainsboro text-Skobeloff rounded-full hover:bg-gainsboro hover:text-Skobeloff"
            variant={'ghost'}
          >
            {tag}
          </CustomButton>
        ))}
      </div>
      <p className="mt-4 font-normal text-gray text-sm text-justify">{description}</p>
      <h4 className="mt-6 text-md font-semibold text-Skobeloff">What to expect?</h4>
      <ul className="list-disc text-sm list-inside marker:text-sunglow mt-2 text-gray">
        {expectations.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <VideoConference />
       <AskNoa />
       <div className="flex justify-between items-center mt-10"> 
         <EnableClickAnimation>
          <CustomButton variant={'ghost'} className="p-5  text-Skobeloff hover:bg-Skobeloff hover:text-white text-sm font-semibold shadow-none  rounded-full border-Skobeloff border-2">
              Go Back
            </CustomButton>
         </EnableClickAnimation>

          <EnableClickAnimation>
            <CustomButton variant={'ghost'} className="p-5   bg-Skobeloff text-white text-sm font-semibold hover:bg-Skobeloff hover:text-white shadow-none  rounded-full border-Skobeloff border-2">
              Book Now
              </CustomButton>
          </EnableClickAnimation>
        </div>
    </div>
  );
};

export default MentorshipDetails;
