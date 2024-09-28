"use client"
import React, { useState } from "react"
import Island_container from "./Animations/Island/Island_container"
import Island_header from "./Animations/Island/Island_header"
import Island_description from "./Animations/Island/Island_description"

function NotificationIsland() {
  const [isOpen, setOpen] = useState<boolean>(false)
  const handleTrigger = () => {
    setOpen(!isOpen)
  }
  return (
    <div>
      <button
        type="button"
        onClick={handleTrigger}
        className="border rounded px-3 py-1 text-stone-600"
      >
        <small>Tost</small>
      </button>

      {/* //todo alert component */}
      <Island_container varient="error" trigger={isOpen}>
        <Island_header title={"Event has been created"} />
        <Island_description
          description={"Sunday, December 03, 2023 at 9:00 AM"}
        />
      </Island_container>
    </div>
  )
}

export default NotificationIsland
