import Image from "next/image";
import logo from "../public/logo-lion.webp";
import Link from "next/link";


const Navbar = () => {
  return (
    <div className="container-fluid border-bottom bg-black">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <div className="navbar-logo">
               <Image src={logo} alt="Company logo" width={85} height={85} />
            </div>
            <div className="d-flex justify-content-center">
              <div className="fs-md fw-bolder text-uppercase mx-4">
                <Link href="/">Home</Link>
              </div>
              <div className="fs-md fw-bolder text-uppercase mx-4">
                <Link href="/AboutUs">
                  About Us
                </Link>
              </div>
              <div className="fs-md fw-bolder text-uppercase mx-4">
                <Link href="/Work">Work</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
