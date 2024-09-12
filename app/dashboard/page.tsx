"use client"
import Card from "@/Utility/Ui/Card"
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

function page() {
  const data = [
    {
      name: "CSS",
      rating: 90,
    },
    {
      name: "SASS",
      rating: 70,
    },
    {
      name: "JS",
      rating: 80,
    },
    {
      name: "REACT",
      rating: 90,
    },
    {
      name: "REACT-NATIVE",
      rating: 70,
    },
    {
      name: "NEXT JS",
      rating: 70,
    },
    {
      name: "TAILWIND CSS",
      rating: 90,
    },
    {
      name: "FIGMA",
      rating: 70,
    },
    {
      name: "SPLINE",
      rating: 70,
    },
    {
      name: "ANINIX",
      rating: 70,
    },
    {
      name: "NODE JS",
      rating: 60,
    },
  ]

  const BarChart = dynamic(
    () => import("recharts").then((module) => module.BarChart),
    { ssr: false, loading: () => <h1>loading....</h1> }
  )
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="p-2 text-xl font-medium text-stone-700 tracking-wide bg-white rounded-t">
        Overall Skills Data
      </h1>
      <div className="flex-1">
        <Card>
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
        </Card>
      </div>
    </div>
  )
}

export default page
