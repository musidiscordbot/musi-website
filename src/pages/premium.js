import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Musi.lol - Premium</title>
        <meta property="og:title" content="musi.lol/privacy" />
        <meta property="og:description" content="The best free Discord music bot." />
        <meta property="og:image" content="https://example.com/your-image.jpg" />
        <meta property="og:url" content="https://musi.lol" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://example.com/your-favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="privacy-policy">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              Musi Premium
            </label>
          </header>
          
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Why Choose Premium?
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>1. Ad-Free Experience</li>
                <li>2. Exclusive Features</li>
                <li>3. High-Quality Audio</li>
                <li>4. Priority Support</li>
                <li>5. Customization Options</li>
                <li>6. Early Access to Updates</li>
                <li>7. Enhanced Stability and Performance</li>
                <li>8. Community Recognition</li>
                <li>9. Exclusive Events and Giveaways</li>
                <li>10. Supporting Development</li>
              </ul>
            </div>
          </section>
          <button className="btn">
            <Link href="https://musi.lol/invite">
              <a className="h-color no-decoration">Invite Musi</a>
            </Link>
          </button>
          <button className="btn">
            <Link href="https://discord.gg/YNTTT2EPqC">
              <a className="h-color no-decoration">Join the support server</a>
            </Link>
          </button>
          <button className="btn">
            <Link href="https://top.gg/bot/1137417865016918149/vote">
              <a className="h-color no-decoration">Vote for Musi!</a>
            </Link>
          </button>
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
