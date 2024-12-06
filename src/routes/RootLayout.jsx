import HeaderSection from "../components/HeaderSection";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <HeaderSection />
      <Outlet />
    </>
  );
}
