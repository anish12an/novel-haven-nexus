import { useState } from "react";
import { TrendingUp, Calendar, Clock, Eye, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NovelCard from "@/components/NovelCard";
import mysticAcademy from "@/assets/novel-covers/mystic-academy.jpg";
import digitalRealms from "@/assets/novel-covers/digital-realms.jpg";
import dragonsCrown from "@/assets/novel-covers/dragons-crown.jpg";
import starlitDreams from "@/assets/novel-covers/starlit-dreams.jpg";

const Trending = () => {
  const [timeframe, setTimeframe] = useState("weekly");
  const [category, setCategory] = useState("all");

  // Sample trending data
  const trendingNovels = {
    daily: [
      {
        id: "3",
        title: "Dragon's Crown",
        author: "Mythril Forge",
        description: "An epic tale of dragons, ancient kingdoms, and the legendary Dragon's Crown that holds the power to unite or destroy the entire realm.",
        coverImage: dragonsCrown,
        rating: 4.9,
        views: 15420,
        dailyViews: 2100,
        likes: 1240,
        chapters: 62,
        genres: ["Fantasy", "Dragons", "Epic"],
        status: "completed" as const,
        lastUpdated: "1 week ago",
        rank: 1,
        rankChange: "+2",
      },
      {
        id: "1",
        title: "The Mystic Academy",
        author: "Elena Starweaver", 
        description: "A young mage discovers her extraordinary powers at the prestigious Mystic Academy, where ancient secrets and dangerous magic await.",
        coverImage: mysticAcademy,
        rating: 4.8,
        views: 12800,
        dailyViews: 1850,
        likes: 890,
        chapters: 45,
        genres: ["Fantasy", "Magic", "Academy"],
        status: "ongoing" as const,
        lastUpdated: "2 days ago",
        rank: 2,
        rankChange: "0",
      },
    ],
    weekly: [
      {
        id: "1",
        title: "The Mystic Academy",
        author: "Elena Starweaver",
        description: "A young mage discovers her extraordinary powers at the prestigious Mystic Academy, where ancient secrets and dangerous magic await.",
        coverImage: mysticAcademy,
        rating: 4.8,
        views: 125000,
        weeklyViews: 18500,
        likes: 8900,
        chapters: 45,
        genres: ["Fantasy", "Magic", "Academy"],
        status: "ongoing" as const,
        lastUpdated: "2 days ago",
        rank: 1,
        rankChange: "+1",
      },
      {
        id: "3",
        title: "Dragon's Crown",
        author: "Mythril Forge",
        description: "An epic tale of dragons, ancient kingdoms, and the legendary Dragon's Crown that holds the power to unite or destroy the entire realm.",
        coverImage: dragonsCrown,
        rating: 4.9,
        views: 210000,
        weeklyViews: 15600,
        likes: 15600,
        chapters: 62,
        genres: ["Fantasy", "Dragons", "Epic"],
        status: "completed" as const,
        lastUpdated: "1 week ago", 
        rank: 2,
        rankChange: "-1",
      },
      {
        id: "4",
        title: "Starlit Dreams",
        author: "Luna Nightshade",
        description: "A heartwarming romance that spans across time and space, where two souls destined to be together find each other among the stars.",
        coverImage: starlitDreams,
        rating: 4.7,
        views: 87000,
        weeklyViews: 12300,
        likes: 12300,
        chapters: 28,
        genres: ["Romance", "Fantasy", "Time Travel"],
        status: "ongoing" as const,
        lastUpdated: "3 days ago",
        rank: 3,
        rankChange: "+2",
      },
      {
        id: "2",
        title: "Digital Realms",
        author: "Cyber Phoenix",
        description: "In a world where virtual reality and reality blend seamlessly, hacker Zane must navigate multiple digital dimensions.",
        coverImage: digitalRealms,
        rating: 4.6,
        views: 98000,
        weeklyViews: 8900,
        likes: 7200,
        chapters: 38,
        genres: ["Sci-Fi", "Cyberpunk", "VR"],
        status: "ongoing" as const,
        lastUpdated: "1 day ago",
        rank: 4,
        rankChange: "-2",
      },
    ],
    monthly: [
      {
        id: "3",
        title: "Dragon's Crown",
        author: "Mythril Forge",
        description: "An epic tale of dragons, ancient kingdoms, and the legendary Dragon's Crown that holds the power to unite or destroy the entire realm.",
        coverImage: dragonsCrown,
        rating: 4.9,
        views: 210000,
        monthlyViews: 65000,
        likes: 15600,
        chapters: 62,
        genres: ["Fantasy", "Dragons", "Epic"],
        status: "completed" as const,
        lastUpdated: "1 week ago",
        rank: 1,
        rankChange: "0",
      },
      {
        id: "1", 
        title: "The Mystic Academy",
        author: "Elena Starweaver",
        description: "A young mage discovers her extraordinary powers at the prestigious Mystic Academy, where ancient secrets and dangerous magic await.",
        coverImage: mysticAcademy,
        rating: 4.8,
        views: 125000,
        monthlyViews: 45000,
        likes: 8900,
        chapters: 45,
        genres: ["Fantasy", "Magic", "Academy"],
        status: "ongoing" as const,
        lastUpdated: "2 days ago",
        rank: 2,
        rankChange: "+1",
      },
    ],
  };

  const getRankChangeColor = (change: string) => {
    if (change.startsWith('+')) return 'text-green-600';
    if (change.startsWith('-')) return 'text-red-600';
    return 'text-muted-foreground';
  };

  const getCurrentNovels = () => {
    return trendingNovels[timeframe as keyof typeof trendingNovels] || [];
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-playfair font-bold">Trending Novels</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Discover the most popular and fastest-growing novels in the community. Updated in real-time based on reader engagement.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-gradient-card border rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filters:</span>
              </div>

              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Today</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="weekly">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>This Week</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="monthly">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      <span>This Month</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>

              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genres</SelectItem>
                  <SelectItem value="fantasy">Fantasy</SelectItem>
                  <SelectItem value="romance">Romance</SelectItem>
                  <SelectItem value="scifi">Sci-Fi</SelectItem>
                  <SelectItem value="action">Action</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Trending Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { 
              label: "Most Viewed Today", 
              value: "2.1K views",
              novel: "Dragon's Crown",
              icon: Eye 
            },
            { 
              label: "Fastest Growing", 
              value: "+240%",
              novel: "Starlit Dreams", 
              icon: TrendingUp 
            },
            { 
              label: "Top Rated", 
              value: "4.9/5",
              novel: "Dragon's Crown",
              icon: Star 
            },
            { 
              label: "Most Discussed", 
              value: "89 reviews",
              novel: "The Mystic Academy",
              icon: TrendingUp 
            },
          ].map((stat, index) => (
            <div key={index} className="bg-gradient-card border rounded-lg p-4 text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto mb-2">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-primary font-medium">{stat.novel}</div>
            </div>
          ))}
        </div>

        {/* Trending Lists */}
        <Tabs defaultValue="ranking" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ranking">Trending Ranking</TabsTrigger>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
          </TabsList>

          <TabsContent value="ranking" className="space-y-4">
            <div className="space-y-4">
              {getCurrentNovels().map((novel, index) => (
                <div key={novel.id} className="bg-gradient-card border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-6">
                    {/* Rank */}
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        #{novel.rank}
                      </div>
                      <div className={`text-sm font-medium ${getRankChangeColor(novel.rankChange)}`}>
                        {novel.rankChange !== "0" && novel.rankChange}
                        {novel.rankChange === "0" && "—"}
                      </div>
                    </div>

                    {/* Cover */}
                    <img
                      src={novel.coverImage}
                      alt={novel.title}
                      className="w-20 h-28 object-cover rounded-lg shadow-md"
                    />

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div className="space-y-2">
                        <h3 className="text-xl font-playfair font-semibold">{novel.title}</h3>
                        <p className="text-sm text-muted-foreground">by {novel.author}</p>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {novel.description}
                        </p>
                      </div>

                      {/* Genres */}
                      <div className="flex flex-wrap gap-1">
                        {novel.genres.map((genre) => (
                          <Badge key={genre} variant="secondary" className="text-xs">
                            {genre}
                          </Badge>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {timeframe === 'daily' && `${(novel as any).dailyViews?.toLocaleString()} today`}
                            {timeframe === 'weekly' && `${(novel as any).weeklyViews?.toLocaleString()} this week`}
                            {timeframe === 'monthly' && `${(novel as any).monthlyViews?.toLocaleString()} this month`}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-current text-accent" />
                          <span>{novel.rating}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">{novel.chapters} chapters</span>
                        </div>
                        <div>
                          <Badge variant={novel.status === 'ongoing' ? 'default' : 'secondary'} className="text-xs">
                            {novel.status}
                          </Badge>
                        </div>
                        <div className="text-muted-foreground">
                          {novel.lastUpdated}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2">
                      <Button size="sm">
                        Read Now
                      </Button>
                      <Button size="sm" variant="outline">
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="grid" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getCurrentNovels().map((novel) => (
                <div key={novel.id} className="relative">
                  <div className="absolute -top-2 -left-2 z-10">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      #{novel.rank}
                    </div>
                  </div>
                  <NovelCard {...novel} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Trending;