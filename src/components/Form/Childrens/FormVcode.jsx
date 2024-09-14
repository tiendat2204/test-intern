import { useState } from "react";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Drawer from "../../../ui/Drawer";
import Checkbox from "../../../ui/Checkbox";
const FormVcode = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  return (
    <div className="w-full bg-white h-screen md:p-4 p-2  ">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-4">Mã xác minh</h2>
        <p className="text-gray-500">Xác minh kiểu số điện thoại di động.</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Tiêu đề nhóm mẫu
        </h3>
        <div className="space-y-4">
          <Input
            label="Số điện thoại"
            inputId="Sdt"
            placeholder="01251512"
            readOnly
            additionalClasses="border-y"
            icon={
              <IoIosInformationCircleOutline
                className="size-9 cursor-pointer"
                onClick={openDrawer}
              />
            }
          />
          <Input
            label="Mã xác minh"
            inputId="js_input2"
            placeholder="mã xác minh"
            additionalClasses="border-y"
            button={
              <Button className="bg-gray-200 text-black px-4 py-2 rounded-md md:w-[9rem] w-auto ">
                Nhận mã
              </Button>
            }
          />

          <span className="block text-sm text-gray-500">
            Không thể nhận mã xác minh
          </span>
        </div>
      </div>

      <div className="flex justify-center mb-3 flex-col w-full items-center gap-5 mt-20">
        <label
          htmlFor="weuiAgreeCheckbox1"
          className="flex items-center space-x-2"
        >
          <Checkbox />
          <span className="text-sm text-gray-600">
            Đọc và đồng ý với{" "}
            <a
              href="/example/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              Điều khoản liên quan
            </a>
          </span>
        </label>{" "}
        <label
          htmlFor="weuiAgreeCheckbox"
          className="flex items-center space-x-2"
        >
          <Checkbox checked />

          <span className="text-sm text-gray-600">
            Đọc và đồng ý với{" "}
            <a
              href="/example/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              Các quy định và bản quyền
            </a>
          </span>
        </label>{" "}
        <div className="flex space-x-4 mt-5">
          <Button className="bg-green-500 text-white hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
            Chắc chắn
          </Button>
        </div>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer}>
        <h2 className="text-xl font-bold mb-4">Nội dung Drawer</h2>
        <p>Đây là nội dung bên trong drawer.</p>
      </Drawer>
    </div>
  );
};

export default FormVcode;
