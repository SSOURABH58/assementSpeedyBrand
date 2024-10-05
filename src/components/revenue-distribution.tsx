"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { name: "Subscriptions ", value: 8500000 },
  { name: "Ads", value: 3845678 },
];

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))"];

export function RevenueDistribution() {
  return (
    <ChartContainer
      config={{
        Subscriptions: {
          label: "Subscriptions",
          color: "hsl(var(--chart-1))",
        },
        Ads: {
          label: "Ads",
          color: "hsl(var(--chart-2))",
        },
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={"100%"} // Reduced outer radius for a smaller pie
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
