import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useCallback, useRef, useState } from "react"

interface PropTypes {
  onClick?: (e: boolean) => void
}

gsap.registerPlugin(useGSAP)
function Switch({ onClick }: PropTypes) {
  const [isActive, setactive] = useState(false)
  const switchContainer = useRef(null)
  const tl = gsap.timeline({ paused: true })
  const handleChangeToggle = useCallback(() => {
    setactive(!isActive)
    onClick && onClick(!isActive)
  }, [isActive])

  let animate_toggle = tl
    .to(switchContainer?.current, {
      scale: 1.2,
      duration: 0.5,
      ease: "bounce",
    })
    .to(switchContainer?.current, {
      scale: 1,
      duration: 0.5,
    })

  useGSAP(
    () => {
      if (isActive) {
        animate_toggle?.play()
      } else {
        animate_toggle?.reverse()
      }
    },
    { dependencies: [isActive] }
  )

  return (
    <button
      ref={switchContainer}
      type="button"
      onClick={handleChangeToggle}
      className={` rounded-full
      w-[40px] h-[20px] ${
        isActive ? "bg-[#202020]" : "bg-stone-200"
      }  transition-colors duration-150 mx-auto`}
    >
      {/* //todo pointer */}
      <div
        className={`bg-white shadow rounded-full transition-transform duration-150 p-2 size-fit ${
          isActive ? "translate-x-[22px] " : "translate-x-[3px]"
        }`}
      ></div>
    </button>
  )
}

export default Switch
