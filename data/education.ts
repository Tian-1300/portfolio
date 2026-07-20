export type Education = {
  period: string;
  degree: string;
  institution: string;
  note?: string;
};

export const education: Education[] = [
  {
    period: "2023 — Present",
    degree: "Doctor of Philosophy, Applied Mathematics (Operations Research)",
    institution: "Universiti Putra Malaysia",
    note: "Institute for Mathematical Research (INSPEM)",
  },
  {
    period: "2022",
    degree: "Data Analytics Programme",
    institution: "Cambridge Judge Business School",
  },
  {
    period: "2020 — 2022",
    degree: "Master of Business Administration",
    institution: "Universiti Putra Malaysia",
  },
  {
    period: "2017 — 2020",
    degree: "B.Sc. Information Technology",
    institution:
      "Asia Pacific University of Technology & Innovation (KL) — Dual Award with Staffordshire University (UK)",
  },
];
