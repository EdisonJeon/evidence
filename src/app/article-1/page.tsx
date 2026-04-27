import React from 'react';

export default function ArticleOne() {
  return (
    <main className="max-w-5xl mx-auto p-6 lg:p-8 mt-6 space-y-8 bg-pink-50/40 rounded-3xl font-sans text-slate-700">
      
      {/* HEADER SECTION */}
      <header className="mb-10 border-b-4 border-pink-200 pb-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-rose-800 drop-shadow-sm">
          🌸 Article I: General Provisions
        </h1>
        <p className="text-lg text-rose-600 mt-3 font-medium italic">
          The foundational mechanics of the adversary system, trial control, and preserving error.
        </p>
      </header>

      {/* 1. CONCEPTUAL BACKGROUND */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          1. Conceptual Background & The Adversary System
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        
        <div className="p-6 space-y-8 bg-white">
          
          {/* Subsection: History */}
          <section>
            <h3 className="text-lg font-bold text-rose-800 border-b-2 border-pink-100 pb-2 mb-4">
              A. History and Constitutional Foundations <span className="text-[10px] text-pink-300/50 font-normal">[cite: 3]</span>
            </h3>
            <ul className="list-none space-y-4">
              <li className="pl-4 border-l-2 border-pink-300">
                <span className="font-bold text-rose-900 block mb-1">The Necessity of Evidence Law:</span>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Human conflict requires a neutral third party to decide facts and fix responsibility. <span className="text-[10px] text-pink-300/50">[cite: 4]</span></li>
                  <li>Evidence law evolved to balance <em>relevance, fairness, efficiency,</em> and <em>social policies.</em> <span className="text-[10px] text-pink-300/50">[cite: 5]</span></li>
                </ul>
              </li>
              
              <li className="pl-4 border-l-2 border-pink-300">
                <span className="font-bold text-rose-900 block mb-1">Historical Evolution:</span>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li><strong>Trial by Ordeal:</strong> Early methods relied on divine intervention (e.g., "ordeal of cold water"). <span className="text-[10px] text-pink-300/50">[cite: 6]</span></li>
                  <li><strong>Rise of the Jury:</strong> Juries replaced ordeals in England; they transitioned from self-investigators to impartial fact-finders. <span className="text-[10px] text-pink-300/50">[cite: 7, 8]</span></li>
                  <li>Evidentiary rules were created due to a historical mistrust of lay jurors' judgment. <span className="text-[10px] text-pink-300/50">[cite: 9]</span></li>
                </ul>
              </li>

              <li className="pl-4 border-l-2 border-pink-300">
                <span className="font-bold text-rose-900 block mb-1">Constitutional Foundations:</span>
                <p className="text-slate-600 mb-2">The U.S. Constitution guarantees jury trials and embeds specific rules: <span className="text-[10px] text-pink-300/50">[cite: 10]</span></p>
                <ol className="list-decimal pl-5 space-y-1 text-slate-600 font-medium">
                  <li><strong>Treason:</strong> Requires two witnesses to the same overt act. <span className="text-[10px] text-pink-300/50">[cite: 11]</span></li>
                  <li><strong>5th Amendment:</strong> Privilege against self-incrimination. <span className="text-[10px] text-pink-300/50">[cite: 12]</span></li>
                  <li><strong>6th Amendment:</strong> Right to confront adverse witnesses. <span className="text-[10px] text-pink-300/50">[cite: 13]</span></li>
                </ol>
              </li>
            </ul>
          </section>

          {/* Subsection: Trial System Mechanics */}
          <section>
            <h3 className="text-lg font-bold text-rose-800 border-b-2 border-pink-100 pb-2 mb-4">
              B. The Adversary Trial System Mechanics <span className="text-[10px] text-pink-300/50 font-normal">[cite: 14]</span>
            </h3>
            <p className="text-slate-600 mb-5 bg-pink-50 p-3 rounded-lg border border-pink-100">
              <strong className="text-rose-900">Core Philosophy:</strong> Truth best emerges from a vigorous contest presented by partisan advocates to a neutral fact-finder. <span className="text-[10px] text-pink-300/50">[cite: 15, 16]</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm hover:border-pink-400 transition-colors">
                <h4 className="font-bold text-rose-700 text-lg">⚖️ The Judge <span className="text-[10px] text-pink-300/50 font-normal">[cite: 18]</span></h4>
                <ul className="mt-2 text-sm text-slate-600 list-disc pl-4 space-y-1">
                  <li>Presides as a "referee" ruling on law/evidence. <span className="text-[10px] text-pink-300/50">[cite: 18]</span></li>
                  <li>Acts as fact-finder in bench trials. <span className="text-[10px] text-pink-300/50">[cite: 19]</span></li>
                  <li><strong>No duty</strong> to correct errors <em>sua sponte</em> (on their own). <span className="text-[10px] text-pink-300/50">[cite: 20]</span></li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm hover:border-pink-400 transition-colors">
                <h4 className="font-bold text-rose-700 text-lg">💼 Advocates <span className="text-[10px] text-pink-300/50 font-normal">[cite: 21]</span></h4>
                <ul className="mt-2 text-sm text-slate-600 list-disc pl-4 space-y-1">
                  <li>Central to presenting proofs without distorting truth. <span className="text-[10px] text-pink-300/50">[cite: 21]</span></li>
                  <li>Litigants have <strong>no right</strong> to an error-free trial. <span className="text-[10px] text-pink-300/50">[cite: 22]</span></li>
                  <li>The burden of evidentiary compliance is entirely on the advocate. <span className="text-[10px] text-pink-300/50">[cite: 23]</span></li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm hover:border-pink-400 transition-colors">
                <h4 className="font-bold text-rose-700 text-lg">🗣️ Witnesses <span className="text-[10px] text-pink-300/50 font-normal">[cite: 24]</span></h4>
                <ul className="mt-2 text-sm text-slate-600 list-disc pl-4 space-y-1">
                  <li>The primary source of information. <span className="text-[10px] text-pink-300/50">[cite: 24]</span></li>
                  <li>Their credibility and knowledge are strictly regulated. <span className="text-[10px] text-pink-300/50">[cite: 24]</span></li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm hover:border-pink-400 transition-colors">
                <h4 className="font-bold text-rose-700 text-lg">👥 Jurors <span className="text-[10px] text-pink-300/50 font-normal">[cite: 25]</span></h4>
                <ul className="mt-2 text-sm text-slate-600 list-disc pl-4 space-y-1">
                  <li>Lay citizens who decide the facts. <span className="text-[10px] text-pink-300/50">[cite: 25]</span></li>
                  <li>Represent a tension: they have the power of nullification, but are mistrusted with handling certain prejudicial information. <span className="text-[10px] text-pink-300/50">[cite: 25]</span></li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </details>

      {/* 2. RULE 102 */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          2. Rule 102: Purpose and Construction
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-4 bg-white">
          <p className="text-slate-600">
            <strong className="text-rose-900 block mb-1">The Rule:</strong> 
            An aspirational directive stating that the FRE should be construed to secure fairness, eliminate unjustifiable delay, and promote the growth of evidence law to ascertain the truth. <span className="text-[10px] text-pink-300/50">[cite: 41]</span> Judges use this to fill gaps where rules are silent or to avoid nonsensical results. <span className="text-[10px] text-pink-300/50">[cite: 42]</span>
          </p>
          
          {/* Case Card */}
          <div className="bg-pink-50 p-5 rounded-xl border-l-4 border-pink-400 shadow-sm mt-4">
            <h4 className="font-bold text-lg text-rose-800 mb-3 flex items-center">
              🌸 Costantino v. Herzog <span className="text-[10px] text-pink-300/50 ml-2 font-normal">[cite: 43]</span>
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><strong className="text-rose-900">Facts:</strong> The defense introduced an educational video as a "learned treatise" in a malpractice trial. <span className="text-[10px] text-pink-300/50">[cite: 43]</span> The plaintiff objected because Rule 803(18) strictly lists published print materials and omits videos. <span className="text-[10px] text-pink-300/50">[cite: 44]</span></li>
              <li><strong className="text-rose-900">Holding & Reasoning:</strong> The court <em>admitted</em> the video. <span className="text-[10px] text-pink-300/50">[cite: 45]</span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Citing Rule 102, the court refused to be "overly artificial". <span className="text-[10px] text-pink-300/50">[cite: 45]</span></li>
                  <li>Because the video was authoritative, the rule was interpreted broadly to include modern media to serve the truth. <span className="text-[10px] text-pink-300/50">[cite: 46]</span></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </details>

      {/* 3. RULE 103 */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          3. Rule 103: Preserving Claims of Error
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-8 bg-white">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2 mb-4">How to Preserve Error <span className="text-[10px] text-pink-300/50 font-normal">[cite: 57]</span></h3>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                  <strong className="text-emerald-800 block text-base mb-1">✅ Admitting Evidence:</strong> 
                  Make a timely <em>objection</em> or a <em>motion to strike</em> (used when a witness blurts out an answer before an objection can be made). <span className="text-[10px] text-pink-300/50">[cite: 58]</span> Counsel <strong>must</strong> state the specific ground unless apparent. <span className="text-[10px] text-pink-300/50">[cite: 59]</span>
                </li>
                <li className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                  <strong className="text-rose-800 block text-base mb-1">❌ Excluding Evidence:</strong> 
                  Counsel must make an <em>"offer of proof"</em> to inform the court and appellate record of the substance of the excluded evidence. <span className="text-[10px] text-pink-300/50">[cite: 60]</span>
                </li>
                <li className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <strong className="text-slate-800 block text-base mb-1">⚖️ Definitive Rulings:</strong> 
                  If a judge makes a definitive ruling (e.g., in a motion <em>in limine</em>), the objection does not need to be renewed at trial. <span className="text-[10px] text-pink-300/50">[cite: 61]</span> If provisional, it must be renewed. <span className="text-[10px] text-pink-300/50">[cite: 62]</span>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2 mb-4">Appellate Review Standards <span className="text-[10px] text-pink-300/50 font-normal">[cite: 63]</span></h3>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="pl-3 border-l-2 border-pink-400">
                  <strong className="text-rose-900 block text-base">1. Abuse of Discretion</strong>
                  Highly deferential standard for trial judge rulings; relief granted only for clear errors of judgment. <span className="text-[10px] text-pink-300/50">[cite: 65, 66]</span>
                </li>
                <li className="pl-3 border-l-2 border-pink-400">
                  <strong className="text-rose-900 block text-base">2. Harmless Error</strong>
                  Relief granted only if the error affects a "substantial right" of the party within the entire trial context. <span className="text-[10px] text-pink-300/50">[cite: 67]</span>
                </li>
                <li className="pl-3 border-l-2 border-pink-400">
                  <strong className="text-rose-900 block text-base">3. Plain Error</strong>
                  If counsel <em>failed</em> to object, relief is only available if the error is obvious and drastically affects trial fairness. Exceedingly rare. <span className="text-[10px] text-pink-300/50">[cite: 68, 69]</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cases */}
          <div className="space-y-4 mt-6">
            <div className="bg-pink-50 p-5 rounded-xl border-l-4 border-pink-400 shadow-sm">
              <h4 className="font-bold text-rose-800 mb-2">🌸 Reagan v. Brock <span className="text-[10px] text-pink-300/50 font-normal">[cite: 70]</span></h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                <li><strong className="text-rose-900">Facts:</strong> The witness gave a hearsay answer. Plaintiff objected <em>after</em> the answer and moved to strike. The judge overruled as untimely. <span className="text-[10px] text-pink-300/50">[cite: 71, 72, 73]</span></li>
                <li><strong className="text-rose-900">Holding:</strong> Affirmed under "clear error". <span className="text-[10px] text-pink-300/50">[cite: 73]</span></li>
                <li><strong className="text-rose-900">Reasoning:</strong> The trial court inferred the plaintiff "gambled" on a favorable hearsay answer and only objected when it was bad. Objections must be made as soon as the ground is apparent. <span className="text-[10px] text-pink-300/50">[cite: 75, 76]</span></li>
              </ul>
            </div>
            
            <div className="bg-pink-50 p-5 rounded-xl border-l-4 border-pink-400 shadow-sm">
              <h4 className="font-bold text-rose-800 mb-2">🌸 United States v. Gomez-Norena <span className="text-[10px] text-pink-300/50 font-normal">[cite: 77]</span></h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                <li><strong className="text-rose-900">Facts:</strong> Defense objected to "drug courier profile" testimony on hearsay/404(b) grounds. On appeal, they argued Rule 403 (unfair prejudice). <span className="text-[10px] text-pink-300/50">[cite: 78]</span></li>
                <li><strong className="text-rose-900">Holding:</strong> Affirmed; issue waived. <span className="text-[10px] text-pink-300/50">[cite: 79]</span></li>
                <li><strong className="text-rose-900">Reasoning:</strong> Rule 103 requires stating the <em>specific</em> ground. Objecting on hearsay waives a 403 argument. <span className="text-[10px] text-pink-300/50">[cite: 79, 80]</span></li>
              </ul>
            </div>
          </div>

        </div>
      </details>

      {/* 4. RULE 104 */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          4. Rule 104: Preliminary Questions
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-pink-50/50 p-5 border border-pink-100 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg text-rose-800 border-b-2 border-pink-200 pb-2 mb-3">104(a): Legal Admissibility <span className="text-[10px] text-pink-300/50 font-normal">[cite: 82]</span></h3>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                <li>The judge acts as a <strong>gatekeeper</strong>. <span className="text-[10px] text-pink-300/50">[cite: 82]</span></li>
                <li>Decides witness qualifications, privileges, and general admissibility. <span className="text-[10px] text-pink-300/50">[cite: 82]</span></li>
                <li>Standard: <em>Preponderance of the evidence</em>. <span className="text-[10px] text-pink-300/50">[cite: 83]</span></li>
                <li>Judge is <strong>not bound</strong> by the rules of evidence (except privilege). <span className="text-[10px] text-pink-300/50">[cite: 83]</span></li>
              </ul>
            </div>
            
            <div className="flex-1 bg-pink-50/50 p-5 border border-pink-100 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg text-rose-800 border-b-2 border-pink-200 pb-2 mb-3">104(b): Conditional Relevance <span className="text-[10px] text-pink-300/50 font-normal">[cite: 84]</span></h3>
              <p className="text-sm text-slate-700">
                When the relevance of evidence depends on a disputed fact, the judge admits the evidence <em>subject to</em> the introduction of proof sufficient for a reasonable jury to find that the fact exists. <span className="text-[10px] text-pink-300/50">[cite: 84]</span>
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border-l-4 border-pink-400 shadow-sm mt-4 border border-slate-100">
            <h4 className="font-bold text-lg text-rose-800 mb-3 flex items-center">
              🌸 Huddleston v. United States <span className="text-[10px] text-pink-300/50 ml-2 font-normal">[cite: 85]</span>
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
              <li><strong className="text-rose-900">Facts:</strong> Defendant charged with selling stolen tapes. Government introduced evidence he previously sold TVs to prove he <em>knew</em> they were stolen. Defendant demanded a 104(a) judicial finding that the TVs were actually stolen first. <span className="text-[10px] text-pink-300/50">[cite: 85, 86, 87]</span></li>
              <li><strong className="text-rose-900">Holding:</strong> 104(a) finding not required; it is a 104(b) issue. <span className="text-[10px] text-pink-300/50">[cite: 88, 89]</span></li>
              <li><strong className="text-rose-900">Reasoning:</strong> The judge simply determines if there is <em>sufficient evidence</em> for a reasonable jury to find the conditional fact (that the TVs were stolen). Total evidence supported it. <span className="text-[10px] text-pink-300/50">[cite: 90, 91, 92]</span></li>
            </ul>
          </div>

        </div>
      </details>

      {/* 5. RULES 105 & 106 */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          5. Rules 105 & 106: Instructions and Completeness
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-pink-50/50 p-5 rounded-xl border border-pink-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-pink-400"></div>
              <h3 className="font-bold text-lg text-rose-800 mb-2">Rule 105: Limiting Instructions <span className="text-[10px] text-pink-300/50 font-normal">[cite: 95]</span></h3>
              <p className="text-sm text-slate-700">
                If evidence is admissible for one purpose but not another, the court <strong>must</strong>, upon request, restrict the evidence to its proper scope and instruct the jury accordingly. <span className="text-[10px] text-pink-300/50">[cite: 95]</span>
              </p>
            </div>
            
            <div className="bg-pink-50/50 p-5 rounded-xl border border-pink-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-pink-400"></div>
              <h3 className="font-bold text-lg text-rose-800 mb-2">Rule 106: Rule of Completeness <span className="text-[10px] text-pink-300/50 font-normal">[cite: 96]</span></h3>
              <p className="text-sm text-slate-700">
                Prevents a party from misleading the jury by introducing only a portion of a writing or recording. It allows the opposing party to require the immediate introduction of any other part that "in fairness" should be considered concurrently. <span className="text-[10px] text-pink-300/50">[cite: 96, 97]</span>
              </p>
            </div>

          </div>
        </div>
      </details>

    </main>
  );
}