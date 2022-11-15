import Image from "next/image";
import diverseImage from "../public/image-test.webp";

const ForthSection = () => {
  return (
    <section className="text-gray-700 body-font border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5"></div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Shooting Stars
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5"></div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5"></div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Neptune
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <Image
            src={diverseImage}
            alt="Diversification image"
            width={636}
            height={553}
          />
        </div>
      </div>
    </section>
  );
};

export default ForthSection;
