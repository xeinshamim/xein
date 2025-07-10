import { Calendar, Users, MessageSquare, Heart, Share2, BarChart3, Plus, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SocialDashboardDemo = () => {
  const socialStats = [
    { platform: "Instagram", followers: "15.2K", engagement: "4.8%", posts: 125, color: "bg-pink-500" },
    { platform: "Twitter", followers: "8.7K", engagement: "3.2%", posts: 89, color: "bg-blue-500" },
    { platform: "Facebook", followers: "12.1K", engagement: "2.9%", posts: 67, color: "bg-blue-600" },
    { platform: "LinkedIn", followers: "5.4K", engagement: "6.1%", posts: 34, color: "bg-blue-700" },
  ];

  const recentPosts = [
    {
      platform: "Instagram",
      content: "Beautiful sunset at the beach 🌅 #nature #photography",
      time: "2 hours ago",
      likes: 234,
      comments: 18,
      shares: 12,
      color: "bg-pink-500"
    },
    {
      platform: "Twitter",
      content: "Just launched our new product! Excited to share it with everyone 🚀",
      time: "4 hours ago",
      likes: 87,
      comments: 23,
      shares: 45,
      color: "bg-blue-500"
    },
    {
      platform: "Facebook",
      content: "Thanks to all our amazing customers for the support! ❤️",
      time: "6 hours ago",
      likes: 156,
      comments: 32,
      shares: 28,
      color: "bg-blue-600"
    },
  ];

  const scheduledPosts = [
    { content: "Monday motivation post", platform: "All platforms", time: "Tomorrow 9:00 AM" },
    { content: "Product showcase video", platform: "Instagram, Facebook", time: "Tomorrow 2:00 PM" },
    { content: "Weekly newsletter announcement", platform: "Twitter, LinkedIn", time: "Wednesday 10:00 AM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary">Social Media Dashboard</h1>
              <p className="text-muted-foreground">Manage all your social media accounts in one place</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Post
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Social Platform Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {socialStats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.platform}
                </CardTitle>
                <div className={`w-4 h-4 rounded ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.followers}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.engagement} engagement • {stat.posts} posts
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Analytics Overview */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Engagement Analytics
              </CardTitle>
              <CardDescription>Performance across all platforms this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end gap-4">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full space-y-1">
                      <div
                        className="w-full bg-pink-500 rounded-t"
                        style={{ height: `${Math.random() * 80 + 20}px` }}
                      />
                      <div
                        className="w-full bg-blue-500"
                        style={{ height: `${Math.random() * 60 + 15}px` }}
                      />
                      <div
                        className="w-full bg-blue-600 rounded-b"
                        style={{ height: `${Math.random() * 70 + 10}px` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{day}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-pink-500 rounded" />
                  <span className="text-sm">Instagram</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded" />
                  <span className="text-sm">Twitter</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded" />
                  <span className="text-sm">Facebook</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Performance</CardTitle>
              <CardDescription>Real-time metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">New Followers</span>
                </div>
                <span className="font-semibold">+47</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span className="text-sm">Likes</span>
                </div>
                <span className="font-semibold">1,234</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Comments</span>
                </div>
                <span className="font-semibold">89</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Share2 className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">Shares</span>
                </div>
                <span className="font-semibold">156</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Posts and Scheduled Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Posts */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Posts</CardTitle>
              <CardDescription>Your latest social media activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-3 h-3 rounded ${post.color}`} />
                      <span className="font-medium text-sm">{post.platform}</span>
                      <span className="text-xs text-muted-foreground ml-auto">{post.time}</span>
                    </div>
                    <p className="text-sm mb-3">{post.content}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" /> {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" /> {post.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Share2 className="h-3 w-3" /> {post.shares}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Scheduled Posts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Scheduled Posts
              </CardTitle>
              <CardDescription>Upcoming content calendar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledPosts.map((post, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-medium text-sm mb-1">{post.content}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{post.platform}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{post.time}</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Delete</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Schedule New Post
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SocialDashboardDemo;