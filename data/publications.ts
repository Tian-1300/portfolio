export type Publication = {
  title: string;
  summary: string;
  tags: string[];
  journal: string;
  date: string;
  url: string;
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    title:
      "Man vs machine: The efficacy of experience-based pricing strategies in hotel revenue management using active learning with machine learning",
    summary:
      "Designed an active-learning ML framework that pits experience-based human pricing against algorithmic pricing in hotel revenue management, quantifying when each approach wins and how to blend them into a hybrid decision-support workflow.",
    tags: ["Machine Learning", "Active Learning", "Revenue Management"],
    journal: "Annals of Tourism Research Empirical Insights",
    date: "Nov 2026",
    url: "https://doi.org/10.1016/j.annale.2026.100227",
    featured: true,
  },
  {
    title: "Hotel Room Revenue Management: A Systematic Review Using PRISMA Approach",
    summary:
      "Ran a PRISMA-guided systematic review across decades of hotel revenue management literature, mapping dominant methods and pricing models and surfacing the open research gaps that motivated the rest of this research program.",
    tags: ["Systematic Review", "PRISMA", "Revenue Management"],
    journal: "Journal of Advanced Research in Business and Management Studies",
    date: "May 2026",
    url: "https://karyailham.com.my/index.php/arbms/index",
    featured: true,
  },
  {
    title:
      "AI-driven predictive models for optimizing mathematics education technology: Enhancing decision-making through educational data mining and meta-analysis",
    summary:
      "Built predictive ML models on top of educational data mining and meta-analysis to help mathematics-education platforms make better, evidence-backed decisions about content and interventions.",
    tags: ["Predictive Modeling", "Educational Data Mining", "Meta-Analysis"],
    journal: "Smart Learning Environments",
    date: "Oct 2025",
    url: "https://doi.org/10.1186/s40561-025-00415-z",
  },
  {
    title:
      "Bi-Objective Mixed Integer Nonlinear Programming Model for Low Carbon Location-Inventory-Routing Problem with Time Windows and Customer Satisfaction",
    summary:
      "Formulated and solved a bi-objective mixed-integer nonlinear program that jointly optimizes facility location, inventory, and vehicle routing under time-window and customer-satisfaction constraints while minimizing carbon emissions.",
    tags: ["Mixed-Integer Programming", "Multi-Objective Optimization", "Supply Chain"],
    journal: "Mathematics",
    date: "Jul 2024",
    url: "https://doi.org/10.3390/math12152367",
  },
];
