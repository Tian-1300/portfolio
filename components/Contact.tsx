import { Mail } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  OrcidIcon,
} from "@/components/icons/BrandIcons";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-stone-200 px-6 py-24 dark:border-stone-800">
      <div className="mx-auto max-w-5xl rounded-3xl bg-stone-900 px-8 py-14 text-center dark:bg-stone-50 sm:px-16">
        <h2 className="flex items-center justify-center gap-3 text-sm font-semibold tracking-widest text-stone-400 uppercase dark:text-stone-500">
          <span className="h-px w-8 bg-accent" />
          Contact
          <span className="h-px w-8 bg-accent" />
        </h2>

        <h3 className="mt-6 font-serif text-3xl text-stone-50 sm:text-4xl dark:text-stone-900">
          Let&apos;s connect.
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-lg text-stone-300 dark:text-stone-600">
          Open to research collaborations, academic exchanges, and
          opportunities in data science and decision analytics. Feel free to
          reach out.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-transform hover:-translate-y-0.5"
        >
          <Mail size={16} />
          {site.email}
        </a>

        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-stone-400 transition-colors hover:text-white dark:text-stone-500 dark:hover:text-stone-900"
          >
            <GithubIcon width={20} height={20} />
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-stone-400 transition-colors hover:text-white dark:text-stone-500 dark:hover:text-stone-900"
          >
            <LinkedinIcon width={20} height={20} />
          </a>
          <a
            href={site.social.orcid}
            target="_blank"
            rel="noreferrer"
            aria-label="ORCID"
            className="text-stone-400 transition-colors hover:text-white dark:text-stone-500 dark:hover:text-stone-900"
          >
            <OrcidIcon width={20} height={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
