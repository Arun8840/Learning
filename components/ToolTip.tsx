import React from "react"
import ToolTip_Trigger from "./Animations/ToolTip/ToolTip_Trigger"

function ToolTip() {
  return (
    <ToolTip_Trigger
      content="hello world"
      className="text-sm capitalize bg-stone-700 text-white rounded-lg shadow-lg px-2 py-1"
    >
      <button
        type="button"
        className="border rounded px-3 py-1 text-stone-600 hover:bg-stone-200 transition-colors duration-150"
      >
        <small>Tooltip</small>
      </button>
    </ToolTip_Trigger>
  )
}

export default ToolTip
