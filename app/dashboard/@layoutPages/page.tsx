import Card from "@/Utility/Ui/Card"
import React from "react"

function page() {
  return (
    <div className="h-full w-full">
      <Card>
        <h1 className="text-xl font-medium text-stone-600 p-1 bg-stone-50">
          Pages
        </h1>
        <ul className="flex flex-col gap-1 divide-y">
          <li className="p-2 text-gray-500 text-sm">Landing</li>
          <li className="p-2 text-gray-500 text-sm">About</li>
          <li className="p-2 text-gray-500 text-sm">Skills & Experience</li>
          <li className="p-2 text-gray-500 text-sm">Contact</li>
        </ul>
      </Card>
    </div>
  )
}

export default page
