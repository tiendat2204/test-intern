const Grid = () => {
    return (
      <div className="h-screen bg-background-primary">
        <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
          <h1 className="text-3xl text-gray-950 mb-2">WeUi</h1>
          <span className="text-gray-400 font-light">Huy hiệu</span>
        </div>
        <div className="grid grid-cols-3 ">
          {Array.from({ length: 12 }).map((_, index) => (
            <a
              key={index}
              href="javascript:"
              className={`flex flex-col justify-center items-center p-5 border-gray-300 ${
                index < 9 ? 'border-b ' : ''
              } ${index % 3 !== 2 ? 'border-r' : ''}`}
              role="button"
            >
              <div className="w-auto">
                <img
                  src="https://weui.io/images/icon_tabbar.png"
                  alt=""
                  className="object-cover size-8"
                />
              </div>
              <p className="font-light">Grid</p>
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default Grid;