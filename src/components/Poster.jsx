export default function Poster({ image, title, rating }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center container bg-[#dfdfdf] w-60 h-80 rounded shadow-lg">
        <h2 className="text-2xl">{title}</h2>
        <p>{rating}</p>
      </div>
    </>
  );
}
