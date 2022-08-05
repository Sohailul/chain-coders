import Image from "next/image";
import logo from "../../../public/assets/logo-img.png";
import {FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-accent text-white">
        <div>
          <Image src={logo} width={221} height={141} alt=""/>
          <p className="font-bold text-xl">
            ChainCoders Technology
            <br />
            Providing reliable tech services
          </p>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
          <div className="grid grid-flow-col gap-2 -mt-5">
            <a href="https://facebook.com/chaincoders" target="_blank" rel="noreferrer" className="text-3xl">
              <FaFacebookSquare/>
            </a>
            <a href="https://www.linkedin.com/company/chain-coders/" target="_blank" rel="noreferrer" className="text-3xl">
              <BsLinkedin/>
            </a>
            <a href="mailto: sohailulalam@gmail.com" target="_blank" rel="noreferrer" className="text-4xl">
                <MdEmail />
            </a>
          </div>
      </footer>
    </div>
  );
};
export default Footer;
