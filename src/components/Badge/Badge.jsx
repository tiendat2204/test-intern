import { IoIosArrowForward } from "react-icons/io";

const Badge = () => {
  return (
    <div className="h-screen bg-background-primary">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-950 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">Huy hiệu</span>
      </div>
      <div className="page__bd space-y-6">
        <div>
          <div className="text-sm text-gray-500 ml-4">
            Thông báo tin nhắn mới và thông tin tóm tắt, thống nhất ở bên phải danh sách
          </div>
          <div className=" bg-white group relative">
            <div className="flex justify-between items-center p-4 border-b">
              <div className="text-base" id="js_cell_l1_bd">
                Danh sách đơn hàng
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span className="text-sm">Thông tin chi tiết</span>
                <span
                  id="js_cell_l1_note"
                  className="bg-red-500 rounded-full size-3"
                ></span>
                <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />

              </div>
            </div>
            <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>

          </div>
        </div>

        <div>
          <div className="text-sm text-gray-500  ml-4">
            Số lượng chưa đọc theo sau thông tin chủ đề, thống nhất ở bên trái danh sách
          </div>
          <div className="bg-white  ">
            <div className="flex items-center gap-3 p-4 border-b group relative">
              <div className="relative">
                <img
                  src="https://weui.io/images/pic_article.png"
                  alt=""
                  className="w-14 h-14 "
                />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-light rounded-full px-2 py-1">
                  8
                </span>
              </div>
              <div>
                <div className="text-base">Tên liên hệ</div>
                <div className="text-gray-500 text-sm">Thông tin tóm tắt</div>
              </div>
            <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>

            </div>

            <div className="flex justify-between items-center p-4 border-b group relative" >
              <div className="flex items-center space-x-2">
                <span className="text-base">Danh sách đơn hàng</span>
                <span className="bg-red-500 text-white text-xs font-light rounded-full px-2 py-1 ">
                  8
                </span>
              </div>
              <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />
              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>

            </div>

            <div className="flex justify-between items-center p-4 border-b group relative">
              <div className="flex items-center space-x-2">
                <span className="text-base">Danh sách đơn hàng</span>
                <span className="bg-red-500 text-white text-xs font-light rounded-full px-2 py-1 ">

                  8
                </span>
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-2"><span>Thông tin chi tiết</span>
              <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />

              </div>
            <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
              
            </div>

            <div className="flex justify-between items-center p-4 group relative">
              <div className="flex items-center space-x-2">
                <span className="text-base">Danh sách đơn hàng</span>
                <span className="bg-red-500 text-white text-xs font-light rounded-full px-2 py-1">
                  Mới
                </span>
              </div>
              <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />
              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badge;