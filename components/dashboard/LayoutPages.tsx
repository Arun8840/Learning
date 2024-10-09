"use client"
import { dashboardService } from "@/Services/DashboardService"
import Card from "@/Utility/Ui/Card"
import Skeleton from "@/Utility/Ui/Skeleton"
import { PageTypes } from "@/models/PageTypes"
import React from "react"
import useSWR from "swr"

function LayoutPages() {
  // todo load chart skills
  const fetcher = async () => {
    let res = await dashboardService.Load_Pages()
    if (res) {
      return res
    }
  }
  const { data: Pages, isLoading } = useSWR("/load-pages", fetcher, {
    revalidateOnFocus: false,
  })
  return (
    <>
      <Card>
        <div className="w-full max-h-[230px] overflow-y-auto">
          {isLoading ? (
            <Skeleton className="w-full min-h-14" />
          ) : (
            <>
              <h1 className="font-medium text-stone-600 p-1">Pages</h1>
              <ul className="flex flex-col gap-1 divide-y">
                {Pages?.map((items: PageTypes) => {
                  return (
                    <li className="py-2 text-gray-500 text-sm flex items-center gap-2">
                      <div className="size-9 bg-stone-100 rounded"></div>
                      <span>{items?.title}</span>
                    </li>
                  )
                })}
              </ul>
            </>
          )}
        </div>
      </Card>
    </>
  )
}

export default LayoutPages
