import { Outlet } from "react-router";
import RankPoster from "../components/RankPoster";
import HeadingText from "../components/HeadingText";
import movie from "../data";
export default function RankList() {
  return (
    <>
      <Outlet />
      <section id="rank-list" className="flex flex-col gap-8 h-full py-4 px-4">
        <HeadingText text={"Top 10 Rank movie by score"} />
        {movie.map((x) => (
          <RankPoster
            key={x.id}
            movieId={x.id}
            title={x.title}
            description={x.desc}
            rating={x.rating}
          />
        ))}
      </section>
    </>
  );
}
