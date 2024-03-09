import Link from "next/link";
import Image from "next/image";
import botOnlineStatus from "../utils/images/botStatus.svg";
const Footer = () => {
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
                    fontSize: "16px", // Adjust the font size as desired
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  className="p-color"
                >
                  <Image
                    src={botOnlineStatus}
                    width={20}
                    height={20}
                    alt="online-status"
                    className="onlineStatus"
                  />{" "}
                  Musi is online
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <ul>
              <li>
              </li>
              <li>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-sec2">
          <div>
            <p className="p-color" style={{ fontSize: "20px" }}>
              Created with ❤️ by{" "}
              lrdwlfy
            </p>
            <p className="p-color" style={{ fontSize: "20px" }}>{year} &copy; All rights reserved!</p>
          </div>
          <div className="footer-sec2-link">
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
