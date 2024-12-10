import { Outlet } from "react-router";
import RankPoster from "../components/RankPoster";
export default function RankList() {
  return (
    <>
      <Outlet />
      <RankPoster />
    </>
  );
}