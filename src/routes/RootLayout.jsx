import FooterSection from "../components/FooterSection";
import HeaderSection from "../components/HeaderSection";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <main className="flex flex-col w-full px-32 min-h-[100dvh]">
      <HeaderSection />
      <Outlet />
      <FooterSection />
    </main>
  );
}
