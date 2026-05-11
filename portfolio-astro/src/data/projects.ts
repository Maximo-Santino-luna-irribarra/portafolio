import { PROJECT_IMAGES } from "../constants";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Sala de Juegos Web",
    description: "Proyecto académico con lógica de juegos y manejo de usuarios.",
    tags: ["Angular", "Bootstrap", "Supabase", "TypeScript"],
    link: "https://sala-de-juegos-swart.vercel.app/",
    image: PROJECT_IMAGES.SALA_JUEGOS,
  },
  {
    title: "Red Social tipo Twitter",
    description: "Aplicación con autenticación, guards, interceptors y publicaciones.",
    tags: ["Angular", "Supabase", "Tailwind CSS", "TypeScript"],
    link: "https://red-social-front-six.vercel.app/",
    image: PROJECT_IMAGES.RED_SOCIAL,
  },
  {
    title: "App de Gestión de Gimnasio",
    description: "Sistema para administrar miembros, pagos y vencimientos.",
    tags: ["Angular", "Supabase", "Tailwind CSS", "TypeScript"],
    link: "https://vercel.com/santinos-projects-3a14a22d/app-de-gestion-de-gym",
    image: PROJECT_IMAGES.GYM_GESTION,
  },
  {
    title: "Luminet",
    description: "Landing page para emprendimiento de soluciones digitales.",
    tags: ["Astro", "Tailwind CSS"],
    link: "https://luminet-one.vercel.app/",
    image: PROJECT_IMAGES.LUMINET,
  },
  {
    title: "Gorillas Gym",
    description: "Landing page estática con presentación de marca y servicios.",
    tags: ["Astro", "Tailwind CSS"],
    link: "https://gorilas-gym.vercel.app/",
    image: PROJECT_IMAGES.GORILLAS,
  },
  {
    title: "App Mobile Puricelli's",
    description: "App móvil para gestión de restaurante con lógica de negocio.",
    tags: ["Ionic", "Capacitor", "Angular", "Supabase"],
    image: PROJECT_IMAGES.PURICELLIS,
  },
  {
    title: "Totem de Autoservicio",
    description: "Sistema de autoservicio con backend y frontend integrados.",
    tags: ["JavaScript", "EJS", "Express", "MySQL"],
    image: PROJECT_IMAGES.TOTEM,
  },
  {
    title: "Juego 2D de Escritorio",
    description: "Proyecto de Programación I desarrollado con Python.",
    tags: ["Python", "Pygame"],
    image: PROJECT_IMAGES.JUEGO_2D,
  },
];
