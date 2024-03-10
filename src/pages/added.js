import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Commands() {
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
        <link rel="icon" href="/favicon.ico" />
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
