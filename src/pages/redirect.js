import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    const urlParam = router.query.url;

    if (urlParam) {
      const url = new URL(urlParam);
      const domain = url.hostname;

      const redirectTimer = setTimeout(() => {
        router.push(urlParam);
      }, 5000);

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
        <title>Redirecting...</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://cdn.pylexservers.xyz/favicon.png" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/redirect.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="/css/bg.css" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <div className="redirect-center">
        <a className="redirect-title">Redirecting to {router.query.url ? <span className="blue-clr">{router.query.url}</span> : null}!</a>
        <img src="https://media.tenor.com/iUoxFQGhxcAAAAAj/pig-mine.gif" className="pig-running" />
        <a className="redirect-countdown">
          You'll be automatically redirected in <span className="actual-countdown">5 seconds</span>
          <span id="dots-loop">...</span>
        </a>

        <button onClick={() => router.push(router.query.url)} className="redirect-faster">Continue</button>

        <script
          data-cfasync="false"
          dangerouslySetInnerHTML={{
            __html: `
            var dots = document.getElementById('dots-loop');
            dots.innerText = '.';
            setTimeout(() => {
                dots.innerText = '..'
            }, 1000);
            setTimeout(() => {
                dots.innerText = '...'
            }, 2000);
            setInterval(() => {
                dots.innerText = '.';
                setTimeout(() => {
                    dots.innerText = '..'
                }, 1000);
                setTimeout(() => {
                    dots.innerText = '...'
                }, 2000);
            }, 3000);
            `
          }}
        />

        <a className="madewithlov">Made with <i className="fa-solid fa-heart"></i> by David D.</a>
      </div>
      <Footer />
    </motion.div>
  );
}
