import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useRef, useState } from "react"
import { TbSettingsFilled } from "react-icons/tb"

interface PropTypes {
  children: React.ReactNode
  varient?: "primary" | "secondary" | "success"
  icon?: React.ReactNode
}
gsap.registerPlugin(useGSAP)
function Floot_Button({ children, varient = "primary", icon }: PropTypes) {
  const [isOpenTool, setOpenTool] = useState(false)
  const layer = useRef(null)
  const listContainer: any = useRef(null)
  const tl = gsap.timeline({ paused: true })

  let animate = tl
    .fromTo(
      layer.current,
      {
        width: 80,
        height: "100%",
        display: "none",
        opacity: 0,
      },
      {
        position: "fixed",
        zIndex: 50,
        top: 0,
        right: 0,
        width: 60,
        height: "100%",
        display: "grid",
        opacity: 1,
        backgroundColor: "#00000060",
        backdropFilter: "blur(2px)",
        duration: 0.2,
      }
    )
    .fromTo(
      listContainer?.current?.children,
      {
        x: 3,
        opacity: 0,
        duration: 0.2,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.2,
      }
    )

  useGSAP(
    () => {
      if (isOpenTool) {
        animate?.play()
      } else {
        animate?.reverse()
      }
    },
    { dependencies: [isOpenTool] }
  )

  const handleOpenTool = () => {
    setOpenTool(!isOpenTool)
  }

  return (
    <>
      <button
        onClick={handleOpenTool}
        type="button"
        title="Open Tools"
        className="block bg-[#202020] text-white rounded-full mx-auto  p-3 "
      >
        <TbSettingsFilled size={18} />
      </button>

      <div ref={layer} className="hidden">
        <ul ref={listContainer} className="grid auto-rows-max gap-y-8 py-2">
          {children}
        </ul>
      </div>
    </>
  )
}

export default Floot_Button
