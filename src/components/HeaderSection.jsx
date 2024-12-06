import NavMenu from "./NavMenu";
import { RiMovie2Fill } from "react-icons/ri";

export default function HeaderSection() {
  return (
    <>
      <header className="flex justify-between h-[10vh] w-full px-32 bg-white py-5 items-center sticky">
        <span className="text-4xl text-primaryColor">
          <RiMovie2Fill className="inline" />
          muviriviw
        </span>
        <NavMenu />
      </header>
    </>
  );
}
