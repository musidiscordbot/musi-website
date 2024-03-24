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
      <Head><meta property="og:title" content="Erorr this page doesn't exist." />
        <meta property="og:description" content="The best free discord music bot." />
        <meta property="og:image" content="https://media.discordapp.net/attachments/1216083221712736336/1221296058727010475/Musi_logo_7_trans_whiteText.png?ex=66120f96&is=65ff9a96&hm=69d0b5d2ae9a228caf8be8b0b50aaa0dabea7e9583ad5a8517021531a1f90f25&" />  {/* Replace with your image URL */}
        <meta property="og:url" content="https://musi.lol" />  {/* Replace with your website URL */}
        <title>Musi.lol - Error</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://media.discordapp.net/attachments/1216083221712736336/1221296058727010475/Musi_logo_7_trans_whiteText.png?ex=66120f96&is=65ff9a96&hm=69d0b5d2ae9a228caf8be8b0b50aaa0dabea7e9583ad5a8517021531a1f90f25&" />
</Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              Hmm. an unexpected error occured. Maybe this page doesn't exist?
            </label>
          </header>
        <button className="btn">
          <Link className="h-color no-decoration" href="/">
            Go Home
          </Link>
        </button>          <button className="btn">
          <Link className="h-color no-decoration" href="https://discord.gg/YNTTT2EPqC">
            Join the support server
          </Link>
        </button>
          
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
