import { Outlet } from "react-router";
import RankPoster from "../components/RankPoster";
export default function RankList() {
  return (
    <>
      <Outlet />
      <RankPoster title={"indonesia"} description={"haleluya"} rating={"5"} />
      <RankPoster title={"indonesia"} description={"haleluya"} rating={"5"} />
      <RankPoster title={"indonesia"} description={"haleluya"} rating={"5"} />
      <RankPoster title={"indonesia"} description={"haleluya"} rating={"5"} />
      <RankPoster title={"indonesia"} description={"haleluya"} rating={"5"} />
      <RankPoster title={"indonesia"} description={"haleluya"} rating={"5"} />
    </>
  );
}
