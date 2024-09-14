import { IoIosArrowForward } from "react-icons/io";

const List = () => {
  return (
    <div className=" mb-10">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-900 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">List</span>
      </div>

      <div className="">
        {/* Danh sách có mô tả */}
        <div className="ml-2 mb-2 text-gray-500 font-light">
          Danh sách có mô tả
        </div>
        <div className="divide-y">
          <div role="option" className=" flex justify-between py-2 bg-white ">
            <div className="p-2">
              <p>Tiêu đề 1</p>
            </div>
            <div className=" text-gray-400 p-2 font-light">Mô tả 1</div>
          </div>

          <div className=" flex justify-between items-center  bg-white ">
            <div className="p-2">
              <p>Tiêu đề 2</p>
            </div>
            <div className=" ">
              <span className="text-sm font-light mr-2 text-gray-600">
                văn bản mô tả
              </span>
              <button className=" bg-red-500 text-white py-4 px-4 ">Xóa</button>
            </div>
          </div>
        </div>

        {/* Danh sách có icon và mô tả */}
        <div className=" mt-4 mb-2 ml-2 text-gray-500  font-light">
          Danh sách có icon và mô tả
        </div>
        <div className=" divide-y">
          <div
            role="option"
            className="bg-white flex justify-between items-center py-2"
          >
            <div className="flex justify-center items-center gap-2">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                alt="icon"
                className="size-11  p-3"
              />
              <div className="">
                <p>Tiêu đề 3</p>
              </div>
            </div>

            <div className=" text-gray-400 font-light p-2">Mô tả 3</div>
          </div>

          <div
            role="option"
            className="bg-white flex justify-between items-center py-2"
          >
            <div className="flex justify-center items-center gap-2">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                alt="icon"
                className="size-11  p-3"
              />
              <div className="">
                <p>Tiêu đề 4</p>
              </div>
            </div>

            <div className=" text-gray-400 font-light p-2">Mô tả 4</div>
          </div>
        </div>

        {/* Danh sách có điều hướng */}
        <div className="">
          <div className="  mt-4 mb-2 ml-2 text-gray-500  font-light">
            Danh sách có điều hướng
          </div>
          <div className="divide-y ">
            <a
              className=" bg-white group flex items-center justify-between  cursor-pointer w-full p-5 relative group "
              href="javascript:void(0);"
            >
              <div className="w-full">
                {" "}
                <span className="block w-full">cell standard</span>
                <p className="block w-full font-light text-gray-500">phụ đề</p>
              </div>

              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none "></span>
              <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />
            </a>
            <a
              className=" bg-white group flex items-center justify-between  cursor-pointer w-full p-5 relative group "
              href="javascript:void(0);"
            >
              <span>cell standard</span>
              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none "></span>
              <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />
            </a>
          </div>
        </div>
        <div className="">
          <div className="  mt-4 mb-2 ml-2 text-gray-500  font-light">
            Danh sách có có tùy chọn
          </div>
          <div className="divide-y ">
            <a
              className=" bg-white group flex items-center justify-between  cursor-pointer w-full p-5 relative group "
              href="javascript:void(0);"
            >
              <span>cell standard</span>

              <div className="text-sm text-gray-500 flex items-center gap-2">
                <span>Tùy chọn</span>
                <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />
              </div>

              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none "></span>
            </a>
            <a
              className=" bg-white group flex items-center justify-between  cursor-pointer w-full p-5 relative group "
              href="javascript:void(0);"
            >
              <span>cell standard</span>

              <div className="text-sm text-gray-500 flex items-center gap-2">
                <span>Tùy chọn</span>
                <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />
              </div>

              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none "></span>
            </a>
          </div>
        </div>
        <div className="pb-10">
          <div className="  mt-4 mb-2 ml-2 text-gray-500  font-light">
            Danh sách có điều hướng , tùy chọn , icon
          </div>
          <div className="divide-y ">
            <a
              className=" bg-white group flex items-center justify-between  cursor-pointer w-full p-5 relative group "
              href="javascript:void(0);"
            >
              <div className="flex justify-center items-center gap-2">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                  alt="icon"
                  className="size-11 "
                />
                <div className="">
                  <p>Tiêu đề 5</p>
                </div>
              </div>

              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none "></span>
              <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />
            </a>
            <a
              className=" bg-white group flex items-center justify-between  cursor-pointer w-full p-5 relative group "
              href="javascript:void(0);"
            >
              <div className="flex justify-center items-center gap-2">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                  alt="icon"
                  className="size-11  "
                />
                <div className="">
                  <p>Tiêu đề 5</p>
                </div>
              </div>
              <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none "></span>
              <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
