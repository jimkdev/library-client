import Aside from "@/components/aside/aside";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="h-[5%] bg-cyan-700"></header>
      <main className="h-[85%] flex">
        <Aside />
        <div className="pt-10 pl-10">{children}</div>
      </main>
      <footer className="h-[10%] bg-cyan-700"></footer>
    </>
  );
}
