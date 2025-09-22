import { useState } from "react";
import { BookOpen, Clock, Star, Filter, Grid, List, Search, Download, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import NovelCard from "@/components/NovelCard";
import mysticAcademy from "@/assets/novel-covers/mystic-academy.jpg";
import digitalRealms from "@/assets/novel-covers/digital-realms.jpg";
import dragonsCrown from "@/assets/novel-covers/dragons-crown.jpg";
import starlitDreams from "@/assets/novel-covers/starlit-dreams.jpg";

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [filterStatus, setFilterStatus] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedNovels, setSelectedNovels] = useState<string[]>([]);

  // Sample library data
  const libraryNovels = {
    reading: [
      {
        id: "1",
        title: "The Mystic Academy",
        author: "Elena Starweaver",
        description: "A young mage discovers her extraordinary powers at the prestigious Mystic Academy.",
        coverImage: mysticAcademy,
        rating: 4.8,
        views: 125000,
        likes: 8900,
        chapters: 45,
        currentChapter: 38,
        readProgress: 84,
        genres: ["Fantasy", "Magic", "Academy"],
        status: "ongoing" as const,
        lastUpdated: "2 days ago",
        lastRead: "2 hours ago",
        isBookmarked: true,
        addedToLibrary: "2 weeks ago",
      },
      {
        id: "2",
        title: "Digital Realms",
        author: "Cyber Phoenix",
        description: "In a world where virtual reality and reality blend seamlessly.",
        coverImage: digitalRealms,
        rating: 4.6,
        views: 98000,
        likes: 7200,
        chapters: 38,
        currentChapter: 23,
        readProgress: 60,
        genres: ["Sci-Fi", "Cyberpunk", "VR"],
        status: "ongoing" as const,
        lastUpdated: "1 day ago",
        lastRead: "1 day ago",
        isBookmarked: false,
        addedToLibrary: "1 week ago",
      },
    ],
    completed: [
      {
        id: "3",
        title: "Dragon's Crown",
        author: "Mythril Forge",
        description: "An epic tale of dragons, ancient kingdoms, and the legendary Dragon's Crown.",
        coverImage: dragonsCrown,
        rating: 4.9,
        views: 210000,
        likes: 15600,
        chapters: 62,
        currentChapter: 62,
        readProgress: 100,
        genres: ["Fantasy", "Dragons", "Epic"],
        status: "completed" as const,
        lastUpdated: "1 week ago",
        lastRead: "3 days ago",
        isBookmarked: true,
        addedToLibrary: "1 month ago",
        completedDate: "3 days ago",
      },
    ],
    bookmarked: [
      {
        id: "4",
        title: "Starlit Dreams",
        author: "Luna Nightshade",
        description: "A heartwarming romance that spans across time and space.",
        coverImage: starlitDreams,
        rating: 4.7,
        views: 87000,
        likes: 12300,
        chapters: 28,
        currentChapter: 0,
        readProgress: 0,
        genres: ["Romance", "Fantasy", "Time Travel"],
        status: "ongoing" as const,
        lastUpdated: "3 days ago",
        lastRead: "Never",
        isBookmarked: true,
        addedToLibrary: "1 week ago",
      },
    ],
  };

  const getAllNovels = () => {
    return [
      ...libraryNovels.reading,
      ...libraryNovels.completed,
      ...libraryNovels.bookmarked,
    ];
  };

  const getFilteredNovels = () => {
    let novels = getAllNovels();

    // Filter by search query
    if (searchQuery) {
      novels = novels.filter(novel => 
        novel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        novel.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by status
    if (filterStatus !== "all") {
      switch (filterStatus) {
        case "reading":
          novels = novels.filter(novel => novel.readProgress > 0 && novel.readProgress < 100);
          break;
        case "completed":
          novels = novels.filter(novel => novel.readProgress === 100);
          break;
        case "bookmarked":
          novels = novels.filter(novel => novel.isBookmarked && novel.readProgress === 0);
          break;
      }
    }

    // Sort novels
    switch (sortBy) {
      case "recent":
        novels.sort((a, b) => new Date(b.lastRead).getTime() - new Date(a.lastRead).getTime());
        break;
      case "alphabetical":
        novels.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "progress":
        novels.sort((a, b) => b.readProgress - a.readProgress);
        break;
      case "rating":
        novels.sort((a, b) => b.rating - a.rating);
        break;
    }

    return novels;
  };

  const handleSelectNovel = (novelId: string) => {
    setSelectedNovels(prev => 
      prev.includes(novelId)
        ? prev.filter(id => id !== novelId)
        : [...prev, novelId]
    );
  };

  const handleSelectAll = () => {
    const filteredNovels = getFilteredNovels();
    if (selectedNovels.length === filteredNovels.length) {
      setSelectedNovels([]);
    } else {
      setSelectedNovels(filteredNovels.map(novel => novel.id));
    }
  };

  const getLibraryStats = () => {
    const allNovels = getAllNovels();
    return {
      total: allNovels.length,
      reading: allNovels.filter(n => n.readProgress > 0 && n.readProgress < 100).length,
      completed: allNovels.filter(n => n.readProgress === 100).length,
      bookmarked: allNovels.filter(n => n.isBookmarked).length,
    };
  };

  const stats = getLibraryStats();

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground">
              <BookOpen className="h-6 w-6" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-playfair font-bold">My Library</h1>
          </div>
          <p className="text-muted-foreground">
            Your personal collection of novels, reading progress, and bookmarks
          </p>
        </div>

        {/* Library Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { 
              label: "Total Novels", 
              value: stats.total,
              icon: BookOpen,
              color: "text-primary"
            },
            { 
              label: "Currently Reading", 
              value: stats.reading,
              icon: Clock,
              color: "text-blue-600"
            },
            { 
              label: "Completed", 
              value: stats.completed,
              icon: Star,
              color: "text-green-600"
            },
            { 
              label: "Bookmarked", 
              value: stats.bookmarked,
              icon: BookOpen,
              color: "text-accent"
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
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All ({stats.total})</TabsTrigger>
            <TabsTrigger value="reading">Reading ({stats.reading})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({stats.completed})</TabsTrigger>
            <TabsTrigger value="bookmarked">Bookmarked ({stats.bookmarked})</TabsTrigger>
          </TabsList>

          {/* Controls */}
          <div className="bg-gradient-card border rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-4">
              {/* Search and Filters */}
              <div className="flex flex-1 max-w-2xl gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search your library..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Recently Read</SelectItem>
                    <SelectItem value="alphabetical">A-Z</SelectItem>
                    <SelectItem value="progress">Progress</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="reading">Reading</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="bookmarked">Bookmarked</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* View Controls */}
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Batch Actions */}
            {getFilteredNovels().length > 0 && (
              <div className="flex items-center gap-4 pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={selectedNovels.length === getFilteredNovels().length}
                    onCheckedChange={handleSelectAll}
                  />
                  <span className="text-sm">
                    {selectedNovels.length > 0 
                      ? `${selectedNovels.length} selected` 
                      : "Select all"
                    }
                  </span>
                </div>

                {selectedNovels.length > 0 && (
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* All Tab */}
          <TabsContent value="all" className="space-y-6">
            {getFilteredNovels().length > 0 ? (
              viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {getFilteredNovels().map((novel) => (
                    <div key={novel.id} className="relative">
                      <div className="absolute top-2 left-2 z-10">
                        <Checkbox
                          checked={selectedNovels.includes(novel.id)}
                          onCheckedChange={() => handleSelectNovel(novel.id)}
                          className="bg-background border-border"
                        />
                      </div>
                      <NovelCard {...novel} />
                      {novel.readProgress > 0 && (
                        <div className="absolute bottom-2 left-2 right-2 z-10">
                          <div className="bg-background/90 backdrop-blur-sm rounded-lg p-2 text-xs">
                            <div className="flex items-center justify-between mb-1">
                              <span>Progress</span>
                              <span>{novel.readProgress}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-1">
                              <div 
                                className="bg-primary h-1 rounded-full transition-all duration-300"
                                style={{ width: `${novel.readProgress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {getFilteredNovels().map((novel) => (
                    <div key={novel.id} className="bg-gradient-card border rounded-lg p-6 hover:shadow-md transition-all">
                      <div className="flex items-center gap-4">
                        <Checkbox
                          checked={selectedNovels.includes(novel.id)}
                          onCheckedChange={() => handleSelectNovel(novel.id)}
                        />
                        
                        <img
                          src={novel.coverImage}
                          alt={novel.title}
                          className="w-16 h-22 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1 space-y-2">
                          <div>
                            <h3 className="font-playfair font-semibold text-lg">{novel.title}</h3>
                            <p className="text-sm text-muted-foreground">by {novel.author}</p>
                          </div>
                          
                          <div className="flex flex-wrap gap-1">
                            {novel.genres.slice(0, 3).map((genre) => (
                              <Badge key={genre} variant="secondary" className="text-xs">
                                {genre}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Chapter {novel.currentChapter}/{novel.chapters}</span>
                            <span>{novel.readProgress}% complete</span>
                            <span>Last read: {novel.lastRead}</span>
                          </div>
                          
                          {novel.readProgress > 0 && (
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-primary h-2 rounded-full transition-all duration-300"
                                style={{ width: `${novel.readProgress}%` }}
                              />
                            </div>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          <Button size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            {novel.readProgress > 0 ? 'Continue' : 'Read'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-xl font-playfair font-semibold mb-2">Your library is empty</p>
                <p className="text-muted-foreground mb-6">
                  Start reading novels to build your personal library
                </p>
                <Button>
                  Browse Novels
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Reading Tab */}
          <TabsContent value="reading">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {libraryNovels.reading.map((novel) => (
                <NovelCard key={novel.id} {...novel} />
              ))}
            </div>
          </TabsContent>

          {/* Completed Tab */}
          <TabsContent value="completed">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {libraryNovels.completed.map((novel) => (
                <NovelCard key={novel.id} {...novel} />
              ))}
            </div>
          </TabsContent>

          {/* Bookmarked Tab */}
          <TabsContent value="bookmarked">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {libraryNovels.bookmarked.map((novel) => (
                <NovelCard key={novel.id} {...novel} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Library;