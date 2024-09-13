"use client"
import { dashboardService } from "@/Services/DashboardService"
import Card from "@/Utility/Ui/Card"
import Skeleton from "@/Utility/Ui/Skeleton"
import Spinner from "@/Utility/Ui/Spinner"
import dynamic from "next/dynamic"
import React from "react"
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts"
import useSWR from "swr"

function Overall_Analytics() {
  // todo load chart skills
  const fetcher = async () => {
    let res = await dashboardService.Load_Skills()
    if (res) {
      return res
    }
  }
  const { data: skills, isLoading } = useSWR("/load-skills", fetcher, {
    revalidateOnFocus: false,
  })

  let data = skills?.map((values: { name: string; rating: number }) => {
    return {
      name: values?.name,
      rating: values?.rating,
    }
  })

  const BarChart = dynamic(
    () => import("recharts").then((module) => module.BarChart),
    { ssr: false, loading: () => <Spinner /> }
  )

  return (
    <div className="w-full h-full flex flex-col">
      {isLoading ? (
        <div className="p-2">
          {" "}
          <Skeleton className="w-full min-h-[50px] rounded" />
        </div>
      ) : (
        <h1 className="p-2 font-medium text-stone-700 tracking-wide rounded-t">
          Overall Skills Data
        </h1>
      )}
      <div className="flex-1">
        <Card>
          {isLoading ? (
            <Skeleton className="w-full h-full" />
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 10,
                  right: 10,
                  left: 10,
                  bottom: 5,
                }}
                barSize={35}
              >
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="name" fontSize={10} />
                <YAxis fontSize={10} />
                <Tooltip
                  labelClassName="text-xs"
                  contentStyle={{
                    fontSize: 10,
                  }}
                />
                <Legend fontSize={10} />
                <Bar dataKey="rating" stackId="a" fill="#16423C" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </Card>
      </div>
    </div>
  )
}

export default Overall_Analytics
