import { Outlet } from "react-router";
import RankPoster from "../components/RankPoster";
import HeadingText from "../components/HeadingText";
export default function RankList() {
  return (
    <>
      <Outlet />
      <section id="rank-list" className="flex flex-col gap-8 h-full py-8 px-8">
        <HeadingText text={"Top 10 Rank movie by score"} />
        <RankPoster title={"Indonesia"} description={"Indonesia"} />
        <RankPoster />
        <RankPoster />
        <RankPoster />
      </section>
    </>
  );
}
