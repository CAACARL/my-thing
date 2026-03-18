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
            <div className="font-bold text-black">Massage Booking System</div>
            <div className="text-sm text-black-600">
              System that allows customers to schedule professional massage therapists to visit
              their homes, while providing administrators tools to manage bookings and therapist
              availability.
            </div>
            <div className="text-xs text-black-400">Laravel, Boostrap, Javascript, HTML, CSS</div>
            <div className="text-xs">
              <a
                href="https://github.com/CAACARL/Sia2-Massage-Booking"
                target="_blank"
                className="text-[#E53935] underline hover:opacity-70 transition-opacity"
                title="Github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-7 h-7 relative top-0 md:top-10"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.93c.6.1.82-.26.82-.58v-2.02c-3.25.71-3.94-1.56-3.94-1.56-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.2 1.8 1.2 1.04 1.78 2.74 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.45-2.32 1.2-3.14-.12-.3-.52-1.5.12-3.13 0 0 .98-.31 3.2 1.2a11.2 11.2 0 015.84 0c2.2-1.5 3.18-1.2 3.18-1.2.65 1.63.25 2.83.13 3.13.75.82 1.2 1.86 1.2 3.14 0 4.52-2.75 5.5-5.36 5.79.41.35.77 1.04.77 2.1v3.12c0 .32.22.7.83.58A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_160px_100px] gap-4 items-baseline py-6 border-t border-gray-200">
            <div className="font-bold text-black">Inventory System</div>
            <div className="text-sm text-black-600">
              An inventory management system designed to track and manage stock levels, and
              streamline inventory operations through an intuitive administrative dashboard.
            </div>
            <div className="text-xs text-black-400">Laravel, Boostrap, Javascript, HTML, CSS</div>
            <div className="text-xs">
              <a
                href="https://github.com/CAACARL/IV-IS"
                target="_blank"
                className="text-[#E53935] underline hover:opacity-70 transition-opacity"
                title="Github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-7 h-7 relative top-0 md:top-10"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.93c.6.1.82-.26.82-.58v-2.02c-3.25.71-3.94-1.56-3.94-1.56-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.2 1.8 1.2 1.04 1.78 2.74 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.45-2.32 1.2-3.14-.12-.3-.52-1.5.12-3.13 0 0 .98-.31 3.2 1.2a11.2 11.2 0 015.84 0c2.2-1.5 3.18-1.2 3.18-1.2.65 1.63.25 2.83.13 3.13.75.82 1.2 1.86 1.2 3.14 0 4.52-2.75 5.5-5.36 5.79.41.35.77 1.04.77 2.1v3.12c0 .32.22.7.83.58A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
