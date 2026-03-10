"use client";

import React from "react";
import { FadeIn } from "@/components/FadeIn";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <FadeIn>
        <h2 className="text-xs uppercase tracking-widest text-[#E53935] font-medium mb-8">About</h2>
        <p className="text-base text-gray-700 leading-loose max-w-2xl">
          Hi, I’m Carl, Excited to learn new technologies and continuously improve my skills.
        </p>
        <div className="border-t border-gray-200 mt-16 w-full" />
      </FadeIn>
    </section>
  );
}
