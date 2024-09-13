import Card from "@/Utility/Ui/Card"
import React from "react"

function page() {
  return (
    <div className="h-full w-full">
      <Card>
        <h1 className=" font-medium text-stone-600 p-1">Themes</h1>
        <ul className="flex flex-wrap gap-1 pt-2">
          <li className="size-14 rounded-full bg-stone-400 grid grid-cols-2">
            {/* primary */}
            <div className="w-full h-1/2 bg-indigo-500 rounded-tl-full"></div>
            {/* secondary */}
            <div className="w-full h-1/2 bg-slate-800 rounded-tr-full"></div>
          </li>
          <li className="size-14 rounded-full bg-yellow-50 grid grid-cols-2">
            {/* primary */}
            <div className="w-full h-1/2 bg-green-900 rounded-tl-full"></div>
            {/* secondary */}
            <div className="w-full h-1/2 bg-stone-200 rounded-tr-full"></div>
          </li>{" "}
          <li className="size-14 rounded-full bg-stone-400 grid grid-cols-2">
            {/* primary */}
            <div className="w-full h-1/2 bg-blue-500 rounded-tl-full"></div>
            {/* secondary */}
            <div className="w-full h-1/2 bg-slate-800 rounded-tr-full"></div>
          </li>
        </ul>
      </Card>
    </div>
  )
}

export default page
