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
        icon: "languages/javascript", 
        color: "#f7df1e", 
        description: "Lenguaje de programación versátil para web y backend." 
      },
      { 
        name: "TypeScript", 
        icon: "languages/typescript", 
        color: "#3178c6", 
        description: "Superset de JavaScript con tipado estático seguro." 
      },
      { 
        name: "Java", 
        icon: "languages/java", 
        color: "#ed8b00", 
        description: "Lenguaje robusto orientado a objetos para sistemas empresariales." 
      },
      { 
        name: "Python", 
        icon: "languages/python", 
        color: "#3776ab", 
        description: "Ideal para scripting, ciencia de datos y desarrollo backend." 
      }
    ],
  },
  {
    category: "Backend",
    skills: [
      { 
        name: "Node.js", 
        icon: "backend/nodejs", 
        color: "#339933", 
        description: "Entorno de ejecución para JavaScript en el servidor." 
      },
      { 
        name: "PostgreSQL", 
        icon: "backend/postgresql", 
        color: "#336791", 
        description: "Base de datos relacional avanzada y potente." 
      },
      { 
        name: "MySQL", 
        icon: "backend/mysql", 
        color: "#4479a1", 
        description: "Sistema de gestión de bases de datos relacionales muy popular." 
      },
      { 
        name: "MongoDB", 
        icon: "backend/mongodb", 
        color: "#47a248", 
        description: "Base de datos NoSQL orientada a documentos (JSON)." 
      },
      { 
        name: "JWT", 
        icon: "backend/jwt", 
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
        icon: "frontend/astro", 
        color: "#ff5d01", 
        description: "Framework moderno para sitios rápidos centrados en contenido." 
      },
      { 
        name: "Next.js", 
        icon: "frontend/nextjs", 
        color: "#ffffff", 
        description: "Framework de React con renderizado en el servidor y estático." 
      },
      { 
        name: "Bootstrap", 
        icon: "frontend/bootstrap", 
        color: "#7952b3", 
        description: "Toolkit para desarrollo rápido de interfaces responsive." 
      },
      { 
        name: "Angular", 
        icon: "frontend/angular(1)", 
        color: "#dd0031", 
        description: "Framework para el desarrollo de aplicaciones web escalables." 
      },
    ],
  },
  {
    category: "Herramientas",
    skills: [
      { 
        name: "VS Code", 
        icon: "tools/vscode", 
        color: "#007acc", 
        description: "Editor de código ligero y potente altamente extensible." 
      },
      { 
        name: "Git", 
        icon: "tools/git", 
        color: "#f05032", 
        description: "Sistema de control de versiones distribuido." 
      },
      { 
        name: "GitHub", 
        icon: "tools/github", 
        color: "#ffffff", 
        description: "Plataforma de hosting para repositorios Git y colaboración." 
      },
      { 
        name: "Linux", 
        icon: "tools/linux", 
        color: "#fcc624", 
        description: "Sistema operativo de código abierto preferido por devs." 
      },
      { 
        name: "Postman", 
        icon: "tools/postman", 
        color: "#ff6c37", 
        description: "Plataforma para el desarrollo y testeo de APIs." 
      },
      { 
        name: "Raspberry Pi", 
        icon: "tools/raspberrypi", 
        color: "#c51a4a", 
        description: "Computadora de placa única para proyectos de hardware e IoT." 
      },
    ],
  },
];
