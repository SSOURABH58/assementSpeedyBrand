'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Shape of You", streams: 2500000 },
  { name: "Blinding Lights", streams: 2300000 },
  { name: "Dance Monkey", streams: 2100000 },
  { name: "Rockstar", streams: 1900000 },
  { name: "Someone You Loved", streams: 1700000 },
]

export function TopStreamedSongs() {
  return (
    <ChartContainer
      config={{
        streams: {
          label: "Streams",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="streams" fill="var(--color-streams)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}