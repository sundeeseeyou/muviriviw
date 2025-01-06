import NavMenu from "./NavMenu";
import { Link } from "react-router";
import logo from "../assets/img/logo.png";

export default function HeaderSection() {
  return (
    <>
      <header className="flex justify-between h-[10vh] w-full bg-white py-5 items-center sticky">
        <Link to={"/"}>
          <img src={logo} className="w-48 h-auto" />
        </Link>
        <NavMenu />
      </header>
    </>
  );
}
