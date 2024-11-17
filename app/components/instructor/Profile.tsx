import Image from "next/image";
import React from "react";
import ProfileCard from "./Avatar";

interface ProfileSectionProps {
  name: string;
  title: string;
  rating: number;
  socialLinks: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
  aboutText: string;
  additionalInfo: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  name,
  title,
  rating,
  socialLinks,
  aboutText,
  additionalInfo,
}) => {
  return (
    <div className="flex flex-col items-center text-center xl:items-start xl:text-left font-euclid">
      {/* <Image
        src="/demo-image.svg"
        alt={name}
        width={200}
        height={200}
        className="w-24 rounded-full mb-4" */}
        <ProfileCard 
        imageUrl="/lady-2.svg"
        gradient="bg-green-gradient"
        key={name}
        />
      
      <h2 className="text-4xl mt-7 font-bold text-darkslategray flex items-center gap-2">
        {name}
        <Image 
              src="/company-logo.svg"
              alt="company logo"
              width={16}
              height={16}
              className="w-12"
             />
        </h2>
      <p className="text-darkslategray font-normal text-2xl mt-3">{title}</p>
      <div className="flex items-center gap-4 mt-5">
        <span className="flex  items-center gap-1 text-lg font-bold text-darkslategray"> 
             <Image 
              src="/star.svg"
              alt="Star"
              width={16}
              height={16}
             />
            {rating}</span>
        <div className="flex gap-2">
          <a href={socialLinks.facebook} className="text-gray-400 hover:text-blue-600">
          <Image 
              src="/facebook.svg"
              alt="Star"
              width={16}
              height={16}
             />
          </a>
          <a href={socialLinks.instagram} className="text-gray-400 hover:text-pink-600">
          <Image 
              src="/instagram.svg"
              alt="Star"
              width={16}
              height={16}
             />
          </a>
          <a href={socialLinks.linkedin} className="text-gray-400 hover:text-blue-800">
          <Image 
              src="/linkedin.svg"
              alt="Star"
              width={16}
              height={16}
             />
          </a>
        </div>
      </div>
      <p className="mt-4 text-darkslategray font-semibold text-2xl" >{aboutText}</p>
      <p className="mt-2 text-gray-500 text-gray font-normal text-lg">{additionalInfo}</p>
    </div>
  );
};

export default ProfileSection;
