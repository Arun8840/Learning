"use client"
import gsap, { Power3 } from "gsap"
import React, { useEffect, useRef } from "react"

interface Proptypes {
  children: React.ReactNode
}
function Navigation_Animator({ children }: Proptypes) {
  const PageContainer: any = useRef(null)

  useEffect(() => {
    gsap.to(PageContainer?.current?.children, {
      stagger: 0.1,
      height: 0,
      // opacity: 0,
      ease: Power3.easeInOut,
      onComplete: () => {
        gsap.to(PageContainer.current, {
          display: "none",
        })
      },
    })
  }, [])
  return (
    <>
      <ul
        ref={PageContainer}
        className="grid grid-cols-6 absolute inset-0 w-full h-full"
      >
        {Array.from({ length: 6 }, (_, index) => {
          return (
            <li
              id={`column${index}`}
              key={index}
              className="bg-black h-full"
            ></li>
          )
        })}
      </ul>
      {children}
    </>
  )
}

export default Navigation_Animator
