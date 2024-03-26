import Head from "next/head";
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
        <title>Musi.lol - Privacy Policy</title>
        <meta property="og:title" content="musi.lol/privacy" />
        <meta property="og:description" content="The best free discord music bot." />
        <meta property="og:image" content="https://media.discordapp.net/attachments/1216083221712736336/1221296058727010475/Musi_logo_7_trans_whiteText.png?ex=66120f96&is=65ff9a96&hm=69d0b5d2ae9a228caf8be8b0b50aaa0dabea7e9583ad5a8517021531a1f90f25&" />
        <meta property="og:url" content="https://musi.lol" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://media.discordapp.net/attachments/1216083221712736336/1221296058727010475/Musi_logo_7_trans_whiteText.png?ex=66120f96&is=65ff9a96&hm=69d0b5d2ae9a228caf8be8b0b50aaa0dabea7e9583ad5a8517021531a1f90f25&" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="privacy-policy">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              Privacy Policy for Musi
            </label>
          </header>

          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Last Updated: 26/03/2024 - 19:00 GMT
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              Your privacy is important to us. This Privacy Policy outlines the types of personal information we collect, how we use it, and the steps we take to protect it when you use the Musi Discord music bot. By using Musi, you agree to the collection and use of information in accordance with this policy.
            </div>
          </section>

          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              1. Information We Collect
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>User Provided Information: We may collect information that you provide to us when using Musi, such as your Discord username, server information, and command history.</li>
                <li>Automatically Collected Information: We may collect certain information automatically when you use Musi, including your Discord user ID, usage data, and preferences.</li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              2. How We Use Your Information
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>To provide and maintain Musi's functionality.</li>
                <li>To improve Musi and develop new features and services.</li>
                <li>To communicate with you about updates, announcements, and promotional offers related to Musi.</li>
                <li>To comply with legal obligations and protect our rights.</li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb4" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb4">
              3. Data Security
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <p>We take reasonable measures to protect the information we collect from unauthorized access, alteration, or disclosure. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee the absolute security of your personal information.</p>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb5" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb5">
              4. Third-Party Services
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <p>Musi may use third-party services to facilitate its functionality. These third parties may have access to your personal information to perform tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb6" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb6">
              5. Children's Privacy
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <p>Musi is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information from our records.</p>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb7" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb7">
              6. Changes to This Privacy Policy
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <p>We reserve the right to update or change our Privacy Policy at any time. Any changes will be posted on this page with an updated "Last Updated" date. Your continued use of Musi after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by them.</p>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb8"/>
          <section className="box">
            <label className="box-title p-color" htmlFor="cb8">
              7. Contact Us
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at <a href="mailto:contact@musi.lol">contact@musi.lol</a> or join our support server at <a href="https://discord.gg/musi">discord.gg/musi</a>.</p>
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
