import Card from "@/Utility/Ui/Card"
import React from "react"

function page() {
  return (
    <div className="h-full w-full">
      <Card>
        <h1 className="text-xl font-medium text-stone-600 p-1 bg-stone-50">
          Projects
        </h1>
        <ul className="flex flex-col gap-1 divide-y">
          <li className="py-2 text-gray-500 text-sm flex items-center gap-2">
            <div className="size-9 bg-stone-100 rounded"></div>
            <span>DND Todo</span>
          </li>
          <li className="py-2 text-gray-500 text-sm flex items-center gap-2">
            <div className="size-9 bg-stone-100 rounded"></div>
            <span>Chat App</span>
          </li>
          <li className="py-2 text-gray-500 text-sm flex items-center gap-2">
            <div className="size-9 bg-stone-100 rounded"></div>
            <span>Portfolio</span>
          </li>
          <li className="py-2 text-gray-500 text-sm flex items-center gap-2">
            <div className="size-9 bg-stone-100 rounded"></div>
            <span>Expense Tracker in react-native</span>
          </li>
          <li className="py-2 text-gray-500 text-sm flex items-center gap-2">
            <div className="size-9 bg-stone-100 rounded"></div>
            <span>Office management in react-native</span>
          </li>
        </ul>
      </Card>
    </div>
  )
}

export default page
