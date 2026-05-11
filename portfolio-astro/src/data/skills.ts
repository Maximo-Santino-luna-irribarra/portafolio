export interface Skill {
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Lenguajes",
    skills: [
      { 
        name: "JavaScript", 
        icon: "javascript(1)", 
        color: "#f7df1e", 
        description: "Lenguaje de programación versátil para web y backend." 
      },
      { 
        name: "TypeScript", 
        icon: "typescript", 
        color: "#3178c6", 
        description: "Superset de JavaScript con tipado estático seguro." 
      },
      { 
        name: "Java", 
        icon: "java", 
        color: "#ed8b00", 
        description: "Lenguaje robusto orientado a objetos para sistemas empresariales." 
      },
      { 
        name: "Python", 
        icon: "python", 
        color: "#3776ab", 
        description: "Ideal para scripting, ciencia de datos y desarrollo backend." 
      },
      { 
        name: "HTML5", 
        icon: "html5(1)", 
        color: "#e34f26", 
        description: "Estándar para la estructura y contenido de páginas web." 
      },
      { 
        name: "CSS3", 
        icon: "css", 
        color: "#1572b6", 
        description: "Estilos y diseño visual para aplicaciones web modernas." 
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      { 
        name: "Node.js", 
        icon: "javascript(2)", 
        color: "#339933", 
        description: "Entorno de ejecución para JavaScript en el servidor." 
      },
      { 
        name: "NestJS", 
        icon: "nestjs(1)", 
        color: "#e0234e", 
        description: "Framework progresivo para aplicaciones escalables con Node." 
      },
      { 
        name: "PostgreSQL", 
        icon: "postgresql", 
        color: "#336791", 
        description: "Base de datos relacional avanzada y potente." 
      },
      { 
        name: "MySQL", 
        icon: "MySQL_light", 
        color: "#4479a1", 
        description: "Sistema de gestión de bases de datos relacionales muy popular." 
      },
      { 
        name: "MongoDB", 
        icon: "mongodb-icon-light", 
        color: "#47a248", 
        description: "Base de datos NoSQL orientada a documentos (JSON)." 
      },
      { 
        name: "JWT", 
        icon: "jwt", 
        color: "#d63aff", 
        description: "Estándar para autenticación segura basada en tokens." 
      },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { 
        name: "Astro", 
        icon: "astro-icon-light", 
        color: "#ff5d01", 
        description: "Framework moderno para sitios rápidos centrados en contenido." 
      },
      { 
        name: "Next.js", 
        icon: "nextjs_icon_dark", 
        color: "#ffffff", 
        description: "Framework de React con renderizado en el servidor y estático." 
      },
      { 
        name: "Bootstrap", 
        icon: "bootstrap", 
        color: "#7952b3", 
        description: "Toolkit para desarrollo rápido de interfaces responsive." 
      },
    ],
  },
  {
    category: "Herramientas",
    skills: [
      { 
        name: "VS Code", 
        icon: "vscode", 
        color: "#007acc", 
        description: "Editor de código ligero y potente altamente extensible." 
      },
      { 
        name: "Git", 
        icon: "git", 
        color: "#f05032", 
        description: "Sistema de control de versiones distribuido." 
      },
      { 
        name: "GitHub", 
        icon: "github_light", 
        color: "#ffffff", 
        description: "Plataforma de hosting para repositorios Git y colaboración." 
      },
      { 
        name: "Linux", 
        icon: "linux(1)", 
        color: "#fcc624", 
        description: "Sistema operativo de código abierto preferido por devs." 
      },
      { 
        name: "Postman", 
        icon: "postman(1)", 
        color: "#ff6c37", 
        description: "Plataforma para el desarrollo y testeo de APIs." 
      },
      { 
        name: "Raspberry Pi", 
        icon: "raspberry_pi", 
        color: "#c51a4a", 
        description: "Computadora de placa única para proyectos de hardware e IoT." 
      },
    ],
  },
];
