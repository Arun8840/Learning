"use client"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import gsap, { Power3 } from "gsap"
import React, { useEffect, useRef } from "react"
import { CgClose } from "react-icons/cg"

function Toster() {
  const tost = useAppSelector((state) => state?.ui?.tost)
  const dispatch = useAppDispatch()
  const tost_container = useRef(null)
  let animation1 = gsap.to(tost_container?.current, {
    x: 0,
    opacity: 1,
    display: "flex",
    duration: 0.4,
    paused: false,
  })
  let animation2 = gsap.to("#loader", {
    width: 0,
    duration: 5,
    paused: false,
  })

  const handlePause = () => {
    animation2.pause()
  }

  const handleResume = () => {
    animation2.resume()
  }
  const handleClose = () => {
    animation1.reverse()
  }

  useEffect(() => {
    if (tost) {
      animation1.play()
      animation2.play()
    } else {
      animation1.kill()
      animation2.kill()
    }
  }, [tost])

  return (
    <div
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      className="fixed top-5 right-5 min-w-[300px] min-h-[70px] bg-white shadow-md border flex-col justify-between rounded translate-x-[60rem] opacity-0 hidden"
      ref={tost_container}
    >
      <div className="flex justify-between">
        <p className="p-2 text-sm"> Toster</p>
        <button onClick={handleClose} className="px-3">
          <CgClose />
        </button>
      </div>
      {/* //todo loader */}
      <div id="loader" className="w-full bg-green-600 h-[2px]"></div>
    </div>
  )
}

export default Toster
