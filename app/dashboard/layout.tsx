import Card from "@/Utility/Ui/Card"
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
      <header className="w-full">
        <Card>header</Card>
      </header>
      <main className="flex-1 flex gap-1">
        <aside className="w-[300px]">
          <Card>side menu</Card>
        </aside>
        <section className="flex-1 flex gap-1 p-1">
          <div className="flex-1">{children}</div>
          <div className="grid gap-1 min-w-[400px]">
            {analytics}
            {notifications}
            {todos}
          </div>
        </section>
      </main>

      <footer className="w-full">
        <Card>Footer</Card>
      </footer>
    </div>
  )
}

export default Layout
