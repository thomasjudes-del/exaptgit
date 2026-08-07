import React from 'react';
import { ArrowLeft, CheckCircle2, FileSearch, Link2, ShieldCheck } from 'lucide-react';

const GreenClaimsFix: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white">
            <ArrowLeft size={16} />
            Exaptation Studio
          </a>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
            Exaptation venture
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">Green Claims Fix</p>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Find it. Prove it. Fix it.</h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-300 md:text-2xl">
            Turn environmental marketing claims into an evidence-ready file — without enterprise software or a full manual audit.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <FileSearch className="mb-5 text-emerald-400" />
            <h2 className="text-xl font-bold">Find</h2>
            <p className="mt-3 text-slate-400">Identify environmental claims that deserve attention across your public content.</p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <Link2 className="mb-5 text-emerald-400" />
            <h2 className="text-xl font-bold">Prove</h2>
            <p className="mt-3 text-slate-400">Connect each claim to the evidence it needs and surface the gaps that remain.</p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <CheckCircle2 className="mb-5 text-emerald-400" />
            <h2 className="text-xl font-bold">Fix</h2>
            <p className="mt-3 text-slate-400">Clarify, substantiate or rewrite priority claims and prepare a structured evidence pack.</p>
          </article>
        </div>

        <div className="mt-16 rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-8 md:p-10">
          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 shrink-0 text-emerald-400" />
            <div>
              <h2 className="text-2xl font-bold">Pilot page</h2>
              <p className="mt-3 max-w-3xl text-slate-300">
                This route is now reserved for Green Claims Fix inside the Exaptation website. The final offer, free preview, pricing, FAQ, evidence workflow and GEO/AEO content will be added here next.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GreenClaimsFix;
