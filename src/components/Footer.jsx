import { motion } from "framer-motion";
import { SITE_CONFIG } from "../config";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <img
              src={SITE_CONFIG.logoImage}
              alt={SITE_CONFIG.logoAlt}
              className="footer__logo"
            />
            <p className="footer__tagline">{SITE_CONFIG.tagline}</p>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <p className="footer__col-title">Visítanos</p>
              <p className="footer__col-text">{SITE_CONFIG.contact.address}</p>
              <a
                href={SITE_CONFIG.contact.google_maps}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                Ver en mapa →
              </a>
            </div>

            <div className="footer__col">
              <p className="footer__col-title">Contacto</p>
              <a href={`tel:${SITE_CONFIG.contact.phone}`} className="footer__link">
                {SITE_CONFIG.contact.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="footer__link">
                {SITE_CONFIG.contact.email}
              </a>
            </div>

            <div className="footer__col">
              <p className="footer__col-title">Síguenos</p>
              <a
                href={SITE_CONFIG.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} {SITE_CONFIG.name}. Todos los derechos reservados.
          </p>
          <a href="#reservar" className="btn">
            Reservar cita
          </a>
        </div>
      </div>
    </footer>
  );
}
