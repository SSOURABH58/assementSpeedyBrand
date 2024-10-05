"use client";

import { Music, User, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

type Notification = {
  id: number;
  type: "system" | "user" | "song";
  message: string;
  timestamp: string;
};

const notifications: Notification[] = [
  {
    id: 1,
    type: "system",
    message: "System maintenance scheduled for tonight at 2 AM UTC",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    type: "user",
    message: "New user registration: johndoe@example.com",
    timestamp: "3 hours ago",
  },
  {
    id: 3,
    type: "song",
    message: "New trending song: 'Summertime' by DJ Sunshine",
    timestamp: "5 hours ago",
  },
  {
    id: 4,
    type: "system",
    message: "Updated privacy policy. Please review.",
    timestamp: "1 day ago",
  },
  {
    id: 5,
    type: "user",
    message: "User milestone: user123 has listened to 1000 songs!",
    timestamp: "1 day ago",
  },
];

export function RecentNotifications() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Recent Notifications
        </CardTitle>
        <CardDescription>
          Stay updated with the latest events and activities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] w-full pr-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="mb-4 flex items-start space-x-4 last:mb-0"
            >
              {notification.type === "system" && (
                <Zap className="mt-1 h-5 w-5 text-yellow-500" />
              )}
              {notification.type === "user" && (
                <User className="mt-1 h-5 w-5 text-blue-500" />
              )}
              {notification.type === "song" && (
                <Music className="mt-1 h-5 w-5 text-green-500" />
              )}
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.message}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.timestamp}
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
