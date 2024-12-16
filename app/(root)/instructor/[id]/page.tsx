// import MentorshipDetails from "@/app/components/instructor/Membership";
import ProfileSection from "@/app/components/instructor/Profile";
import OfferCard from "@/app/components/offering/OfferCard";
import ThemedButton from "@/app/components/ui/theme/button/ThemedButton";
import Image from "next/image";
import React from "react";

const MentorshipCard: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 rounded-2xl  flex flex-col xl:flex-row gap-8 xl:gap-16">
      {/* Left Section */}
      <ProfileSection
        name="Deepa Varghese"
        title="Chartered Accountant"
        rating={4.8}
        socialLinks={{
          facebook: "#",
          instagram: "#",
          linkedin: "#",
        }}
        aboutText="About Me"
        additionalInfo="As a dedicated Chartered Accountant, I specialize in providing strategic financial insights and solutions to support businesses and individuals in achieving their financial goals. With a strong foundation in accounting, tax planning, and financial reporting, I bring expertise in managing complex financial structures, ensuring compliance, and optimizing efficiency."
      />

      {/* Right Section */}
      {/* <MentorshipDetails
        title="1:1 Mentorship"
        tags={["Popular", "Accounting", "Malayalam"]}
        description="Do you have a major interview due soon but feel unprepared and anxious? Book a 1:1 call with me where I provide step-by-step actionable and practical tips to move past these momentary blocks and ace your next interview."
        expectations={[
          "Do you have a major interview due soon but",
          "Do you have a major interview due soon but",
          "Do you have a major interview due soon but",
        ]}
        price={1800}
        duration={30}
      /> */}
      <div className="flex bg-red-500w-full
        <OfferCard>
          {/* <VideoConference /> */}
          <div className="bg-whitesmoke">
            <div className="flex items-center gap-1 lg:gap-3">
              <div className="text-gray-500">
                <Image
                  src="/calander.svg"
                  alt="calender"
                  width={5}
                  height={5}
                  className="w-5"
                />
              </div>
              <span className=" text-xs hidden lg:flex font-medium text-gray">
                Video Conference
              </span>
            </div>
            <ThemedButton
          className='text-white text-xs'
               colorTheme='skobeloff'
               aria-label="Price button"
          >
               ₹800
          </ThemedButton>
          </div>
        </OfferCard>
      </div>
    </div>
  );
};

export default MentorshipCard;
