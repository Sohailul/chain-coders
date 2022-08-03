import { BiSupport, BiTimeFive } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GrUserExpert } from "react-icons/gr";

const ChooseUs = () => {
  return (
    <div className="services bg-[#111827] py-8">
      <h1 className="text-3xl font-bold text-white py-5 text-center uppercase pb-12">
        Why Choose Us?
      </h1>
      <div className="flex justify-center items-stretch px-5">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="card card-side bg-base-300 shadow-xl p-5 flex justify-center items-center">
            <p className="text-4xl font-bold">
              <BiSupport />
            </p>
            <div className="card-body">
              <h2 className="card-title">24/7 Support</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
          <div className="card card-side bg-base-300 shadow-xl p-5 flex justify-center items-center">
            <p className="text-4xl font-bold">
              <AiFillSetting />
            </p>
            <div className="card-body">
              <h2 className="card-title">Quality Work</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
          <div className="card card-side bg-base-300 shadow-xl p-5 flex justify-center items-center">
            <p className="text-4xl font-bold">
              <BiTimeFive />
            </p>
            <div className="card-body">
              <h2 className="card-title">On Time Delivery</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
          <div className="card card-side bg-base-300 shadow-xl p-5 flex justify-center items-center">
            <p className="text-4xl font-bold">
              <VscWorkspaceTrusted />
            </p>
            <div className="card-body">
              <h2 className="card-title">100% Trusted</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
          <div className="card card-side bg-base-300 shadow-xl p-5 flex justify-center items-center">
            <p className="text-4xl font-bold">
              <GrUserExpert />
            </p>
            <div className="card-body">
              <h2 className="card-title">Expert Team</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseUs;
