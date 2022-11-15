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
