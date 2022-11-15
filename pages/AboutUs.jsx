import dynamic from "next/dynamic";
import { Suspense } from "react";

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

function AboutUs() {
  return (
    <div className="py-5">
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
