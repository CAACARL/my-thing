import React from "react";
export function Footer() {
  return (
    <footer className="py-8 border-t-2 border-[#E53935] mt-12">
      <div className="text-center text-xs uppercase tracking-widest text-black-400">
        © {new Date().getFullYear()} Carl
      </div>
    </footer>
  );
}
