export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Research & Analytics",
    items: [
      "Mathematical Modeling",
      "Multi-Objective Optimization",
      "Machine Learning",
      "Predictive Analytics",
      "Revenue Management",
    ],
  },
  {
    category: "Technical Tools",
    items: ["Python", "R", "Microsoft Office / PowerPoint"],
  },
  {
    category: "Leadership & Community",
    items: [
      "Student Development",
      "Cross-Cultural Communication",
      "Community Engagement",
    ],
  },
  {
    category: "Core Strengths",
    items: ["Leadership", "Teamwork", "Communication"],
  },
];
