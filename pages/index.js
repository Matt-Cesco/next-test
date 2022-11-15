import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
//import imageUrlBuilder from "@sanity/image-url";
import groq from "groq";
import sanityClient from "../client";
import Image from "next/image";
import diverseImage from "../public/image-test.webp";

const DynamicSecondSection = dynamic(() => import("../components/SecondSection"), {
   suspense: true,
});
const DynamicThirdSection = dynamic(() => import("../components/ThirdSection"), {
  suspense: true,
});
const DynamicForthSection = dynamic(() => import("../components/ForthSection"), {
  suspense: true,
});
const DynamicFifthSection = dynamic(() => import("../components/FifthSection"), {
  suspense: true,
});
const DynamicSixthSection = dynamic(() => import("../components/SixthSection"), {
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

//const builder = imageUrlBuilder(sanityClient);
//
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
      <div className="py-5">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <Image
                src={diverseImage}
                alt="Diversification image"
                width={512}
                height={445}
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">{home.title}</h1>
              <p className="lead">{home.description}</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Primary
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Default
                </button>
              </div>
            </div>
          </div>
        </div>
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
