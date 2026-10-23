import type { ReactNode } from "react";
import MyCard from "./MyCard";
import SideMenu from "./SideMenu";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="stage">
      <div className="frame">
        <MyCard />
        <section className="content">{children}</section>
        <SideMenu />
      </div>
    </main>
  );
}
