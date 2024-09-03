import Card from "@/Utility/Ui/Card"
import Link from "next/link"
import React from "react"

function page() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href={"dashboard/settings"}>Open remainders</Link>
    </Card>
  )
}

export default page
