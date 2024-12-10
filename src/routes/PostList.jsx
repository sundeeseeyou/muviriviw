import Poster from "../components/Poster";
import { Outlet } from "react-router";

export default function PostList() {
  return (
    <>
      <Outlet />
      <main className="px-32 py-10 h-screen">
        <h2 className="text-3xl">Recent Reviewed Movies</h2>
        <section className="flex justify-around gap-4 py-8 h-4/5">
          <Poster title={"Film No 1"} rating={"⭐⭐⭐⭐"} />
          <Poster title={"Film No 2"} rating={"⭐⭐⭐"} />
          <Poster title={"Film No 3"} rating={"⭐⭐⭐⭐"} />
          <Poster title={"Film No 4"} rating={"⭐⭐⭐⭐⭐"} />
        </section>
      </main>
    </>
  );
}
