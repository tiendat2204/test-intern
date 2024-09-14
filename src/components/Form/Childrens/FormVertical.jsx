const FormVertical = () => {
  return (
    <div className="p-4 max-w-screen-2xl mx-auto bg-white h-screen">
      <div className="w-full">
        <div className="p-7">
          <h2 className="text-xl font-bold mb-6 text-center">Textra UI</h2>
          <div className="space-y-4 w-full">
            <div className="group flex flex-col  cursor-pointer w-full relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gray-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-300">
              <div className="flex-1">
                <textarea
                  className="w-full p-4 bg-white  rounded-lg focus:outline-none focus:ring-0"
                  placeholder="Vui lòng mô tả vấn đề bạn gặp phải"
                  rows="3"
                ></textarea>
                <div
                  role="option"
                  aria-live="polite"
                  className="text-right text-gray-500 mt-1"
                >
                  <span>0</span>/200
                </div>
              </div>
              <span className="absolute inset-0 rounded-md bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormVertical;
