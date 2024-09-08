"use client"
import SideMenu_Container from "@/Utility/Ui/SideMenu/SideMenu_Container"
import SideMenu_Items from "@/Utility/Ui/SideMenu/SideMenu_Items"
import { useParams, usePathname } from "next/navigation"
import React from "react"
import { FaUsers } from "react-icons/fa"
import { FaChartSimple } from "react-icons/fa6"
import { HiColorSwatch } from "react-icons/hi"
import { MdDashboard, MdSettings, MdWorkspacesFilled } from "react-icons/md"
import { SiCloudflarepages } from "react-icons/si"

function SideMenuComponent() {
  const pathname = usePathname()
  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <MdDashboard />,
    },
    {
      name: "Pages",
      path: null,
      icon: <SiCloudflarepages />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <MdWorkspacesFilled />,
    },
    {
      name: "Themes",
      path: "/themes",
      icon: <HiColorSwatch />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <MdSettings />,
    },
  ]
  return (
    <SideMenu_Container>
      {menus?.map((items) => {
        let isActive = items?.path === pathname
        return (
          <SideMenu_Items
            active={{
              color: "#16423C",
              value: isActive,
            }}
            Icon={items?.icon}
          >
            {items?.name}
          </SideMenu_Items>
        )
      })}
    </SideMenu_Container>
  )
}

export default SideMenuComponent
