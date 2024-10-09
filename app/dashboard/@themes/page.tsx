import Card from "@/Utility/Ui/Card"
import Dialog from "@/components/Dialog"
import NotificationIsland from "@/components/NotificationIsland"
import ToolTip from "@/components/ToolTip"
import React from "react"

function page() {
  return (
    <div className="h-full w-full">
      <Card>
        <div className="flex items-center gap-2">
          <NotificationIsland />
          <Dialog />
          <ToolTip />
        </div>
      </Card>
    </div>
  )
}

export default page
