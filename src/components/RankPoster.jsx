export default function RankPoster({ description, image, rating, title }) {
  return (
    <>
      <div className="container flex flex-row shadow-md bg-gray-800 rounded-sm">
        <img src={image} />
        <div className="flex justify-start text-black bg-pink-50">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{rating}</p>
        </div>
      </div>
    </>
  );
}
