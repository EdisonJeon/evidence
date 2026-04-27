import React from 'react';

export default function ArticleFive() {
  return (
    <main className="max-w-5xl mx-auto p-6 lg:p-8 mt-8 mb-12 space-y-8 bg-white rounded-3xl shadow-xl border border-pink-100 font-sans text-slate-700">
      
      {/* HEADER SECTION */}
      <header className="mb-10 border-b-4 border-pink-200 pb-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-rose-800 drop-shadow-sm">
          🌸 Article V: Privileges
        </h1>
        <p className="text-lg text-rose-600 mt-3 font-medium italic">
          Rules 501–502: Protecting critical relationships at the expense of evidentiary truth.
        </p>
      </header>

      {/* 1. CONCEPTUAL BACKGROUND */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300" open>
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          1. Conceptual Background & Essential Concepts
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          
          <div className="bg-pink-50 p-4 rounded-xl border border-pink-100">
            <h3 className="font-bold text-rose-900 text-lg mb-2">The "Trump Card" <span className="hidden">[cite: 309]</span></h3>
            <p className="text-sm text-slate-700">
              An evidentiary privilege allows an individual to prevent certain information from being introduced at trial, acting as an exception to the maxim that the public is entitled to "every man's evidence". <span className="hidden">[cite: 308, 309]</span> Privileges result from a societal cost-benefit analysis where protecting a relationship outweighs losing reliable evidence. <span className="hidden">[cite: 310, 311]</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2 mb-3">🔑 The Holder <span className="hidden">[cite: 316]</span></h3>
              <p className="text-sm text-slate-700 mb-2">The person the privilege is designed to protect. <span className="hidden">[cite: 316]</span></p>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>Only the holder can <strong>waive</strong> it. <span className="hidden">[cite: 317]</span></li>
                <li>Agents (like attorneys) can <em>claim</em> it on their behalf at trial. <span className="hidden">[cite: 317]</span></li>
                <li>Modern case law protects holders from facing adverse inferences by a jury simply for exercising a privilege. <span className="hidden">[cite: 322]</span></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2 mb-3">🔓 Types of Waiver <span className="hidden">[cite: 318]</span></h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="bg-white p-2 border border-slate-200 rounded">
                  <strong className="text-rose-900">Formal:</strong> Explicitly informing the court. <span className="hidden">[cite: 319]</span>
                </li>
                <li className="bg-white p-2 border border-slate-200 rounded">
                  <strong className="text-rose-900">Informal:</strong> Disclosing to a 3rd party (disclosure to one = disclosure to all). <span className="hidden">[cite: 320]</span>
                </li>
                <li className="bg-white p-2 border border-slate-200 rounded">
                  <strong className="text-rose-900">Involuntary:</strong> If stolen/illegally intercepted, the holder may still claim it. <span className="hidden">[cite: 321]</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </details>

      {/* 2. RULES 501 & 502 */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          2. The Federal Rules (501 & 502)
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-pink-50/50 p-5 rounded-xl border border-pink-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-pink-400"></div>
              <h3 className="font-bold text-lg text-rose-800 mb-2">Rule 501: Governing Law <span className="hidden">[cite: 324]</span></h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li><strong className="text-slate-900">Federal Question/Criminal:</strong> Federal common law governs. <span className="hidden">[cite: 324]</span></li>
                <li><strong className="text-slate-900">Civil Diversity:</strong> State privilege law governs. <span className="hidden">[cite: 325]</span></li>
              </ul>
            </div>
            
            <div className="bg-pink-50/50 p-5 rounded-xl border border-pink-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-pink-400"></div>
              <h3 className="font-bold text-lg text-rose-800 mb-2">Rule 502: Attorney-Client Limitations <span className="hidden">[cite: 326]</span></h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li><strong className="text-slate-900">Inadvertent Disclosure:</strong> No waiver if holder took reasonable steps to prevent and rectify. <span className="hidden">[cite: 327]</span></li>
                <li><strong className="text-slate-900">Intentional:</strong> Only waives undisclosed info if it concerns the exact same subject matter. <span className="hidden">[cite: 328]</span></li>
              </ul>
            </div>

          </div>
        </div>
      </details>

      {/* 3. COMMON-LAW PRIVILEGES */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          3. Specific Privileges & Case Law
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-8 bg-white">
          
          <div className="space-y-6">
            {/* Attorney Client */}
            <div className="border-b border-pink-100 pb-4">
              <h4 className="font-bold text-rose-900 text-lg flex items-center">💼 Attorney-Client Privilege <span className="hidden">[cite: 330]</span></h4>
              <p className="text-sm text-slate-600 mt-1 mb-2">The oldest common-law privilege, protecting communications (not underlying facts) to encourage candor. <span className="hidden">[cite: 330]</span></p>
              <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                <li><em>Exceptions:</em> Crime-Fraud, Breach of Duty (malpractice), Joint Clients. <span className="hidden">[cite: 331, 332]</span></li>
              </ul>
              <div className="mt-3 bg-pink-50 p-3 rounded-lg border-l-4 border-pink-400">
                <p className="text-sm"><strong>Case: Swidler & Berlin v. U.S.</strong> - Privilege survives the death of the client to encourage free communication during life without fear of posthumous reputational harm. <span className="hidden">[cite: 347, 348, 349, 350]</span></p>
              </div>
            </div>

            {/* Marital */}
            <div className="border-b border-pink-100 pb-4">
              <h4 className="font-bold text-rose-900 text-lg flex items-center">💍 Marital Privileges <span className="hidden">[cite: 333]</span></h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-white border border-pink-200 p-3 rounded shadow-sm">
                  <strong className="text-rose-800">1. Spousal (Testimonial)</strong>
                  <ul className="list-disc pl-4 mt-1 text-sm text-slate-600">
                    <li>Applies in <em>criminal</em> trials. <span className="hidden">[cite: 334]</span></li>
                    <li>The <strong>witness spouse</strong> is the sole holder. <span className="hidden">[cite: 335]</span></li>
                    <li>Lasts only while the marriage exists. <span className="hidden">[cite: 335]</span></li>
                  </ul>
                </div>
                <div className="bg-white border border-pink-200 p-3 rounded shadow-sm">
                  <strong className="text-rose-800">2. Marital Communications</strong>
                  <ul className="list-disc pl-4 mt-1 text-sm text-slate-600">
                    <li>Applies in civil and criminal cases. <span className="hidden">[cite: 336]</span></li>
                    <li><strong>Both spouses</strong> hold the privilege. <span className="hidden">[cite: 337]</span></li>
                    <li>Survives divorce for communications made during marriage. <span className="hidden">[cite: 337]</span></li>
                  </ul>
                </div>
              </div>
              <div className="mt-3 bg-pink-50 p-3 rounded-lg border-l-4 border-pink-400">
                <p className="text-sm"><strong>Case: Trammel v. U.S.</strong> - Supreme Court modified the rule so the witness-spouse alone holds the right to refuse to testify. If a spouse wants to testify, there is little marital harmony left to save. <span className="hidden">[cite: 352, 355, 357]</span></p>
              </div>
            </div>

            {/* Accountant / Other */}
            <div>
              <h4 className="font-bold text-rose-900 text-lg flex items-center">📊 Accountant-Client & Peer Review <span className="hidden">[cite: 338, 343]</span></h4>
              <ul className="list-disc pl-5 mt-2 text-sm text-slate-600 space-y-2">
                <li><strong>Accountant (IL Statutory):</strong> Under the <em>Brunton</em> rule, the privilege belongs to the accountant, not the client. <span className="hidden">[cite: 338, 339]</span></li>
                <li><strong>No "Peer Review" Privilege:</strong> In <em>Univ. of Pennsylvania v. EEOC</em>, the Supreme Court refused to create an academic peer review privilege, warning it would lead to a "wave" of new claims from other professions. <span className="hidden">[cite: 341, 343, 346]</span></li>
              </ul>
            </div>
          </div>

        </div>
      </details>

    </main>
  );
}