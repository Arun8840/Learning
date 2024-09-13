import React from "react"
interface PropTypes {
  className?: string
}
function Skeleton({ className }: PropTypes) {
  let defaultValue = {
    className: className ?? "w-full ",
  }
  return (
    <div
      className={`${defaultValue?.className} rounded bg-gradient-to-br from-stone-200 to-white animate-pulse`}
    ></div>
  )
}

export default Skeleton
