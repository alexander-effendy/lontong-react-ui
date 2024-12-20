import SidebarButton from "./SidebarButton";
import Lottie from 'lottie-react';

import Panda from "@/assets/svg/panda.json";

import { IoCalendarOutline } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { GoFileMedia } from "react-icons/go";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

import Celine from "@/assets/images/celine.png";
import { Navigate } from "react-router-dom";

const Sidebar =  () => {
  return (
    <div className="h-[calc(100vh-40px)] flex flex-col justify-between w-[100px] shadow-sm fixed top-[20px] left-[20px] pb-[20px] z-100 rounded-[15px] bg-[#e5dcd8]">

      {/* one */}
      <section className="w-full rounded-[15px] overflow-hidden mt-[10px]">
      <a
        href="https://alexandereffendy.com/bouldering"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        <Lottie
          animationData={Panda}
          loop={true}
          className="hover:cursor-help"
        />
      </a>
        <SidebarButton className="mt-[20px]" navigationTo="calendar">
          <IoCalendarOutline className="text-xl" />
        </SidebarButton>
      </section>

      {/* two */}
      <section className="flex flex-col gap-2">
        <SidebarButton className="mt-[20px]" navigationTo="calendar">
          <GiProgression className="text-xl" />
        </SidebarButton>
        <SidebarButton
          className="mt-[20px]"
          navigationTo="calendar"
        >
          <CgGym className="text-xl" />
        </SidebarButton>
        <SidebarButton
          className="mt-[20px]"
          navigationTo="calendar"
        >
          <GoFileMedia className="text-xl" />
        </SidebarButton>
        <SidebarButton
          className="mt-[20px]"
          navigationTo="calendar"
        >
          <MdOutlineLocalPostOffice className="text-xl" />
        </SidebarButton>
      </section>

      {/* three */}
      <section className="flex flex-col">
        <SidebarButton
          className="mt-[20px]"
          navigationTo="settings"
        >
          <IoSettingsOutline className="text-xl" />
        </SidebarButton>
        <SidebarButton
          className="mt-[20px]"
          navigationTo="calendar"
        >
          <img src={Celine} className="rounded-full border-[0.5px]-gray-300" />
        </SidebarButton>
      </section>
    </div>
  )
}

export default Sidebar;