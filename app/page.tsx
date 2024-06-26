"use client";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3,
          className: "dark:bg-dark border dark:border-line dark:text-white/90",
        }}
      />
    </main>
  );
}
