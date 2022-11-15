import dynamic from "next/dynamic";
import { Suspense } from "react";


const DynamicSecondSection = dynamic(() => import("../components/secondSection"), {
   suspense: true,
});
const DynamicThirdSection = dynamic(() => import("../components/thirdSection"), {
  suspense: true,
});
const DynamicForthSection = dynamic(() => import("../components/forthSection"), {
  suspense: true,
});
const DynamicFifthSection = dynamic(() => import("../components/fifthSection"), {
  suspense: true,
});
const DynamicSixthSection = dynamic(() => import("../components/sixthSection"), {
  suspense: true,
});

function AboutUs() {
  return (
    <div className="py-24">
      <section className="text-gray-700 body-font py-24">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-2/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold uppercase text-gray-900">
              This is the about us page
            </h1>
            <p className="mb-8 leading-relaxed">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
      <Suspense fallback={`Loading...`}>
        <DynamicSecondSection />
        <DynamicThirdSection />
        <DynamicForthSection />
        <DynamicFifthSection />
        <DynamicSixthSection />
      </Suspense>
    </div>
  );
}

export default AboutUs;
