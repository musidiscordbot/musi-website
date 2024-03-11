import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import botOnlineStatus from "../utils/images/botStatus.svg";
import botOfflineStatus from "../utils/images/botOfflineStatus.svg"; // Import the offline status image

const Footer = () => {
  const [isBotOnline, setIsBotOnline] = useState(false);

  useEffect(() => {
    const checkBotStatus = async () => {
      try {
        const response = await fetch("/api/hello");
        if (response.status === 200) {
          const data = await response.json();
        setIsBotOnline(data.isBotOnline);
        } else {
          setIsBotOnline(false); // Set to false if the status code is not 200
        }
      } catch (error) {
        console.error("Error checking bot status:", error);
        setIsBotOnline(false); // Set to false in case of error
      }
    };
  
    checkBotStatus();
  }, []);
  
  const year = new Date().getFullYear();

  return (
    <div>
      <footer className="footer">
        <div className="footer-sec1">
          <div className="footer-header">
            <ul>
              <li>
                <Link className="h-color" href="/" style={{ fontSize: "32px" }}>
                  musi.lol
                </Link>

                <span
                  style={{
                    fontSize: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  className="p-color"
                >
                  <Image
                    src={isBotOnline ? botOnlineStatus : botOfflineStatus} // Use ternary operator to switch between images
                    width={20}
                    height={20}
                    alt="online-status"
                    className="onlineStatus"
                  />{" "}
                  {isBotOnline ? "Musi is online" : "Musi is offline"}
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="footer-sec2">
          <div>
            <p className="p-color" style={{ fontSize: "20px" }}>
              Created with ❤️ by lrdwlfy
            </p>
            <p className="p-color" style={{ fontSize: "20px" }}>
              {year} &copy; All rights reserved!
            </p>
          </div>
          <div className="footer-sec2-link"></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
