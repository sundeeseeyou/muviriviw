import { Link } from "react-router";

export default function FooterSection() {
  return (
    <>
      <footer className="flex flex-row py-4 justify-center bottom-0 absolute self-center">
        <p className="text-md">
          Composed by{" "}
          <Link
            className="text-primaryColor font-bold hover:opacity-70"
            to="https://github.com/sundeeseeyou"
            target="blank"
          >
            sundeeseeyou
          </Link>{" "}
          while ☕ &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
