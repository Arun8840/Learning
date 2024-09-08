import Card from "@/Utility/Ui/Card"
import SideMenu_Container from "@/Utility/Ui/SideMenu/SideMenu_Container"
import HeaderComponent from "@/components/HeaderComponent"
import SideMenuComponent from "@/components/SideMenuComponent"
import React from "react"

function Layout({
  children,
  todos,
  notifications,
  analytics,
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  notifications: React.ReactNode
  todos: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col gap-1 p-1">
      <HeaderComponent />
      <main className="flex-1 flex gap-1">
        <SideMenuComponent />
        <section className="flex-1 flex gap-1">
          <div className="flex-1">{children}</div>
          <div className="grid gap-1 min-w-[400px]">
            {analytics}
            {notifications}
            {todos}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Layout
