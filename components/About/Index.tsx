"use client";

import React from "react";
import { FadeIn } from "@/components/FadeIn";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <FadeIn>
        <h2 className="text-xs uppercase tracking-widest text-[#E53935] font-medium mb-8">About</h2>
        <p className="text-base text-gray-700 leading-loose max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae accusamus, veritatis,
          repudiandae qui laboriosam architecto tenetur porro, debitis ea molestias voluptatum eaque
          reprehenderit deleniti commodi fuga consequuntur consectetur voluptas quod.
        </p>
        <div className="border-t border-gray-200 mt-16 w-full" />
      </FadeIn>
    </section>
  );
}
