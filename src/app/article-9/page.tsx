import React from 'react';

export default function ArticleNine() {
  return (
    <main className="max-w-5xl mx-auto p-6 lg:p-8 mt-8 mb-12 space-y-8 bg-white rounded-3xl shadow-xl border border-pink-100 font-sans text-slate-700">
      
      {/* HEADER SECTION */}
      <header className="mb-10 border-b-4 border-pink-200 pb-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-rose-800 drop-shadow-sm">
          🌸 Article IX: Authentication & Identification
        </h1>
        <p className="text-lg text-rose-600 mt-3 font-medium italic">
          Rules 901–902: Proving that an item of evidence is exactly what you claim it to be.
        </p>
      </header>

      {/* 1. RULE 901 */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300" open>
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          1. The Requirement of Authentication (Rule 901)
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          
          <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
            <h3 className="font-bold text-rose-900 text-lg mb-2">The Core Concept & Standard <span className="hidden">[cite: 577]</span></h3>
            <p className="text-sm text-slate-700 mb-2">
              Before any tangible item can be admitted, the proponent must prove it is genuine.<span className="hidden">[cite: 577]</span> You cannot simply hand a document to the jury; you must establish a foundation.<span className="hidden">[cite: 578]</span>
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
              <li><strong className="text-slate-900">The Legal Standard:</strong> Must produce evidence "sufficient to support a finding" that the item is what the proponent claims it is.<span className="hidden">[cite: 579]</span></li>
              <li><strong className="text-slate-900">Judge vs. Jury:</strong> This is a standard of <em>conditional relevance</em> (104(b)).<span className="hidden">[cite: 580]</span> The judge simply decides if there is enough evidence for a reasonable jury to conclude it is authentic.<span className="hidden">[cite: 582]</span> The jury decides its ultimate true weight.<span className="hidden">[cite: 583]</span></li>
            </ul>
          </div>

          <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">Methods of Authentication (901(b)) <span className="hidden">[cite: 584]</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
            <div className="bg-white p-3 rounded-xl border border-pink-200 shadow-sm">
              <strong className="text-rose-900 block mb-1">👁️ Witness with Knowledge</strong>
              <p>The most common method ("I took this photo").<span className="hidden">[cite: 586, 587]</span></p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-pink-200 shadow-sm">
              <strong className="text-rose-900 block mb-1">✍️ Handwriting</strong>
              <p>Non-expert opinion allowed if familiarity was not acquired specifically for litigation.<span className="hidden">[cite: 588]</span> Or, an expert/jury can compare it to an exemplar.<span className="hidden">[cite: 589]</span></p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-pink-200 shadow-sm">
              <strong className="text-rose-900 block mb-1">🧩 Distinctive Characteristics</strong>
              <p>Appearance, contents, or circumstances.<span className="hidden">[cite: 590]</span> (e.g., The <em>Reply Letter Doctrine</em>).<span className="hidden">[cite: 591]</span></p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-pink-200 shadow-sm">
              <strong className="text-rose-900 block mb-1">⛓️ Real Evidence</strong>
              <p>Non-Fungible (unique serial numbers).<span className="hidden">[cite: 592]</span> Fungible (white powder) requires a <strong>Chain of Custody</strong>.<span className="hidden">[cite: 593]</span></p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-pink-200 shadow-sm md:col-span-2">
              <strong className="text-rose-900 block mb-1">🎥 The "Silent Witness" Theory</strong>
              <p>Used for automated cameras or system logs by proving the process produces an accurate/reliable result.<span className="hidden">[cite: 595, 596]</span></p>
            </div>
          </div>

        </div>
      </details>

      {/* 2. RULE 902 */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          2. Self-Authenticating Evidence (Rule 902)
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          
          <p className="text-sm text-slate-700 bg-pink-50 p-4 rounded-xl border border-pink-100">
            Certain items are considered so inherently reliable that they require no live foundational witness or extrinsic evidence to be admitted.<span className="hidden">[cite: 598, 599]</span>
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
            <li className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center gap-2">
              <span className="text-2xl">🏛️</span> Sealed or certified public documents.<span className="hidden">[cite: 600]</span>
            </li>
            <li className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center gap-2">
              <span className="text-2xl">📰</span> Official publications and newspapers.<span className="hidden">[cite: 601]</span>
            </li>
            <li className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center gap-2">
              <span className="text-2xl">🥫</span> Trade inscriptions (logos on products).<span className="hidden">[cite: 602]</span>
            </li>
            <li className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center gap-2">
              <span className="text-2xl">📂</span> Certified Business Records (Rule 902(11)).<span className="hidden">[cite: 603]</span>
            </li>
            <li className="bg-pink-50 p-3 rounded-lg border border-pink-200 shadow-sm md:col-span-2">
              <strong className="text-rose-800 block mb-1">💻 Electronic Evidence (902(13) & (14)):</strong> 
              Allows self-authentication of records generated by an electronic process or forensic images, provided they are certified by a qualified digital expert.<span className="hidden">[cite: 604]</span>
            </li>
          </ul>

          <div className="space-y-4 mt-6">
            <div className="bg-pink-50 p-5 rounded-xl border-l-4 border-pink-400 shadow-sm">
              <h4 className="font-bold text-rose-800 mb-2">🌸 United States v. Mitchell <span className="hidden">[cite: 605]</span></h4>
              <p className="text-sm text-slate-700 mb-2"><strong className="text-rose-900">Facts:</strong> The defendant challenged drug evidence due to missing links in the chain of custody.<span className="hidden">[cite: 606, 607]</span></p>
              <p className="text-sm text-slate-700"><strong className="text-rose-900">Holding & Reasoning:</strong> Admitted.<span className="hidden">[cite: 608]</span> A perfect, unbroken chain of custody is not a strict requirement.<span className="hidden">[cite: 609]</span> Minor gaps go to the <em>weight</em> of the evidence (for the jury), not its <em>admissibility</em>.<span className="hidden">[cite: 610]</span> The government must only show a "reasonable probability" it wasn't altered.<span className="hidden">[cite: 611]</span></p>
            </div>

            <div className="bg-pink-50 p-5 rounded-xl border-l-4 border-pink-400 shadow-sm">
              <h4 className="font-bold text-rose-800 mb-2">🌸 United States v. Browne <span className="hidden">[cite: 613]</span></h4>
              <p className="text-sm text-slate-700 mb-2"><strong className="text-rose-900">Facts:</strong> Government introduced certified Facebook chat logs from pseudonym "Billy Button."<span className="hidden">[cite: 614, 615]</span></p>
              <p className="text-sm text-slate-700"><strong className="text-rose-900">Holding & Reasoning:</strong> Properly authenticated.<span className="hidden">[cite: 616]</span> The logs were <em>not</em> self-authenticating under 902(11) because Facebook cannot verify the author.<span className="hidden">[cite: 617, 618]</span> However, they were authenticated by circumstantial evidence under 901 because the profile's biographical details perfectly matched the defendant.<span className="hidden">[cite: 619]</span></p>
            </div>
          </div>

        </div>
      </details>

    </main>
  );
}