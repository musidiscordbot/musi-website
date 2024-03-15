import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Commands() {
  const router = useRouter();

  useEffect(() => {
    // Get the URL query parameter
    const urlParam = router.query.url;

    if (urlParam) {
      // Parse the URL to get the domain
      const url = new URL(urlParam);
      const domain = url.hostname;

      // Redirect to the full URL after 3 seconds
      const redirectTimer = setTimeout(() => {
        router.push(urlParam);
      }, 5000);

      // Clear the timer if the component is unmounted
      return () => clearTimeout(redirectTimer);
    }
  }, [router.query.url]);

 return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Redirect | Musi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              Redirecting to ${domain}
            </label>
          </header>
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
