
import Image from 'next/image';
type InstructorCardProps = {
  name: string;
  company: string;
  rating: number;
  image: string;
  backgroundColor: string;
};
export default function CardWithInstructor({name,company,rating,image,backgroundColor}:InstructorCardProps) {
  return (
    <div className="flex flex-col h-80  items-center mx-auto rounded-2xl max-w-[228.91px]">
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
        <h3 className="text-lg font-bold text-left text-darkslategray line-clamp-1 w-full">{name}</h3>
        <span className="text-xs">
            <Image src="/company-logo.svg" width={16} height={16} alt="CA Icon" />
          </span>
        </div>
        <p className="text-sm font-normal text-darkslategray flex items-left justify-start gap-1 line-clamp-2">
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
