import { instructor } from "@/app/seed/instructor";
import Image from 'next/image';


type MyComponentProps = {
  params: {
    id?: string;
  };
};

export default async function MyComponent({ params }: MyComponentProps) {
  const {id} = await params;

  return <section className="container mx-auto p-4">

    <div className="profile-left w-1/3 flex flex-col justify-center items-start">
         
    <div className="relative flex justify-center items-center w-72 h-72 bg-gradient-to-br from-teal-700 to-cyan-800 rounded-full overflow-hidden">
  <div className="absolute bottom-0 w-full h-3/5  rounded-b-full overflow-hidden">
    <Image src="lady-2.svg" width={100} height={100} alt="Person" className="absolute z-10 bottom-0 w-full h-auto object-cover" />
  </div>
</div>

       <h2 className="font-bold text-darkslategray text-2xl">{instructor.name}</h2>
       <h4 className="text-lg font-normal text-Skobeloff my-1">{instructor.role}</h4>
       <h3>Rating: {instructor.rating}</h3>
       <h3>Bio: {instructor.bio}</h3>
    </div>

    <div className="profile-right ">

    </div>

  </section>;
}
