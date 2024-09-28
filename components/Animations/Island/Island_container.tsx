import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useRef } from "react"
import SuccessAnime from "../../../public/SuccessAnime.gif"
import WarningAnime from "../../../public/WarningAnime.gif"
import ErorrAnime from "../../../public/ErrorAnime.gif"
import Image from "next/image"
interface Proptypes {
  children: React.ReactNode
  trigger?: boolean
  varient?: "success" | "warning" | "error" | "info"
}

gsap.registerPlugin(useGSAP)
function Island_container({
  children,
  trigger = false,
  varient = "success",
}: Proptypes) {
  let AnimeImage: any = SuccessAnime?.src
  let AnimeWarning: any = WarningAnime?.src
  let AnimeError: any = ErorrAnime?.src
  let varientType = [
    {
      type: "success",
      color: "#185519",
      gif: AnimeImage,
    },
    {
      type: "warning",
      color: "#FD841F",
      gif: AnimeWarning,
    },
    {
      type: "info",
      color: "#87A2FF",
      gif: AnimeError,
    },
    {
      type: "error",
      color: "#B8001F",
      gif: AnimeError,
    },
  ]
  let varientColor = varientType?.find((colors) => colors?.type === varient)

  let island_container_ref = useRef(null)
  let tl = gsap.timeline({ paused: true })

  let animateIsland = tl.fromTo(
    island_container_ref?.current,
    {
      backgroundColor: "white",
      color: "#040D12",
      opacity: 0,
      right: 8,
      top: 8,
      yPercent: -100,
      duration: 0.8,
    },
    {
      backgroundColor: varientColor?.color,
      color: "white",
      opacity: 1,
      right: 8,
      top: 8,
      yPercent: 0,
      duration: 0.8,
      ease: "expo.out",
      onComplete: () => {
        setTimeout(() => {
          animateIsland?.reverse()
        }, 2000)
      },
    }
  )

  useGSAP(
    () => {
      if (trigger) {
        animateIsland?.play()
      } else {
        animateIsland?.reverse()
      }
    },
    { dependencies: [trigger], revertOnUpdate: true }
  )

  return (
    <section
      ref={island_container_ref}
      className="border rounded-xl shadow-lg max-w-[350px] fixed z-50 p-2 opacity-0"
    >
      <div className="flex gap-x-1">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg grid place-items-center">
          <Image
            objectFit="contain"
            src={varientColor?.gif}
            alt="Anime"
            width={50}
            height={50}
          />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </section>
  )
}

export default Island_container
