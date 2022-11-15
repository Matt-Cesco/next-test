import Image from "next/image";
import skyscaper from "../public/skyscaper.webp";
import diverseImage from "../public/image-test.webp";
import Link from "next/link";

const SecondSection = () => {
  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 align-self-center">
            <h1 className="fs-xxxl fw-bolder text-uppercase">
              the national aeronautics and space administration
            </h1>
            <div className="col-lg-8">
              <p className="py-lg-5 fs-lg">
                Nasa in an independet agency of the united states fdederal
                governemtn resposible for the civialn space program, as weell as
                aeronativs and areopsca reserarcjh
              </p>
              <div className="row">
                <div className="col-6">
                  <h2 className="fs-xxxl text-center">16</h2>
                  <p className="fs-sm text-center">Millions traded per day</p>
                </div>
                <div className="col-6">
                  <h2 className="fs-xxxl text-center">200</h2>
                  <p className="fs-sm text-center">Plus portfolio managed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Image
              src={skyscaper}
              alt="Landing page image"
              width={636}
              height={954}
            />
          </div>
        </div>
      </div>
      <hr />
      {/* Mission section */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2 className="fs-xxxl">Mission</h2>
          </div>
          <div className="col-12 col-lg-6">
            <p className="fs-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="fs-md fw-bolder fst-italic pt-lg-5">
              John Wayne - CEO
            </p>
          </div>
        </div>
      </div>
      <hr />
      {/* What we do section */}
      <div className="container">
        <h2 className="fs-xxxl pb-lg-5 mb-lg-5">Quick Facts</h2>
        <div className="row">
          <div className="col-6 col-lg-4">
            <div className="container">
              <div className="row">
                <div className="col-12 px-0">
                  <p className="fs-xxl m-0">£ 10.45 M</p>
                  <p className="fs-sm">Equity Capital</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-4">
            <div className="container">
              <div className="row">
                <div className="col-12 px-0">
                  <p className="fs-xxl m-0">£ 10.45 M</p>
                  <p className="fs-sm">Equity Capital</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-4">
            <div className="container">
              <div className="row">
                <div className="col-12 px-0">
                  <p className="fs-xxl m-0">£ 10.45 M</p>
                  <p className="fs-sm">Equity Capital</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-4">
            <div className="container">
              <div className="row">
                <div className="col-12 px-0">
                  <p className="fs-xxl m-0">£ 10.45 M</p>
                  <p className="fs-sm">Equity Capital</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-4">
            <div className="container">
              <div className="row">
                <div className="col-12 px-0">
                  <p className="fs-xxl m-0">£ 10.45 M</p>
                  <p className="fs-sm">Equity Capital</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-4">
            <div className="container">
              <div className="row">
                <div className="col-12 px-0">
                  <p className="fs-xxl m-0">£ 10.45 M</p>
                  <p className="fs-sm">Equity Capital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* Diversification section */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-none d-md-block">
            <Image
              src={skyscaper}
              alt="Diversification image"
              width={636}
              height={553}
            />
          </div>
          <div className="col-lg-5 offset-lg-1 align-self-center">
            <div className="container ">
              <div className="row">
                <div className="col-12 ">
                  <h2 className="fs-xxxl fw-bolder">Sector focus</h2>
                  <p className="py-lg-5 fs-lg">
                    We deploy over twnty years of incestr backing,. operanis and
                    managemtn and private invste exp4rience to invest ascrroos
                    ,iltipl categrorie swithin thje srervive anmd technolmgi
                    cescto:
                  </p>
                  
                    <Link href="/aboutUs" className="fs-md fw-bolder text-uppercase">
                      Learn more
                    </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default SecondSection;
