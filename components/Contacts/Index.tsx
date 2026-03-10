"use client";

import { FadeIn } from "../FadeIn";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <FadeIn>
        <h2 className="text-xs uppercase tracking-widest text-[#E53935] font-medium mb-8">
          Contact
        </h2>

        <p className="text-base text-black-600 mb-6 font-bold">Send me an email!</p>

        <ContactForm />
      </FadeIn>
    </section>
  );
}
