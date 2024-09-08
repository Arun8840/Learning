import React from "react"

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded bg-white shadow-lg p-2 w-full h-full">
      {children}
    </div>
  )
}

export default Card
