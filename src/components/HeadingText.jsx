export default function HeadingText({ headingText }) {
  return (
    <>
      <div className="container">
        <h2 className="flex justify-center py-8 text-2xl text-[#3d3d3d] font-extrabold">
          {headingText}
        </h2>
      </div>
    </>
  );
}
