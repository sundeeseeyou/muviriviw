import Poster from "../components/Poster";
import { Outlet } from "react-router";

export default function PostList() {
  return (
    <>
      <Outlet />
      <main>
        <h2>Recent Reviewed Movies</h2>
        <section className="flex justify-around px-32 gap-4 py-8 h-4/5">
          <Poster title={"Film No 1"} rating={"⭐⭐⭐⭐"} />
          <Poster title={"Film No 2"} rating={"⭐⭐⭐"} />
          <Poster title={"Film No 3"} rating={"⭐⭐⭐⭐"} />
          <Poster title={"Film No 4"} rating={"⭐⭐⭐⭐⭐"} />
        </section>
      </main>
    </>
  );
}
