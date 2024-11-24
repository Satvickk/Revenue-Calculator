import { Slide, ToastContainer } from "react-toastify";
import Container from "./Container";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="sm:h-screen py-4 min-h-screen w-full bg-gray-200">
      <Container />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </div>
  );
}
