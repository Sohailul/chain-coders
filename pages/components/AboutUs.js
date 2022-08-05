import Image from "next/image";
import Link from "next/link";
import about from "../../public/assets/about.png";

const AboutUs = () => {
  return (
    <div className="bg-gray-800">
      <h1 className="text-3xl font-bold text-white text-center uppercase py-8">
        About us
      </h1>
      <div className="hero px-5">
        <div className="hero-content flex-col lg:flex-row">
          <Image src={about} className="lg:max-w-xl rounded-lg bounce" />
          <div className="max-w-xl">
            <p className="text-md text-justify py-6 text-white">
              Chain Coders is a Tech Service Providing Agency that helps new and
              established Business, Company, and Organizations to grow their
              online presence and generate sales. We've a team of Web Software
              Development and digital marketing experts that will surely take
              care of your needs. We are offering Website Development,
              Responsive Web Design, Landing page Design, eCommerce Solution and
              All sorts of Marketing to make sure we deliver exponential growth.
              We provide everything from social media management and growth,
              community management, Lead generation, Content Writing, SEO, Paid
              Advertising, etc.
            </p>
            <Link href="/Contact">
            <a>
            <button className="btn btn-primary text-white rounded-full">
              Contact us
            </button>
            </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
