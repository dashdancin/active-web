export type ClassLevel = "beginner" | "intermediate" | "advanced" | "all";

export interface GymClass {
  name: string;
  time: string;
  duration: string;
  instructor: string;
  branch: string;
  level: ClassLevel;
  spots: number;
  category: string;
  description: string;
}

export const classes: GymClass[] = [
  {
    name: "Yoga",
    time: "07:00 AM",
    duration: "60 min",
    instructor: "Ana García",
    branch: "Del Valle",
    level: "beginner",
    spots: 12,
    category: "Mente y cuerpo",
    description: "Clase relajante de pranayama y posturas básicas. Ideal para comenzar el día con calma y flexibilidad.",
  },
  {
    name: "Box",
    time: "08:00 PM",
    duration: "75 min",
    instructor: "Carlos Mendoza",
    branch: "Narvarte",
    level: "advanced",
    spots: 2,
    category: "Combate",
    description: "Alta intensidad con combinaciones y técnica de golpeo. Requiere experiencia previa en artes marciales.",
  },
  {
    name: "Zumba",
    time: "09:00 AM",
    duration: "55 min",
    instructor: "Sofía Reyes",
    branch: "Insurgentes",
    level: "all",
    spots: 20,
    category: "Baile",
    description: "Baile y diversión con ritmos latinos. Sin experiencia necesaria, solo muchas ganas de moverte.",
  },
  {
    name: "Spinning",
    time: "06:30 AM",
    duration: "45 min",
    instructor: "Luis Torres",
    branch: "Del Valle",
    level: "intermediate",
    spots: 8,
    category: "Cardio",
    description: "Cardio intenso en bicicleta estática con música motivadora. Quema calorías y mejora resistencia.",
  },
  {
    name: "Pilates",
    time: "11:00 AM",
    duration: "60 min",
    instructor: "Mariana López",
    branch: "Narvarte",
    level: "beginner",
    spots: 10,
    category: "Mente y cuerpo",
    description: "Trabajo de core y elongación con énfasis en la postura. Perfecto para rehabilitación y tonificación.",
  },
  {
    name: "CrossFit",
    time: "07:00 PM",
    duration: "60 min",
    instructor: "Rodrigo Salas",
    branch: "Insurgentes",
    level: "advanced",
    spots: 0,
    category: "Funcional",
    description: "Entrenamiento funcional de alta intensidad combinando levantamiento, cardio y gimnasia.",
  },
  {
    name: "Meditación",
    time: "08:00 AM",
    duration: "40 min",
    instructor: "Valeria Cruz",
    branch: "Del Valle",
    level: "all",
    spots: 15,
    category: "Mente y cuerpo",
    description: "Sesión guiada de mindfulness y técnicas de respiración. Abierto a todos los niveles.",
  },
  {
    name: "TRX",
    time: "06:00 PM",
    duration: "50 min",
    instructor: "Héctor Ríos",
    branch: "Narvarte",
    level: "intermediate",
    spots: 5,
    category: "Funcional",
    description: "Entrenamiento en suspensión con el peso corporal. Fortalece y tonifica todo el cuerpo.",
  },
  {
    name: "Kick Boxing",
    time: "10:00 AM",
    duration: "60 min",
    instructor: "Fernanda Mora",
    branch: "Insurgentes",
    level: "intermediate",
    spots: 7,
    category: "Combate",
    description: "Combinación de cardio y técnica de patadas y golpes. Mejora coordinación y confianza.",
  },
];