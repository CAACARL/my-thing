"use client";

import React from "react";
import { FadeIn } from "../FadeIn";
export function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <section id="top" className="min-h-[60vh] flex items-center pt-24 pb-12">
      <div className="w-full">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-medium text-black tracking-tight">Carl</h1>
          <div className="w-16 h-0.5 bg-[#E53935] mt-4 mb-6" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-base text-gray-600 max-w-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos laudantium quis hic magni
            dolore libero, quas veniam optio, neque, a placeat suscipit et odit unde veritatis
            eligendi eveniet quos modi?
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-8 flex items-center gap-2 text-sm">
            <a
              href="https://github.com/CAACARL"
              target="_blank"
              className="text-[#E53935] underline underline-offset-4 decoration-[#E53935] hover:opacity-70 transition-opacity"
            >
              Github
            </a>
            <span className="text-gray-400">/</span>
            <a
              href="https://www.youtube.com/shorts/KVcOk78e9mM"
              target="_blank"
              className="text-[#E53935] underline underline-offset-4 decoration-[#E53935] hover:opacity-70 transition-opacity"
            >
              Suntokan
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
