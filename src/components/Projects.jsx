import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'High-Perf C HTTP Server',
    description:
      'Event-driven server with epoll, zero-copy static file serving, and careful memory management.',
    tags: ['C', 'epoll', 'Zero-copy'],
    demo: '#',
    source: '#',
  },
  {
    title: 'Static Analyzer',
    description:
      'Lightweight C static analyzer for basic pointer misuse patterns and boundary checks.',
    tags: ['C', 'Parsing', 'CLI'],
    demo: '#',
    source: '#',
  },
  {
    title: 'FFI Toolkit',
    description:
      'Bindings and utilities to bridge C libraries into modern runtimes with ergonomic APIs.',
    tags: ['C', 'FFI', 'Tooling'],
    demo: '#',
    source: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-gradient-to-b from-neutral-950 to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Selected work</h2>
            <p className="mt-2 text-neutral-300 max-w-prose">
              Projects that reflect a systems mindset, performance, and careful craft.
            </p>
          </div>
        </div>

        <motion.div
          className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              className="group rounded-2xl border border-neutral-800 bg-neutral-900 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
              whileHover={{ y: -4 }}
            >
              <div className="h-36 bg-gradient-to-br from-red-900/40 via-neutral-900 to-neutral-900" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-800 px-2.5 py-1 text-xs text-neutral-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-2 rounded-md bg-red-600 text-white px-3 py-2 text-xs font-medium hover:bg-red-500 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" /> Live demo
                  </a>
                  <a
                    href={p.source}
                    className="inline-flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-900 text-white px-3 py-2 text-xs font-medium hover:bg-neutral-800 transition-colors"
                  >
                    <Github className="h-4 w-4" /> Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
