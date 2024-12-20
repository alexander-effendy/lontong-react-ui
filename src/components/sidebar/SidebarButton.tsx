import { useNavigate } from "react-router-dom";
import React from 'react';

interface SidebarButtonProps {
  className?: string;
  navigationTo?: string;
  children?: React.ReactNode;
}

const SidebarButton: React.FC<SidebarButtonProps>  = ({ className, navigationTo, children}) => {
  const navigate = useNavigate();
  return (
    <div 
      className={`${className} group transition-color duration-500 hover:cursor-pointer hover:bg-black rounded-[300px] size-[45px] mx-auto bg-white flex items-center justify-center`}
      onClick={() => navigate(`${navigationTo}`)}
      
    >
      <div className="group-hover:text-white">{children}</div>
    </div>
  )
}

export default SidebarButton;