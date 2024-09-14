import { Link } from "react-router-dom";
import img from "../assets/img/logo-no-background.png";
const Footer = () => {
  return (
    <footer className=" text-white pt-12 pb-8 px-4 ">
      <div className=" mx-auto px-4 overflow-hidden ">
        <Link to={"/"} className=" mr-4 w-full  mb-6 lg:mb-0 flex items-center justify-center">
          <img
            src={img}
            className="w-11 ml-4 lg:ml-0"
            alt="logo"
          />
        </Link>
      </div>
      <div className="pt-4 mt-4  text-gray-600 border-t border-gray-800 text-center">
        {" "}
        © 2024 TienDat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
