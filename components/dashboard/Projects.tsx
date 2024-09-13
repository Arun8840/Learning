"use client"
import { dashboardService } from "@/Services/DashboardService"
import Card from "@/Utility/Ui/Card"
import Skeleton from "@/Utility/Ui/Skeleton"
import { ProjectTypes } from "@/models/ProjectTypes"
import React from "react"
import useSWR from "swr"

function Projects() {
  // todo load chart skills
  const fetcher = async () => {
    let res = await dashboardService.Load_Projects()
    if (res) {
      return res
    }
  }
  const { data: projects, isLoading } = useSWR("/load-projects", fetcher, {
    revalidateOnFocus: false,
  })

  return (
    <>
      <Card>
        {isLoading ? (
          <Skeleton className="w-full min-h-14" />
        ) : (
          <>
            <h1 className="font-medium text-stone-600 p-1">Projects</h1>
            <ul className="flex flex-col gap-1 divide-y w-full max-h-[400px] overflow-y-auto">
              {projects?.map((items: ProjectTypes) => {
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
      </Card>
    </>
  )
}

export default Projects
