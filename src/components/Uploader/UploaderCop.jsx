import { FaPlus } from "react-icons/fa";
import { PiWarningCircleFill } from "react-icons/pi";
import { useState } from "react";
import Gallery from "../../ui/Gallary";

const UploaderCop = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openGallery = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeGallery = () => {
    setSelectedImage(null);
  };

  return (
    <div className="page h-screen">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-900 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">Uploader</span>
      </div>

      <div className="bg-white p-5">
        <div className="flex justify-between items-center">
          <p className="font-light text-gray-700 p-2 pl-0">Tải lên hình ảnh</p>
          <div className="text-gray-400">
            <span id="js_uploader_current_num">0</span>/
            <span id="js_uploader_max_num">2</span>
          </div>
        </div>

        <div className="weui-uploader__bd">
          <ul className="flex justify-start items-center gap-2" id="uploaderFiles">
            <li
              className="size-28 bg-center"
              role="img"
              tabIndex="0"
              onClick={() => openGallery("https://weui.io/images/pic_160.png")}
              style={{ backgroundImage: "url(https://weui.io/images/pic_160.png)" }}
            ></li>
            <li
              className="size-28 bg-center"
              role="img"
              tabIndex="0"
              onClick={() => openGallery("https://weui.io/images/pic_160.png")}
              style={{ backgroundImage: "url(https://weui.io/images/pic_160.png)" }}
            ></li>
            <li
              className="size-28 bg-center"
              role="img"
              tabIndex="0"
              onClick={() => openGallery("https://weui.io/images/pic_160.png")}
              style={{ backgroundImage: "url(https://weui.io/images/pic_160.png)" }}
            ></li>

            <li
              className="size-28 bg-center relative"
              role="img"
              aria-label="错误"
              tabIndex="0"
              onClick={() => openGallery("https://weui.io/images/pic_160.png")}
              style={{ backgroundImage: "url(https://weui.io/images/pic_160.png)" }}
            >
              <div className="flex items-center justify-center absolute bg-black/45 w-full h-full">
                <PiWarningCircleFill className="text-red-500 text-4xl" />
              </div>
            </li>

            <li
              className="size-28 bg-center relative"
              role="img"
              aria-label="正在上传"
              onClick={() => openGallery("https://weui.io/images/pic_160.png")}
              style={{ backgroundImage: "url(https://weui.io/images/pic_160.png)" }}
            >
              <div className="flex items-center justify-center text-white absolute bg-black/45 w-full h-full">
                50%
              </div>
            </li>

            <li className="weui-uploader__input-box w-28 h-28 border-2 relative border-none border-gray-300 flex items-center justify-center bg-background-primary hover:bg-gray-200 cursor-pointer">
              <input
                id="uploaderInput"
                className="weui-uploader__input opacity-0 absolute inset-0 cursor-pointer"
                type="file"
                accept="image/*"
                multiple
              />
              <FaPlus className="size-10 text-gray-400" />
            </li>
          </ul>
        </div>
      </div>

      {selectedImage && (
        <Gallery
          imageSrc={selectedImage}
          altText="Uploaded image"
          onClose={closeGallery}
        />
      )}
    </div>
  );
};

export default UploaderCop;