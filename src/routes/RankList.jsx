import { Outlet } from "react-router";
import RankPoster from "../components/RankPoster";
export default function RankList() {
  return (
    <>
      <Outlet />
      <section id="rank-list" className="flex flex-col h-full py-8 px-8">
        <RankPoster />
        <RankPoster />
        <RankPoster />
        <RankPoster />
        <RankPoster />
        <RankPoster />
        <RankPoster />
        <RankPoster />
        <RankPoster />
        <RankPoster />
      </section>
    </>
  );
}
