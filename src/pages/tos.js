import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Commands() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
    <meta property="og:title" content="musi.lol/tos" />
        <meta property="og:description" content="The best free discord music bot." />
        <meta property="og:image" content="https://media.discordapp.net/attachments/1216083221712736336/1221296058727010475/Musi_logo_7_trans_whiteText.png?ex=66120f96&is=65ff9a96&hm=69d0b5d2ae9a228caf8be8b0b50aaa0dabea7e9583ad5a8517021531a1f90f25&" />  {/* Replace with your image URL */}
        <meta property="og:url" content="https://musi.lol" />  {/* Replace with your website URL */}
        <title>Musi.lol - Terms of service</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://media.discordapp.net/attachments/1216083221712736336/1221296058727010475/Musi_logo_7_trans_whiteText.png?ex=66120f96&is=65ff9a96&hm=69d0b5d2ae9a228caf8be8b0b50aaa0dabea7e9583ad5a8517021531a1f90f25&" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              Terms of Service for Musi

Last Updated: 26/03/2024 - 19:00 GMT
By using Musi, you agree to comply with and be bound by the following terms and conditions of use. If you do not agree to these terms, please do not use the bot.

1. Acceptance of Terms

By using Musi, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.

2. Use of the Bot

You may use Musi for personal, non-commercial use. You may not use the bot for any illegal or unauthorized purpose.

3. User Conduct

You are solely responsible for any content you play or share using Musi.
Do not use the bot to distribute, share, or promote any illegal or offensive content.
Do not use the bot to harass, spam, or harm other users.

4. Copyright

Musi respects the intellectual property rights of others. Do not use the bot to play or share copyrighted material without permission.
By using the bot, you agree to comply with all applicable copyright laws.

5. Limitation of Liability

Musi is provided "as is" without any warranties, express or implied. We are not responsible for any damages or losses arising from your use of the bot.

6. Modifications to the Terms of Service

We reserve the right to modify or update these Terms of Service at any time without prior notice. Your continued use of Musi constitutes acceptance of the revised terms.

7. Termination

We reserve the right to terminate or suspend your access to Musi at any time without prior notice for any reason, including, but not limited to, a breach of these Terms of Service.

8. Privacy Policy

By using Musi, you agree to our Privacy Policy, which can be found [link to Privacy Policy].

9. Governing Law

These Terms of Service shall be governed by and construed in accordance with the laws of [Your Jurisdiction].

10. Contact Us

If you have any questions or concerns regarding these Terms of Service, please contact us at [Your Contact Information].


            </label>
          </header>
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
