import React from 'react';

export default function ArticleThree() {
  return (
    <main className="max-w-5xl mx-auto p-6 lg:p-8 mt-8 mb-12 space-y-8 bg-white rounded-3xl shadow-xl border border-pink-100 font-sans text-slate-700">
      
      {/* HEADER SECTION */}
      <header className="mb-10 border-b-4 border-pink-200 pb-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-rose-800 drop-shadow-sm">
          🌸 Article III: Presumptions
        </h1>
        <p className="text-lg text-rose-600 mt-3 font-medium italic">
          Rules 301–302: Burdens of proof, bursting bubbles, and presumptions in civil cases.
        </p>
      </header>

      {/* BURDENS OF PROOF */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300" open>
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          1. The Burdens of Proof
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 bg-white">
          <p className="text-slate-600 mb-5 font-medium">The umbrella term "burden of proof" actually encompasses three distinct responsibilities:<span className="hidden">[cite: 117]</span></p>
          
          <div className="space-y-4 text-sm text-slate-600">
            <div className="bg-pink-50/40 p-4 rounded-xl border border-pink-100 shadow-sm flex items-start gap-4">
              <div className="bg-white p-2 rounded-lg text-2xl shadow-sm">📝</div>
              <div>
                <strong className="text-rose-900 text-base block">1. Burden of Pleading</strong>
                <p>The responsibility to raise a cause of action or defense in initial filings.<span className="hidden">[cite: 118]</span></p>
              </div>
            </div>
            
            <div className="bg-pink-50/40 p-4 rounded-xl border border-pink-100 shadow-sm flex items-start gap-4">
              <div className="bg-white p-2 rounded-lg text-2xl shadow-sm">🏭</div>
              <div>
                <strong className="text-rose-900 text-base block">2. Burden of Production</strong>
                <p>The duty to introduce <em>sufficient evidence</em> to enable a rational fact-finder to rule in the party's favor, thereby avoiding a directed verdict.<span className="hidden">[cite: 119]</span></p>
              </div>
            </div>

            <div className="bg-pink-50/40 p-4 rounded-xl border border-pink-100 shadow-sm flex items-start gap-4">
              <div className="bg-white p-2 rounded-lg text-2xl shadow-sm">⚖️</div>
              <div>
                <strong className="text-rose-900 text-base block">3. Burden of Persuasion</strong>
                <p>The duty to <em>convince</em> the fact-finder of the truth of the proposition (by a preponderance, clear and convincing, or beyond a reasonable doubt).<span className="hidden">[cite: 120]</span></p>
              </div>
            </div>
          </div>
        </div>
      </details>

      {/* PRESUMPTIONS */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          2. Presumptions (Rules 301 & 302)
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-8 bg-white">
          
          <p className="text-slate-600 bg-pink-50 p-4 rounded-xl border border-pink-100">
            <strong>Definition:</strong> A presumption is a relationship where proving a "Basic Fact" allows or requires the existence of a "Presumed Fact".<span className="hidden">[cite: 122]</span>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2 mb-4">Categories of Presumptions <span className="hidden">[cite: 123]</span></h3>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="pl-3 border-l-2 border-pink-400">
                  <strong className="text-rose-900 block text-base">Conclusive (Mandatory):</strong>
                  A rule of substantive law where the opponent <em>cannot contradict</em> the presumed fact (e.g., a child under 7 cannot commit a felony).<span className="hidden">[cite: 124]</span>
                </li>
                <li className="pl-3 border-l-2 border-pink-400">
                  <strong className="text-rose-900 block text-base">Rebuttable:</strong>
                  The standard evidentiary presumption. Proving the basic fact <em>shifts the burden of production</em> to the opponent.<span className="hidden">[cite: 125]</span>
                </li>
                <li className="pl-3 border-l-2 border-pink-400">
                  <strong className="text-rose-900 block text-base">Permissive Inference:</strong>
                  A conclusion the jury <em>may</em> draw but is not required to, imposing no burden on the opponent.<span className="hidden">[cite: 126]</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2 mb-4">Application & Jurisdictions <span className="hidden">[cite: 127]</span></h3>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="bg-white p-3 rounded-lg border border-pink-200 shadow-sm">
                  <strong className="text-rose-800 block text-base mb-1">🫧 The "Bursting Bubble" (Rule 301):</strong> 
                  The opponent must only produce evidence to rebut the presumption.<span className="hidden">[cite: 127]</span> If they do, the bubble bursts and the presumption disappears entirely.<span className="hidden">[cite: 128]</span> The burden of persuasion <strong>never</strong> shifts.<span className="hidden">[cite: 128]</span>
                </li>
                <li className="bg-white p-3 rounded-lg border border-pink-200 shadow-sm">
                  <strong className="text-rose-800 block text-base mb-1">🗺️ State Law (Rule 302):</strong> 
                  In civil diversity cases, state law governs the effect of presumptions regarding substantive claims.<span className="hidden">[cite: 130]</span>
                </li>
                <li className="bg-rose-50 p-3 rounded-lg border border-rose-200 shadow-sm">
                  <strong className="text-rose-800 block text-base mb-1">🚨 Criminal Constraints:</strong> 
                  Using a mandatory presumption to shift a burden to a criminal defendant violates Due Process; <em>only permissive inferences</em> are allowed.<span className="hidden">[cite: 132, 133]</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Case Card */}
          <div className="bg-pink-50 p-5 rounded-xl border-l-4 border-pink-400 shadow-sm mt-6">
            <h4 className="font-bold text-lg text-rose-800 mb-3 flex items-center">
              🌸 St. Mary's Honor Center v. Hicks <span className="hidden">[cite: 134]</span>
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><strong className="text-rose-900">Facts:</strong> Hicks established a prima facie Title VII discrimination case, creating a presumption.<span className="hidden">[cite: 134, 135]</span> The employer met the burden of production with a non-discriminatory reason.<span className="hidden">[cite: 136]</span> The fact-finder found the employer's reasons were false (pretextual), but ruled Hicks still failed to prove actual racial motivation.<span className="hidden">[cite: 137]</span></li>
              <li><strong className="text-rose-900">Holding & Reasoning:</strong> Rejection of the proffered reason does not <em>compel</em> judgment for the plaintiff.<span className="hidden">[cite: 138]</span> Under Rule 301, the presumption is a "bursting bubble". Once the employer produced evidence, the presumption disappeared.<span className="hidden">[cite: 139]</span> The fact-finder <em>may</em> infer discrimination from the false explanation, but is not compelled to.<span className="hidden">[cite: 140]</span> The ultimate burden of persuasion always remains on the plaintiff.<span className="hidden">[cite: 141]</span></li>
            </ul>
          </div>

        </div>
      </details>

    </main>
  );
}