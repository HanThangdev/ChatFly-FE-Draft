import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Works from "./components/Works";
import Feature from "./components/Feature";
import Intergration from "./components/Intergration";
import Plan from "./components/Plan";
import Contact from "./components/Contact";
import Template from "./components/Template";

export default function Home() {
  return (
    <>
      <Head>
        <title>CHATFLY | Custom ChatGPT for customer support</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="ChatFly lets you train AI ChatBots on your own data."
        />
        <link rel="icon" href="/assets/yuan.png" />
        {/* Canonical URL*/}
        <link rel="canonical" href="https://chatfly.co" />
        <link rel="apple-touch-icon" href="/assets/logo/logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CHATFLY |  Custom ChatGPT for customer support"
        />
        <meta
          name="twitter:description"
          content="ChatFly lets you train AI ChatBots on your own data. You can use multiple data sources like text, PDF, Excel or URLs."
        />

        <meta
          property="og:title"
          content="CHATFLY | Custom ChatGPT for customer support"
        />
        <meta
          property="og:description"
          content="ChatFly lets you train AI ChatBots on your own data. You can use multiple data sources like text, PDF, Excel or URLs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://chatfly.co/og_image.png" />
        <meta property="og:url" content="https://chatfly.co" />
      </Head>
      <div className="bg-[#000E1A]">
        <Header />
        <main>
          <Carousel />
          <Works />
          <Feature />
          <Intergration />
          <Plan />
          <Contact />
          <Template />
        </main>
        <Footer />
      </div>
    </>
  );
}
