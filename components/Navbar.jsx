import Image from "next/image";
import logo from "../public/logo-lion.webp";
import Link from "next/link";


const Navbar = () => {
  

  return (
    <div className="fixed w-full z-10 ease-in duration-300 bg-black">
      <div className="max-w-screen-xl m-auto flex justify-between items-center p-4 text-green-500 bg-black">
        <Link href="/">
          <Image src={logo} alt="Company logo" width={85} height={68} />
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/" className="font-bold">
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link href="/AboutUs" className="font-bold">
              About Us
            </Link>
          </li>
        </ul>
        </div>
      </div>
    
  );
};

export default Navbar;
