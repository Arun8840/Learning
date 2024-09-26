"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useRef } from "react"

interface PropTypes {
  children: React.ReactNode
  trigger?: boolean
}

gsap.registerPlugin(useGSAP)
function AlertDialog({ children, trigger }: PropTypes) {
  let layerRef = useRef(null)
  let cardRef = useRef(null)

  // todo timeline
  let tl = gsap.timeline({ paused: true })

  let animate = tl
    .fromTo(
      layerRef?.current,
      {
        width: "100%",
        height: "100%",
        opacity: 0,
        display: "none",
        duration: 0.2,
      },
      {
        width: "100%",
        height: "100%",
        opacity: 1,
        backgroundColor: "#00000070",
        display: "grid",
        placeItems: "center",
        position: "fixed",
        inset: 0,
        zIndex: 50,
        duration: 0.2,
      }
    )
    .fromTo(
      cardRef?.current,
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.2,
      }
    )

  useGSAP(
    () => {
      if (trigger) {
        animate.play()
      } else {
        animate.reverse()
      }
    },
    { dependencies: [trigger] }
  )
  return (
    <section ref={layerRef} className="hidden">
      <div
        ref={cardRef}
        className="bg-white opacity-0 rounded-lg shadow-lg min-w-[20rem] max-w-[30rem] p-5"
      >
        {children}
      </div>
    </section>
  )
}

export default AlertDialog
