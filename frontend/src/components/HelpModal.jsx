import React from 'react';
import { BookOpen } from 'lucide-react';

export const HelpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border border-[#DDE2E8] rounded-lg w-full max-w-4xl h-[90vh] shadow-lg flex flex-col overflow-hidden">

        {/* Header */}
        <div className="flex items-center px-5 py-3 border-b border-[#DDE2E8] shrink-0">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-[#426B8A]" />

            <h2 className="text-base font-bold text-[#253449]">
              Statistical T-Test Reference Guide
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 overflow-y-auto px-5 py-4">

          {/* 1. What is a T-Test? */}
          <section className="mb-5">
            <h3 className="text-xs font-bold uppercase tracking-wide text-[#426B8A] mb-2">
              1. What is a T-Test?
            </h3>

            <p className="text-xs leading-relaxed text-[#718096]">
              A t-test is an inferential statistical test used to determine if
              there is a significant difference between the means of one or
              two groups. It evaluates observed sample mean differences against
              expected variation under the null hypothesis (H₀).
            </p>
          </section>

          {/* 2. Mathematical Formulas */}
          <section className="mb-5">
            <h3 className="text-xs font-bold uppercase tracking-wide text-[#426B8A] mb-3">
              2. Mathematical Formulas
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

              {/* One Sample */}
              <div className="border border-[#DDE2E8] rounded-md bg-[#F8FAFC] p-3">
                <h4 className="text-xs font-semibold text-[#253449] mb-2">
                  One-Sample T-Test
                </h4>

                <div className="bg-white border border-[#DDE2E8] rounded px-2 py-2 text-xs font-mono text-[#425466]">
                  t = (x̄ - μ₀) / (s / √n)
                </div>

                <p className="text-[10px] text-[#718096] mt-2">
                  df = n - 1
                </p>
              </div>

              {/* Welch */}
              <div className="border border-[#DDE2E8] rounded-md bg-[#F8FAFC] p-3">
                <h4 className="text-xs font-semibold text-[#253449] mb-2">
                  Welch's Independent T-Test
                </h4>

                <div className="bg-white border border-[#DDE2E8] rounded px-2 py-2 text-xs font-mono text-[#425466]">
                  t = (x̄₁ - x̄₂) / √(s₁²/n₁ + s₂²/n₂)
                </div>

                <p className="text-[10px] text-[#718096] mt-2">
                  Satterthwaite df
                </p>
              </div>

              {/* Paired */}
              <div className="border border-[#DDE2E8] rounded-md bg-[#F8FAFC] p-3">
                <h4 className="text-xs font-semibold text-[#253449] mb-2">
                  Paired Samples T-Test
                </h4>

                <div className="bg-white border border-[#DDE2E8] rounded px-2 py-2 text-xs font-mono text-[#425466]">
                  t = d̄ / (s<sub>d</sub> / √n)
                </div>

                <p className="text-[10px] text-[#718096] mt-2">
                  df = n - 1
                </p>
              </div>

            </div>
          </section>

          {/* 3. Welch vs Student */}
          <section className="mb-5">
            <div className="border border-[#DDE2E8] rounded-md bg-[#F8FAFC] p-3">
              <h3 className="text-xs font-bold text-[#426B8A] mb-2">
                3. Welch's t-Test vs. Student's Pooled T-Test
              </h3>

              <p className="text-xs leading-relaxed text-[#718096]">
                <strong>Welch's t-test</strong> (the default in this simulator
                and modern software like R and SciPy) relaxes the equal variance
                assumption (σ₁² = σ₂²). It uses Satterthwaite degrees of freedom
                and protects against Type I errors when sample sizes or variances
                differ.
              </p>
            </div>
          </section>

          {/* 4. Effect Size */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wide text-[#426B8A] mb-2">
              4. Effect Size (Cohen's d)
            </h3>

            <ul className="space-y-1 text-xs text-[#718096]">
              <li>
                • <strong>|d| &lt; 0.2:</strong> Negligible effect size
              </li>

              <li>
                • <strong>0.2 ≤ |d| &lt; 0.5:</strong> Small effect size
              </li>

              <li>
                • <strong>0.5 ≤ |d| &lt; 0.8:</strong> Medium effect size
              </li>

              <li>
                • <strong>|d| ≥ 0.8:</strong> Large effect size
              </li>
            </ul>
          </section>

        </div>

        {/* Footer */}
        <div className="shrink-0 px-5 py-3 border-t border-[#DDE2E8] bg-white flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-[#426B8A] hover:bg-[#34556F] text-white font-medium text-xs transition cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
