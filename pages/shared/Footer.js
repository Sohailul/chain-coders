import Image from "next/image";
import logo from "../../public/assets/logo-img.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-accent text-white">
        <div>
          <Image src={logo} width={221} height={141} />
          <p className="font-bold">
            ChainCoders Technology
            <br />
            Providing reliable tech services
          </p>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-3">
            <a>
              
            </a>
            <a>
              
            </a>
            <a>
              
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
