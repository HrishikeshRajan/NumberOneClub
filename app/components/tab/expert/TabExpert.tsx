import React from "react";
import ExpertTab from "../../ExpertTab";
import { instructors } from "@/app/seed/instructors";
import CardWithInstructor, { InstructorCardProps } from "../../InstructorCard";
import EnableLink from "../../ui/decorators/EnableLink";
import { getInstructorLink } from "@/lib/utils";

import AreYouExpertContent from "./AreYouExpertContent";
import FindExpertContent from "./FindExpertContent";

function useInstructorList(instructors:InstructorCardProps[]) {
  return instructors.map((instructor) => (
    <EnableLink href={getInstructorLink(instructor.id)} key={instructor.id}>
      <CardWithInstructor
        id={instructor.id}
        name={instructor.name}
        company={instructor.company}
        rating={instructor.rating}
        image={instructor.image}
        backgroundColor={instructor.backgroundColor}
      />
    </EnableLink>
  ));
}





function TabExpert() {
  const instructorsList = useInstructorList(instructors);

  const tabsData = [
    {
      id: "findExpert",
      label: "Find Expert",
      content: <FindExpertContent instructorsList={instructorsList} />,
    },
    {
      id: "becomeExpert",
      label: "Become Expert",
      content: <AreYouExpertContent />,
    },
  ];

  return <ExpertTab tabs={tabsData} />;
}

export default TabExpert;
