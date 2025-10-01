import Aside from "@/components/aside/aside";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/*<header></header>*/}
      <main className="h-[100%] flex">
        <Aside />
        <div>{children}</div>
      </main>
      {/*<footer></footer>*/}
    </>
  );
}
