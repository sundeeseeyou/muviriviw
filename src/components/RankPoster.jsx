export default function RankPoster({ description, image, rating, title }) {
  return (
    <>
      <div className="flex flex-row w-full border-8 border-[pink] gap-4">
        <div className="flex flex-col items-center justify-center text-4xl text-white font-bold bg-purple-500 w-64 h-auto rounded shadow-lg">
          <p>Movie 1</p>
        </div>
        <div className="flex flex-col p-8 justify-start text-4xl text-white font-bold bg-yellow-500 w-full h-auto rounded shadow-lg gap-4">
          <p>Title</p>
          <p>Description</p>
        </div>
      </div>
    </>
  );
}
