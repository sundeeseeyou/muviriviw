export default function RankPoster({ description, image, rating, title }) {
  return (
    <>
      <div className="flex flex-row w-full gap-4">
        <div className="flex flex-col items-center justify-center text-4xl text-white font-bold bg-purple-500 w-64 h-72 rounded shadow-lg">
          <p>Movie 1</p>
        </div>
        <div className="flex flex-col p-8 justify-start w-full h-auto gap-4">
          <h3 className="text-textColor text-2xl font-bold">{title}</h3>
          <p className="text-sm text-textColor">{description}</p>
        </div>
      </div>
    </>
  );
}
