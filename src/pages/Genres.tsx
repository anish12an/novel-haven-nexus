import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, TrendingUp, Star, Eye, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import NovelCard from "@/components/NovelCard";
import mysticAcademy from "@/assets/novel-covers/mystic-academy.jpg";
import digitalRealms from "@/assets/novel-covers/digital-realms.jpg";
import dragonsCrown from "@/assets/novel-covers/dragons-crown.jpg";
import starlitDreams from "@/assets/novel-covers/starlit-dreams.jpg";

const Genres = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample genre data
  const genres = [
    {
      id: "fantasy",
      name: "Fantasy",
      description: "Magical worlds, mythical creatures, and supernatural adventures",
      novelCount: 2845,
      icon: "🏰",
      gradient: "from-purple-500 to-pink-500",
      popularTags: ["Magic", "Dragons", "Wizards", "Adventure", "Epic"],
      topNovels: [
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
          genres: ["Fantasy", "Magic", "Academy"],
          status: "ongoing" as const,
          lastUpdated: "2 days ago",
        },
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
          genres: ["Fantasy", "Dragons", "Epic"],
          status: "completed" as const,
          lastUpdated: "1 week ago",
        },
      ],
    },
    {
      id: "romance",
      name: "Romance",
      description: "Love stories, relationships, and matters of the heart",
      novelCount: 1932,
      icon: "💕",
      gradient: "from-pink-500 to-rose-500",
      popularTags: ["Love", "Relationships", "Drama", "Modern", "Historical"],
      topNovels: [
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
          genres: ["Romance", "Fantasy", "Time Travel"],
          status: "ongoing" as const,
          lastUpdated: "3 days ago",
        },
      ],
    },
    {
      id: "scifi",
      name: "Sci-Fi",
      description: "Futuristic technology, space exploration, and scientific concepts",
      novelCount: 1254,
      icon: "🚀",
      gradient: "from-blue-500 to-cyan-500",
      popularTags: ["Technology", "Space", "AI", "Cyberpunk", "Future"],
      topNovels: [
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
          genres: ["Sci-Fi", "Cyberpunk", "VR"],
          status: "ongoing" as const,
          lastUpdated: "1 day ago",
        },
      ],
    },
    {
      id: "adventure",
      name: "Adventure",
      description: "Thrilling journeys, quests, and action-packed stories",
      novelCount: 1876,
      icon: "⚔️",
      gradient: "from-green-500 to-emerald-500",
      popularTags: ["Quest", "Journey", "Action", "Exploration", "Heroes"],
      topNovels: [],
    },
    {
      id: "mystery",
      name: "Mystery",
      description: "Puzzles, investigations, and suspenseful storytelling",
      novelCount: 987,
      icon: "🔍",
      gradient: "from-gray-600 to-gray-800",
      popularTags: ["Detective", "Crime", "Suspense", "Investigation", "Thriller"],
      topNovels: [],
    },
    {
      id: "action",
      name: "Action",
      description: "High-energy combat, battles, and adrenaline-pumping scenes",
      novelCount: 1543,
      icon: "💥",
      gradient: "from-red-500 to-orange-500",
      popularTags: ["Combat", "Fighting", "Battle", "Martial Arts", "War"],
      topNovels: [],
    },
    {
      id: "drama",
      name: "Drama",
      description: "Emotional stories focusing on character development",
      novelCount: 1234,
      icon: "🎭",
      gradient: "from-indigo-500 to-purple-500",
      popularTags: ["Emotional", "Character", "Slice of Life", "Psychological"],
      topNovels: [],
    },
    {
      id: "horror",
      name: "Horror",
      description: "Scary stories, supernatural terror, and psychological horror",
      novelCount: 756,
      icon: "👻",
      gradient: "from-gray-800 to-black",
      popularTags: ["Scary", "Supernatural", "Psychological", "Dark", "Thriller"],
      topNovels: [],
    },
  ];

  const selectedGenreData = genres.find(g => g.id === selectedGenre);

  const filteredNovels = selectedGenreData ? selectedGenreData.topNovels.filter(novel =>
    !searchQuery || 
    novel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    novel.author.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground">
              <BookOpen className="h-6 w-6" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-playfair font-bold">Explore Genres</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Discover novels by genre and explore different worlds of storytelling. From magical fantasy realms to futuristic sci-fi adventures.
          </p>
        </div>

        {selectedGenre ? (
          // Genre Detail View
          <div className="space-y-8">
            {/* Genre Header */}
            <div className="bg-gradient-card border rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <Button variant="outline" onClick={() => setSelectedGenre(null)}>
                  ← Back to Genres
                </Button>
              </div>
              
              <div className="flex items-center gap-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedGenreData?.gradient} flex items-center justify-center text-4xl`}>
                  {selectedGenreData?.icon}
                </div>
                
                <div className="space-y-3">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-playfair font-bold">{selectedGenreData?.name}</h2>
                    <p className="text-muted-foreground">{selectedGenreData?.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>{selectedGenreData?.novelCount.toLocaleString()} novels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span>Growing genre</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-3">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedGenreData?.popularTags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-gradient-card border rounded-lg p-6">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="flex flex-1 max-w-md gap-3">
                  <Input
                    type="search"
                    placeholder="Search in this genre..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="flex items-center gap-4">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="recent">Recently Updated</SelectItem>
                      <SelectItem value="alphabetical">A-Z</SelectItem>
                    </SelectContent>
                  </Select>

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
              </div>
            </div>

            {/* Novels Grid */}
            {filteredNovels.length > 0 ? (
              <div className={
                viewMode === "grid" 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-6"
              }>
                {filteredNovels.map((novel) => (
                  <NovelCard key={novel.id} {...novel} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-xl font-playfair font-semibold mb-2">More novels coming soon!</p>
                <p className="text-muted-foreground mb-6">
                  We're constantly adding new {selectedGenreData?.name.toLowerCase()} novels to our collection.
                </p>
                <Button onClick={() => setSelectedGenre(null)}>
                  Explore Other Genres
                </Button>
              </div>
            )}
          </div>
        ) : (
          // Genre Grid View
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { 
                  icon: BookOpen, 
                  label: "Total Genres", 
                  value: genres.length.toString(),
                  color: "text-primary"
                },
                { 
                  icon: Eye, 
                  label: "Total Novels", 
                  value: genres.reduce((sum, g) => sum + g.novelCount, 0).toLocaleString(),
                  color: "text-blue-600"
                },
                { 
                  icon: Star, 
                  label: "Most Popular", 
                  value: "Fantasy",
                  color: "text-accent"
                },
                { 
                  icon: TrendingUp, 
                  label: "Fastest Growing", 
                  value: "Sci-Fi",
                  color: "text-green-600"
                },
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-card border rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background mx-auto mb-2">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Genres Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {genres.map((genre) => (
                <div
                  key={genre.id}
                  onClick={() => setSelectedGenre(genre.id)}
                  className="group bg-gradient-card border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${genre.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative space-y-4">
                    {/* Icon and Title */}
                    <div className="space-y-3">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${genre.gradient} flex items-center justify-center text-3xl shadow-lg`}>
                        {genre.icon}
                      </div>
                      
                      <div className="space-y-1">
                        <h3 className="text-xl font-playfair font-semibold group-hover:text-primary transition-colors">
                          {genre.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                          {genre.description}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>{genre.novelCount.toLocaleString()}</span>
                      </div>
                      <div className="text-primary font-medium group-hover:text-primary-glow transition-colors">
                        Explore →
                      </div>
                    </div>

                    {/* Popular Tags Preview */}
                    <div className="flex flex-wrap gap-1">
                      {genre.popularTags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">
                          {tag}
                        </Badge>
                      ))}
                      {genre.popularTags.length > 3 && (
                        <Badge variant="outline" className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">
                          +{genre.popularTags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Genres;