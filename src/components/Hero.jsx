import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SITE_CONFIG } from "../config";
import "./Hero.css";

// Animated word reveal
function AnimatedTitle({ text }) {
  const words = text.split(" ");
  return (
    <span className="animated-title">
      {words.map((word, i) => (
        <span key={i} className="word-wrap">
          <motion.span
            className="word"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.6 + i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax: image moves up slower than scroll
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // Overlay darkens as you scroll
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.9]);
  // Text fades and shifts up on scroll
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-15%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section id="top" className="hero" ref={heroRef}>
      {/* Parallax background */}
      <motion.div className="hero__bg" style={{ y: imgY }}>
        <img
          src={SITE_CONFIG.heroImage}
          alt="Palmira Zaballos Peluquería"
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div className="hero__overlay" style={{ opacity: overlayOpacity }} />

      {/* Content */}
      <motion.div
        className="hero__content container"
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* Label */}
        <motion.p
          className="hero__label"
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.25em" }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          {SITE_CONFIG.subTagline}
        </motion.p>

        {/* Main heading with word-by-word reveal */}
        <h1 className="hero__heading display-heading">
          <AnimatedTitle text={SITE_CONFIG.tagline} />
        </h1>

        {/* Separator line animation */}
        <motion.div
          className="hero__line"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Description */}
        <motion.p
          className="hero__desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {SITE_CONFIG.description}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <a href="#reservar" className="btn btn-solid">
            Reservar cita
          </a>
          <a href="#servicios" className="btn">
            Ver servicios
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <motion.div
          className="hero__scroll-line"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span>scroll</span>
      </motion.div>
    </section>
  );
}
