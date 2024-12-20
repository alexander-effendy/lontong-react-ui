import Celine from "@/assets/images/Celine.png";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

const Info = () => {
  return (
    <section className="relative w-[600px] h-full bg-[#e5dcd8] rounded-[20px] overflow-y-hidden flex flex-col">

      <FaRegBell className="absolute size-[23px] top-[18px] left-[18px] hover:cursor-pointer" />
      <IoSettingsOutline className="absolute size-[23px] top-[18px] right-[18px] hover:cursor-pointer" />

      {/* profile section: profile and friends button */}
      <section className="flex flex-col items-center pt-[40px] p-[20px] gap-[10px] flex-none">
        <img src={Celine} className="size-[80px] rounded-full"/>
        <span className="font-semibold text-[20px]">Natasha Ann</span>
        <button className="flex bg-white w-[100%] px-[20px] rounded-[30px] h-[60px] mt-[20px] items-center justify-between">
          <section className="flex gap-2 items-center">
            <CgProfile className="size-[30px] mr-[10px]" />
            <span className="font-semibold">2 <span className="ml-[5px]">friends</span></span>
          </section>
          <IoIosArrowForward />
        </button>
      </section>

      {/* scrolling section */}
      <section className="flex-1 overflow-y-auto soft-scrollbar-right pb-[20px] px-[20px]">
        <section className="bg-white border-[1px] rounded-[20px] w-full h-[300px] flex items-center justify-center">
          lei hou mou mou
        </section>
        <section className="bg-white border-[1px] mt-[20px] rounded-[20px] w-full h-[300px] flex items-center justify-center">
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