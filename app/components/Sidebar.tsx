"use client";
import React, { useState } from "react";
import { HiMenuAlt3, HiLogout } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";

const Sidebar = () => {
  const menus = [
    { name: "dashboard", icon: MdOutlineDashboard },
    { name: "user", icon: AiOutlineUser },
    { name: "messages", icon: FiMessageSquare },
    { name: "analytics", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", icon: FiFolder },
    { name: "Cart", icon: FiShoppingCart },
    { name: "Saved", icon: AiOutlineHeart, margin: true },
    { name: "Setting", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section>
      <div
        className={`bg-black min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <div
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-5 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
