import React from 'react';

export default function ArticleTen() {
  return (
    <main className="max-w-5xl mx-auto p-6 lg:p-8 mt-8 mb-12 space-y-8 bg-white rounded-3xl shadow-xl border border-pink-100 font-sans text-slate-700">
      
      {/* HEADER SECTION */}
      <header className="mb-10 border-b-4 border-pink-200 pb-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-rose-800 drop-shadow-sm">
          🌸 Article X: The Best Evidence Rule
        </h1>
        <p className="text-lg text-rose-600 mt-3 font-medium italic">
          Rules 1001–1008: Contents of writings, recordings, and photographs.
        </p>
      </header>

      {/* 1. THE CORE PRINCIPLE */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300" open>
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          1. The Core Principle & Misnomer
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          
          <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
            <h3 className="font-bold text-rose-900 text-lg mb-2">A Highly Misleading Name <span className="hidden">[cite: 621]</span></h3>
            <p className="text-sm text-slate-700 mb-2">
              The law does <strong>not</strong> require a party to produce the most persuasive or "best" evidence available to prove a fact.<span className="hidden">[cite: 622]</span> 
            </p>
            <p className="text-sm text-slate-700 font-medium">
              It is strictly the "Original Documents Rule." It applies <em>only</em> when a party seeks to prove the <strong>contents</strong> of a writing, recording, or photograph.<span className="hidden">[cite: 623, 624]</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">✅ When Does it Apply? <span className="hidden">[cite: 627]</span></h3>
              <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                <li>When the writing is the actual legally operative instrument (contract, deed, will).<span className="hidden">[cite: 628]</span></li>
                <li>When a witness has no independent memory of an event and is strictly testifying based on what they read in a document or saw in a video.<span className="hidden">[cite: 629]</span></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">❌ When Does it NOT Apply? <span className="hidden">[cite: 630]</span></h3>
              <p className="text-sm text-slate-600">
                It does not apply to proving the <em>existence</em> of an independent fact, even if that fact happens to be recorded somewhere.<span className="hidden">[cite: 630]</span> (e.g., A person can testify "I paid cash," even if a receipt exists, because they are proving the act, not the contents of the receipt).<span className="hidden">[cite: 631]</span>
              </p>
            </div>
          </div>

        </div>
      </details>

      {/* 2. THE FRAMEWORK */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          2. The Framework & Court Functions
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          
          <ul className="space-y-4 text-sm text-slate-600">
            <li className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm">
              <strong className="text-rose-900 block mb-1 text-lg">📄 Rule 1002 (Requirement of Original)</strong>
              To prove the content of a writing, recording, or photograph, the original is required.<span className="hidden">[cite: 626]</span>
            </li>
            <li className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm">
              <strong className="text-rose-900 block mb-1 text-lg">🖨️ Rule 1003 (Admissibility of Duplicates)</strong>
              A duplicate is admissible to the exact same extent as the original <em>unless</em> a genuine question is raised about authenticity or it would be unfair.<span className="hidden">[cite: 632]</span>
            </li>
            <li className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm">
              <strong className="text-rose-900 block mb-1 text-lg">🗣️ Rule 1004 (Other Evidence of Content)</strong>
              Secondary evidence (oral testimony, sketches) is allowed if: originals are lost/destroyed (not in bad faith), unobtainable by judicial process, or the opponent had control and failed to produce it.<span className="hidden">[cite: 633, 634, 635, 636]</span>
            </li>
          </ul>

          <div className="bg-pink-50 p-4 rounded-xl border border-pink-100 mt-6">
            <h3 className="font-bold text-rose-900 text-lg mb-2">Rule 1008: Court vs. Jury <span className="hidden">[cite: 637]</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <strong className="text-slate-800">🧑‍⚖️ The Judge:</strong> Decides threshold legal questions (e.g., whether the original was destroyed in bad faith).<span className="hidden">[cite: 638]</span>
              </div>
              <div>
                <strong className="text-slate-800">👥 The Jury:</strong> Decides substantive factual disputes (Did it exist? Is this the true original? Does the secondary evidence accurately reflect it?).<span className="hidden">[cite: 639, 640, 641, 642]</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-6">
            <div className="bg-pink-50 p-5 rounded-xl border-l-4 border-pink-400 shadow-sm">
              <h4 className="font-bold text-rose-800 mb-1">🌸 Heinsohn v. Carabin & Shaw, P.C. <span className="hidden">[cite: 643]</span></h4>
              <p className="text-sm text-slate-700"><strong className="text-rose-900">Holding:</strong> The rule did not apply to a plaintiff testifying from memory about a spoken conversation, even though later emails discussed that same conversation.<span className="hidden">[cite: 645, 646, 648]</span> It does not apply to the mere existence of an independent factual event.<span className="hidden">[cite: 648]</span></p>
            </div>
            <div className="bg-pink-50 p-5 rounded-xl border-l-4 border-pink-400 shadow-sm">
              <h4 className="font-bold text-rose-800 mb-1">🌸 United States v. Bennett <span className="hidden">[cite: 650]</span></h4>
              <p className="text-sm text-slate-700"><strong className="text-rose-900">Holding:</strong> Reversed. An officer testifying purely from memory about what he saw on a GPS screen violated the rule.<span className="hidden">[cite: 651, 653]</span> A screen display qualifies as a writing/recording, and because the government failed to prove the original digital data was lost, oral testimony was barred.<span className="hidden">[cite: 654, 655, 656]</span></p>
            </div>
          </div>

        </div>
      </details>

    </main>
  );
}