export type Publication = {
  title: string;
  journal: string;
  date: string;
  url: string;
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    title:
      "Man vs machine: The efficacy of experience-based pricing strategies in hotel revenue management using active learning with machine learning",
    journal: "Annals of Tourism Research Empirical Insights",
    date: "Nov 2026",
    url: "https://doi.org/10.1016/j.annale.2026.100227",
    featured: true,
  },
  {
    title: "Hotel Room Revenue Management: A Systematic Review Using PRISMA Approach",
    journal: "Journal of Advanced Research in Business and Management Studies",
    date: "May 2026",
    url: "https://karyailham.com.my/index.php/arbms/index",
    featured: true,
  },
  {
    title:
      "AI-driven predictive models for optimizing mathematics education technology: Enhancing decision-making through educational data mining and meta-analysis",
    journal: "Smart Learning Environments",
    date: "Oct 2025",
    url: "https://doi.org/10.1186/s40561-025-00415-z",
  },
  {
    title:
      "Bi-Objective Mixed Integer Nonlinear Programming Model for Low Carbon Location-Inventory-Routing Problem with Time Windows and Customer Satisfaction",
    journal: "Mathematics",
    date: "Jul 2024",
    url: "https://doi.org/10.3390/math12152367",
  },
];
