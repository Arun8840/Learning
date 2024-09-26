import React from "react"

interface PropTypes {
  children?: React.ReactNode
}

function AlertFooter({ children }: PropTypes) {
  return (
    <div className="pt-5 flex items-center justify-end gap-2">{children}</div>
  )
}

export default AlertFooter
