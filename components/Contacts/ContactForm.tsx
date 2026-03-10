"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Message sent!");
        form.reset();
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  }

  return (
    <form className="max-w-md space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className="block text-xs uppercase tracking-widest text-gray-500 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full border border-gray-300 px-3 py-2.5 text-sm"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs uppercase tracking-widest text-gray-500 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full border border-gray-300 px-3 py-2.5 text-sm"
          required
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-widest text-gray-500 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-gray-300 px-3 py-2.5 text-sm"
          required
        />
      </div>

      <button type="submit" className="bg-[#E53935] text-white text-xs uppercase px-6 py-2.5">
        Send Message
      </button>

      {status && <p className="text-sm text-gray-600">{status}</p>}
    </form>
  );
}
