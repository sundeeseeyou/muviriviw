import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export default function NavMenu() {
  return (
    <>
      <nav className="flex flex-row items-center text-md text-primaryColor space-x-16 font-bold">
        <Link to="/menu">Home</Link>
        <Link to="/review">Review</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Button className="text-white bg-primaryColor px-12 py-4 shadow-sm">
          <Link to={"/login"} target="blank">
            Login
          </Link>
        </Button>
      </nav>
    </>
  );
}
