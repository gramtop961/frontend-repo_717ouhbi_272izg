import Spline from '@splinetool/react-spline';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] py-12">
          <motion.div
            className="relative z-10"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for new projects
            </motion.div>
            <motion.h1
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Building delightful, scalable software.
            </motion.h1>
            <motion.p
              className="mt-4 text-slate-600 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              I’m a software engineer focused on creating modern, accessible web apps
              with clean architecture, strong UX, and a love for delightful details.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow hover:-translate-y-0.5 hover:bg-slate-800 transition-all"
              >
                View projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white text-slate-900 px-5 py-3 text-sm font-medium hover:-translate-y-0.5 hover:bg-slate-50 transition-all"
              >
                <Download className="h-4 w-4" />
                Download résumé
              </a>
            </motion.div>
            <motion.div
              className="mt-10 flex items-center gap-6 text-sm text-slate-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>React</span>
              <span>Node</span>
              <span>UI/UX</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[420px] sm:h-[520px] lg:h-[620px]"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-sky-100/60 via-white to-white pointer-events-none" />
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-sky-200/40 via-transparent to-indigo-200/40 blur-2xl pointer-events-none" />
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white/70">
              <Spline
                scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
