"use client"
import Card from "@/Utility/Ui/Card"
import React from "react"
import { MdEmojiObjects } from "react-icons/md"

function HeaderComponent() {
  return (
    <Card>
      <header className="w-full ">
        <div className=" flex items-center justify-between">
          <button type="button">
            <MdEmojiObjects color="#16423C" size={25} />
          </button>
          {/* 
          <ul className="flex gap-2 items-center">
            <li>logout</li>
          </ul> */}
        </div>
      </header>
    </Card>
  )
}

export default HeaderComponent
