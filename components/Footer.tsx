import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 px-6 py-8 dark:border-stone-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-sm text-stone-500 sm:flex-row dark:text-stone-400">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>Built with Next.js &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
