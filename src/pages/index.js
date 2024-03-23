import Head from "next/head";
import { useEffect } from "react";
import axios from "axios";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import JoinNow from "@/components/JoinNow";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
    <meta property="og:title" content="musi.lol" />
        <meta property="og:description" content="The best free discord music bot." />
        <meta property="og:image" content="https://i.ibb.co/h7nzKk6/musi-favicon-white-removebg-preview.png" />  {/* Replace with your image URL */}
        <meta property="og:url" content="https://musi.lol" />  {/* Replace with your website URL */}
        <title>Musi.lol</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://i.ibb.co/h7nzKk6/musi-favicon-white-removebg-preview.png" />
      </Head>
      <Navbar />
      <Showcase />
      <About />
      <JoinNow />
      <Footer />
    </>
  );
}
