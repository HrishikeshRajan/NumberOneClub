
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
export type InstructorCardProps = {
  name: string;
  company: string;
  rating: number;
  image: string;
  backgroundColor: string;
  className?:string;
};
export default function CardWithInstructor({name,company,rating,image,backgroundColor, className}:InstructorCardProps) {
  return (
    <div className={twMerge('flex flex-col h-80  items-center  rounded-2xl w-[228.91px] xl:max-w-[228.91px]', className)}>
      {/* Image */}
      <div className={`w-full h-28   relative  ${backgroundColor || 'bg-green-gradient'} rounded-t-2xl mt-10 shadow-lg `}>
        <Image
        src={image} 
        alt="Profile Picture"
         width={150}
         height={150}
        className="rounded-t-lg  -z-9 absolute top-0 left-0 right-0 object-cover"
        style={{
         position: 'absolute',
         top: '20px',
         left: '50%',
         transform: 'translate(-50%, -50%)'

        }}
        />
      </div>

      {/* Info */}
      <div className="p-4 z-0 bg-white w-full text-center rounded-b-2xl shadow-instructor-card-shadow ">
        <div className='flex items-center gap-2 w-full'>
        <h3 className=" text-md md:text-lg font-bold text-left text-darkslategray line-clamp-1 w-full">{name}</h3>
        <span className="text-xs">
            <Image src="/company-logo.svg" width={16} height={16} alt="CA Icon" />
          </span>
        </div>
        <p className=" text-xs md:text-sm font-normal text-darkslategray text-left gap-1 line-clamp-1 w-full">
          {company}
        </p>

        {/* Rating */}
        <div className="mt-2 flex items-center justify-start gap-1">
          <Image src="/star.svg" width={16} height={16} alt="Star Icon" />
          <span className="text-darkslategray text-lg font-semibold">{rating}</span>
        </div>
      </div>
    </div>
  );
}
