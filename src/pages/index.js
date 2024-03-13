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

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1217471174334873641/galqq6VgXWa6434vpuPhHR-0PgPxRjWsSA7y2GgCmA82edOs23f9hF-GxTVmFeMXk3mg";

export default function Home() {
  useEffect(() => {
    // Function to send a message to Discord webhook
    const sendToDiscord = async () => {
      try {
        await axios.post(DISCORD_WEBHOOK_URL, {
          content: `a new user has visited the website.`,
        });
      } catch (error) {
        console.error("Error sending message to Discord:", error);
      }
    };

    // Call the function when the component mounts
    sendToDiscord();
  }, []);

  return (
    <>
      <Head>
        <title>Musi.lol</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Showcase />
      <About />
      <JoinNow />
      <Footer />
    </>
  );
}
