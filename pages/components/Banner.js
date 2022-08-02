import Image from 'next/image';
import chainbanner from '../../public/assets/chain-banner.png';
const Banner = () => {
  return (
    <div>
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={chainbanner}
            width={1000}
            height={1000}
            className="lg:max-w-xl rounded-lg bounce"
          />
          <div className='text-white'>
            <h1 className="text-5xl font-bold">Chain Coders</h1>
            <h3 className="py-6 text-2xl font-bold">
              Providing reliable tech services. Maintaining High Quality. Trust & Grow Your Business with Us.
            </h3>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
