import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function Commands() {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      window.close();
    }, 7500); // 15 seconds

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Thanks for adding me | Musi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://media.discordapp.net/attachments/1216083221712736336/1221296058727010475/Musi_logo_7_trans_whiteText.png?ex=66120f96&is=65ff9a96&hm=69d0b5d2ae9a228caf8be8b0b50aaa0dabea7e9583ad5a8517021531a1f90f25&" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              Thank you for adding Musi to your server
            </label>
          </header>
          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.gg/YNTTT2EPqC">
              Join the support server
            </Link>
          </button>
          <button className="btn">
            <Link className="h-color no-decoration" href="https://top.gg/bot/1137417865016918149/vote">
              Vote for musi!
            </Link>
          </button>
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
