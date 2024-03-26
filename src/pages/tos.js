import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Musi.lol - Terms of Service</title>
        <meta property="og:title" content="musi.lol/tos" />
        <meta property="og:description" content="The best free discord music bot." />
        <meta property="og:image" content="https://media.discordapp.net/attachments/1216083221712736336/1221296058727010475/Musi_logo_7_trans_whiteText.png?ex=66120f96&is=65ff9a96&hm=69d0b5d2ae9a228caf8be8b0b50aaa0dabea7e9583ad5a8517021531a1f90f25&" />
        <meta property="og:url" content="https://musi.lol" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://media.discordapp.net/attachments/1216083221712736336/1221296058727010475/Musi_logo_7_trans_whiteText.png?ex=66120f96&is=65ff9a96&hm=69d0b5d2ae9a228caf8be8b0b50aaa0dabea7e9583ad5a8517021531a1f90f25&" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="terms-of-service">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              Terms of Service for Musi
            </label>
          </header>

          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Last Updated: 26/03/2024 - 19:00 GMT
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              By using Musi, you agree to comply with and be bound by the following terms and conditions of use. If you do not agree to these terms, please do not use the bot.
            </div>
          </section>

          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              1. Acceptance of Terms
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              By using Musi, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </div>
          </section>

          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              2. Use of the Bot
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              You may use Musi for personal, non-commercial use. You may not use the bot for any illegal or unauthorized purpose.
            </div>
          </section>

          <input type="radio" name="accordion" id="cb4" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
              3. User Conduct
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>You are solely responsible for any content you play or share using Musi.</li>
                <li>Do not use the bot to distribute, share, or promote any illegal or offensive content.</li>
                <li>Do not use the bot to harass, spam, or harm other users.</li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb5" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb5">
              4. Copyright
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              Musi respects the intellectual property rights of others. Do not use the bot to play or share copyrighted material without permission. By using the bot, you agree to comply with all applicable copyright laws.
            </div>
          </section>

          <input type="radio" name="accordion" id="cb6" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb6">
              5. Limitation of Liability
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              Musi is provided "as is" without any warranties, express or implied. We are not responsible for any damages or losses arising from your use of the bot.
            </div>
          </section>

          <input type="radio" name="accordion" id="cb7" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb7">
              6. Modifications to the Terms of Service
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              We reserve the right to modify or update these Terms of Service at any time without prior notice. Your continued use of Musi constitutes acceptance of the revised terms.
            </div>
          </section>

          <input type="radio" name="accordion" id="cb8" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb8">
              7. Termination
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              We reserve the right to terminate or suspend your access to Musi at any time without prior notice for any reason, including, but not limited to, a breach of these Terms of Service.
            </div>
          </section>

          <input type="radio" name="accordion" id="cb9" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb9">
              8. Privacy Policy
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              Byusing Musi, you agree to our Privacy Policy, which can be found [link to Privacy Policy].
</div>
</section>
      <input type="radio" name="accordion" id="cb10" />
      <section className="box">
        <label className="box-title p-color" htmlFor="cb10">
          9. Governing Law
        </label>
        <label className="box-close" htmlFor="acc-close"></label>
        <div className="box-content p-color">
          These Terms of Service shall be governed by and construed in accordance with the laws of [Your Jurisdiction].
        </div>
      </section>

      <input type="radio" name="accordion" id="cb11" />
      <section className="box">
        <label className="box-title p-color" htmlFor="cb11">
          10. Contact Us
        </label>
        <label className="box-close" htmlFor="acc-close"></label>
        <div className="box-content p-color">
          If you have any questions or concerns regarding this Terms of Service, please contact us at <a href="mailto:contact@musi.lol">contact@musi.lol</a> or our support server at <a href="https://discord.gg/musi">discord.gg/musi</a>.
        </div>
      </section>

      <input type="radio" name="accordion" id="acc-close" />
    </nav>
  </section>
  <Footer />
</motion.div>
);
}
