import React, { useRef, useState } from "react"
import Card from "../Card"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { BiCloset, BiMenu } from "react-icons/bi"
import { CgClose } from "react-icons/cg"

interface PropTypes {
  children: React.ReactNode
}

gsap.registerPlugin(useGSAP)
function SideMenu_Container({ children }: PropTypes) {
  const [isOpen, setOpen] = useState(false)
  const listContainer = useRef(null)
  const tl = gsap.timeline({ paused: true })

  let animate = tl
    .fromTo(
      listContainer.current,
      {
        width: "fit-content",
        height: "100%",
        duration: 0.2,
      },
      {
        width: 300,
        height: "100%",
        duration: 0.2,
      }
    )
    .fromTo(
      "#list-items",
      {
        opacity: 0,
        x: -2,
        display: "none",
        duration: 0.2,
      },
      { opacity: 1, x: 0, display: "block", duration: 0.2 }
    )

  useGSAP(
    () => {
      if (isOpen) {
        animate.play()
      } else {
        animate.reverse()
      }
    },
    { dependencies: [isOpen] }
  )

  const handleOpen = () => {
    setOpen(!isOpen)
  }

  return (
    <aside ref={listContainer} className="overflow-clip rounded bg-white">
      <Card>
        <ul className="grid auto-rows-max gap-1 ">
          <li
            className={`${
              isOpen ? " place-self-end" : " place-self-center"
            } border-b`}
          >
            <button
              type="button"
              title="Open"
              onClick={handleOpen}
              className={`rounded p-2 `}
            >
              {isOpen ? <CgClose size={18} /> : <BiMenu size={18} />}
            </button>
          </li>
          {children}
        </ul>
      </Card>
    </aside>
  )
}

export default SideMenu_Container
