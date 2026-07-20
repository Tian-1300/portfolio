export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repoHref?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short, punchy description of what this project does and the problem it solves. Swap this out with one of your real projects.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "#",
    repoHref: "#",
    featured: true,
  },
  {
    title: "Project Two",
    description:
      "Another project summary. Focus on impact and results — what did users gain, or what did you learn building it?",
    tags: ["React", "Node.js", "PostgreSQL"],
    href: "#",
    repoHref: "#",
    featured: true,
  },
  {
    title: "Project Three",
    description:
      "A smaller side project or experiment. Great place to show off something fun, weird, or technically interesting.",
    tags: ["Python", "Data Viz"],
    repoHref: "#",
  },
  {
    title: "Project Four",
    description:
      "Add as many projects as you like — this grid will wrap automatically as you add more entries to the array.",
    tags: ["Swift", "iOS"],
    href: "#",
  },
];
