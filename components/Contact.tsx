import { Mail } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/icons/BrandIcons";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase dark:text-neutral-400">
          Contact
        </h2>

        <h3 className="mt-6 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-50">
          Let&apos;s work together.
        </h3>
        <p className="mt-4 max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-neutral-900"
        >
          <Mail size={16} />
          {site.email}
        </a>

        <div className="mt-10 flex items-center gap-5">
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <GithubIcon width={20} height={20} />
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <LinkedinIcon width={20} height={20} />
          </a>
          <a
            href={site.social.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <TwitterIcon width={20} height={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
