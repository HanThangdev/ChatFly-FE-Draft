import Head from "next/head";
import Header from "./components/Header";
import Image from "next/image";
import resourceBg from "public/assets/yuan.png";
import Footer from "./components/Footer";

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
        <link rel="icon" href="/assets/icosahedron.png" />
      </Head>
      <Header />
      <main className="min-h-xl max-w-screen-xl m-auto flex justify-center items-center pt-36">
        <Image src={resourceBg} alt="Testing Image from Next" />
      </main>
      <Footer />
    </>
  );
}
