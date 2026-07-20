const lineColors = {
  accent: "bg-accent",
  accent2: "bg-accent-2",
  accent3: "bg-accent-3",
};

export default function SectionHeading({
  children,
  color = "accent",
}: {
  children: string;
  color?: keyof typeof lineColors;
}) {
  return (
    <h2 className="flex items-center gap-3 text-sm font-semibold tracking-widest text-stone-500 uppercase dark:text-stone-400">
      <span className={`h-px w-8 ${lineColors[color]}`} />
      {children}
    </h2>
  );
}
