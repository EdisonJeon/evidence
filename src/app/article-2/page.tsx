import React from 'react';

export default function ArticleTwo() {
  return (
    <main className="max-w-5xl mx-auto p-6 lg:p-8 mt-8 mb-12 space-y-8 bg-white rounded-3xl shadow-xl border border-pink-100 font-sans text-slate-700">
      
      {/* HEADER SECTION */}
      <header className="mb-10 border-b-4 border-pink-200 pb-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-rose-800 drop-shadow-sm">
          🌸 Article II: Judicial Notice
        </h1>
        <p className="text-lg text-rose-600 mt-3 font-medium italic">
          Rule 201: The procedural mechanism for establishing facts without formal proof.
        </p>
      </header>

      {/* RULE 201 */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300" open>
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          1. Judicial Notice (Rule 201)
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        
        <div className="p-6 space-y-8 bg-white">
          
          <section>
            <h3 className="text-lg font-bold text-rose-800 border-b-2 border-pink-100 pb-2 mb-4">
              A. Core Function & Scope <span className="hidden">[cite: 104]</span>
            </h3>
            <ul className="list-none space-y-4">
              <li className="pl-4 border-l-2 border-pink-300">
                <span className="font-bold text-rose-900 block mb-1">Function:</span>
                A procedural mechanism where a judge "takes notice" of a fact, establishing it as true without formal proof to promote efficiency.<span className="hidden">[cite: 104]</span>
              </li>
              <li className="pl-4 border-l-2 border-pink-300">
                <span className="font-bold text-rose-900 block mb-1">Scope limitations:</span>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 mt-1">
                  <li>Applies <strong>only</strong> to <em>adjudicative facts</em> (the who, what, where, when of a specific case).<span className="hidden">[cite: 105]</span></li>
                  <li>Does <strong>not</strong> apply to <em>legislative facts</em> (facts relevant to legal reasoning or lawmaking).<span className="hidden">[cite: 106]</span></li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-rose-800 border-b-2 border-pink-100 pb-2 mb-4">
              B. Requirements for Notice <span className="hidden">[cite: 107]</span>
            </h3>
            <p className="text-slate-600 mb-4 font-medium">A court may take notice of a fact not subject to reasonable dispute because it is either:<span className="hidden">[cite: 107]</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-pink-50/50 p-4 rounded-xl border border-pink-200 shadow-sm">
                <h4 className="font-bold text-rose-700 text-lg flex items-center">🌎 1. Generally Known</h4>
                <p className="mt-2 text-sm text-slate-600">The fact is known within the trial court's territorial jurisdiction.<span className="hidden">[cite: 108]</span></p>
              </div>
              <div className="bg-pink-50/50 p-4 rounded-xl border border-pink-200 shadow-sm">
                <h4 className="font-bold text-rose-700 text-lg flex items-center">📖 2. Readily Determined</h4>
                <p className="mt-2 text-sm text-slate-600">The fact is accurately verifiable from unquestionable sources (e.g., an almanac for sunset times).<span className="hidden">[cite: 109]</span></p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-rose-800 border-b-2 border-pink-100 pb-2 mb-4">
              C. Jury Instructions <span className="hidden">[cite: 110]</span>
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <strong className="text-slate-800 block text-base mb-1">⚖️ Civil Cases:</strong> 
                The jury <strong>must</strong> accept the noticed fact as conclusive.<span className="hidden">[cite: 110]</span>
              </li>
              <li className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                <strong className="text-rose-800 block text-base mb-1">🚨 Criminal Cases:</strong> 
                The jury <strong>may</strong> (but is not required to) accept it as conclusive.<span className="hidden">[cite: 111]</span>
              </li>
            </ul>
          </section>

          {/* Case Card */}
          <div className="bg-pink-50 p-5 rounded-xl border-l-4 border-pink-400 shadow-sm mt-4">
            <h4 className="font-bold text-lg text-rose-800 mb-3 flex items-center">
              🌸 Dippin' Dots, Inc. v. Frosty Bites Distribution, LLC <span className="hidden">[cite: 112]</span>
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><strong className="text-rose-900">Facts:</strong> Trade dress infringement case regarding flash-frozen ice cream.<span className="hidden">[cite: 112]</span> The District Court granted summary judgment, ruling the product design was "functional" because the color of the ice cream indicated its flavor.<span className="hidden">[cite: 113]</span> The court took judicial notice of this fact.<span className="hidden">[cite: 114]</span></li>
              <li><strong className="text-rose-900">Holding & Reasoning:</strong> Proper judicial notice.<span className="hidden">[cite: 114]</span> The appellate court affirmed, reasoning that the fact that ice cream color indicates flavor is an adjudicative fact "generally known" among consumers.<span className="hidden">[cite: 115]</span></li>
            </ul>
          </div>
        </div>
      </details>
    </main>
  );
}