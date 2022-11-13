import Head from 'next/head';
import Image from 'next/image';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <>
      <Head>
        <title>Matteo Next.js</title>
        <meta
          name="demo website for testing purposes"
          content="Matteo Next.js"
        />
      </Head>
      <Hero />
    </>
  );
}
