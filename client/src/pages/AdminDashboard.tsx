import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { 
  LogOut, 
  Activity, 
  Users, 
  MessageSquare, 
  ThumbsUp,
  Calendar,
  Mail
} from "lucide-react";
import { format } from "date-fns";

type ActivityLog = {
  id: string;
  activityType: string;
  email: string | null;
  data: string;
  sessionId: string | null;
  createdAt: number;
};

type Stats = {
  totalConversations: number;
  totalActivities: number;
  totalVotes: number;
  uniqueEmails: number;
};

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [selectedDays, setSelectedDays] = useState(7);

  const { data: authCheck, isLoading: authLoading } = useQuery<{ isAdmin: boolean }>({
    queryKey: ["/api/admin/check"],
  });

  const { data: stats } = useQuery<Stats>({
    queryKey: ["/api/admin/stats"],
    enabled: authCheck?.isAdmin,
  });

  const { data: activityLogs } = useQuery<ActivityLog[]>({
    queryKey: ["/api/admin/activity-logs"],
    enabled: authCheck?.isAdmin,
  });

  const { data: dailyDigest } = useQuery<ActivityLog[]>({
    queryKey: [`/api/admin/daily-digest?days=${selectedDays}`],
    enabled: authCheck?.isAdmin,
  });

  useEffect(() => {
    if (!authLoading && !authCheck?.isAdmin) {
      setLocation("/admin/login");
    }
  }, [authCheck, authLoading, setLocation]);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
        credentials: "include",
      });
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
      setLocation("/admin/login");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out.",
        variant: "destructive",
      });
    }
  };

  if (authLoading || !authCheck?.isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-muted-foreground">Loading...</div>
      </div>
    );
  }

  const groupByDay = (logs: ActivityLog[]) => {
    const grouped: Record<string, ActivityLog[]> = {};
    logs.forEach((log) => {
      const date = format(new Date(log.createdAt), "yyyy-MM-dd");
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(log);
    });
    return grouped;
  };

  const digestByDay = dailyDigest ? groupByDay(dailyDigest) : {};

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-display font-bold">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">Wisdom Council Analytics</p>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            data-testid="button-logout"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Activities</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalActivities || 0}</div>
              <p className="text-xs text-muted-foreground">All tracked events</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unique Emails</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.uniqueEmails || 0}</div>
              <p className="text-xs text-muted-foreground">Email submissions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversations</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalConversations || 0}</div>
              <p className="text-xs text-muted-foreground">Chat sessions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Votes</CardTitle>
              <ThumbsUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalVotes || 0}</div>
              <p className="text-xs text-muted-foreground">Persona votes</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="recent" className="space-y-4">
          <TabsList>
            <TabsTrigger value="recent" data-testid="tab-recent">Recent Activity</TabsTrigger>
            <TabsTrigger value="digest" data-testid="tab-digest">Daily Digest</TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity Logs</CardTitle>
                <CardDescription>Last 100 user actions</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px]">
                  <div className="space-y-4">
                    {activityLogs && activityLogs.length > 0 ? (
                      activityLogs.map((log) => {
                        const data = JSON.parse(log.data);
                        return (
                          <div 
                            key={log.id} 
                            className="flex items-start justify-between border-b pb-4 last:border-0"
                            data-testid={`activity-${log.id}`}
                          >
                            <div className="space-y-1 flex-1">
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">{log.activityType}</Badge>
                                {data.consentGiven && (
                                  <Badge variant="secondary" className="text-xs">GDPR Consent</Badge>
                                )}
                              </div>
                              {log.email && (
                                <p className="text-sm font-medium">{log.email}</p>
                              )}
                              <p className="text-xs text-muted-foreground">
                                {format(new Date(log.createdAt), "PPpp")}
                              </p>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-sm text-muted-foreground text-center py-8">
                        No activity logged yet
                      </p>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="digest" className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Button
                variant={selectedDays === 1 ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDays(1)}
                data-testid="button-1-day"
              >
                Today
              </Button>
              <Button
                variant={selectedDays === 7 ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDays(7)}
                data-testid="button-7-days"
              >
                7 Days
              </Button>
              <Button
                variant={selectedDays === 30 ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDays(30)}
                data-testid="button-30-days"
              >
                30 Days
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Daily Activity Digest</CardTitle>
                <CardDescription>Activity grouped by day (last {selectedDays} days)</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px]">
                  <div className="space-y-6">
                    {Object.keys(digestByDay).length > 0 ? (
                      Object.entries(digestByDay)
                        .sort(([a], [b]) => b.localeCompare(a))
                        .map(([date, logs]) => (
                          <div key={date} className="space-y-2">
                            <div className="flex items-center gap-2 sticky top-0 bg-background py-2">
                              <Calendar className="h-4 w-4 text-primary" />
                              <h3 className="font-display font-semibold">
                                {format(new Date(date), "EEEE, MMMM d, yyyy")}
                              </h3>
                              <Badge variant="secondary">{logs.length} events</Badge>
                            </div>
                            <div className="space-y-2 pl-6">
                              {logs.map((log) => {
                                const data = JSON.parse(log.data);
                                return (
                                  <div 
                                    key={log.id} 
                                    className="flex items-start gap-2 text-sm"
                                    data-testid={`digest-${log.id}`}
                                  >
                                    <Badge variant="outline" className="text-xs">
                                      {log.activityType}
                                    </Badge>
                                    {log.email && (
                                      <span className="font-medium">{log.email}</span>
                                    )}
                                    <span className="text-muted-foreground text-xs">
                                      {format(new Date(log.createdAt), "HH:mm")}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))
                    ) : (
                      <p className="text-sm text-muted-foreground text-center py-8">
                        No activity in the selected period
                      </p>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
