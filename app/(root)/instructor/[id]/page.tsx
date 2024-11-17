import MentorshipDetails from "@/app/components/instructor/Membership";
import ProfileSection from "@/app/components/instructor/Profile";
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
      <MentorshipDetails
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
      />
    </div>
  );
};

export default MentorshipCard;
