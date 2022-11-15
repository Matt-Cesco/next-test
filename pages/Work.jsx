import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicFifthSection = dynamic(
  () => import("../components/fifthSection"),
  {
    suspense: true,
  }
);
const DynamicSixthSection = dynamic(
  () => import("../components/sixthSection"),
  {
    suspense: true,
  }
);

function Work() {
  return (
    <div className="py-5">
      <Suspense fallback={`Loading...`}>
        <DynamicFifthSection />
        <DynamicSixthSection />
      </Suspense>
    </div>
  );
}

export default Work;
