import Navigation_Animator from "@/Utility/Ui/Navigation_Animator"
import React from "react"
function template({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="relative">
      <Navigation_Animator>{children}</Navigation_Animator>
    </section>
  )
}

export default template
