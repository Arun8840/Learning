import Card from "@/Utility/Ui/Card"
import SideMenu_Container from "@/Utility/Ui/SideMenu/SideMenu_Container"
import HeaderComponent from "@/components/HeaderComponent"
import SideMenuComponent from "@/components/SideMenuComponent"
import React from "react"

function Layout({
  children,
  projects,
  themes,
  layoutPages,
}: {
  children: React.ReactNode
  layoutPages: React.ReactNode
  themes: React.ReactNode
  projects: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col gap-1 p-1">
      <HeaderComponent />
      <main className="flex-1 flex gap-2">
        <SideMenuComponent />
        <section className="flex-1 grid lg:grid-cols-12 gap-2">
          <div className="col-span-12  lg:col-span-8">{children}</div>
          <div className=" grid gap-2 w-full col-span-12 lg:col-span-4 auto-rows-max">
            {layoutPages}
            {projects}
            {themes}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Layout
