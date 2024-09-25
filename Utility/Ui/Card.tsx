import React from "react"

function Card({
  children,
  header,
}: {
  children: React.ReactNode
  header?: string | null | undefined
}) {
  return (
    <div className="rounded border bg-white shadow-lg p-2 w-full h-full flex flex-col gap-1">
      {header && <h1 className="font-medium text-stone-600 p-1">{header}</h1>}
      <div className="flex-1">{children}</div>
    </div>
  )
}

export default Card
