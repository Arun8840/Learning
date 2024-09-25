import React, { forwardRef } from "react"

interface PropTypes {
  children: React.ReactNode
}

const Drawer_Item = forwardRef<HTMLDivElement, PropTypes>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white w-full rounded-t-lg h-1/2 p-2 translate-y-[50rem]"
      >
        {children}
      </div>
    )
  }
)

Drawer_Item.displayName = "Drawer_Item" // Setting display name for better debugging

export default Drawer_Item
