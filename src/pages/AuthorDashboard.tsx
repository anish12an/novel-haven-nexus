import { useState } from "react";
import { 
  Plus, 
  BarChart3, 
  Eye, 
  Heart, 
  Star, 
  TrendingUp,
  Edit,
  Trash2,
  Settings,
  BookOpen,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import mysticAcademy from "@/assets/novel-covers/mystic-academy.jpg";
import digitalRealms from "@/assets/novel-covers/digital-realms.jpg";

const AuthorDashboard = () => {
  const [showNewNovelForm, setShowNewNovelForm] = useState(false);

  // Sample author data - in a real app, this would come from an API
  const authorData = {
    name: "Alex Chen",
    novels: [
      {
        id: "1",
        title: "The Mystic Academy",
        status: "ongoing",
        chapters: 45,
        totalViews: 125000,
        monthlyViews: 12500,
        likes: 8900,
        bookmarks: 12400,
        rating: 4.8,
        reviews: 234,
        coverImage: mysticAcademy,
        publishDate: "January 15, 2024",
        lastUpdate: "2 days ago",
        wordCount: 287000,
        genres: ["Fantasy", "Magic", "Academy"],
      },
      {
        id: "2",
        title: "Digital Realms",
        status: "ongoing", 
        chapters: 38,
        totalViews: 98000,
        monthlyViews: 8900,
        likes: 7200,
        bookmarks: 9800,
        rating: 4.6,
        reviews: 187,
        coverImage: digitalRealms,
        publishDate: "February 8, 2024",
        lastUpdate: "1 day ago",
        wordCount: 245000,
        genres: ["Sci-Fi", "Cyberpunk", "VR"],
      },
    ],
    stats: {
      totalViews: 223000,
      totalLikes: 16100,
      totalBookmarks: 22200,
      totalFollowers: 1245,
      monthlyViewsGrowth: "+15%",
      averageRating: 4.7,
    },
    recentActivity: [
      { type: "chapter", title: "Chapter 45: The Final Trial", novel: "The Mystic Academy", time: "2 days ago" },
      { type: "review", title: "New 5-star review", novel: "Digital Realms", time: "3 days ago" },
      { type: "chapter", title: "Chapter 38: System Override", novel: "Digital Realms", time: "1 week ago" },
      { type: "milestone", title: "Reached 100K views", novel: "The Mystic Academy", time: "1 week ago" },
    ],
  };

  const [newNovel, setNewNovel] = useState({
    title: "",
    description: "",
    genres: [] as string[],
    contentRating: "",
    language: "English",
  });

  const handleNewNovelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating new novel:", newNovel);
    setShowNewNovelForm(false);
    setNewNovel({
      title: "",
      description: "",
      genres: [],
      contentRating: "",
      language: "English",
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div className="space-y-2">
            <h1 className="text-3xl lg:text-4xl font-playfair font-bold">Author Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {authorData.name}! Manage your novels and track your progress.
            </p>
          </div>
          
          <Button 
            onClick={() => setShowNewNovelForm(true)}
            className="bg-gradient-primary hover:shadow-glow"
          >
            <Plus className="mr-2 h-5 w-5" />
            New Novel
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {[
            { 
              icon: Eye, 
              label: "Total Views", 
              value: authorData.stats.totalViews.toLocaleString(),
              change: authorData.stats.monthlyViewsGrowth,
              color: "text-blue-600"
            },
            { 
              icon: Heart, 
              label: "Total Likes", 
              value: authorData.stats.totalLikes.toLocaleString(),
              color: "text-red-600"
            },
            { 
              icon: BookOpen, 
              label: "Bookmarks", 
              value: authorData.stats.totalBookmarks.toLocaleString(),
              color: "text-accent"
            },
            { 
              icon: Users, 
              label: "Followers", 
              value: authorData.stats.totalFollowers.toLocaleString(),
              color: "text-green-600"
            },
            { 
              icon: Star, 
              label: "Avg Rating", 
              value: authorData.stats.averageRating.toFixed(1),
              color: "text-accent"
            },
            { 
              icon: BookOpen, 
              label: "Novels", 
              value: authorData.novels.length.toString(),
              color: "text-primary"
            },
          ].map((stat, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-baseline gap-2">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  {stat.change && (
                    <div className="text-sm text-green-600">{stat.change}</div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="novels" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="novels">My Novels</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="novels" className="space-y-6">
            {/* New Novel Form */}
            {showNewNovelForm && (
              <Card>
                <CardHeader>
                  <CardTitle>Create New Novel</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleNewNovelSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Novel Title</Label>
                        <Input
                          id="title"
                          value={newNovel.title}
                          onChange={(e) => setNewNovel(prev => ({ ...prev, title: e.target.value }))}
                          placeholder="Enter novel title"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contentRating">Content Rating</Label>
                        <Select value={newNovel.contentRating} onValueChange={(value) => setNewNovel(prev => ({ ...prev, contentRating: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select rating" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General</SelectItem>
                            <SelectItem value="teen">Teen</SelectItem>
                            <SelectItem value="mature">Mature</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={newNovel.description}
                        onChange={(e) => setNewNovel(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Write a compelling description for your novel"
                        rows={4}
                        required
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button type="submit">Create Novel</Button>
                      <Button type="button" variant="outline" onClick={() => setShowNewNovelForm(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Novels List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-playfair font-semibold">Published Novels</h3>
                <div className="text-sm text-muted-foreground">
                  {authorData.novels.length} novels published
                </div>
              </div>

              <div className="space-y-4">
                {authorData.novels.map((novel) => (
                  <Card key={novel.id}>
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        {/* Cover Image */}
                        <img
                          src={novel.coverImage}
                          alt={novel.title}
                          className="w-24 h-32 object-cover rounded-lg shadow-md"
                        />

                        {/* Novel Info */}
                        <div className="flex-1 space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <h4 className="text-xl font-playfair font-semibold">{novel.title}</h4>
                              <Badge variant={novel.status === 'ongoing' ? 'default' : 'secondary'}>
                                {novel.status}
                              </Badge>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {novel.genres.map((genre) => (
                                <Badge key={genre} variant="outline" className="text-xs">
                                  {genre}
                                </Badge>
                              ))}
                            </div>

                            <div className="text-sm text-muted-foreground">
                              Published {novel.publishDate} • Last updated {novel.lastUpdate}
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <BookOpen className="h-4 w-4 text-muted-foreground" />
                              <span>{novel.chapters} chapters</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4 text-muted-foreground" />
                              <span>{novel.totalViews.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="h-4 w-4 text-muted-foreground" />
                              <span>{novel.likes.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-muted-foreground" />
                              <span>{novel.rating} ({novel.reviews})</span>
                            </div>
                            <div className="text-muted-foreground">
                              {novel.wordCount.toLocaleString()} words
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                            <Button size="sm" variant="outline">
                              <Plus className="h-4 w-4 mr-2" />
                              Add Chapter
                            </Button>
                            <Button size="sm" variant="outline">
                              <BarChart3 className="h-4 w-4 mr-2" />
                              Analytics
                            </Button>
                            <Button size="sm" variant="outline">
                              <Settings className="h-4 w-4 mr-2" />
                              Settings
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-xl font-playfair font-semibold mb-2">Detailed Analytics Coming Soon</p>
                  <p className="text-muted-foreground mb-6">
                    Track your novel's performance with detailed charts and insights.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {authorData.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-card-hover transition-colors">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <div className="flex-1">
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {activity.novel} • {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Author Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <Settings className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-xl font-playfair font-semibold mb-2">Settings Panel</p>
                  <p className="text-muted-foreground mb-6">
                    Manage your author profile, preferences, and publishing settings.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthorDashboard;