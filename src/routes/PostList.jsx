import HeadingText from "../components/HeadingText";
import Poster from "../components/Poster";
import { Outlet } from "react-router";
import movie from "../data";

export default function PostList() {
  return (
    <>
      <Outlet />
      <section id="movie-list" className="py-10">
        <HeadingText text={"Recent Reviewed Movies"} />
        <section className="flex justify-around gap-4 py-8 h-4/5">
          {movie
            .slice(-4)
            .reverse()
            .map((x) => (
              <Poster title={x.title} rating={x.rating} />
            ))}
        </section>
      </section>
    </>
  );
}
