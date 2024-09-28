import React from "react"

interface Proptypes {
  description: React.ReactNode | string | null | undefined
}
function Island_description({ description }: Proptypes) {
  return (
    <p className="tracking-wide line-clamp-2">
      <small> {description}</small>
    </p>
  )
}

export default Island_description
