import HeaderSection from "../components/HeaderSection";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <main className="px-32">
      <HeaderSection />
      <Outlet />
    </main>
  );
}
