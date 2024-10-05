import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KeyMetrics } from "./key-metrics";
import { RevenueDistribution } from "./revenue-distribution";
import { TopStreamedSongs } from "./top-streamed-songs";
import { StreamsDataTable } from "./streams-data-table";
import { UserGrowthChart } from "./user-growth-chart";
import { RecentNotifications } from "./recent-notifications";

export function DashboardComponent() {
  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 ">
        <h1 className="text-3xl font-semibold">Streamify Dashboard</h1>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="space-y-4"
        >
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="charts">Charts</TabsTrigger>
            <TabsTrigger value="data">Data</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <KeyMetrics />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <RecentNotifications />
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>User Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <UserGrowthChart />
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Revenue Distribution</CardTitle>
                </CardHeader>
                <CardContent className="flex  justify-center  flex-grow">
                  <RevenueDistribution />
                </CardContent>
              </Card>
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Top 5 Streamed Songs</CardTitle>
                </CardHeader>
                <CardContent>
                  <TopStreamedSongs />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Streams</CardTitle>
                </CardHeader>
                <CardContent>
                  <StreamsDataTable />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="charts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Top 5 Streamed Songs</CardTitle>
              </CardHeader>
              <CardContent>
                <TopStreamedSongs />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="data" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Streams</CardTitle>
              </CardHeader>
              <CardContent>
                <StreamsDataTable />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
