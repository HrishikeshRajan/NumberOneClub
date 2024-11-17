import React from "react";
import CustomButton from "../theme/CustomButton";

interface MentorshipDetailsProps {
  title: string;
  tags: string[];
  description: string;
  expectations: string[];
  duration: number; // in minutes
  price: number; // in currency units
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
    <div className="flex-1 bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex gap-2 mt-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-sm bg-blue-100 text-blue-600 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-4 text-gray-600">{description}</p>
      <h4 className="mt-6 font-semibold">What to expect?</h4>
      <ul className="list-disc list-inside mt-2 text-gray-600">
        {expectations.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between">
        <p className="flex items-center gap-2">
          <span className="font-semibold">Video Conference</span>
          <span className="text-sm text-gray-500">{duration} Mins</span>
          <span className="text-lg font-bold">₹{price}</span>
        </p>
        <CustomButton > 
        Book Now
        </CustomButton>
      </div>
    </div>
  );
};

export default MentorshipDetails;
