import { useNavigate } from "react-router-dom";

export default function Modal({ children }) {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("..");
  };
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-40 bg-black bg-opacity-60 z-[10]"
        onClick={closeHandler}
      ></div>
      <dialog
        open
        className="border-none rounded-md shadow-md p-0 overflow-hidden z-[10]"
      >
        {children}
      </dialog>
    </>
  );
}
