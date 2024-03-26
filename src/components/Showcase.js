import { motion } from "framer-motion";

const openPopup = (url) => {
  const width = 600;
  const height = 400;
  const left = window.innerWidth / 2 - width / 2;
  const top = window.innerHeight / 2 - height / 2;

  window.open(url, 'popupWindow', `width=${width},height=${height},left=${left},top=${top}`);
};

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
          The only discord music bot you'll ever need!
        </h2>
        <p className="showcase-para p-color">
          One of the awesome discord bots with tons of commands that will fill
          your needs in your discord server.
        </p>

        <span className="p-color"></span>
        <div className="showcase-btn">
          <button className="btn">
            <a className="h-color no-decoration" onClick={() => openPopup('https://discord.com/oauth2/authorize?client_id=1137417865016918149&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fmusi.lol%2Fadded&scope=bot+identify')}>
              Invite now
            </a>
          </button>

          <button className="btn">
            <a className="h-color no-decoration" onClick={() => openPopup('https://discord.gg/YNTTT2EPqC')}>
              Join the support server
            </a>
          </button>

          <button className="btn">
            <a className="h-color no-decoration" onClick={() => openPopup('https://top.gg/bot/1137417865016918149/vote')}>
              Vote for Musi
            </a>
          </button>

          <button className="btn">
            <a className="h-color no-decoration" onClick={() => openPopup('/status')}>
              Status
            </a>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
