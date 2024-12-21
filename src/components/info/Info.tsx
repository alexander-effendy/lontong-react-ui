import Celine from "@/assets/images/Celine.png";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

const Info = () => {
  return (
    <section className="relative w-[370px] h-full bg-[#e5dcd8] rounded-[20px] overflow-y-hidden flex flex-col">

      <FaRegBell className="absolute text-xl top-[18px] left-[18px] hover:cursor-pointer" />
      <IoSettingsOutline className="absolute text-xl top-[18px] right-[18px] hover:cursor-pointer" />

      {/* profile section: profile and friends button */}
      <section className="flex flex-col items-center pt-[40px] p-[20px] flex-none">
        <img src={Celine} className="size-[80px] rounded-full"/>
        <span className="font-semibold text-[20px]">Celine Wijaya</span>
        {/* nick name and status */}
        <span className="text-[16px] text-gray-400">bananatheexplorer12 on insta</span>
        <button className="flex bg-white hover:bg-gray-100 transition-color hover:shadow-xl duration-500 w-[100%] px-[20px] rounded-[30px] h-[40px] mt-[10px] items-center justify-between">
          <section className="flex gap-2 items-center ">
            <CgProfile className="text-xl mr-[10px]" />
            <span className="font-semibold">2 <span className="ml-[5px]">friends</span></span>
          </section>
          <IoIosArrowForward />
        </button>
      </section>

      {/* scrolling section */}
      <section className="flex-1 overflow-y-auto soft-scrollbar-right pb-[20px] px-[20px]">

        <span>Friends online</span>
        <section className="bg-white border-[1px] rounded-[20px] w-full h-[300px] flex items-center justify-center mb-[20px]">
          lei hou mou mou
        </section>

        <span>Recently visited gyms</span>
        <section className="bg-white border-[1px] rounded-[20px] w-full h-[300px] flex items-center justify-center">
          nehimomo ni hao ma
        </section>
        <section className="bg-white border-[1px] mt-[20px] rounded-[20px] w-full h-[300px] flex items-center justify-center">
          nimamoheimmomo
        </section>
      </section>
    </section>
  )
}

export default Info;