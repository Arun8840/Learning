"use client"
import { dashboardService } from "@/Services/DashboardService"
import SideMenu_Container from "@/Utility/Ui/SideMenu/SideMenu_Container"
import SideMenu_Items from "@/Utility/Ui/SideMenu/SideMenu_Items"
import Skeleton from "@/Utility/Ui/Skeleton"
import Spinner from "@/Utility/Ui/Spinner"
import { usePathname } from "next/navigation"
import React from "react"
import { MdDashboard, MdSettings, MdWorkspacesFilled } from "react-icons/md"
import { SiCloudflarepages } from "react-icons/si"
import useSWR from "swr"
interface MenusTypes {
  name: string
  path: string
  icon: string
}
function SideMenuComponent() {
  const pathname = usePathname()
  const fetcher = async () => {
    let res = await dashboardService.Load_Menus()
    if (res) {
      return res
    }
  }
  const { data: menus, isLoading } = useSWR(
    pathname ? "/load-menus" : null,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  )
  return (
    <SideMenu_Container>
      {isLoading ? (
        <Skeleton className="w-full min-h-52" />
      ) : (
        menus?.map((items: MenusTypes) => {
          let isActive = items?.path === pathname
          return (
            <SideMenu_Items
              active={{
                color: "#16423C",
                value: isActive,
              }}
              Icon={<SiCloudflarepages />}
            >
              {items?.name}
            </SideMenu_Items>
          )
        })
      )}
    </SideMenu_Container>
  )
}

export default SideMenuComponent
