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
              >
                GitHub
              </a>
              <span className="text-gray-400 mx-1">·</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_160px_100px] gap-4 items-baseline py-6 border-t border-gray-200">
            <div className="font-bold text-black">Inventory System</div>
            <div className="text-sm text-black-600">
              An inventory management system designed to track products, manage stock levels, and
              streamline inventory operations through an intuitive administrative dashboard.
            </div>
            <div className="text-xs text-black-400">Laravel, Boostrap, Javascript, HTML, CSS</div>
            <div className="text-xs">
              <a
                href="https://github.com/CAACARL/IV-IS"
                target="_blank"
                className="text-[#E53935] underline hover:opacity-70 transition-opacity"
              >
                GitHub
              </a>
              <span className="text-gray-400 mx-1">·</span>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
