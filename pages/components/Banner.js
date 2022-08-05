import Image from "next/image";
import Link from "next/link";

import chainbanner from "../../public/assets/chain-banner.png";
const Banner = () => {
  return (
    <div className="bg-[#111827]">
      <div className="hero px-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={chainbanner}
            width={1000}
            height={1000}
            className="lg:max-w-xl rounded-lg bounce"
          />
          <div className="text-white">
            <h1 className="text-5xl font-bold">Chain Coders</h1>
            <h3 className="py-6 text-2xl font-bold">
              Providing reliable tech services. Maintaining High Quality
              Products. Trust & Grow Your Business with Us.
            </h3>
            <Link href="/Contact">
            <a>
            <button className="btn btn-secondary text-white rounded-full">
              Get Free Consultation
            </button>
            </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
