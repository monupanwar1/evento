"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const hanldeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText) return;
    router.push(`events/${searchText}`);
  };
  return (
    <form onSubmit={hanldeSubmit} className="w-full sm:w-[580px]">
      <input
        className=" rounded-lg bg-white/[7%] w-full h-16 px-6 outline-none ring-[#a4f839]/50 transition focus:ring-2 focus:bg-white/10"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search events in any city..."
        spellCheck={false}
      />
    </form>
  );
}
