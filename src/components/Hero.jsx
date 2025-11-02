import Spline from '@splinetool/react-spline';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] py-12">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for new projects
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Building delightful, scalable software.
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              I’m a software engineer focused on creating modern, accessible web apps
              with clean architecture, strong UX, and a love for delightful details.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-slate-800 transition-colors"
              >
                View projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download résumé
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-600">
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>React</span>
              <span>Node</span>
              <span>UI/UX</span>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-sky-100 via-white to-white pointer-events-none" />
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
