import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SITE_CONFIG } from "../config";
import "./Gallery.css";

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="galeria" className="gallery" ref={ref}>
      <div className="container gallery__header">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Galería
        </motion.p>
        <motion.h2
          className="display-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Nuestro mundo
        </motion.h2>
      </div>

      <div className="gallery__grid container">
        {SITE_CONFIG.galleryImages.map((img, i) => (
          <motion.div
            key={i}
            className={`gallery__item gallery__item--${i}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2 + i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="gallery__img-wrap">
              <img src={img.src} alt={img.alt} loading="lazy" />
              <motion.div
                className="gallery__overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="gallery__label">{img.label}</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
