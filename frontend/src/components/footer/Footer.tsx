import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p
          style={{
            fontSize: "30px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          Built by Akshat
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "13px",
            margin: "auto",
          }}
        >
          <Link
            style={{ color: "white" }}
            to={"https://github.com/Akshat-cs"}
            target="_blank"
          >
            <FaGithub />
          </Link>
          <Link
            style={{ color: "white" }}
            to={"https://www.linkedin.com/in/akshat-meena20/"}
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            style={{ color: "white" }}
            to={"https://twitter.com/akshatmeena368"}
            target="_blank"
          >
            <FaTwitter />
          </Link>
          <Link
            style={{ color: "white" }}
            target="_blank"
            to={"https://www.instagram.com/akshatmeena_"}
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
