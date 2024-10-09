"use client"
import { useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)
export default function TestPage() {
  useGSAP(() => {
    gsap.to("#rect", {
      attr: { x: "100%" },
      repeatDelay: 1,
      repeat: -1,
      duration: 10,
    })
  }, {})
  return (
    <main className="grid min-h-screen place-items-center bg-[#0c0c0c]">
      <svg
        className="w-full h-full"
        viewBox="0 0 1428 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_57_15"
          stroke="white"
          x="-1"
          y="0"
          className="w-full h-full"
        >
          <path
            d="M0 69.9999C805 -132 688 190 1428 127"
            stroke="white"
            stroke-opacity="1"
            stroke-width="5"
          />
        </mask>
        <g mask="url(#mask0_57_15)">
          <rect
            id="rect"
            x="0"
            y="0"
            width="100%"
            height="205"
            fill="url(#paint0_linear_63_34)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_63_34"
            x1="19"
            y1="-9.49999"
            x2="348.576"
            y2="-4.50794"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B6FFFA" stop-opacity="0" />
            <stop offset="0.584391" stop-color="#2192FF" />
            <stop offset="1" stop-color="#0002A1" />
          </linearGradient>
        </defs>
      </svg>
    </main>
  )
}
