// CardComponent.js
import Image from 'next/image';
import { Star } from 'lucide-react'; // from ShadCN UI icons

export default function CardWithInstructor() {
  return (
    <div className="flex flex-col items-center mx-auto shadow-lg rounded-2xl max-w-[228.91px]">
      {/* Image */}
      <div className="w-full h-28  relative  bg-gradient-to-b from-green-600 to-teal-700 rounded-t-2xl ">
        <Image
        src="/demo-image.svg" 
        alt="Profile Picture"
         width={130}
         height={130}
        className="rounded-t-lg  -z-9 absolute top-0 left-0 right-0 object-cover"
        style={{
         position: 'absolute',
         top: '46px',
         left: '50%',
         transform: 'translate(-50%, -50%)'

        }}
        />
      </div>

      {/* Info */}
      <div className="p-4 z-0 bg-white w-full text-center rounded-b-2xl">
        <div className='flex items-center gap-2'>
        <h3 className="text-lg font-bold text-darkslategray">Deepa Varghese</h3>
        <span className="text-xs">
            <Image src="/company-logo.svg" width={16} height={16} alt="CA Icon" />
          </span>
        </div>
        <p className="text-sm font-normal text-darkslategray flex items-center justify-start gap-1">
          Chartered Accountant 
       
        </p>

        {/* Rating */}
        <div className="mt-2 flex items-center justify-start gap-1">
          <Image src="/star.svg" width={16} height={16} alt="Star Icon" />
          <span className="text-darkslategray text-lg font-semibold">4.8</span>
        </div>
      </div>
    </div>
  );
}
