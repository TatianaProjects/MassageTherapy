import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-socials">

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
        >
            <FaInstagram />
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
        >
            <FaFacebookF />
        </a>

        <a href="mailto:info@balancedlife.ca">
          <FaEnvelope />
        </a>

      </div>

      <p>Ottawa, Ontario</p>

      <p>© 2026 Balanced Life Massage.
        All rights reserved.</p>

    </footer>
  );
}

export default Footer;