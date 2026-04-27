import React from 'react';

export default function ArticleSix() {
  return (
    <main className="max-w-5xl mx-auto p-6 lg:p-8 mt-8 mb-12 space-y-8 bg-white rounded-3xl shadow-xl border border-pink-100 font-sans text-slate-700">
      
      {/* HEADER SECTION */}
      <header className="mb-10 border-b-4 border-pink-200 pb-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-rose-800 drop-shadow-sm">
          🌸 Article VI: Witnesses
        </h1>
        <p className="text-lg text-rose-600 mt-3 font-medium italic">
          Rules 601–615: Competency, memory refreshing, and the doctrines of impeachment.
        </p>
      </header>

      {/* 1. COMPETENCY & EXAMINATION */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300" open>
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          1. Competency and Examination (Rules 601-606)
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          
          <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">Fundamental Requirements <span className="hidden">[cite: 453]</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
            <div className="bg-pink-50/40 p-4 rounded-xl border border-pink-100 shadow-sm">
              <strong className="text-rose-900 block mb-2 text-lg">🧑‍⚖️ Competency (601)</strong>
              <p>Every person is presumed competent. Intoxication/mental illness go to <em>credibility</em> for the jury, not admissibility. Children are presumed competent. <span className="hidden">[cite: 455, 457, 458]</span></p>
            </div>
            <div className="bg-pink-50/40 p-4 rounded-xl border border-pink-100 shadow-sm">
              <strong className="text-rose-900 block mb-2 text-lg">👁️ Personal Knowledge (602)</strong>
              <p>A lay witness may only testify to matters they have personally perceived with their senses. No speculation allowed. <span className="hidden">[cite: 460, 461]</span></p>
            </div>
            <div className="bg-pink-50/40 p-4 rounded-xl border border-pink-100 shadow-sm">
              <strong className="text-rose-900 block mb-2 text-lg">✋ Oath (603)</strong>
              <p>Must solemnly promise to tell the truth in a way that "pricks the conscience." Affirmations are permitted for religious/atheist objections. <span className="hidden">[cite: 462, 463]</span></p>
            </div>
          </div>

          <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2 mt-6">Specialized Participants <span className="hidden">[cite: 464]</span></h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
            <li><strong>Interpreters (604):</strong> Must be qualified and sworn. Courts have discretion to use family members if needed (<em>U.S. v. Bell</em>). <span className="hidden">[cite: 465, 466, 481, 484]</span></li>
            <li><strong>Judges (605):</strong> Absolutely forbidden from testifying in a trial they are overseeing. <span className="hidden">[cite: 467]</span></li>
            <li><strong>Jurors (606):</strong> Cannot testify. Post-verdict, the "No-Impeachment Rule" prevents them from invalidating a verdict. 
              <br/><em className="text-rose-800 pl-4 block mt-1">Exceptions: Extraneous prejudice, outside influences, verdict form mistakes, and overt racial bias (Pena-Rodriguez). <span className="hidden">[cite: 469, 470, 471, 486, 488]</span></em>
            </li>
          </ul>

        </div>
      </details>

      {/* 2. REFRESHING MEMORY */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          2. Refreshing Memory & Impaired Recollection
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white p-5 rounded-xl border border-pink-200 shadow-sm">
              <h3 className="font-bold text-lg text-rose-800 mb-2">Rule 612: Refreshing Recollection <span className="hidden">[cite: 491]</span></h3>
              <p className="text-sm text-slate-700 mb-2">Used when a witness forgets details. The item used to refresh memory is <strong>not evidence</strong>. <span className="hidden">[cite: 492, 494]</span></p>
              <ul className="list-disc pl-4 text-sm text-slate-600 space-y-1">
                <li>Witness reviews it silently, hands it back, and testifies from revived memory. <span className="hidden">[cite: 495, 496]</span></li>
                <li>Opposing party has the right to inspect, cross-examine on it, and introduce it. <span className="hidden">[cite: 497]</span></li>
                <li><strong className="text-rose-900">Case: Baker v. State</strong> - You can use a document written by a different person to refresh a witness's memory since the stimulus is not evidence. <span className="hidden">[cite: 504, 507, 508, 510]</span></li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-xl border border-pink-200 shadow-sm">
              <h3 className="font-bold text-lg text-rose-800 mb-2">Rule 803(5): Past Recollection Recorded <span className="hidden">[cite: 498]</span></h3>
              <p className="text-sm text-slate-700 mb-2">When memory cannot be refreshed, the record can be admitted as <strong>substantive evidence</strong>. <span className="hidden">[cite: 499]</span></p>
              <ul className="list-disc pl-4 text-sm text-slate-600 space-y-1">
                <li>Must have been made/adopted while the matter was fresh and be accurate. <span className="hidden">[cite: 501, 502]</span></li>
                <li>The record is read into evidence; the physical exhibit is only received if offered by an adverse party. <span className="hidden">[cite: 503]</span></li>
                <li><strong className="text-rose-900">Case: U.S. v. Williams</strong> - Witness "adopted" a Secret Service statement by signing it. <span className="hidden">[cite: 511, 514]</span></li>
              </ul>
            </div>

          </div>
        </div>
      </details>

      {/* 3. IMPEACHMENT */}
      <details className="group bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
        <summary className="cursor-pointer font-extrabold text-xl p-5 bg-pink-50/50 group-open:bg-rose-100 group-open:text-rose-900 text-rose-700 transition-colors flex justify-between items-center">
          3. Impeachment Doctrines (Rules 607-609, 613)
          <span className="text-2xl group-open:rotate-180 transition-transform text-pink-400">▾</span>
        </summary>
        <div className="p-6 space-y-6 bg-white">
          
          <div className="bg-pink-50 p-4 rounded-xl border border-pink-100">
            <h3 className="font-bold text-rose-900 text-lg mb-1">Who May Impeach (Rule 607) <span className="hidden">[cite: 521]</span></h3>
            <p className="text-sm text-slate-700">
              <strong>Any party</strong> may attack credibility, abandoning the common-law voucher rule. <span className="hidden">[cite: 522, 523]</span> <em>Limitation:</em> Cannot be a "subterfuge" just to introduce inadmissible hearsay (<em>U.S. v. Ince</em>). <span className="hidden">[cite: 524, 546, 549]</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <div className="space-y-4">
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">Rule 608: Character for Truthfulness <span className="hidden">[cite: 525]</span></h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li><strong className="text-slate-900">608(a):</strong> Limited to reputation/opinion on truthfulness. <span className="hidden">[cite: 526]</span> Cannot bolster a witness until attacked. <span className="hidden">[cite: 527]</span></li>
                <li><strong className="text-slate-900">608(b):</strong> Extrinsic evidence of specific bad acts is prohibited. <span className="hidden">[cite: 528]</span> Inquiries are allowed on cross-exam if strictly probative of truthfulness. <span className="hidden">[cite: 529]</span></li>
                <li className="bg-slate-50 p-2 rounded"><em>Case: U.S. v. McMillon</em> - Sexual manipulation is not probative of a character for untruthfulness. <span className="hidden">[cite: 552, 554, 555]</span></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">Rule 609: Criminal Convictions <span className="hidden">[cite: 530]</span></h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li><strong className="text-slate-900">Felonies (609(a)(1)):</strong> Admitted subject to 403 balancing. For defendants, admitted only if probative value <em>outweighs</em> prejudice. <span className="hidden">[cite: 532, 533, 534]</span></li>
                <li><strong className="text-slate-900">Crimen Falsi (609(a)(2)):</strong> Crimes of dishonesty (perjury/fraud). <strong>Must</strong> be admitted; judge has no discretion. <span className="hidden">[cite: 535, 536]</span></li>
                <li className="bg-slate-50 p-2 rounded"><em>Case: U.S. v. Brackeen</em> - Bank robbery is violent taking, not deceit, so it is not <em>crimen falsi</em>. <span className="hidden">[cite: 557, 560, 562]</span></li>
              </ul>
            </div>

            <div className="col-span-1 lg:col-span-2 space-y-4">
              <h3 className="font-bold text-rose-800 border-b-2 border-pink-100 pb-2">Rule 613: Prior Inconsistent Statements <span className="hidden">[cite: 539]</span></h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>Suggests unreliability or deception. No formal format required. <span className="hidden">[cite: 540, 541]</span></li>
                <li><strong>Extrinsic Evidence (613(b)):</strong> Admissible only if the witness is given the opportunity to explain or deny the statement. <span className="hidden">[cite: 544]</span></li>
                <li><strong>"Three C's":</strong> Commit, Credit, Confront. <span className="hidden">[cite: 545]</span></li>
                <li><strong className="text-rose-900">Case: Jenkins v. Anderson</strong> - Pre-arrest silence can be used for impeachment without violating the 5th Amendment if no Miranda warnings were given. <span className="hidden">[cite: 569, 571, 573]</span></li>
              </ul>
            </div>

          </div>

        </div>
      </details>

    </main>
  );
}