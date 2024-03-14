import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">Musi</h1>
        <h2 className="showcase-header-text h-color">
          The only discord music bot youl ever need!
        </h2>
        <p className="showcase-para p-color">
          One of the awesome discord bot with tons of commands that will fill
          your needs in your discord server.
        </p>

        <span className="p-color"></span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.com/oauth2/authorize?client_id=1137417865016918149&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fmusi.lol%2Fadded&scope=bot+identify">
              Invite now!
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.gg/YNTTT2EPqC">
              Join the support server
            </Link>
          </button>
          <button className="btn">
            <Link className="h-color no-decoration" href="https://top.gg/bot/1137417865016918149/vote">
              Vote for Musi!
            </Link>
          </button>
                      <button className="btn">
            <Link className="h-color no-decoration" href="/premium">
              Premium
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
