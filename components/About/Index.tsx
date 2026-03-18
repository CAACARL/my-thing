"use client";

import React from "react";
import { FadeIn } from "@/components/FadeIn";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4">
      <FadeIn>
        <h2 className="text-xs uppercase tracking-widest text-[#E53935] font-medium mb-8">About</h2>

        <p className="text-base text-black-700 leading-loose md:max-w-2xl">
          Hi, I’m Carl, an aspiring web developer with a strong interest in building practical and
          user-friendly web applications. I’m always eager to learn new technologies and improve my
          skills through hands-on projects. Through continuous learning and practice, I aim to grow
          and create efficient and reliable web systems.
        </p>

        <div className="border-t border-gray-200 mt-16 w-full" />
      </FadeIn>
    </section>
  );
}
