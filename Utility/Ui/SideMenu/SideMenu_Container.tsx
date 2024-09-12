import React from "react"
import Card from "../Card"

interface PropTypes {
  children: React.ReactNode
}
function SideMenu_Container({ children }: PropTypes) {
  return (
    <aside className="min-w-[300px]">
      <Card>
        <ul className="grid gap-1">{children}</ul>
      </Card>
    </aside>
  )
}

export default SideMenu_Container
