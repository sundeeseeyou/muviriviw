import FooterSection from "../components/FooterSection";
import HeaderSection from "../components/HeaderSection";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <main className="w-full px-32">
      <HeaderSection />
      <Outlet />
      <FooterSection />
    </main>
  );
}
