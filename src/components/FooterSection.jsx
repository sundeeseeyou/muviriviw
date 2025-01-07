import { Link } from "react-router";

export default function FooterSection() {
  return (
    <>
      <footer className="flex flex-row bottom-0 py-4 justify-center items-center w-11/12 absolute">
        <p className="text-sm">
          Coded with ☕ by{" "}
          <Link
            className="text-primaryColor font-bold hover:opacity-70"
            to="https://github.com/sundeeseeyou"
            target="blank"
          >
            sundeeseeyou
          </Link>{" "}
          &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
