import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export default function NavMenu() {
  return (
    <>
      <nav className="flex flex-row items-center text-md text-blue-900 space-x-16">
        <a href="/menu">Home</a>
        <a href="/review">Review</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <Button
          variant="gradient"
          size="lg"
          className="flex items-center gap-2 px-12 py-4 bg-cyan-900"
        >
          <Link to={".."} target="blank">
            Login
          </Link>
        </Button>
      </nav>
    </>
  );
}
