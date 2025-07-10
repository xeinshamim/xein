import { TrendingUp, TrendingDown, Users, DollarSign, BarChart3, PieChart, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AnalyticsDemo = () => {
  const stats = [
    { title: "Total Revenue", value: "$45,231", change: "+20.1%", trending: "up" },
    { title: "Active Users", value: "2,350", change: "+15.3%", trending: "up" },
    { title: "Conversion Rate", value: "3.24%", change: "-2.4%", trending: "down" },
    { title: "Avg Session", value: "4m 32s", change: "+8.7%", trending: "up" },
  ];

  const chartData = [
    { month: "Jan", revenue: 4500, users: 240 },
    { month: "Feb", revenue: 5200, users: 300 },
    { month: "Mar", revenue: 4800, users: 280 },
    { month: "Apr", revenue: 6100, users: 350 },
    { month: "May", revenue: 7200, users: 420 },
    { month: "Jun", revenue: 6800, users: 380 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary">Analytics Dashboard</h1>
              <p className="text-muted-foreground">Track your business performance</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Export Data</Button>
              <Button>Generate Report</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                {stat.trending === "up" ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs ${stat.trending === "up" ? "text-green-500" : "text-red-500"}`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Revenue Overview
              </CardTitle>
              <CardDescription>Monthly revenue for the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end gap-2">
                {chartData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-primary rounded-t-sm"
                      style={{ height: `${(data.revenue / 8000) * 200}px` }}
                    />
                    <span className="text-xs text-muted-foreground mt-2">{data.month}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Users Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                User Growth
              </CardTitle>
              <CardDescription>Active users over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end gap-2">
                {chartData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-blue-500 rounded-t-sm"
                      style={{ height: `${(data.users / 500) * 200}px` }}
                    />
                    <span className="text-xs text-muted-foreground mt-2">{data.month}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top Pages */}
          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
              <CardDescription>Most visited pages this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { page: "/dashboard", views: "12,345", change: "+5.2%" },
                  { page: "/products", views: "8,721", change: "+12.1%" },
                  { page: "/about", views: "5,432", change: "-2.3%" },
                  { page: "/contact", views: "3,210", change: "+8.4%" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.page}</p>
                      <p className="text-sm text-muted-foreground">{item.views} views</p>
                    </div>
                    <span className={`text-sm ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {item.change}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Traffic Sources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Traffic Sources
              </CardTitle>
              <CardDescription>Where your visitors come from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { source: "Organic Search", percentage: 45, color: "bg-blue-500" },
                  { source: "Direct", percentage: 30, color: "bg-green-500" },
                  { source: "Social Media", percentage: 15, color: "bg-purple-500" },
                  { source: "Referral", percentage: 10, color: "bg-orange-500" },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{item.source}</span>
                      <span>{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>Latest user interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "New user registered", time: "2 minutes ago", user: "john@example.com" },
                  { action: "Purchase completed", time: "5 minutes ago", user: "sarah@example.com" },
                  { action: "Product viewed", time: "8 minutes ago", user: "mike@example.com" },
                  { action: "Newsletter signup", time: "12 minutes ago", user: "anna@example.com" },
                ].map((item, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <p className="font-medium text-sm">{item.action}</p>
                    <p className="text-xs text-muted-foreground">{item.user}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDemo;