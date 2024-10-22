"use client";
import Example from "@/components/HeadlessTabs/HeadlessTabs";
import Home_Left from "@/components/Home/Home_Left";
import "@@/css/style.css";

export default function Home() {
  return (
    <main className="flex gap-5 justify-between">
      <Home_Left />
      <Example/>
    </main>
  );
}
