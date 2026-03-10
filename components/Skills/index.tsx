import React from "react";
import { FadeIn } from "../FadeIn";
export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <FadeIn>
        <h2 className="text-xs uppercase tracking-widest text-[#E53935] font-medium mb-8">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Languages */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#E53935] font-medium mb-4">
              Languages
            </h3>
            <div className="space-y-2 text-sm text-black-700 leading-relaxed font-bold">
              <div>Javascript</div>
              <div>HTML</div>
              <div>CSS</div>
              <div>PHP</div>
              <div>Java</div>
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#E53935] font-medium mb-4">
              Frameworks
            </h3>
            <div className="space-y-2 text-sm text-black-700 leading-relaxed font-bold">
              <div>React</div>
              <div>Next.js</div>
              <div>Laravel</div>
              <div>Tailwind CSS</div>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#E53935] font-medium mb-4">
              Tools
            </h3>
            <div className="space-y-2 text-sm text-black-700 leading-relaxed font-bold">
              <div>XAMPP</div>
              <div>Git</div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
