"use client"
import gsap from "gsap"
import React, { useRef } from "react"

interface PropTypes {
  children: React.ReactNode
  content: string | null
  className?: null | undefined | string
}
function ToolTip_Trigger({ children, content, className }: PropTypes) {
  return (
    <div className="relative group border border-black">
      {children}
      <p
        className={`${
          className ?? "bg-stone-800 text-white rounded-lg shadow-lg  py-1"
        } absolute top-[3px] -right-[100%] z-20 text-center   invisible opacity-0 -translate-x-2 group-hover:translate-x-0  group-hover:delay-500 group-hover:visible group-hover:opacity-[1] transition-all duration-150`}
      >
        {content}
      </p>
    </div>
  )
}

export default ToolTip_Trigger
