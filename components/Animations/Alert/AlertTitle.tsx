import React from "react"

interface PropTypes {
  title?: string | React.ReactNode | null | undefined
}

function AlertTitle({ title }: PropTypes) {
  return (
    <h1 className="font-medium text-lg tracking-wide py-2 text-stone-800">
      {title ? title : "Are you absolutely sure?"}
    </h1>
  )
}

export default AlertTitle
