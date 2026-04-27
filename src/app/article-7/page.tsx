import React from 'react';

export default function ArticleSeven() {
  return (
    <main className="max-w-5xl mx-auto p-6 lg:p-8 mt-8 mb-12 space-y-8 bg-white rounded-3xl shadow-xl border border-pink-100 font-sans text-slate-700">
      
      {/* HEADER SECTION */}
      <header className="mb-10 border-b-4 border-pink-200 pb-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-rose-800 drop-shadow-sm">
          🌸 Article VII: Opinions & Expert Testimony
        </h1>
        <p className="text-lg text-rose-600 mt-3 font-medium italic">
          Rules 701–706: The shift from strict common-law facts to helpfulness, expert gatekeeping, and ultimate issues.
        </p>
      </header>

      {/* 1. LAY OPINION */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300" open>
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          1. Lay Opinion Testimony (Rule 701)
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          
          <p className="text-sm text-slate-600 bg-pink-50 p-4 rounded-xl border border-pink-100">
            <strong>Historical Context:</strong> Under strict common law, witnesses were expected to testify strictly to facts (what they saw/heard).<span className="hidden">[cite: 954]</span> "Opinions" invaded the province of the jury.<span className="hidden">[cite: 955]</span> The FRE abandoned this in favor of a standard based on <em>helpfulness</em>.<span className="hidden">[cite: 958]</span>
          </p>

          <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">The Three Mandatory Prongs <span className="hidden">[cite: 960]</span></h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
            <li className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm">
              <strong className="text-rose-900 block mb-2">👁️ 701(a): Perception</strong>
              Must be tethered to direct, firsthand sensory perception. No hearsay or speculation.<span className="hidden">[cite: 961, 962]</span>
            </li>
            <li className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm">
              <strong className="text-rose-900 block mb-2">🤝 701(b): Helpfulness</strong>
              Must help clearly understand testimony or determine a fact. If the jury can draw the inference themselves, it is excluded.<span className="hidden">[cite: 963, 964]</span>
            </li>
            <li className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm">
              <strong className="text-rose-900 block mb-2">🚫 701(c): No Expertise</strong>
              Cannot rely on scientific, technical, or specialized knowledge (prevents smuggling experts through the back door).<span className="hidden">[cite: 965, 966]</span>
            </li>
          </ul>

          <div className="space-y-4 mt-4">
            <div className="bg-pink-50 p-5 rounded-xl border-l-4 border-pink-400 shadow-sm">
              <h4 className="font-bold text-rose-800 mb-2">🌸 Plyler v. Whirlpool Corp. <span className="hidden">[cite: 967]</span></h4>
              <p className="text-sm text-slate-700"><strong>Facts:</strong> Plaintiff testified about an "orange glow" behind a microwave but was barred from inferring the cause of the fire.<span className="hidden">[cite: 969, 970]</span><br/><strong>Reasoning:</strong> Laymen can testify to raw facts, but inferring electrical causation requires specialized thermodynamics knowledge, violating 701(c).<span className="hidden">[cite: 973, 974]</span></p>
            </div>
            <div className="bg-pink-50 p-5 rounded-xl border-l-4 border-pink-400 shadow-sm">
              <h4 className="font-bold text-rose-800 mb-2">🌸 United States v. Peoples <span className="hidden">[cite: 975]</span></h4>
              <p className="text-sm text-slate-700">An FBI agent gave a "running narrative" interpreting wiretapped calls based on her overall investigation.<span className="hidden">[cite: 978]</span> This usurped the jury's role and was not based on direct perception, violating the rule against lay experts.<span className="hidden">[cite: 981, 982]</span></p>
            </div>
          </div>

        </div>
      </details>

      {/* 2. EXPERT TESTIMONY */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          2. Expert Testimony & Gatekeeping (Rule 702)
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          
          <div className="bg-rose-50 p-4 rounded-xl border border-rose-100 mb-4">
            <h3 className="font-bold text-rose-900 text-lg mb-2">The Four Elements of Rule 702 <span className="hidden">[cite: 985]</span></h3>
            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
              <li><strong>Helpfulness:</strong> Knowledge helps the trier of fact understand evidence.<span className="hidden">[cite: 986]</span></li>
              <li><strong>Sufficient Facts:</strong> Based on adequate info, not guesswork.<span className="hidden">[cite: 987]</span></li>
              <li><strong>Reliable Principles:</strong> Uses methodologies trusted in the field.<span className="hidden">[cite: 988]</span></li>
              <li><strong>Reliable Application:</strong> Strictly applied methods to specific facts.<span className="hidden">[cite: 989]</span></li>
            </ul>
            <p className="text-sm mt-3 text-slate-600"><em>*Qualifications:</em> Can be by knowledge, skill, experience, training, or education. (A PhD isn't required; 40 years as a mechanic counts).<span className="hidden">[cite: 990, 991]</span></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2 mb-3">🚪 Daubert & The Gatekeeper <span className="hidden">[cite: 1003]</span></h3>
              <p className="text-sm text-slate-600 mb-2">Overruled the strict <em>Frye</em> (general acceptance) test.<span className="hidden">[cite: 1004, 1010]</span> The judge acts as a <strong>gatekeeper</strong> to ensure reliability.<span className="hidden">[cite: 1012]</span></p>
              <ul className="list-decimal pl-5 text-sm text-slate-700 space-y-1">
                <li>Can the theory be <strong>tested</strong>?<span className="hidden">[cite: 1013]</span></li>
                <li>Has it been <strong>peer-reviewed</strong>?<span className="hidden">[cite: 1014]</span></li>
                <li>What is the known <strong>error rate</strong>?<span className="hidden">[cite: 1015]</span></li>
                <li>Are there controlling <strong>standards</strong>?<span className="hidden">[cite: 1016]</span></li>
                <li>Is it <strong>generally accepted</strong>?<span className="hidden">[cite: 1017]</span></li>
              </ul>
            </div>
            
            <div className="space-y-4">
               <div className="bg-pink-50 p-4 rounded-xl border-l-4 border-pink-400 shadow-sm">
                <h4 className="font-bold text-rose-800 mb-1">🌸 Kumho Tire Extension <span className="hidden">[cite: 1018]</span></h4>
                <p className="text-sm text-slate-700">Applies <em>Daubert</em> gatekeeping to <strong>all</strong> expert testimony (technical, experience-based), not just science.<span className="hidden">[cite: 1018]</span></p>
              </div>
              <div className="bg-pink-50 p-4 rounded-xl border-l-4 border-pink-400 shadow-sm">
                <h4 className="font-bold text-rose-800 mb-1">🌸 Jones v. Lincoln Electric <span className="hidden">[cite: 996]</span></h4>
                <p className="text-sm text-slate-700">An MIT metallurgist was barred from testifying about medical biology.<span className="hidden">[cite: 998, 1001]</span> An expert cannot parrot outside doctors to step out of their zone.<span className="hidden">[cite: 1002]</span></p>
              </div>
            </div>
          </div>

        </div>
      </details>

      {/* 3. EXPERT BASES & ULTIMATE ISSUE */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          3. Bases of Opinion & Ultimate Issues
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-3">
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">Bases of Opinion (703 & 705) <span className="hidden">[cite: 1020]</span></h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li><strong className="text-rose-900">Firsthand Knowledge:</strong> Examined the patient/machine.<span className="hidden">[cite: 1023]</span></li>
                <li><strong className="text-rose-900">Admitted Evidence:</strong> Listened at trial or reviewed exhibits.<span className="hidden">[cite: 1024]</span></li>
                <li className="bg-pink-50 p-2 rounded border border-pink-100"><strong className="text-rose-900">Inadmissible Evidence:</strong> May base an opinion on hearsay <strong>IF</strong> experts in that field reasonably rely on it.<span className="hidden">[cite: 1025]</span></li>
              </ul>
              <p className="text-sm text-slate-700"><strong>The "Reverse 403" Test:</strong> Proponent cannot disclose inadmissible underlying facts to jury unless probative value <em>substantially outweighs</em> prejudice (stops experts from being "hearsay conduits" - <em>Hutchinson v. Groskin</em>).<span className="hidden">[cite: 1026, 1027, 1028, 1037]</span></p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">Ultimate Issue (Rule 704) <span className="hidden">[cite: 1040]</span></h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li><strong className="text-slate-900">General (704(a)):</strong> Opinion is not objectionable just because it embraces an ultimate issue.<span className="hidden">[cite: 1041]</span></li>
                <li className="bg-rose-50 p-2 rounded border border-rose-200"><strong className="text-rose-900">Criminal Exception (704(b)):</strong> An expert must <strong>not</strong> state if a defendant had a mental state that constitutes an element of the crime.<span className="hidden">[cite: 1044]</span></li>
                <li><em>Case: U.S. v. Eff</em> - Psychiatrist can detail schizophrenia, but cannot conclude "he didn't know right from wrong." That leap belongs to the jury.<span className="hidden">[cite: 1046, 1047, 1048, 1052]</span></li>
              </ul>
            </div>
            
          </div>
        </div>
      </details>

    </main>
  );
}