import Head from "next/head";
import { data } from "autoprefixer";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import diverseImage from "../public/image-test.webp";
import groq from "groq";
import sanityClient from "../client";

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

export async function getStaticProps() {
  const query = groq`
      {
         "home": *[_type == 'homepage']
      }
   `;

  const data = await sanityClient.fetch(query);

  return {
    props: {
      home: data.home[0]
    },
  };
}

const builder = imageUrlBuilder(sanityClient);

//function urlFor(source) {
//  return builder.image(source);
//}


export default function Home({ home }) {
  return (
    <>
      <Head>
        <title>Matteo Next.js</title>
        <meta
          name="demo website for testing purposes"
          content="Matteo Next.js"
        />
      </Head>
      <div className="py-24">
        <section className="text-gray-700 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold uppercase text-gray-900">
                {home.title}
              </h1>
              <p className="mb-8 leading-relaxed">{home.description}</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                src={diverseImage}
                width={636}
                height={553}
              />
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
    </>
  );
}
