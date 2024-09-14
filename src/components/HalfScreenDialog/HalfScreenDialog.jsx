import { useState } from "react";
import Button from "../../ui/Button";
import Drawer from "../../ui/Drawer";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import Checkbox from "../../ui/Checkbox";

const HalfScreenDialog = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerStyle, setDrawerStyle] = useState(1);
  const [checkboxStates, setCheckboxStates] = useState({
    checkbox1: false,
    checkbox2: false,
  });

  const handleDrawerClose = () => {
    console.log("Drawer closed");
    setIsDrawerOpen(false);
  };

  const openDrawerWithStyle = (style) => {
    setDrawerStyle(style);
    setIsDrawerOpen(true);
  };
  const handleChange = (checkbox) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [checkbox]: !prevState[checkbox],
    }));
  };

  const renderDrawerContent = () => {
    switch (drawerStyle) {
      case 1:
        return (
          <div className="w-full h-64 bg-white px-5">
            <div className="w-full ">
              <div className="p-5 text-sm font-light w-full text-center flex justify-between">
                <button onClick={handleDrawerClose}>
                  <IoClose className="text-gray-500 text-3xl hover:text-gray-600 cursor-pointer" />
                </button>
                <div className="flex flex-col w-full items-center justify-center">
                  <span className="text-lg">标题 1</span>
                  <p className="text-xs">副标题 1</p>
                </div>
              </div>
              <div className="w-full min-h-0 pb-5 hyphens-none">
                <span>可放自定义内容 1</span>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="w-full h-full bg-white px-5">
            <div className="w-full ">
              <div className="py-5 text-sm font-light w-full text-center flex justify-between">
                <button onClick={handleDrawerClose}>
                  <IoMdArrowDropdownCircle className="text-black text-opacity-50 text-3xl  cursor-pointer" />
                </button>
                <div className="flex flex-col w-full items-center justify-center">
                  <span className="text-lg">标题 </span>
                </div>
              </div>
              <div className="w-full min-h-0  hyphens-none pb-2 md:pb-32">
                <span className="text-sm py-3 block">
                  辅助描述内容，可根据实际需要安排
                </span>
                <p className="text-sm text-black text-opacity-30 ">
                  辅助提示内容，可根据实际需要安排 Dolor adipisci quidem
                  consequuntur similique consequuntur doloribus modi possimus
                  sunt voluptas qui Aspernatur natus error quisquam quidem ipsa
                  corrupti! Dignissimos quasi quis natus fugiat odio in?
                  Mollitia molestias error earum. Dolor adipisci quidem
                  consequuntur similique consequuntur doloribus modi possimus
                  sunt voluptas qui Aspernatur natus error quisquam quidem ipsa
                  corrupti! Dignissimos quasi quis natus fugiat odio in?
                  Mollitia molestias error earum. Dolor adipisci quidem
                  consequuntur similique consequuntur doloribus modi possimus
                  sunt voluptas qui Aspernatur natus error quisquam quidem ipsa
                  corrupti! Dignissimos quasi quis natus fugiat odio in?
                  Mollitia molestias error earum. Dolor adipisci quidem
                  consequuntur similique consequuntur doloribus modi possimus
                  sunt voluptas qui Aspernatur natus error quisquam quidem ipsa
                  corrupti! Dignissimos quasi quis natus fugiat odio in?
                  Mollitia molestias error earum. Dolor adipisci quidem
                  consequuntur similique consequuntur doloribus modi possimus
                  sunt voluptas qui Aspernatur natus error quisquam quidem ipsa
                  corrupti! Dignissimos quasi quis natus fugiat odio in?
                  Mollitia molestias error earum.
                </p>
              </div>

              <div className="flex flex-row w-full justify-center items-center gap-4 pb-7">
                <a
                  onClick={handleDrawerClose}
                  className="group bg-black justify-center bg-opacity-15 p-4 w-48 rounded-md  flex items-center cursor-pointer relative group"
                  href="#"
                >
                  <span>次要操作</span>
                  <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none "></span>
                </a>
                <a
                  onClick={handleDrawerClose}
                  className="group bg-green-500  justify-center  p-4 w-48 rounded-md  flex items-center cursor-pointer relative group"
                  href="#"
                >
                  <span className="text-white">次要操作</span>
                  <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none "></span>
                </a>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="w-full  h-[40rem]  bg-white px-5">
            <div className="w-full ">
              <div className="p-5 text-sm font-light w-full text-center flex justify-between">
                <div className="flex  w-full gap-2 items-center justify-start">
                  <img
                    className="size-7 rounded-full"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    alt=""
                  />
                  <span>昵称</span>
                </div>
              </div>
              <div className="w-full h-[25rem]  pb-5 ">
                <br />
                <span>可放自定义内容 3</span>
              </div>
              <div className="flex flex-row w-full justify-center items-center gap-4 pb-7">
                <a
                  onClick={handleDrawerClose}
                  className="group bg-black justify-center bg-opacity-15 p-4 w-48 rounded-md  flex items-center cursor-pointer relative group"
                  href="#"
                >
                  <span>次要操作</span>
                  <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none "></span>
                </a>
                <a
                  onClick={handleDrawerClose}
                  className="group bg-green-500  justify-center  p-4 w-48 rounded-md  flex items-center cursor-pointer relative group"
                  href="#"
                >
                  <span className="text-white">次要操作</span>
                  <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none "></span>
                </a>
              </div>
              <div className="w-full text-center flex justify-center items-center">
                <a
                  onClick={handleDrawerClose}
                  className="group text   justify-center  p-4 w-48 rounded-md  flex items-center cursor-pointer "
                  href="#"
                >
                  <span className="text-gray-700 active:text-gray-200">
                    次要操作
                  </span>
                </a>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="w-full  h-full  bg-white px-5">
            <div className="w-full ">
              <div className="p-5 text-sm font-light w-full text-center flex justify-between">
                <div className="flex  w-full gap-2 items-center justify-start">
                  <img
                    className="size-7 rounded-full"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                    alt=""
                  />
                  <span>昵称</span>
                </div>
              </div>
              <div className="w-full pb-5">
                <div className="flex items-center">
                  <Checkbox
                    name="checkbox1"
                    checked={checkboxStates.checkbox1}
                  />
                  <label
                    className="text-gray-700 ml-2"
                    onClick={() => handleChange("checkbox1")}
                  >
                    Standard is dealt for u.
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    name="checkbox2"
                    checked={checkboxStates.checkbox2}
                  />
                  <label
                    className="text-gray-700 ml-2"
                    onClick={() => handleChange("checkbox2")}
                  >
                    以上信息用于核对账号绑定的身份
                  </label>
                </div>
              </div>
              <div className="flex flex-row w-full justify-center items-center gap-4 pb-7">
                <a
                  onClick={handleDrawerClose}
                  className="group bg-black justify-center bg-opacity-15 p-4 w-48 rounded-md  flex items-center cursor-pointer relative group"
                  href="#"
                >
                  <span>次要操作</span>
                  <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none "></span>
                </a>
                <a
                  onClick={handleDrawerClose}
                  className="group bg-green-500  justify-center  p-4 w-48 rounded-md  flex items-center cursor-pointer relative group"
                  href="#"
                >
                  <span className="text-white">次要操作</span>
                  <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none "></span>
                </a>
              </div>
              <div className="w-full text-center flex justify-center items-center">
                <a
                  onClick={handleDrawerClose}
                  className="group text   justify-center  p-4 w-48 rounded-md  flex items-center cursor-pointer "
                  href="#"
                >
                  <span className="text-gray-700 active:text-gray-200">
                    次要操作
                  </span>
                </a>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="w-full h-64  bg-white px-5">
            <div className="w-full ">
              <div className="w-full min-h-0 pb-5 pt-16 ">
                <span>可放自定义内容 5</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  const data = renderDrawerContent();

  return (
    <div className="bg-white h-screen animate-slideIn">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-950 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">HalfScreenDialog</span>
      </div>
      <div className="w-full max-w-2xl mx-auto text-center flex flex-col gap-5 px-2">
        <Button
          onClick={() => openDrawerWithStyle(1)}
          className="bg-black bg-opacity-10 text-lg"
        >
          HalfScreenDialog 1
        </Button>
        <Button
          onClick={() => openDrawerWithStyle(2)}
          className="bg-black bg-opacity-10 text-lg"
        >
          HalfScreenDialog 2
        </Button>
        <Button
          onClick={() => openDrawerWithStyle(3)}
          className="bg-black bg-opacity-10 text-lg"
        >
          HalfScreenDialog 3
        </Button>
        <Button
          onClick={() => openDrawerWithStyle(4)}
          className="bg-black bg-opacity-10 text-lg"
        >
          HalfScreenDialog 4
        </Button>
        <Button
          onClick={() => openDrawerWithStyle(5)}
          className="bg-black bg-opacity-10 text-lg"
        >
          HalfScreenDialog 5
        </Button>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose}>
        {data}
      </Drawer>
    </div>
  );
};

export default HalfScreenDialog;
