// ============================================================
// SITE CONFIG — Edit this file to adapt to any salon
// ============================================================

export const SITE_CONFIG = {
  // Brand
  name: "Palmira Zaballos",
  tagline: "El arte de transformar",
  subTagline: "Peluquería · Salamanca",
  description: "Un espacio donde el estilo encuentra su expresión más auténtica.",

  // Logo — swap for any other salon's logo image
  logoImage: "/1778258589683_image.png",
  logoAlt: "Palmira Zaballos Peluquería",

  // Hero background image
  heroImage: "/1778258776526_hairdresser-cut-hair-her-client-hair-salon.jpg",

  // Gallery images (add or remove as needed)
  galleryImages: [
    {
      src: "/1778258667787_image.png",
      alt: "Interior del salón",
      label: "Nuestro espacio",
    },
    {
      src: "/1778258776526_hairdresser-cut-hair-her-client-hair-salon.jpg",
      alt: "Corte de cabello",
      label: "Corte & Estilo",
    },
    {
      src: "/1778258887339_handsome-man-shaving-beard-barbershop.jpg",
      alt: "Afeitado de barba",
      label: "Barba & Afeitado",
    },
    {
      src: "/1778258887339_close-up-hair-trimmer-supplies.jpg",
      alt: "Herramientas profesionales",
      label: "Herramientas Pro",
    },
  ],

  // Services — edit prices when ready
  services: [
    {
      category: "Cabello",
      items: [
        { name: "Corte de cabello", price: "Consultar", duration: "45 min" },
        { name: "Corte + Secado", price: "Consultar", duration: "60 min" },
        { name: "Color completo", price: "Consultar", duration: "90 min" },
        { name: "Mechas / Balayage", price: "Consultar", duration: "120 min" },
        { name: "Tratamiento hidratante", price: "Consultar", duration: "45 min" },
      ],
    },
    {
      category: "Barba",
      items: [
        { name: "Arreglo de barba", price: "Consultar", duration: "30 min" },
        { name: "Afeitado clásico", price: "Consultar", duration: "45 min" },
        { name: "Corte + Barba", price: "Consultar", duration: "75 min" },
      ],
    },
    {
      category: "Tratamientos",
      items: [
        { name: "Mascarilla capilar", price: "Consultar", duration: "30 min" },
        { name: "Keratina", price: "Consultar", duration: "180 min" },
        { name: "Botox capilar", price: "Consultar", duration: "90 min" },
      ],
    },
  ],

  // Booking — Cal.com username (free plan)
  // Set up at https://cal.com → create account → get your username
  calUsername: "daniel-marcos-rbpmjt",

  // Contact
  contact: {
    phone: "+34 XXX XXX XXX",
    email: "info@palmira-zaballos.com",
    address: "Calle [Tu Dirección], Salamanca",
    instagram: "https://instagram.com/palmira.zaballos",
    google_maps: "https://maps.google.com",
  },

  // Opening hours
  hours: [
    { day: "Lunes", time: "Cerrado" },
    { day: "Martes — Viernes", time: "10:00 – 20:00" },
    { day: "Sábado", time: "10:00 – 18:00" },
    { day: "Domingo", time: "Cerrado" },
  ],

  // Colors — CSS custom properties
  // Swap these to rebrand for another salon
  colors: {
    "--color-bg": "#0a0a0a",
    "--color-surface": "#111111",
    "--color-surface-2": "#1a1a1a",
    "--color-border": "rgba(255,255,255,0.08)",
    "--color-border-hover": "rgba(255,255,255,0.2)",
    "--color-text": "#f5f0e8",
    "--color-text-muted": "rgba(245,240,232,0.5)",
    "--color-accent": "#c8a96e", // gold
    "--color-accent-light": "rgba(200,169,110,0.15)",
  },
};
