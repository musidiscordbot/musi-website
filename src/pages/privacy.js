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
    <meta property="og:title" content="musi.lol/privacy" />
        <meta property="og:description" content="The best free discord music bot." />
        <meta property="og:image" content="https://media.discordapp.net/attachments/1216083221712736336/1221296058727010475/Musi_logo_7_trans_whiteText.png?ex=66120f96&is=65ff9a96&hm=69d0b5d2ae9a228caf8be8b0b50aaa0dabea7e9583ad5a8517021531a1f90f25&" />  {/* Replace with your image URL */}
        <meta property="og:url" content="https://musi.lol" />  {/* Replace with your website URL */}
        <title>Musi.lol - Privacy Policy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://media.discordapp.net/attachments/1216083221712736336/1221296058727010475/Musi_logo_7_trans_whiteText.png?ex=66120f96&is=65ff9a96&hm=69d0b5d2ae9a228caf8be8b0b50aaa0dabea7e9583ad5a8517021531a1f90f25&" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
Privacy Policy for Musi

Last Updated: 26/03/2024 - 19:00 GMT

Your privacy is important to us. This Privacy Policy outlines the types of personal information we collect, how we use it, and the steps we take to protect it when you use the Musi Discord music bot. By using Musi, you agree to the collection and use of information in accordance with this policy.

1. Information We Collect

We may collect the following types of information when you use Musi:

User Provided Information: We may collect information that you provide to us when using Musi, such as your Discord username, server information, and command history.

Automatically Collected Information: We may collect certain information automatically when you use Musi, including your Discord user ID, usage data, and preferences.

2. How We Use Your Information

We may use the information we collect for the following purposes:

To provide and maintain Musi's functionality.
To improve Musi and develop new features and services.
To communicate with you about updates, announcements, and promotional offers related to Musi.
To comply with legal obligations and protect our rights.
3. Data Security

We take reasonable measures to protect the information we collect from unauthorized access, alteration, or disclosure. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee the absolute security of your personal information.

4. Third-Party Services

Musi may use third-party services to facilitate its functionality. These third parties may have access to your personal information to perform tasks on our behalf and are obligated not to disclose or use it for any other purpose.

5. Children's Privacy

Musi is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information from our records.

6. Changes to This Privacy Policy

We reserve the right to update or change our Privacy Policy at any time. Any changes will be posted on this page with an updated "Last Updated" date. Your continued use of Musi after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by them.

7. Contact Us

If you have any questions or concerns regarding this Privacy Policy, please contact us at contact@musi.lol or our support server at discord.gg/musi.

            </label>
          </header>
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
