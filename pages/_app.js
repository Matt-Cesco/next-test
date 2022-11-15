import dynamic from "next/dynamic";
import { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

const DynamicNavbar = dynamic(() => import("../components/navbar"), {
  suspense: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Suspense fallback={`Loading...`}>
        <DynamicNavbar />
        <Component {...pageProps} />
      </Suspense>
    </>
  );
}

export default MyApp;
