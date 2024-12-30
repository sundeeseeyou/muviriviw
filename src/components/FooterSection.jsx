import { Link } from "react-router";

export default function FooterSection() {
  return (
    <>
      <footer className="flex flex-row py-4 mt-10 border-t-2 justify-center">
        <p className="text-xs">
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
