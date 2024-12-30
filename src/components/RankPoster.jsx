export default function RankPoster({
  movieId,
  description,
  image,
  rating,
  title,
}) {
  return (
    <>
      <div className="flex flex-row w-full gap-4 align-middle justify-center">
        <div className="flex flex-col text-xl  items-center justify-center text-white font-bold bg-gray-600 w-32 h-auto rounded shadow-lg">
          <p>Movie {movieId}</p>
        </div>
        <div className="flex flex-col p-4 justify-start w-full h-5/6 gap-2">
          <div className="flex flex-row justify-between">
            <h3 className="text-textColor text-2xl py-2 font-bold">{title}</h3>
            <p className="py-3">Score: ⭐⭐⭐⭐⭐</p>
          </div>
          <p className="text-xs text-textColor">{description}</p>
        </div>
      </div>
    </>
  );
}
