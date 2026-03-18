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
          <div className="w-full h-0.5 bg-[#E53935] mt-4 mb-6" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-base text-black-600">
            SBuilding projects, learning new technologies, and turning ideas into working web
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
              title="Github"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-7 h-7 relative top-1"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.93c.6.1.82-.26.82-.58v-2.02c-3.25.71-3.94-1.56-3.94-1.56-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.2 1.8 1.2 1.04 1.78 2.74 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.45-2.32 1.2-3.14-.12-.3-.52-1.5.12-3.13 0 0 .98-.31 3.2 1.2a11.2 11.2 0 015.84 0c2.2-1.5 3.18-1.2 3.18-1.2.65 1.63.25 2.83.13 3.13.75.82 1.2 1.86 1.2 3.14 0 4.52-2.75 5.5-5.36 5.79.41.35.77 1.04.77 2.1v3.12c0 .32.22.7.83.58A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>
            <span className="mx-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M10 13a5 5 0 007 0l2-2a5 5 0 00-7-7l-1 1" />
                <path d="M14 11a5 5 0 00-7 0l-2 2a5 5 0 007 7l1-1" />
              </svg>
            </span>
            <a
              href="https://gitlab.com/"
              target="_blank"
              className="text-[#E53935] underline underline-offset-4 decoration-[#E53935] hover:opacity-70 transition-opacity"
              title="Gitlab"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 relative top-2"
              >
                <path d="M22.546 9.42l-2.18-6.72a.75.75 0 00-1.43 0l-1.47 4.52H6.534l-1.47-4.52a.75.75 0 00-1.43 0L1.454 9.42a1.5 1.5 0 00.54 1.68l9.24 6.72a1.5 1.5 0 001.72 0l9.24-6.72a1.5 1.5 0 00.54-1.68z" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
