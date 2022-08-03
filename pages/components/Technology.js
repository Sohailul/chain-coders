import Image from "next/image";
import react from "../../public/assets/technologies/React.png";
import next from "../../public/assets/technologies/Nextjs.png";
import node from "../../public/assets/technologies/nodejs.png";
import mongodb from "../../public/assets/technologies/MongoDB.png";
import wordpress from "../../public/assets/technologies/WordPress.png";

const Technology = () => {
  return (
    <div className="services bg-[#111827] py-8">
      <h1 className="text-3xl font-bold text-white py-5 text-center uppercase pb-12">
        Technology we use
      </h1>
      <div className="flex justify-center items-center px-5">
        <div className="m-5 mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="card flex justify-center items-center max-w p-5 bg-gray-300 rounded">
            <Image src={react} width={261} height={99} alt="" />
          </div>
          <div className="card flex justify-center items-center max-w p-5 bg-gray-300 rounded">
            <Image src={next} width={261} height={99} alt="" />
          </div>
          <div className="card flex justify-center items-center max-w p-5 bg-gray-300 rounded">
            <Image src={node} width={261} height={99} alt="" />
          </div>
          <div className="card flex justify-center items-center max-w p-5 bg-gray-300 rounded">
            <Image src={mongodb} width={261} height={99} alt="" />
          </div>
          <div className="card flex justify-center items-center max-w p-5 bg-gray-300 rounded">
            <Image src={wordpress} width={261} height={99} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Technology;
