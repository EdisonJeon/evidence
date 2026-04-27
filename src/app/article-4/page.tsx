import React from 'react';

export default function ArticleFour() {
  return (
    <main className="max-w-5xl mx-auto p-6 lg:p-8 mt-8 mb-12 space-y-8 bg-white rounded-3xl shadow-xl border border-pink-100 font-sans text-slate-700">
      
      {/* HEADER SECTION */}
      <header className="mb-10 border-b-4 border-pink-200 pb-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-rose-800 drop-shadow-sm">
          🌸 Article IV: Relevance and its Limits
        </h1>
        <p className="text-lg text-rose-600 mt-3 font-medium italic">
          Rules 401–415: The philosophical heart of evidence, balancing tests, character, and policy exclusions.
        </p>
      </header>

      {/* 1. FUNDAMENTALS OF RELEVANCE */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300" open>
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          1. The Mechanics of Relevance (Rules 401 & 402)
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-8 bg-white">
          
          <section>
            <h3 className="text-lg font-bold text-rose-800 border-b-2 border-pink-100 pb-2 mb-4">
              Core Concepts <span className="hidden">[cite: 143, 144]</span>
            </h3>
            <ul className="list-none space-y-4 text-sm text-slate-600">
              <li className="bg-pink-50/50 p-3 rounded-lg border border-pink-100">
                <strong className="text-rose-900 block text-base mb-1">🎯 Rule 401 (The Test):</strong> 
                Evidence is relevant if (a) it has <em>any tendency</em> to make a fact more or less probable, and (b) the fact is of consequence in determining the action. <span className="hidden">[cite: 151]</span>
              </li>
              <li className="bg-pink-50/50 p-3 rounded-lg border border-pink-100">
                <strong className="text-rose-900 block text-base mb-1">🟢 Rule 402 (General Admissibility):</strong> 
                Relevant evidence is presumptively admissible; irrelevant evidence is strictly inadmissible. <span className="hidden">[cite: 152, 153]</span>
              </li>
              <li className="bg-white p-3 rounded-lg border border-slate-200">
                <strong className="text-slate-800 block text-base mb-1">🧱 The "Brick Wall" Analogy:</strong> 
                A case is a brick wall, and each piece of evidence is a single brick. <span className="hidden">[cite: 155]</span> It doesn't need to be a "home run" that is case-dispositive; it only needs to be a single brick that fits into the wall. <span className="hidden">[cite: 156, 157]</span>
              </li>
            </ul>
          </section>

          {/* Cases */}
          <div className="space-y-4">
            <div className="bg-pink-50 p-5 rounded-xl border-l-4 border-pink-400 shadow-sm">
              <h4 className="font-bold text-rose-800 mb-2">🌸 United States v. Dean <span className="hidden">[cite: 160]</span></h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                <li><strong className="text-rose-900">Facts:</strong> Gun possession charge. A deputy testified a man told him the defendant extorted him with a gun, to explain <em>why</em> the deputy searched the home. <span className="hidden">[cite: 160, 161, 162]</span></li>
                <li><strong className="text-rose-900">Holding & Reasoning:</strong> Reversed. <span className="hidden">[cite: 163]</span> The officer's reason for the search was not a fact "of consequence" because the search was based on consent. <span className="hidden">[cite: 163]</span> Lacked relevance and affected the verdict. <span className="hidden">[cite: 164]</span></li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-pink-50 p-5 rounded-xl border-l-4 border-pink-400 shadow-sm">
                <h4 className="font-bold text-rose-800 mb-2">🌸 Blinzler v. Marriott <span className="hidden">[cite: 165]</span></h4>
                <p className="text-sm text-slate-700">Destroying relevant call logs while on notice of a claim allows fact-finders to draw a circumstantial inference of unfavorable contents. <span className="hidden">[cite: 165, 166, 167, 168]</span></p>
              </div>
              <div className="bg-pink-50 p-5 rounded-xl border-l-4 border-pink-400 shadow-sm">
                <h4 className="font-bold text-rose-800 mb-2">🌸 Magayanes v. Terrance <span className="hidden">[cite: 170]</span></h4>
                <p className="text-sm text-slate-700">A <em>subsequent</em> accident cannot logically provide prior "notice" regarding an earlier incident, rendering it irrelevant. <span className="hidden">[cite: 171, 172]</span></p>
              </div>
            </div>
          </div>

        </div>
      </details>

      {/* 2. RULE 403 */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          2. The Rule 403 Balancing Test
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          
          <p className="text-slate-600 bg-pink-50 p-4 rounded-xl border border-pink-100">
            <strong>Core Function:</strong> A filter that permits judges to exclude otherwise relevant evidence if its probative value is "substantially outweighed" by specific dangers. <span className="hidden">[cite: 176, 177]</span> The rule <em>heavily favors</em> admitting evidence. <span className="hidden">[cite: 181, 182]</span>
          </p>

          <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">Grounds for Exclusion (The Dangers) <span className="hidden">[cite: 183, 184]</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
            <div className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm">
              <strong className="text-rose-900 block mb-2 text-lg">💔 Unfair Prejudice</strong>
              <p>Bars <em>unfair</em> prejudice: <strong>Type A</strong> (Emotional reactions like anger/horror) and <strong>Type B</strong> (Misuse of logic, like bad character propensity). <span className="hidden">[cite: 185, 186, 187, 188, 189]</span></p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm">
              <strong className="text-rose-900 block mb-2 text-lg">🌀 Confusion</strong>
              <p>Distracts the fact-finder from actual elements or causes decisions on wrong legal grounds. <span className="hidden">[cite: 190]</span></p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm">
              <strong className="text-rose-900 block mb-2 text-lg">⏳ Waste of Time</strong>
              <p>Marginal probative value that consumes excessive trial time (e.g., cumulative evidence). <span className="hidden">[cite: 191]</span></p>
            </div>
          </div>

          {/* Cases */}
          <div className="space-y-4">
            <div className="bg-pink-50 p-5 rounded-xl border-l-4 border-pink-400 shadow-sm">
              <h4 className="font-bold text-rose-800 mb-2">🌸 Old Chief v. United States <span className="hidden">[cite: 198]</span></h4>
              <p className="text-sm text-slate-700 mb-2"><strong className="text-rose-900">Facts:</strong> Defendant offered to stipulate to being a prior felon to prevent the jury from hearing details of a violent past. Prosecution refused. <span className="hidden">[cite: 198, 199, 200, 201]</span></p>
              <p className="text-sm text-slate-700"><strong className="text-rose-900">Holding & Reasoning:</strong> Reversed. <span className="hidden">[cite: 202]</span> Probative value is calculated by comparing evidentiary alternatives. <span className="hidden">[cite: 204]</span> A stipulation conclusively proves "convict status" with zero risk of unfair prejudice, discounting the probative value of the official record. <span className="hidden">[cite: 205]</span></p>
            </div>
            <div className="bg-pink-50 p-5 rounded-xl border-l-4 border-pink-400 shadow-sm">
              <h4 className="font-bold text-rose-800 mb-2">🌸 Leopold v. Baccarat, Inc. <span className="hidden">[cite: 207]</span></h4>
              <p className="text-sm text-slate-700">Evidence that arouses disgust (like bigoted comments) may be admitted if it possesses <em>substantial probative value</em> regarding the central issue of the case (non-discriminatory reason for firing). <span className="hidden">[cite: 207, 208, 209, 212, 213, 214]</span></p>
            </div>
          </div>

        </div>
      </details>

      {/* 3. SOCIAL POLICY EXCLUSIONS */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          3. Social Policy Exclusions (Rules 407-411)
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white text-sm text-slate-700">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-bold text-rose-900 text-lg">🛠️ 407: Subsequent Remedial Measures <span className="hidden">[cite: 223]</span></h4>
              <p>Prohibits evidence of repairs/design changes made <em>after</em> an injury to prove negligence. <span className="hidden">[cite: 224]</span> <em>Policy:</em> Encourage safety without fear of penalty. <span className="hidden">[cite: 225]</span></p>
              <p className="italic bg-pink-50 p-2 rounded"><strong>Case: Wood v. Morbark</strong> - Defense opened door to impeachment by claiming old design was "safest possible". <span className="hidden">[cite: 228, 233]</span></p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-rose-900 text-lg">🤝 408: Compromise & Negotiations <span className="hidden">[cite: 235]</span></h4>
              <p>Excludes settlement offers to prove validity/amount of a claim. <span className="hidden">[cite: 236]</span> <em>Policy:</em> Promote out-of-court settlements. <span className="hidden">[cite: 237]</span></p>
              <p className="italic bg-pink-50 p-2 rounded"><strong>Case: Orr v. Albuquerque</strong> - Admissible to prove a "pattern" instead of liability. <span className="hidden">[cite: 239, 243, 244]</span></p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-rose-900 text-lg">🏥 409: Medical Expenses <span className="hidden">[cite: 245]</span></h4>
              <p>Prohibits evidence of offering to pay medical bills. <span className="hidden">[cite: 246]</span> Unlike 408, it does <strong>not</strong> protect collateral statements of fault ("I'll pay, it was my fault"). <span className="hidden">[cite: 248, 249]</span></p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-rose-900 text-lg">⚖️ 410: Pleas & Discussions <span className="hidden">[cite: 250]</span></h4>
              <p>Excludes withdrawn guilty pleas and statements to a prosecuting attorney. <span className="hidden">[cite: 251, 253]</span> <strong>Olson case:</strong> Must be with an actual prosecutor, not an FBI agent. <span className="hidden">[cite: 257, 262]</span></p>
            </div>

            <div className="space-y-2 md:col-span-2">
              <h4 className="font-bold text-rose-900 text-lg">🚗 411: Liability Insurance <span className="hidden">[cite: 264]</span></h4>
              <p>Prohibits evidence of insurance to prove negligence. <span className="hidden">[cite: 265]</span> <em>Policy:</em> Prevents "deep pockets" prejudice. <span className="hidden">[cite: 266]</span> <strong>Palmer case:</strong> Excluded to show family bias due to 403 prejudice risk. <span className="hidden">[cite: 268, 272]</span></p>
            </div>
          </div>

        </div>
      </details>

      {/* 4. CHARACTER EVIDENCE & HABIT */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          4. Character Evidence & Habit (Rules 404, 405, 406)
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          
          <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
            <h3 className="font-bold text-rose-900 text-lg mb-2">The General Prohibition (404(a)) <span className="hidden">[cite: 366]</span></h3>
            <p className="text-sm text-slate-700">Character evidence is generally <strong>inadmissible</strong> to prove "conforming conduct" on a specific occasion. <span className="hidden">[cite: 366]</span> The law bans this because juries may overvalue it, rely on bad records, or ignore burdens of proof. <span className="hidden">[cite: 367, 368, 369]</span></p>
          </div>

          <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">Three Forms of Proof (Rule 405) <span className="hidden">[cite: 372]</span></h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
            <li className="bg-white p-3 rounded-lg border border-pink-200 shadow-sm"><strong>1. Reputation:</strong> Weakest form; community hearsay. <span className="hidden">[cite: 374]</span></li>
            <li className="bg-white p-3 rounded-lg border border-pink-200 shadow-sm"><strong>2. Opinion:</strong> Based on direct observation. <span className="hidden">[cite: 375]</span></li>
            <li className="bg-white p-3 rounded-lg border border-pink-200 shadow-sm"><strong>3. Specific Acts:</strong> Strongest but most prejudicial. <span className="hidden">[cite: 376]</span></li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className="font-bold text-rose-800 mb-2">🚨 Criminal Cases <span className="hidden">[cite: 377]</span></h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                <li><strong>The Mercy Rule:</strong> The defendant controls introduction (The Shield). They can introduce good character to create doubt (The Sword). <span className="hidden">[cite: 378, 379, 380]</span></li>
                <li><strong>Opening the Door:</strong> Once introduced, the prosecution can rebut. <span className="hidden">[cite: 381]</span></li>
                <li><strong>Victim Character:</strong> Allowed in self-defense. <span className="hidden">[cite: 382]</span> Homicide exception applies if D claims victim was first aggressor. <span className="hidden">[cite: 384]</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-rose-800 mb-2">⚖️ Civil Cases & Habit <span className="hidden">[cite: 388]</span></h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                <li><strong>Strict Prohibition:</strong> Never admitted for conforming conduct. <span className="hidden">[cite: 389, 390]</span> Only allowed if an "Essential Element" (e.g., Defamation). <span className="hidden">[cite: 391, 392]</span></li>
                <li><strong>Habit (Rule 406):</strong> A semi-automatic reflexive response. <span className="hidden">[cite: 393, 394]</span> Admissible to prove conforming conduct. <span className="hidden">[cite: 396]</span></li>
              </ul>
            </div>
          </div>

        </div>
      </details>

      {/* 5. 404(b) & SEX OFFENSES */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          5. Other Crimes & Sex Offenses (404(b) & 412-415)
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          
          <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">Rule 404(b): Other Crimes, Wrongs, or Acts <span className="hidden">[cite: 414, 415]</span></h3>
          <p className="text-sm text-slate-700 bg-pink-50 p-3 rounded">
            Admissible <strong>if</strong> offered for a specific, non-propensity purpose via a "propensity-free chain of reasoning". <span className="hidden">[cite: 417, 418]</span>
          </p>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-pink-100 text-rose-800 px-3 py-1 rounded-full font-medium shadow-sm">Motive</span>
            <span className="bg-pink-100 text-rose-800 px-3 py-1 rounded-full font-medium shadow-sm">Opportunity</span>
            <span className="bg-pink-100 text-rose-800 px-3 py-1 rounded-full font-medium shadow-sm">Intent</span>
            <span className="bg-pink-100 text-rose-800 px-3 py-1 rounded-full font-medium shadow-sm">Preparation</span>
            <span className="bg-pink-100 text-rose-800 px-3 py-1 rounded-full font-medium shadow-sm">Common Plan</span>
            <span className="bg-pink-100 text-rose-800 px-3 py-1 rounded-full font-medium shadow-sm">Knowledge</span>
            <span className="bg-pink-100 text-rose-800 px-3 py-1 rounded-full font-medium shadow-sm">Identity (Modus Operandi)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-bold text-rose-800 mb-2">🛡️ Rule 412: Rape Shield <span className="hidden">[cite: 273, 280]</span></h3>
              <p className="text-sm text-slate-700 mb-2">Shifted the law from presumptive admissibility to strict presumptive exclusion of sexual history/predisposition. <span className="hidden">[cite: 281, 282, 283, 284]</span></p>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li><em>Criminal exceptions:</em> Source of physical evidence, past conduct with accused, constitutional rights. <span className="hidden">[cite: 285, 286, 287, 288]</span></li>
                <li><em>Civil cases:</em> Heightened inverted balancing test. <span className="hidden">[cite: 289]</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-rose-800 mb-2">🚨 Rules 413-415: Sex Assault <span className="hidden">[cite: 430]</span></h3>
              <p className="text-sm text-slate-700">A massive exception to the propensity ban. <span className="hidden">[cite: 431]</span> In cases of sexual assault or child molestation, prior specific instances of similar conduct <strong>are</strong> admissible to prove propensity. <span className="hidden">[cite: 432]</span> Subject to an enhanced 403 test. <span className="hidden">[cite: 434]</span></p>
            </div>
          </div>

        </div>
      </details>

    </main>
  );
}