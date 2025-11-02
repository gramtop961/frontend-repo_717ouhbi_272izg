import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    description:
      'A low-latency collaborative editor with presence, comments, and role-based access built on websockets and CRDTs.',
    tags: ['React', 'TypeScript', 'WebSocket'],
    demo: '#',
    source: '#',
  },
  {
    title: 'E-commerce Performance Kit',
    description:
      'A modular storefront with a11y-first components, server-side rendering, and optimized Core Web Vitals.',
    tags: ['Next.js', 'Tailwind', 'Vite'],
    demo: '#',
    source: '#',
  },
  {
    title: 'Design System Playground',
    description:
      'A themable component library with tokens, dark mode, and motion primitives for consistent UX at scale.',
    tags: ['Storybook', 'Radix', 'Framer Motion'],
    demo: '#',
    source: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Selected work</h2>
            <p className="mt-2 text-slate-600 max-w-prose">
              A few projects that highlight product thinking, performance, and craft.
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
              className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
              whileHover={{ y: -4 }}
            >
              <div className="h-36 bg-gradient-to-br from-sky-100 via-white to-slate-100" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-xs font-medium hover:bg-slate-800 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" /> Live demo
                  </a>
                  <a
                    href={p.source}
                    className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white text-slate-900 px-3 py-2 text-xs font-medium hover:bg-slate-50 transition-colors"
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
