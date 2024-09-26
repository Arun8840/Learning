"use client"
import React, { useState } from "react"
import AlertDialog from "./Animations/Alert/AlertDialog"
import AlertTitle from "./Animations/Alert/AlertTitle"
import AlertDescription from "./Animations/Alert/AlertDescription"
import AlertFooter from "./Animations/Alert/AlertFooter"

function Dialog() {
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
        <small> Show Dialog</small>
      </button>

      {/* //todo alert component */}
      <AlertDialog trigger={isOpen}>
        <AlertTitle title={"Are you absolutely sure delete this?"} />
        <AlertDescription description="This action cannot be undone. This will permanently delete your account and remove your data." />
        <AlertFooter>
          <button
            onClick={handleTrigger}
            className="px-4 py-1 rounded bg-white text-stone-700 border hover:bg-slate-50 transition-colors duration-150"
          >
            Cancel
          </button>
          <button className="px-4 py-1 rounded bg-[#000000] text-white hover:bg-[#202020] transition-colors duration-150">
            Continue
          </button>
        </AlertFooter>
      </AlertDialog>
    </div>
  )
}

export default Dialog
