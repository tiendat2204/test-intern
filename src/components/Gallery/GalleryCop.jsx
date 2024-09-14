import { MdDelete } from "react-icons/md";
const GalleryCop = () => {
  return (
    <div className="p-4 h-screen">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Gallery</h1>
        <p className="text-gray-600">GalleryUi</p>
      </div>
      <div
        className=" fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center w-auto"
        role="dialog"
        aria-labelledby="galleryImg"
        aria-hidden="true"
        aria-modal="true"
        id="gallery"
      >
        <img
          src="https://weui.io/images/pic_article.png"
          alt=""
          className="w-auto h-full object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-[#0d0d0d] z-40 w-full h-16 text-center flex items-center justify-center">
          <a role="button" aria-label="删除" href="javascript:" className="">
            <MdDelete className="size-6 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GalleryCop;
