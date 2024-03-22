import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Works from "./components/Works";

export default function Home() {
  return (
    <>
      <Head>
        <title>CRONOS</title>
        <meta name="description" content="CRONOS Landing Page" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/assets/yuan.png" />
      </Head>
      <div className="bg-[#000E1A]">

        <Header />
        <main>
          <Carousel />
          <Works />


        </main>
        <Footer />
      </div>
    </>
  );
}
