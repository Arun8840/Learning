import React from "react"

function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <section className="min-h-screen">Pagelayout{children}</section>
}

export default layout
