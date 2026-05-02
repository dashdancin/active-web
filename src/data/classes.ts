export type ClassLevel = "beginner" | "intermediate" | "advanced" | "all";
export type ClassDay = "Lunes" | "Martes" | "Miércoles" | "Jueves" | "Viernes" | "Sábado" | "Domingo";

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
  day: ClassDay;
}

export const classes: GymClass[] = [
  { name: "Yoga", day: "Lunes", time: "07:00 AM", duration: "60 min", instructor: "Ana García", branch: "Del Valle", level: "beginner", spots: 12, category: "Mente y cuerpo", description: "Clase relajante de pranayama y posturas básicas." },
  { name: "Box", day: "Lunes", time: "08:00 PM", duration: "75 min", instructor: "Carlos Mendoza", branch: "Narvarte", level: "advanced", spots: 2, category: "Combate", description: "Alta intensidad con combinaciones y técnica de golpeo." },
  { name: "Zumba", day: "Martes", time: "09:00 AM", duration: "55 min", instructor: "Sofía Reyes", branch: "Insurgentes", level: "all", spots: 20, category: "Baile", description: "Baile y diversión con ritmos latinos." },
  { name: "Spinning", day: "Martes", time: "06:30 AM", duration: "45 min", instructor: "Luis Torres", branch: "Del Valle", level: "intermediate", spots: 8, category: "Cardio", description: "Cardio intenso en bicicleta estática." },
  { name: "Pilates", day: "Miércoles", time: "11:00 AM", duration: "60 min", instructor: "Mariana López", branch: "Narvarte", level: "beginner", spots: 10, category: "Mente y cuerpo", description: "Trabajo de core y elongación." },
  { name: "CrossFit", day: "Miércoles", time: "07:00 PM", duration: "60 min", instructor: "Rodrigo Salas", branch: "Insurgentes", level: "advanced", spots: 0, category: "Funcional", description: "Entrenamiento funcional de alta intensidad." },
  { name: "Meditación", day: "Jueves", time: "08:00 AM", duration: "40 min", instructor: "Valeria Cruz", branch: "Del Valle", level: "all", spots: 15, category: "Mente y cuerpo", description: "Sesión guiada de mindfulness." },
  { name: "TRX", day: "Jueves", time: "06:00 PM", duration: "50 min", instructor: "Héctor Ríos", branch: "Narvarte", level: "intermediate", spots: 5, category: "Funcional", description: "Entrenamiento en suspensión con el peso corporal." },
  { name: "Kick Boxing", day: "Viernes", time: "10:00 AM", duration: "60 min", instructor: "Fernanda Mora", branch: "Insurgentes", level: "intermediate", spots: 7, category: "Combate", description: "Combinación de cardio y técnica de patadas." },
  { name: "Yoga", day: "Viernes", time: "09:00 AM", duration: "60 min", instructor: "Ana García", branch: "Del Valle", level: "beginner", spots: 10, category: "Mente y cuerpo", description: "Clase relajante de pranayama y posturas básicas." },
  { name: "Zumba", day: "Sábado", time: "10:00 AM", duration: "55 min", instructor: "Sofía Reyes", branch: "Narvarte", level: "all", spots: 18, category: "Baile", description: "Baile y diversión con ritmos latinos." },
  { name: "Spinning", day: "Sábado", time: "08:00 AM", duration: "45 min", instructor: "Luis Torres", branch: "Insurgentes", level: "intermediate", spots: 6, category: "Cardio", description: "Cardio intenso en bicicleta estática." },
  { name: "Box", day: "Domingo", time: "11:00 AM", duration: "75 min", instructor: "Carlos Mendoza", branch: "Del Valle", level: "advanced", spots: 4, category: "Combate", description: "Alta intensidad con combinaciones y técnica de golpeo." },
  { name: "Meditación", day: "Domingo", time: "09:00 AM", duration: "40 min", instructor: "Valeria Cruz", branch: "Insurgentes", level: "all", spots: 20, category: "Mente y cuerpo", description: "Sesión guiada de mindfulness." },
];