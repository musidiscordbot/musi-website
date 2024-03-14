import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Commands() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to another page after 3 seconds
    const redirectTimer = setTimeout(() => {
      router.push('https://top.gg/bot/1137417865016918149/vote');
    }, 3000);

    // Clear the timer if the component is unmounted
    return () => clearTimeout(redirectTimer);
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Invite | Musi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              Redirecting...
            </label>
          </header>
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
