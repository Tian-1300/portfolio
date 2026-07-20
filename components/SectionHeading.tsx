export default function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="flex items-center gap-3 text-sm font-semibold tracking-widest text-stone-500 uppercase dark:text-stone-400">
      <span className="h-px w-8 bg-accent" />
      {children}
    </h2>
  );
}
