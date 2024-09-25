import React, { memo, useEffect, useRef } from "react"
import Drawer_Item from "./Drawer_Item"
import { useAppSelector } from "@/lib/hooks"
import gsap from "gsap"

function Drawer_container() {
  const drawer_container = useRef(null)
  const drawer_form = useRef(null)

  const component = useAppSelector((state) => state?.ui?.drawer)

  useEffect(() => {
    // Initialize the GSAP timeline inside useEffect
    const tl = gsap.timeline({ paused: false })
    tl.to(drawer_container.current, {
      display: "grid",
      opacity: 1,
      ease: "power2.inOut",
      duration: 0.2,
    })
    tl.to(drawer_form.current, {
      y: 0,
      ease: "power3.in",
      duration: 0.2,
    })

    // Play or reverse the timeline based on component.isOpen
    if (component?.isOpen) {
      tl.play()
    } else {
      tl.reverse()
    }

    // Cleanup function to kill the timeline when the component unmounts
    return () => {
      tl.kill()
    }
  }, [component?.isOpen]) // Depend on component.isOpen

  return (
    <section
      ref={drawer_container}
      className="bg-black/40 backdrop-blur-sm fixed inset-0 hidden opacity-0 place-items-end overflow-hidden"
    >
      <Drawer_Item ref={drawer_form}>
        <h1>test</h1>
      </Drawer_Item>
    </section>
  )
}

export default memo(Drawer_container)
