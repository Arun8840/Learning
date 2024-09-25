"use client"
import { useGSAP } from "@gsap/react"
import gsap, { Power3 } from "gsap"
import React, { useEffect, useRef } from "react"

interface Proptypes {
  children: React.ReactNode
}

gsap.registerPlugin(useGSAP)
function Navigation_Animator({ children }: Proptypes) {
  const PageContainer: any = useRef(null)
  useGSAP(() => {
    gsap.fromTo(
      PageContainer?.current?.children,
      {
        height: "100%",
        backgroundColor: "black",
      },
      {
        backgroundColor: "black",
        height: 0,
        stagger: 0.1,
        duration: 0.5,
        yoyo: true,
        onComplete: () => {
          gsap.to(PageContainer.current, { display: "none" })
        },
      }
    )
  })
  return (
    <>
      <ul
        ref={PageContainer}
        className="grid grid-cols-6 absolute z-10 inset-0 w-full h-full"
      >
        {Array.from({ length: 6 }, (_, index) => {
          return <li id={`column${index}`} key={index}></li>
        })}
      </ul>
      {children}
    </>
  )
}

export default Navigation_Animator
