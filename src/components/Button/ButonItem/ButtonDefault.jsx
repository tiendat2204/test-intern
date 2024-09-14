import Button from "../../../ui/Button";

const ButtonWeUI = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-4 flex justify-center gap-2 flex-col">
          <Button className="bg-green-500 text-white hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
            Hoạt động chính
          </Button>

          <Button
            className="bg-green-500 text-white flex justify-center items-center"
            loading
          ></Button>

          <Button
            className="bg-green-500 text-white flex items-center justify-center gap-2"
            loading
          >
            Hoạt động chính
          </Button>

          <Button className="bg-black bg-opacity-20 text-gray-400" disabled>
            Hoạt động chính
          </Button>
        </div>

        <div className="space-y-4 flex justify-center gap-2 flex-col">
          <Button className="bg-black bg-opacity-20 text-gray-800   ">
            hoạt động nhỏ
          </Button>

          <Button
            className="bg-black bg-opacity-20 text-white flex justify-center items-center"
            loading
          ></Button>
          <Button
            className="bg-black bg-opacity-20 text-white flex items-center  justify-center"
            loading
          >
            Hoạt động chính
          </Button>

          <Button className="bg-black bg-opacity-20 text-gray-400" disabled>
            hoạt động nhỏ
          </Button>
        </div>

        <div className="space-y-4 flex justify-center gap-2 flex-col">
          <Button className="bg-red-500 text-white ">Hành động cảnh báo</Button>
          <Button
            className="bg-red-500 text-white flex justify-center items-center "
            loading
          ></Button>
          <Button
            className="bg-red-500 text-white flex justify-center items-center "
            loading
          >
            Hành động cảnh báo
          </Button>
          <Button className="bg-black bg-opacity-20 text-gray-400" disabled>
            Hoạt động cảnh báo
          </Button>
        </div>
      </div>

      <div className="w-full flex justify-around items-center mt-5 gap-2 p-2">
        <Button className="bg-green-500 text-white  py-1 px-2">Nút nhỏ</Button>

        <Button className="bg-green-500 text-white ">Nút trung bình</Button>

        <Button className="bg-green-500 text-white  py-4 px-8">Nút lớn</Button>
      </div>

      <div className="w-full flex justify-around items-center mt-5 bg-green-500 h-20 relative gap-2 p-2">
        <Button className="bg-white text-black z-10">Nút trung bình</Button>
        <Button className="bg-green-300 text-black z-10">Nút trung bình</Button>
        <Button className="bg-red-500 text-black z-10">Nút trung bình</Button>
      </div>

      <div className="w-full flex justify-around items-center mt-5 bg-green-500 opacity-50 h-20 relative gap-2 p-2">
        <Button className="bg-green-300 text-black z-10">Nút lớp phủ</Button>
        <Button className="bg-green-300 text-black z-10">Nút lớp phủ</Button>
        <Button className="bg-green-300 text-black z-10">Nút lớp phủ</Button>
      </div>
    </div>
  );
};

export default ButtonWeUI;
