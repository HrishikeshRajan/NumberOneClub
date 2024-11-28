
import Image from 'next/image';
import { Skeleton } from "@/components/ui/skeleton"
import { twMerge } from 'tailwind-merge';

export default function InstructorSkeleton({className}: {className?:string}) {
  return (
    <div className={twMerge('flex flex-col h-80  items-center  rounded-2xl w-[228.91px] xl:max-w-[228.91px]', className)}>
      {/* Image */}
      <Skeleton className={`w-full h-28   relative  rounded-t-2xl mt-10 shadow-lg `}>
      <Image
        src="lady-2.svg"
        alt="Profile Picture"
        width={150}
        height={150}
        className="rounded-t-lg -z-9 absolute top-[20px] left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
      />

      </Skeleton>

      {/* Info */}
      <div className="p-4 z-0 bg-white w-full text-center rounded-b-2xl shadow-instructor-card-shadow ">

        <Skeleton className="w-5/6 h-[20px] rounded-md my-1" />

        <Skeleton className="w-3/6 h-[20px] rounded-md my-1" />

        <Skeleton className="w-2/6 h-[20px] rounded-md my-2" />

      </div>
    </div>
  );
}
