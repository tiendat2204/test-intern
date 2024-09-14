import { IoIosArrowForward } from "react-icons/io";

const Panel = () => {
  return (
    <div className="h-full bg-background-primary">
      <div className="w-full md:p-10 max-w-[100rem] mx-auto p-8 pb-2">
        <h1 className="text-3xl text-gray-950 mb-2">WeUi</h1>
        <span className="text-gray-400 font-light">Panel</span>
      </div>
      <div className=" space-y-6">
        <div className="w-full">
          <div className="">
            <div className=" p-4 text-base border-b">T图文组合列表</div>
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="w-full bg-white">
                <div className=" p-4 text-base border-b">图文组合列表</div>

                <div className="flex items-center gap-3 p-4 border-b group relative">
                  <div className="relative">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg=="
                      alt=""
                      className="w-14 h-14 "
                    />
                  </div>
                  <div>
                    <div className="text-base">T图文组合列表</div>
                    <div className="text-gray-500 text-sm">
                      Thông tin tóm tắt
                    </div>
                  </div>
                  <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
                </div>
                <div className="flex items-center gap-3 p-4 border-b group relative">
                  <div className="relative">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg=="
                      alt=""
                      className="w-14 h-14 "
                    />
                  </div>
                  <div>
                    <div className="text-base">T图文组合列表</div>
                    <div className="text-gray-500 text-sm">
                      Thông tin tóm tắt
                    </div>
                  </div>
                  <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
                </div>
                <div className="flex justify-between items-center p-4 border-b group relative">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#576b95]">查看更多</span>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />
                  </div>
                  <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
                </div>
              </div>

              <div className="w-full bg-white">
                <div className=" p-4 text-base border-b">文字组合列表</div>

                <div className="flex items-center gap-3 p-4 border-b group relative">
                  <div>
                    <div className="text-base">T图文组合列表</div>
                    <div className="text-gray-500 text-sm">
                      Thông tin tóm tắt
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 border-b group relative">
                  <div>
                    <div className="text-base">T图文组合列表</div>
                    <div className="text-gray-500 text-sm">
                      Thông tin tóm tắt
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 border-b group relative">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#576b95]">查看更多</span>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />
                  </div>
                  <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
                </div>
              </div>

              <div className="w-full bg-white">
                <div className=" p-4 text-base border-b">小图文组合列表</div>

                <div className="flex items-center gap-3 p-4 border-b group relative justify-between">
                  <div className="relative flex  items-center gap-2">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                      alt=""
                      className="size-10 p-1"
                    />
                    <div>
                      <div className="text-base">T图文组合列表</div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />
                  </div>
                  <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
                </div>
                <div className="flex items-center gap-3 p-4 border-b group relative justify-between">
                  <div className="relative flex  items-center gap-2">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                      alt=""
                      className="size-10 p-1"
                    />
                    <div>
                      <div className="text-base">T图文组合列表</div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <IoIosArrowForward className="ml-auto text-gray-500 group-hover:text-gray-700" />
                  </div>
                  <span className="absolute inset-0 bg-black bg-opacity-0 group-active:bg-opacity-25 pointer-events-none"></span>
                </div>
              </div>
              <div className="w-full bg-white">
                <div className=" p-4 text-base border-b">小图文组合列表</div>

                <div className="flex items-center gap-3 p-4 border-b group relative justify-between">
                  <div>
                    <div className="text-base">标题一</div>
                    <span className="text-black text-opacity-25 text-sm mb-3 block">
                      由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                    </span>
                    <ul className=" text-sm list-none flex justify-start items-center gap-3 text-black text-opacity-25">
                      <li>文字来源</li>
                      <li className="border-r pr-1">时间</li>
                      <li>其它信息</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
