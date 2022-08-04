import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link className="font-bold uppercase" href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link className="font-bold uppercase" href="/Services">
          <a>Services</a>
        </Link>
      </li>
      <li>
        <Link className="font-bold uppercase" href="/Portfolio">
          <a>Portfolio</a>
        </Link>
      </li>
      <li>
        <Link className="font-bold uppercase" href="/Contact">
          <a>Contact Us</a>
        </Link>
      </li>
    </>
  );
  return (
    <header className="sticky top-0 z-50">
      <div className="navbar bg-gray-800 text-white border-b-2 border-gray-600 p-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#111827] rounded-box w-52 uppercase font-bold"
            >
              {menuItems}
            </ul>
          </div>
          <a>
            <Image src={logo} width={368} height={80} />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex navbar-end">
          <ul className="menu menu-horizontal p-0 uppercase font-bold">
            {menuItems}
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
