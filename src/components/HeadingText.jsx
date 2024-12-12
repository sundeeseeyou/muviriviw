export default function HeadingText({ text }) {
  return (
    <>
      <div className="container">
        <h2 className="flex justify-center py-8 text-2xl text-[#3d3d3d] font-extrabold">
          {text}
        </h2>
      </div>
    </>
  );
}
