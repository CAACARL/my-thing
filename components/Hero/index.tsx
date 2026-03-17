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
          <h1 className="text-4xl md:text-5xl font-medium text-black tracking-tight">
            Carlo Alberto D. Albao
          </h1>
          <div className="w-115 h-0.5 bg-[#E53935] mt-4 mb-6" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-base text-black-600 max-w-xl">
            Building projects, learning new technologies, and turning ideas into working web
            applications. This portfolio highlights the projects I’ve developed while gaining
            experience and expanding my understanding of modern web development.
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
              href="https://gitlab.com/"
              target="_blank"
              className="text-[#E53935] underline underline-offset-4 decoration-[#E53935] hover:opacity-70 transition-opacity"
            >
              Gitlab
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
