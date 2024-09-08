import React from "react"

interface PropTypes {
  children: React.ReactNode
  onClick?: () => void
  Icon?: React.ReactNode
  active?: {
    value: boolean
    color: string
  }
}
function SideMenu_Items({
  children,
  onClick,
  Icon,
  active = {
    value: false,
    color: "#202020",
  },
}: PropTypes) {
  let isActive = {
    backgroundColor: active?.value ? active?.color : "",
    color: active?.value ? "white" : "gray",
  }
  return (
    <li
      style={isActive}
      onClick={onClick}
      className="flex items-center gap-2 text-start text-sm tracking-wide rounded hover:bg-stone-50 transition-colors duration-150 p-2 cursor-pointer"
    >
      {Icon}
      {children}
    </li>
  )
}

export default SideMenu_Items
