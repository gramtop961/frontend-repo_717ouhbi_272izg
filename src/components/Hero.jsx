import Spline from '@splinetool/react-spline';
import { ArrowRight, Download, Code, Gauge, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Spline cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* Dark gradient overlays to enhance contrast; do not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(220,38,38,0.18),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-600/10 px-3 py-1 text-xs text-red-300 shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              Systems Engineer • C Language
            </motion.div>

            <motion.h1
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Low-level performance. High-level craft.
            </motion.h1>

            <motion.p
              className="mt-4 text-neutral-300 text-lg leading-relaxed max-w-prose"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              I build fast, reliable software with C at the core — from systems and tooling to high-performance web backends. I care about predictable memory, clean APIs, and smooth developer experience.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-red-600 text-white px-5 py-3 text-sm font-medium shadow hover:-translate-y-0.5 hover:bg-red-500 transition-all"
              >
                View projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:-translate-y-0.5 hover:bg-neutral-800 transition-all"
              >
                <Download className="h-4 w-4" />
                Download résumé
              </a>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-3 text-sm text-neutral-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              {['C', 'Pointers', 'Concurrency', 'Profiling', 'Networking'].map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900/70 px-3 py-1 text-xs"
                >
                  {s}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Subtle background C-themed floating glyphs on larger screens */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="pointer-events-none absolute inset-0">
              <motion.div
                className="absolute top-8 left-10 text-red-400/40 font-semibold text-7xl select-none"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                C
              </motion.div>
              <motion.div
                className="absolute bottom-10 right-16 text-red-400/30 font-mono text-2xl select-none"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              >
                printf("hello, world\n");
              </motion.div>
              <motion.div
                className="absolute top-1/2 left-1/3 text-red-400/30 font-mono text-xl select-none"
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              >
                int *ptr;
              </motion.div>
            </div>
            <div className="h-[420px] sm:h-[520px] lg:h-[620px]" />
          </motion.div>
        </div>

        {/* More information section on landing */}
        <motion.div
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {[
            {
              icon: <Code className="h-5 w-5 text-red-400" />,
              title: 'Systems & Tooling',
              desc: 'Building CLIs, libraries, and services with precise control over memory and I/O.',
            },
            {
              icon: <Gauge className="h-5 w-5 text-red-400" />,
              title: 'Performance-first',
              desc: 'Profiling-driven improvements, concurrency, and cache-aware data structures.',
            },
            {
              icon: <Shield className="h-5 w-5 text-red-400" />,
              title: 'Reliability',
              desc: 'Testing, fuzzing, and defensive coding for production-grade stability.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-red-600/10 border border-red-500/30">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-300">
            {['GCC', 'Clang', 'CMake', 'Make', 'gdb', 'Valgrind', 'Linux', 'POSIX', 'SSE/AVX', 'Sockets'].map((t) => (
              <span key={t} className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-800 px-2.5 py-1">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
