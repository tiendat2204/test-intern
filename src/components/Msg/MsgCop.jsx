import { Link } from "react-router-dom";
import Footer from "../../layouts/Footer";
const MsgCop = () => {
  return (
    <div className="bg-white animate-slideIn h-full">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-950 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">Msg</span>
      </div>
      <div className="w-full max-w-2xl mx-auto text-center flex flex-col gap-5 px-2 pb-10 my-3">
        <Link
          to={"/msg_success"}
          className="bg-black rounded-md py-2 bg-opacity-10 text-lg"
        >
          Msg 1
        </Link>
        <Link
          to={"/msg_warn"}
          className="bg-black rounded-md py-2 bg-opacity-10 text-lg"
        >
          Msg 2
        </Link>
        <Link
          to={"/msg_text"}
          className="bg-black rounded-md py-2 bg-opacity-10 text-lg"
        >
          Msg 3
        </Link>
        <Link
          to={"/msg_text_primary"}
          className="bg-black rounded-md py-2 bg-opacity-10 text-lg"
        >
          Msg 4
        </Link>
        <Link
          to={"/msg_custom_area_preview"}
          className="bg-black rounded-md py-2 bg-opacity-10 text-lg"
        >
          Msg 5
        </Link>
        <Link
          to={"/msg_custom_area_tips"}
          className="bg-black rounded-md py-2 bg-opacity-10 text-lg"
        >
          Msg 6
        </Link>
        <Link
          to={"/msg_custom_area_cell"}
          className="bg-black rounded-md py-2 bg-opacity-10 text-lg"
        >
          Msg 7
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default MsgCop;
