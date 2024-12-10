import HeadingText from "../components/HeadingText";
import Poster from "../components/Poster";
import { Outlet } from "react-router";

export default function PostList() {
  return (
    <>
      <Outlet />
      <section id="movie-list" className="py-10">
        <HeadingText headingText={"Recent Reviewed Movies"} />
        <section className="flex justify-around gap-4 py-8 h-4/5">
          <Poster title={"Film No 1"} rating={"⭐⭐⭐⭐"} />
          <Poster title={"Film No 2"} rating={"⭐⭐⭐"} />
          <Poster title={"Film No 3"} rating={"⭐⭐⭐⭐"} />
          <Poster title={"Film No 4"} rating={"⭐⭐⭐⭐⭐"} />
        </section>
      </section>
    </>
  );
}
