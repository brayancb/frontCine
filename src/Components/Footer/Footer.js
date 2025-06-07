import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <p>
          <FaMapMarkerAlt /> Dirección: Av. Cine, Coquimbo York, Chile
        </p>
        <p>
          <FaPhone /> Teléfono: <a href="tel:+56912345678">+56 9 1234 5678</a>
        </p>
        <p>
          <FaEnvelope /> Email:{" "}
          <a href="mailto:coquimboyorkcinema@hotmail.com">
            coquimboyorkcinema@hotmail.com
          </a>
        </p>
      </div>

      <div className="footer-social">
        <a
          href="https://twitter.com/coquimboyorkcl"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/coquimboyork/#l"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaInstagram />
        </a>
      </div>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Coquimbo York Cinema. Todos los
        derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
