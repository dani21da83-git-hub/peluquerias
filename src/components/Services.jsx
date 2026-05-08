import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "../config";
import "./Services.css";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const currentCategory = SITE_CONFIG.services[activeCategory];

  return (
    <section id="servicios" className="services" ref={ref}>
      <div className="container">
        <div className="services__header">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Servicios
          </motion.p>

          <motion.h2
            className="display-heading services__heading"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Lo que hacemos
          </motion.h2>

          <motion.p
            className="services__sub"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Consulta disponibilidad y precios actualizados al reservar tu cita.
          </motion.p>
        </div>

        {/* Category tabs */}
        <motion.div
          className="services__tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {SITE_CONFIG.services.map((cat, i) => (
            <button
              key={cat.category}
              className={`services__tab ${activeCategory === i ? "active" : ""}`}
              onClick={() => setActiveCategory(i)}
            >
              {cat.category}
              {activeCategory === i && (
                <motion.span
                  className="services__tab-underline"
                  layoutId="tab-underline"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Services grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="services__grid"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {currentCategory.items.map((item, i) => (
              <motion.div
                key={item.name}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
              >
                <div className="service-card__top">
                  <h3 className="service-card__name">{item.name}</h3>
                  <span className="service-card__price">{item.price}</span>
                </div>
                <div className="service-card__bottom">
                  <span className="service-card__duration">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                    </svg>
                    {item.duration}
                  </span>
                  <a href="#reservar" className="service-card__cta">
                    Reservar →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="services__footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#reservar" className="btn btn-solid">
            Ver disponibilidad y reservar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
