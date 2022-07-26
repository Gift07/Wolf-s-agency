import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Blog from "../components/Blog";
import Clients from "../components/Clients";
import Experience from "../components/Experience";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Team from "../components/Team";
import Welcome from "../components/welcome";
import Work from "../components/Work";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-screen font-poppins overflow-x-hidden">
      <Head>
        <title>The wolf's agency</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/blue-logo.png" />
      </Head>
      <main>
        <Navbar />
        <div className="pt-16 lg:pt-20">
          <Welcome />
          <Services />
          <About />
          <Team />
          <Clients />
          <Work />
          <Experience />
          <Blog />
          <Footer />
        </div>
      </main>
    </div>
  );
}
