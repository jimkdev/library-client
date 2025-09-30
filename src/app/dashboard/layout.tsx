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
      <main>
        <Aside />
        <div>{children}</div>
      </main>
      {/*<footer></footer>*/}
    </>
  );
}
