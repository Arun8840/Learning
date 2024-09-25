"use client"
import { dashboardService } from "@/Services/DashboardService"
import SideMenu_Container from "@/Utility/Ui/SideMenu/SideMenu_Container"
import SideMenu_Items from "@/Utility/Ui/SideMenu/SideMenu_Items"
import Skeleton from "@/Utility/Ui/Skeleton"
import { usePathname } from "next/navigation"
import React from "react"
import { SiCloudflarepages } from "react-icons/si"
import useSWR from "swr"
import Floot_Button from "./Animations/Flot-Button/Floot_Button"
import Floot_Items from "./Animations/Flot-Button/Floot_Items"
import Switch from "@/Utility/Ui/Switch"
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

  let flootItems = ["Home", "Dark", "settings", "Theme", "Colors"]
  return (
    <div className="flex flex-col gap-1">
      <div className="flex-1">
        <SideMenu_Container>
          {isLoading ? (
            <Skeleton className="w-full min-h-52" />
          ) : (
            menus?.map((items: MenusTypes) => {
              let isActive = items?.path === pathname
              return (
                <SideMenu_Items
                  key={items?.name}
                  active={{
                    color: "#202020",
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
      </div>

      {/* //todo floot button */}
      <div className="p-1">
        <Floot_Button>
          <Floot_Items>
            {flootItems?.map((options, index: number) => {
              return (
                <li
                  key={index}
                  className="grid place-items-center place-self-center py-3 px-1"
                >
                  <Switch />
                </li>
              )
            })}
          </Floot_Items>
        </Floot_Button>
      </div>
    </div>
  )
}

export default SideMenuComponent
