import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SITE_CONFIG } from "../config";
import "./About.css";

// Animated counting number
function Counter({ from = 0, to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionVal = useMotionValue(from);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => `${Math.round(v)}${suffix}`);

  if (inView) motionVal.set(to);

  return (
    <motion.span ref={ref}>
      {display}
    </motion.span>
  );
}

const stats = [
  { value: 15, suffix: "+", label: "Años de experiencia" },
  { value: 5000, suffix: "+", label: "Clientes satisfechos" },
  { value: 100, suffix: "%", label: "Dedicación al detalle" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="salon" className="about" ref={ref}>
      <div className="container about__grid">
        {/* Image column */}
        <div className="about__image-col">
          <motion.div
            className="about__image-wrap"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/peluqueri_a-1615496220.webp"
              alt="Interior de Palmira Zaballos Peluquería"
            />
            <motion.div
              className="about__image-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="about__badge-year">Est. 2009</span>
              <span className="about__badge-label">Salamanca</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Text column */}
        <div className="about__text-col">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            El Salón
          </motion.p>

          <div className="reveal-wrap">
            <motion.h2
              className="display-heading about__heading"
              initial={{ y: 60, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              Donde el estilo
              <br />
              <em>cobra vida</em>
            </motion.h2>
          </div>

          <motion.p
            className="about__desc"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            En Palmira Zaballos creemos que cada corte es una conversación entre
            el profesional y quien se sienta en nuestra silla. Escuchamos,
            interpretamos y creamos — con los mejores productos y técnicas
            actuales.
          </motion.p>

          <motion.p
            className="about__desc"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            Nuestro salón en Salamanca es un espacio donde la estética se fusiona
            con el cuidado personal. Ven a descubrir tu mejor versión.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="about__stats"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {stats.map((s, i) => (
              <div key={i} className="about__stat">
                <p className="about__stat-value">
                  {inView && (
                    <Counter from={0} to={s.value} suffix={s.suffix} />
                  )}
                </p>
                <p className="about__stat-label">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
