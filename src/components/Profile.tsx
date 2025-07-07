import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Plus, 
  Calendar, 
  BarChart3, 
  Settings, 
  Upload,
  Users,
  Heart,
  MessageCircle,
  Share,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const connectedAccounts = [
    {
      platform: "Instagram",
      username: "@yourhandle",
      followers: "12.5K",
      icon: <Instagram className="h-5 w-5" />,
      connected: true,
      color: "from-instagram-start to-instagram-middle"
    },
    {
      platform: "Facebook",
      username: "Your Page",
      followers: "8.2K",
      icon: <Facebook className="h-5 w-5" />,
      connected: true,
      color: "from-facebook to-blue-600"
    },
    {
      platform: "YouTube",
      username: "Your Channel",
      followers: "3.1K",
      icon: <Youtube className="h-5 w-5" />,
      connected: false,
      color: "from-youtube to-red-600"
    }
  ];

  const recentPosts = [
    {
      id: 1,
      platform: "Instagram",
      content: "Beautiful sunset at the beach 🌅",
      image: "/api/placeholder/300/300",
      likes: 124,
      comments: 18,
      shares: 5,
      views: 1205,
      date: "2 hours ago"
    },
    {
      id: 2,
      platform: "Facebook",
      content: "Excited to share our latest project update!",
      image: "/api/placeholder/300/300",
      likes: 89,
      comments: 12,
      shares: 23,
      views: 845,
      date: "5 hours ago"
    },
    {
      id: 3,
      platform: "Instagram",
      content: "Behind the scenes of today's photoshoot 📸",
      image: "/api/placeholder/300/300",
      likes: 203,
      comments: 31,
      shares: 8,
      views: 1587,
      date: "1 day ago"
    }
  ];

  const analytics = {
    totalFollowers: "23.8K",
    totalPosts: 156,
    avgEngagement: "4.2%",
    monthlyReach: "45.2K"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-instagram-start to-instagram-end"></div>
              <span className="text-xl font-bold">SocialSync</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Upload className="h-4 w-4 mr-2" />
              Create Post
            </Button>
            <Link to="/settings">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container py-8">
        {/* Profile Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/api/placeholder/80/80" />
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">John Doe</h1>
              <p className="text-muted-foreground mb-4">Content Creator & Digital Marketer</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{analytics.totalFollowers} Total Followers</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-accent" />
                  <span>{analytics.avgEngagement} Avg Engagement</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">{analytics.totalFollowers}</div>
                <div className="text-sm text-muted-foreground">Total Followers</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-accent">{analytics.totalPosts}</div>
                <div className="text-sm text-muted-foreground">Total Posts</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-facebook">{analytics.avgEngagement}</div>
                <div className="text-sm text-muted-foreground">Avg Engagement</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-youtube">{analytics.monthlyReach}</div>
                <div className="text-sm text-muted-foreground">Monthly Reach</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="accounts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="accounts">Connected Accounts</TabsTrigger>
            <TabsTrigger value="posts">Recent Posts</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="accounts" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {connectedAccounts.map((account, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${account.color}`}></div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {account.icon}
                        <div>
                          <CardTitle className="text-lg">{account.platform}</CardTitle>
                          <CardDescription>{account.username}</CardDescription>
                        </div>
                      </div>
                      <Badge variant={account.connected ? "default" : "secondary"}>
                        {account.connected ? "Connected" : "Not Connected"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted-foreground">Followers</span>
                      <span className="font-semibold">{account.followers}</span>
                    </div>
                    <Button 
                      variant={account.connected ? "outline" : "gradient"} 
                      className="w-full"
                      disabled={account.connected}
                    >
                      {account.connected ? "Manage" : "Connect Account"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="posts" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Recent Posts</h3>
              <Button variant="gradient">
                <Plus className="h-4 w-4 mr-2" />
                Create New Post
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="aspect-square bg-muted"></div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {post.platform === "Instagram" && <Instagram className="h-4 w-4 text-instagram-start" />}
                      {post.platform === "Facebook" && <Facebook className="h-4 w-4 text-facebook" />}
                      <span className="text-sm font-medium">{post.platform}</span>
                      <span className="text-xs text-muted-foreground ml-auto">{post.date}</span>
                    </div>
                    <p className="text-sm mb-3 line-clamp-2">{post.content}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {post.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          {post.comments}
                        </div>
                        <div className="flex items-center gap-1">
                          <Share className="h-4 w-4" />
                          {post.shares}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {post.views}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Engagement Overview</CardTitle>
                  <CardDescription>Last 30 days performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Analytics chart would go here</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Platform Performance</CardTitle>
                  <CardDescription>Breakdown by social platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Instagram className="h-4 w-4 text-instagram-start" />
                        <span>Instagram</span>
                      </div>
                      <span className="font-semibold">67%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Facebook className="h-4 w-4 text-facebook" />
                        <span>Facebook</span>
                      </div>
                      <span className="font-semibold">28%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Youtube className="h-4 w-4 text-youtube" />
                        <span>YouTube</span>
                      </div>
                      <span className="font-semibold">5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;