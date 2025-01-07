import { useNavigate } from "react-router-dom";

function Modal({ children }) {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("..");
  };
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-[100dvh] bg-black z-[1]"
        onClick={closeHandler}
      ></div>
      <dialog
        open
        className="border-none rounded-md shadow-md p-0 overflow-hidden z-[1]"
      >
        {children}
      </dialog>
    </>
  );
}

export default Modal;
