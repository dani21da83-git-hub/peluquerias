import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SITE_CONFIG } from "../config";
import "./Booking.css";

// Cal.com inline embed script loader
function CalEmbed({ username }) {
  return (
    <div className="cal-embed">
      {/* Cal.com popup button integration */}
      <div
        className="cal-inline-embed"
        dangerouslySetInnerHTML={{
          __html: `
            <div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline"></div>
            <script type="text/javascript">
              (function (C, A, L) {
                let p = function (a, ar) { a.q.push(ar); };
                let d = C.document;
                C.Cal = C.Cal || function () {
                  let cal = C.Cal;
                  let ar = arguments;
                  if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                  }
                  if (ar[0] === L) {
                    const api = function () { p(api, arguments); };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if (typeof namespace === "string") {
                      cal.ns[namespace] = cal.ns[namespace] || api;
                      p(cal.ns[namespace], ar);
                      p(cal, ["-", namespace]);
                    } else { p(cal, ar); }
                    return;
                  }
                  p(cal, ar);
                };
              })(window, "https://app.cal.com/embed/embed.js", "init");
              Cal("init", { origin: "https://cal.com" });
              Cal("inline", {
                elementOrSelector: "#my-cal-inline",
                calLink: "${username}",
                layout: "month_view"
              });
              Cal("ui", {
                styles: {
                  branding: { brandColor: "#c8a96e" }
                },
                hideEventTypeDetails: false,
                layout: "month_view"
              });
            </script>
          `,
        }}
      />
    </div>
  );
}

export default function Booking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reservar" className="booking" ref={ref}>
      <div className="container booking__inner">
        {/* Left: info */}
        <div className="booking__info">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Reservas
          </motion.p>

          <motion.h2
            className="display-heading booking__heading"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Reserva tu
            <br />
            <em>próxima visita</em>
          </motion.h2>

          <motion.p
            className="booking__desc"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Elige el día y hora que mejor te venga. Te confirmamos la cita al
            instante.
          </motion.p>

          {/* Hours */}
          <motion.div
            className="booking__hours"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <p className="booking__hours-title">Horario</p>
            {SITE_CONFIG.hours.map((h, i) => (
              <div key={i} className="booking__hour-row">
                <span className="booking__hour-day">{h.day}</span>
                <span
                  className={`booking__hour-time ${h.time === "Cerrado" ? "closed" : ""}`}
                >
                  {h.time}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Contact */}
          <motion.div
            className="booking__contact"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <a href={`tel:${SITE_CONFIG.contact.phone}`} className="booking__contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.6 3.32 2 2 0 013.6 1.13h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 8.77a16 16 0 006.29 6.29l.95-.95a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              {SITE_CONFIG.contact.phone}
            </a>
            <a href={`mailto:${SITE_CONFIG.contact.email}`} className="booking__contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              {SITE_CONFIG.contact.email}
            </a>
          </motion.div>
        </div>

        {/* Right: Cal.com embed */}
        <motion.div
          className="booking__cal-wrap"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <CalEmbed username={SITE_CONFIG.calUsername} />
        </motion.div>
      </div>
    </section>
  );
}
