import React from "react";
import { FadeIn } from "../FadeIn";
export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <FadeIn>
        <h2 className="text-xs uppercase tracking-widest text-[#E53935] font-medium mb-8">
          Projects
        </h2>

        <div>
          {/* Project 1 */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_160px_100px] gap-4 items-baseline py-6 border-t border-gray-200">
            <div className="font-medium text-black">Nexus Analytics</div>
            <div className="text-sm text-gray-600">
              Real-time event tracking and analytics dashboard for SaaS products.
            </div>
            <div className="text-xs text-gray-400">React, TypeScript, ClickHouse, Go</div>
            <div className="text-xs">
              <a href="#" className="text-[#E53935] underline hover:opacity-70 transition-opacity">
                GitHub
              </a>
              <span className="text-gray-400 mx-1">·</span>
              <a href="#" className="text-[#E53935] underline hover:opacity-70 transition-opacity">
                Live
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_160px_100px] gap-4 items-baseline py-6 border-t border-gray-200">
            <div className="font-medium text-black">Lumina Editor</div>
            <div className="text-sm text-gray-600">
              A block-based rich text editor with collaborative features.
            </div>
            <div className="text-xs text-gray-400">Next.js, ProseMirror, Yjs, WebSockets</div>
            <div className="text-xs">
              <a href="#" className="text-[#E53935] underline hover:opacity-70 transition-opacity">
                GitHub
              </a>
              <span className="text-gray-400 mx-1">·</span>
              <a href="#" className="text-[#E53935] underline hover:opacity-70 transition-opacity">
                Live
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_160px_100px] gap-4 items-baseline py-6 border-t border-gray-200">
            <div className="font-medium text-black">Aura UI</div>
            <div className="text-sm text-gray-600">
              Minimalist, accessible component library for React applications.
            </div>
            <div className="text-xs text-gray-400">React, Tailwind CSS, Radix UI, Storybook</div>
            <div className="text-xs">
              <a href="#" className="text-[#E53935] underline hover:opacity-70 transition-opacity">
                GitHub
              </a>
              <span className="text-gray-400 mx-1">·</span>
              <a href="#" className="text-[#E53935] underline hover:opacity-70 transition-opacity">
                Live
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_160px_100px] gap-4 items-baseline py-6 border-t border-gray-200 border-b">
            <div className="font-medium text-black">Orbit CLI</div>
            <div className="text-sm text-gray-600">
              Command-line tool for managing multi-cloud deployments.
            </div>
            <div className="text-xs text-gray-400">Rust, AWS SDK, Docker, GitHub Actions</div>
            <div className="text-xs">
              <a href="#" className="text-[#E53935] underline hover:opacity-70 transition-opacity">
                GitHub
              </a>
              <span className="text-gray-400 mx-1">·</span>
              <a href="#" className="text-[#E53935] underline hover:opacity-70 transition-opacity">
                Live
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
