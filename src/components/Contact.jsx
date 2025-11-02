import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-neutral-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Let’s build something great
        </motion.h2>
        <motion.p
          className="mt-3 text-neutral-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          I’m open to freelance, full-time roles, and interesting collaborations.
          The fastest way to reach me is via email.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="mailto:hello@example.com?subject=Project%20Inquiry"
            className="inline-flex items-center gap-2 rounded-md bg-red-600 text-white px-5 py-3 text-sm font-medium shadow hover:-translate-y-0.5 hover:bg-red-500 transition-all"
          >
            <Mail className="h-4 w-4" />
            hello@example.com
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:-translate-y-0.5 hover:bg-neutral-800 transition-all"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:-translate-y-0.5 hover:bg-neutral-800 transition-all"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </motion.div>

        <p className="mt-10 text-xs text-neutral-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </section>
  );
}
