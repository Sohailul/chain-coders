import { FiGlobe } from "react-icons/fi";
import { FaFacebookSquare, FaStaylinked } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";

const GetInTouch = () => {
  return (
    <div>
      <div className="part-1">
        <div className="hero mt-8">
          <div className="hero-content text-center">
            <div className="max-w-md text-white">
              <h1 className="text-5xl font-bold pt-5">Get In Touch</h1>
              <p className="py-6">
                Get In Touch for free consultation and get best quotes. Quality
                Service || 24/7 Support
              </p>
              <a href="" target="_blank" rel="noreferrer">
                <button className="btn btn-primary rounded-full">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="part-2 mb-8 mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mx-8">
        <div className="card max-w bg-[#111827] shadow-xl pt-5">
          <span className="flex justify-center items-center text-3xl text-white">
            <GoLocation />
          </span>
          <div className="card-body items-center text-center text-white">
            <h1 className="text-xl font-bold">Location</h1>
            <p>Bahaddarhat-4212, Chittagong, Bangladesh</p>
          </div>
        </div>
        <div className="card max-w bg-[#111827] shadow-xl pt-5">
          <span className="flex justify-center items-center text-3xl text-white">
            <BsFillTelephoneFill />
          </span>
          <div className="card-body items-center text-center text-white">
            <h1 className="text-xl font-bold">Phone</h1>
            <p>+8801521527446</p>
            <p>+8801829586488</p>
          </div>
        </div>
        <div className="card max-w bg-[#111827] shadow-xl pt-5">
          <span className="flex justify-center items-center text-3xl text-white">
            <FaStaylinked />
          </span>
          <div className="card-body items-center text-center text-white">
            <h1 className="text-xl font-bold">Connect Us</h1>
            <div className="icons flex text-2xl gap-3">
              <a href="https://chain-coders.com" target="_blank">
                <FiGlobe />
              </a>
              <a
                href="https://www.linkedin.com/company/chain-coders/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebookSquare />
              </a>
              <a href="mailto: sohailulalam@gmail.com" target="_blank">
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetInTouch;
