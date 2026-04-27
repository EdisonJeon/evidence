import React from 'react';

export default function ArticleEight() {
  return (
    <main className="max-w-5xl mx-auto p-6 lg:p-8 mt-8 mb-12 space-y-8 bg-white rounded-3xl shadow-xl border border-pink-100 font-sans text-slate-700">
      
      {/* HEADER SECTION */}
      <header className="mb-10 border-b-4 border-pink-200 pb-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-rose-800 drop-shadow-sm">
          🌸 Article VIII: Hearsay
        </h1>
        <p className="text-lg text-rose-600 mt-3 font-medium italic">
          Rules 801–807 & The 6th Amendment: Foundations, Exceptions, and the Confrontation Clause.
        </p>
      </header>

      {/* 1. HEARSAY DEFINITION (From previous step) */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          1. Foundational Concepts (Rules 801-802)
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
            <h3 className="font-bold text-rose-900 text-lg mb-2">The Definition <span className="hidden">[cite: 658, 659]</span></h3>
            <p className="text-slate-700">
              Hearsay is a statement that (1) the declarant does not make while testifying at the current trial, and (2) a party offers in evidence to prove the <strong>truth of the matter asserted</strong> in the statement.<span className="hidden">[cite: 659]</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2 mb-3">⚠️ The Four Dangers <span className="hidden">[cite: 660, 661]</span></h3>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1 font-medium">
                <li>Perception <span className="hidden">[cite: 662]</span></li>
                <li>Memory <span className="hidden">[cite: 663]</span></li>
                <li>Narration <span className="hidden">[cite: 664]</span></li>
                <li>Sincerity <span className="hidden">[cite: 665]</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2 mb-3">🗣️ What is a "Statement"? <span className="hidden">[cite: 666, 667]</span></h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li><strong className="text-rose-900">Nonverbal Assertions:</strong> Pointing or nodding = Statement.<span className="hidden">[cite: 668]</span></li>
                <li><strong className="text-rose-900">Involuntary Conduct:</strong> Shivering or sweating = Not Hearsay.<span className="hidden">[cite: 669]</span></li>
                <li><strong className="text-rose-900">Implied Assertions:</strong> If no intent to assert a specific fact, it is Not Hearsay.<span className="hidden">[cite: 670, 671]</span></li>
              </ul>
            </div>
          </div>
          <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2 mt-6">Non-Hearsay Purposes (Not Offered for Truth) <span className="hidden">[cite: 673, 674]</span></h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-pink-50 border border-pink-200 text-rose-800 px-4 py-2 rounded-lg shadow-sm"><strong>Effect on Listener</strong><span className="hidden">[cite: 676]</span></span>
            <span className="bg-pink-50 border border-pink-200 text-rose-800 px-4 py-2 rounded-lg shadow-sm"><strong>Verbal Acts</strong><span className="hidden">[cite: 677]</span></span>
            <span className="bg-pink-50 border border-pink-200 text-rose-800 px-4 py-2 rounded-lg shadow-sm"><strong>State of Mind</strong><span className="hidden">[cite: 680]</span></span>
            <span className="bg-pink-50 border border-pink-200 text-rose-800 px-4 py-2 rounded-lg shadow-sm"><strong>Impeachment</strong><span className="hidden">[cite: 681]</span></span>
          </div>
        </div>
      </details>

      {/* 2. EXEMPTIONS / NOT HEARSAY (From previous step) */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          2. Exemptions / "Not Hearsay" (Rule 801(d))
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">A. Declarant's Prior Statements <span className="hidden">[cite: 684]</span></h3>
              <ul className="text-sm text-slate-600 space-y-3">
                <li className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                  <strong className="text-slate-900 block mb-1">1. Inconsistent (801(d)(1)(A)):</strong> Must be <em>under penalty of perjury</em>.<span className="hidden">[cite: 686]</span>
                </li>
                <li className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                  <strong className="text-slate-900 block mb-1">2. Consistent (801(d)(1)(B)):</strong> Rehabilitates witness. Made before motive to lie arose.<span className="hidden">[cite: 688, 690]</span>
                </li>
                <li className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                  <strong className="text-slate-900 block mb-1">3. Identifications (801(d)(1)(C)):</strong> Prior identification is admissible.<span className="hidden">[cite: 691]</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">B. Opposing Party Statements <span className="hidden">[cite: 693]</span></h3>
              <ul className="text-sm text-slate-600 space-y-3">
                <li className="pl-3 border-l-2 border-pink-400"><strong>Direct:</strong> Made in individual capacity.<span className="hidden">[cite: 696]</span></li>
                <li className="pl-3 border-l-2 border-pink-400"><strong>Adoptive:</strong> Party manifested belief (includes <em>Silence</em>).<span className="hidden">[cite: 697, 698]</span></li>
                <li className="pl-3 border-l-2 border-pink-400"><strong>Authorized:</strong> Spokespersons/attorneys.<span className="hidden">[cite: 699]</span></li>
                <li className="pl-3 border-l-2 border-pink-400"><strong>Agent/Employee:</strong> On a matter within scope while employed.<span className="hidden">[cite: 700]</span></li>
                <li className="pl-3 border-l-2 border-pink-400"><strong>Co-Conspirator:</strong> Made <em>during</em> and <em>in furtherance</em> of conspiracy.<span className="hidden">[cite: 701]</span></li>
              </ul>
            </div>
          </div>
        </div>
      </details>

      {/* 3. RULE 803 EXCEPTIONS */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300" open>
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          3. Exceptions: Availability Immaterial (Rule 803)
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-8 bg-white">
          
          <p className="text-sm text-slate-600 bg-pink-50 p-4 rounded-xl border border-pink-100">
            <strong>Rationale:</strong> The physical availability of the declarant to testify is irrelevant because the circumstances under which these statements were made inherently guarantee their trustworthiness.<span className="hidden">[cite: 719, 720]</span>
          </p>

          {/* Res Gestae */}
          <div className="space-y-4">
            <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">A. The "Res Gestae" Spontaneous Exceptions <span className="hidden">[cite: 721]</span></h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm">
                <strong className="text-rose-900 block mb-1">⏱️ Present Sense Impression (803(1))</strong>
                <p className="text-sm text-slate-600">A statement describing an event made <em>while or immediately after</em> the declarant perceived it.<span className="hidden">[cite: 723, 724]</span> The time lapse must be strictly minimal.<span className="hidden">[cite: 726]</span></p>
                <p className="text-xs mt-2 text-rose-700"><em>Case: U.S. v. Blakey</em> - A 23-minute delay was still close enough given corroborating circumstances.<span className="hidden">[cite: 728, 736]</span></p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm">
                <strong className="text-rose-900 block mb-1">😱 Excited Utterance (803(2))</strong>
                <p className="text-sm text-slate-600">Relates to a startling event, made while declarant was under the stress of excitement.<span className="hidden">[cite: 738, 739]</span> Timing can be much longer than 803(1).<span className="hidden">[cite: 741]</span></p>
                <p className="text-xs mt-2 text-rose-700"><em>Case: U.S. v. Boyce</em> - 911 call from neighbor's house qualified because victim was still hyperventilating.<span className="hidden">[cite: 779, 785]</span></p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm">
                <strong className="text-rose-900 block mb-1">🧠 State of Mind (803(3))</strong>
                <p className="text-sm text-slate-600">Declarant's then-existing mental, emotional, or physical condition.<span className="hidden">[cite: 743, 744]</span> <strong>Memory Prohibition:</strong> Cannot be used to prove the fact remembered.<span className="hidden">[cite: 745]</span></p>
                <p className="text-xs mt-2 text-rose-700"><em>Hillmon Doctrine:</em> Statement of future intent ("I am going to Colorado") proves they actually went.<span className="hidden">[cite: 747, 755]</span></p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm">
                <strong className="text-rose-900 block mb-1">🩺 Medical Diagnosis/Treatment (803(4))</strong>
                <p className="text-sm text-slate-600">Statements reasonably pertinent to medical diagnosis/treatment.<span className="hidden">[cite: 758, 759]</span> Generally excludes statements attributing fault ("who ran the red light").<span className="hidden">[cite: 762]</span></p>
                <p className="text-xs mt-2 text-rose-700"><em>Child Abuse Exception:</em> Identity of domestic abuser is medically pertinent to ensure safe discharge (<em>U.S. v. George</em>).<span className="hidden">[cite: 763, 789]</span></p>
              </div>
            </div>
          </div>

          {/* Records */}
          <div className="space-y-4">
            <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2 mt-6">B. The Records Exceptions <span className="hidden">[cite: 765]</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-rose-50 p-4 rounded-xl border border-rose-200 shadow-sm">
                <strong className="text-rose-900 block mb-1">🏢 Business Records (803(6)) <span className="hidden">[cite: 767]</span></strong>
                <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
                  <li>Made at/near the time by someone with knowledge.<span className="hidden">[cite: 768]</span></li>
                  <li>Kept in the course of regularly conducted activity.<span className="hidden">[cite: 769]</span></li>
                  <li>Subject to the "Trustworthiness Clause" (e.g., cannot be prepared for litigation).<span className="hidden">[cite: 772]</span></li>
                </ul>
                <p className="text-xs mt-2 text-rose-700"><em>Case: U.S. v. Hedman</em> - Even illegal, secret payoff diaries count if it was the employee's "regular business".<span className="hidden">[cite: 791, 796]</span></p>
              </div>

              <div className="bg-rose-50 p-4 rounded-xl border border-rose-200 shadow-sm">
                <strong className="text-rose-900 block mb-1">🏛️ Public Records (803(8)) <span className="hidden">[cite: 773]</span></strong>
                <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
                  <li>Office activities, matters observed under duty, or factual findings from investigations.<span className="hidden">[cite: 774, 775]</span></li>
                  <li><strong>Criminal Prohibition:</strong> Excludes police reports offered against a defendant in criminal cases.<span className="hidden">[cite: 777]</span></li>
                </ul>
                <p className="text-xs mt-2 text-rose-700"><em>Case: Beech Aircraft v. Rainey</em> - "Factual findings" includes evaluative opinions and conclusions.<span className="hidden">[cite: 797, 801]</span></p>
              </div>

            </div>
          </div>

        </div>
      </details>

      {/* 4. RULE 804 EXCEPTIONS */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          4. Exceptions: Declarant Unavailable (Rule 804)
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          
          <div className="bg-pink-50 p-4 rounded-xl border border-pink-100">
            <h3 className="font-bold text-rose-900 text-lg mb-2">Defining "Unavailability" (804(a)) <span className="hidden">[cite: 807]</span></h3>
            <p className="text-sm text-slate-700 mb-2">A declarant is unavailable if they:<span className="hidden">[cite: 808]</span></p>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Are exempted by a court-recognized privilege.<span className="hidden">[cite: 809]</span></li>
              <li>Refuse to testify despite a court order.<span className="hidden">[cite: 810]</span></li>
              <li>Cannot remember the subject matter.<span className="hidden">[cite: 811]</span></li>
              <li>Are dead or suffer from a severe physical/mental illness.<span className="hidden">[cite: 812]</span></li>
              <li>Are absent and the proponent used reasonable means (subpoenas) to procure attendance.<span className="hidden">[cite: 813]</span></li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm">
              <strong className="text-rose-900 block mb-1">📜 Former Testimony (804(b)(1)) <span className="hidden">[cite: 815]</span></strong>
              <p className="text-sm text-slate-600">Must be offered against a party who had an <em>opportunity and similar motive</em> to cross-examine in the prior proceeding.<span className="hidden">[cite: 817]</span></p>
              <p className="text-xs mt-2 text-rose-700"><em>Case: U.S. v. Vartanian</em> - A civil attorney cross-examining a witness has a "similar motive" as a criminal attorney if the core factual issue is identical.<span className="hidden">[cite: 830, 836]</span></p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm">
              <strong className="text-rose-900 block mb-1">⚰️ Dying Declarations (804(b)(2)) <span className="hidden">[cite: 820]</span></strong>
              <p className="text-sm text-slate-600">Made while declarant had a settled expectation of swift and certain doom.<span className="hidden">[cite: 821, 823]</span> <em>Scope:</em> Only civil cases or criminal homicides.<span className="hidden">[cite: 822]</span></p>
              <p className="text-xs mt-2 text-rose-700"><em>Case: U.S. v. Lawrence</em> - Failed exception because government couldn't prove the paralyzed victim subjectively knew he was dying.<span className="hidden">[cite: 838, 843]</span></p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm">
              <strong className="text-rose-900 block mb-1">💸 Statements Against Interest (804(b)(3)) <span className="hidden">[cite: 824]</span></strong>
              <p className="text-sm text-slate-600">So contrary to pecuniary/proprietary interest, or exposing to liability, that no reasonable person would lie.<span className="hidden">[cite: 825]</span> Requires corroborating circumstances in criminal exculpatory uses.<span className="hidden">[cite: 826]</span></p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-pink-200 shadow-sm">
              <strong className="text-rose-900 block mb-1">🛑 Forfeiture by Wrongdoing (804(b)(6)) <span className="hidden">[cite: 827]</span></strong>
              <p className="text-sm text-slate-600">Offered against a party that wrongfully caused the declarant's absence.<span className="hidden">[cite: 828]</span> Requires <em>specific intent</em> to prevent the witness from testifying.<span className="hidden">[cite: 829]</span></p>
            </div>
          </div>

        </div>
      </details>

      {/* 5. RESIDUAL & IMPEACHMENT */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          5. Residual Exception & Impeachment (Rules 806 & 807)
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">Rule 806: Impeaching the Declarant <span className="hidden">[cite: 847]</span></h3>
              <p className="text-sm text-slate-600">When hearsay is admitted, the absent declarant is treated exactly like a live witness for impeachment (Rule 608, 609, bias).<span className="hidden">[cite: 848, 849]</span></p>
              <ul className="text-sm text-slate-600 space-y-2 mt-2">
                <li className="bg-pink-50 p-2 rounded"><em>Case: Rodríguez-Berríos</em> - Impeachment evidence must actually contradict the hearsay statement.<span className="hidden">[cite: 851, 859]</span></li>
                <li className="bg-pink-50 p-2 rounded"><em>Case: U.S. v. Goldwire</em> - A defendant's out-of-court statement can be attacked if the defense introduces exculpatory parts of it.<span className="hidden">[cite: 865, 871]</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">Rule 807: The Residual Exception <span className="hidden">[cite: 876]</span></h3>
              <p className="text-sm text-slate-600">A narrow catch-all for hearsay that doesn't fit 803/804 but is exceptionally reliable and necessary.<span className="hidden">[cite: 877]</span></p>
              <ul className="text-sm text-slate-600 list-disc pl-5 mt-2">
                <li>Requires sufficient guarantees of trustworthiness.<span className="hidden">[cite: 880]</span></li>
                <li>Must be more probative than any other obtainable evidence.<span className="hidden">[cite: 881]</span></li>
              </ul>
              <div className="bg-pink-50 p-2 rounded mt-2">
                <p className="text-sm text-slate-600"><em>Case: U.S. v. Sanchez-Lima</em> - Unavailable videotaped sworn statements were admitted because they were heavily corroborated and highly trustworthy.<span className="hidden">[cite: 883, 887]</span></p>
              </div>
            </div>
          </div>

        </div>
      </details>

      {/* 6. CONFRONTATION CLAUSE */}
      <details className="group bg-rose-50 border border-rose-200 rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-gradient-to-r from-rose-100 to-pink-100 group-open:bg-rose-200 group-open:text-rose-900 text-rose-800 transition-colors flex justify-between items-center">
          6. The Confrontation Clause (6th Amendment)
          <span className="text-2xl group-open:rotate-180 transition-transform text-rose-500">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          
          <div className="bg-rose-100 p-4 rounded-xl border border-rose-300 shadow-inner">
            <h3 className="font-bold text-rose-900 text-lg mb-2">The Constitutional Mandate <span className="hidden">[cite: 889]</span></h3>
            <p className="text-sm text-slate-800">
              The 6th Amendment supersedes the Federal Rules of Evidence. Even if a statement perfectly satisfies a hearsay exception, it may be strictly barred by the Constitution.<span className="hidden">[cite: 890, 891]</span>
            </p>
          </div>

          <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">The Historic Shift: Crawford v. Washington (2004) <span className="hidden">[cite: 892]</span></h3>
          <p className="text-sm text-slate-700 mb-4">
            Overruled <em>Ohio v. Roberts</em>. The Constitution demands reliability be tested by <strong>cross-examination</strong>, not a judge's assessment.<span className="hidden">[cite: 893, 894, 902]</span><br/><br/>
            <strong className="text-rose-900">The New Rule:</strong> If an out-of-court statement is <strong>Testimonial</strong>, it is strictly barred from a criminal trial unless the declarant is unavailable AND the defendant had a prior opportunity to cross-examine.<span className="hidden">[cite: 904]</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="space-y-4">
              <h4 className="font-bold text-rose-900 text-lg bg-pink-100 p-2 rounded">🚨 The Emergency Doctrine <span className="hidden">[cite: 911]</span></h4>
              <ul className="text-sm text-slate-700 space-y-3">
                <li><strong className="text-slate-900">Davis / Hammon:</strong> Non-testimonial if the primary purpose of police questioning is to meet an <em>ongoing emergency</em> (e.g., 911 call). Testimonial if the purpose is establishing past events for trial.<span className="hidden">[cite: 913, 914, 915]</span></li>
                <li><strong className="text-slate-900">Michigan v. Bryant:</strong> An emergency doesn't end just because the victim is safe; an armed shooter on the loose creates an ongoing public emergency.<span className="hidden">[cite: 916, 921]</span></li>
                <li><strong className="text-slate-900">Ohio v. Clark:</strong> Statements made to non-law enforcement (like preschool teachers) are much less likely to be testimonial. Primary purpose was protecting a child from harm.<span className="hidden">[cite: 923, 928]</span></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-rose-900 text-lg bg-pink-100 p-2 rounded">🔬 Forensic Reports <span className="hidden">[cite: 929]</span></h4>
              <ul className="text-sm text-slate-700 space-y-3">
                <li><strong className="text-slate-900">Melendez-Diaz:</strong> Notarized lab certificates testing cocaine are testimonial. Analysts are not "mere scriveners"; defense has a right to cross-examine them.<span className="hidden">[cite: 931, 936]</span></li>
                <li><strong className="text-slate-900">Bullcoming v. New Mexico:</strong> Prosecution cannot use a surrogate analyst. The certification contained representations about past human actions ripe for cross-examination.<span className="hidden">[cite: 945, 949]</span></li>
                <li><strong className="text-slate-900">Williams v. Illinois:</strong> Highly splintered plurality decision regarding expert reliance on outside DNA profiles.<span className="hidden">[cite: 938, 941]</span></li>
              </ul>
            </div>
          </div>

        </div>
      </details>

    </main>
  );
}