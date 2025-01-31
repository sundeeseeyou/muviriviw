export default function Poster({ image, title, rating }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center container bg-primaryColor w-60 h-80 rounded-xl hover:shadow-2xl hover:cursor-pointer hover:transition-transform">
        <h2 className="text-2xl text-white">{title}</h2>
        <p className="text-yellow-600 text-2xl font-bold">
          {rating}
          <span className="text-white text-sm font-bold"> / 10</span>
        </p>
      </div>
    </>
  );
}
