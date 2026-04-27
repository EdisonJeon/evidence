import React from 'react';

export default function ArticleEleven() {
  return (
    <main className="max-w-5xl mx-auto p-6 lg:p-8 mt-8 mb-12 space-y-8 bg-white rounded-3xl shadow-xl border border-pink-100 font-sans text-slate-700">
      
      {/* HEADER SECTION */}
      <header className="mb-10 border-b-4 border-pink-200 pb-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-rose-800 drop-shadow-sm">
          🌸 Article XI: Miscellaneous Rules
        </h1>
        <p className="text-lg text-rose-600 mt-3 font-medium italic">
          Rule 1101: The scope and boundaries of the Federal Rules of Evidence.
        </p>
      </header>

      {/* 1. APPLICABILITY */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300" open>
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          1. Scope and Applicability (Rule 1101)
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          
          <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
            <h3 className="font-bold text-rose-900 text-lg mb-2">The General Rule <span className="hidden">[cite: 30]</span></h3>
            <p className="text-sm text-slate-700">
              Sets out that the Federal Rules of Evidence apply in all civil, criminal, and bankruptcy proceedings.<span className="hidden">[cite: 31]</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">❌ Where the FRE do NOT apply: <span className="hidden">[cite: 32]</span></h3>
              <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                <li>Preliminary determinations of fact by a judge (e.g., 104(a) hearings).<span className="hidden">[cite: 33]</span></li>
                <li>Grand Jury proceedings.<span className="hidden">[cite: 34]</span></li>
                <li>Miscellaneous proceedings like sentencing, extradition, and bail hearings.<span className="hidden">[cite: 35]</span></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">🛡️ The Privilege Exception <span className="hidden">[cite: 36]</span></h3>
              <p className="text-sm text-slate-600 bg-pink-50 p-3 rounded-lg border border-pink-200 shadow-sm">
                Rules regarding evidentiary <strong>privilege</strong> apply at <em>all stages</em>, even in the miscellaneous proceedings that are otherwise entirely exempt from the normal rules of evidence.<span className="hidden">[cite: 36]</span>
              </p>
            </div>
          </div>

          <div className="bg-pink-50 p-5 rounded-xl border-l-4 border-pink-400 shadow-sm mt-6">
            <h4 className="font-bold text-rose-800 mb-2">🌸 United States v. Callahan <span className="hidden">[cite: 37]</span></h4>
            <p className="text-sm text-slate-700 mb-2"><strong className="text-rose-900">Facts:</strong> A defendant tried to dismiss a grand jury indictment, arguing the Grand Jury heard inadmissible polygraph and hearsay evidence.<span className="hidden">[cite: 37, 39]</span></p>
            <p className="text-sm text-slate-700"><strong className="text-rose-900">Holding & Reasoning:</strong> The indictment stood.<span className="hidden">[cite: 38]</span> Under Rule 1101(d)(2), the rules of evidence simply do not apply to Grand Juries.<span className="hidden">[cite: 38]</span> An indictment is valid as long as there is <em>some</em> competent evidence to support it, regardless of the presence of inadmissible evidence.<span className="hidden">[cite: 39]</span></p>
          </div>

        </div>
      </details>

    </main>
  );
}