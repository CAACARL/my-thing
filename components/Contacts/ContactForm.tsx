"use client";

export function ContactForm() {
  return (
    <form className="max-w-md space-y-6" onSubmit={(e) => e.preventDefault()}>
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
          rows={4}
          className="w-full border border-gray-300 px-3 py-2.5 text-sm"
          required
        />
      </div>

      <button type="submit" className="bg-[#E53935] text-white text-xs uppercase px-6 py-2.5">
        Send Message
      </button>
    </form>
  );
}
