import Slider from "../../ui/Slider"

const SliderCop = () => {
  return (
    <div className="min-h-full"
    >
       <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-900 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">Slider</span>
      </div>
      <div className="w-full p-2 mx-auto">
      <div className="relative w-full h-[2px] bg-gray-300 rounded-full ">
        <div
          className="absolute top-0 left-0 h-[2px] bg-green-500 rounded-full"
          style={{ width: "0%" }}
        ></div>
        <div className="absolute top-0 left-0 -mt-3 w-6 h-6 bg-white border border-gray-300 rounded-full"></div>
      </div>
      </div>
      
      <Slider/>
    </div>
  )
}

export default SliderCop
