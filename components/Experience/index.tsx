import React from "react";
import { FadeIn } from "../FadeIn";
export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <FadeIn>
        <h2 className="text-xs uppercase tracking-widest text-[#E53935] font-medium mb-8">
          Experience
        </h2>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-[140px_1fr_180px] gap-4 pb-3 text-xs uppercase tracking-widest text-gray-400">
          <div>Period</div>
          <div>Role</div>
          <div>Company</div>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_180px] gap-2 md:gap-4 py-4 border-t border-gray-200">
          <div className="text-sm text-gray-500">2026 — </div>
          <div className="text-sm font-medium text-black">Intern</div>
          <div className="text-sm text-gray-600">Innoendo IT Solutions</div>
        </div>
      </FadeIn>
    </section>
  );
}
