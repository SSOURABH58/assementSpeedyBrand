import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", totalUsers: 1000000, activeUsers: 800000 },
  { month: "Feb", totalUsers: 1050000, activeUsers: 820000 },
  { month: "Mar", totalUsers: 1100000, activeUsers: 850000 },
  { month: "Apr", totalUsers: 1150000, activeUsers: 900000 },
  { month: "May", totalUsers: 1200000, activeUsers: 950000 },
  { month: "Jun", totalUsers: 1250000, activeUsers: 1000000 },
  { month: "Jul", totalUsers: 1300000, activeUsers: 1050000 },
  { month: "Aug", totalUsers: 1350000, activeUsers: 1100000 },
  { month: "Sep", totalUsers: 1400000, activeUsers: 1150000 },
  { month: "Oct", totalUsers: 1450000, activeUsers: 1200000 },
  { month: "Nov", totalUsers: 1500000, activeUsers: 1250000 },
  { month: "Dec", totalUsers: 1550000, activeUsers: 1300000 },
]

export function UserGrowthChart() {
  return (
    <ChartContainer
      config={{
        totalUsers: {
          label: "Total Users",
          color: "hsl(var(--chart-1))",
        },
        activeUsers: {
          label: "Active Users",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line type="monotone" dataKey="totalUsers" stroke="var(--color-totalUsers)" strokeWidth={2} />
          <Line type="monotone" dataKey="activeUsers" stroke="var(--color-activeUsers)" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}