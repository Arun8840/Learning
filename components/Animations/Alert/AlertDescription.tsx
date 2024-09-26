import React from "react"

interface PropTypes {
  description?: string | React.ReactNode | null | undefined
}
function AlertDescription({ description }: PropTypes) {
  return (
    <p className="text-sm text-stone-700 tracking-wide leading-6">
      {description
        ? description
        : " This action cannot be undone. This will permanently delete your account and remove your data from our servers."}
    </p>
  )
}

export default AlertDescription
