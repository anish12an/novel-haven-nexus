import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, SortDesc, Grid, List, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import NovelCard from "@/components/NovelCard";
import mysticAcademy from "@/assets/novel-covers/mystic-academy.jpg";
import digitalRealms from "@/assets/novel-covers/digital-realms.jpg";
import dragonsCrown from "@/assets/novel-covers/dragons-crown.jpg";
import starlitDreams from "@/assets/novel-covers/starlit-dreams.jpg";

const Browse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [sortBy, setSortBy] = useState("popular");
  const [filterGenre, setFilterGenre] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Sample novels data - in a real app, this would come from an API
  const allNovels = [
    {
      id: "1",
      title: "The Mystic Academy",
      author: "Elena Starweaver",
      description: "A young mage discovers her extraordinary powers at the prestigious Mystic Academy, where ancient secrets and dangerous magic await. Follow Aria as she navigates friendship, rivalry, and the mysteries of her past in this enchanting tale of magic and self-discovery.",
      coverImage: mysticAcademy,
      rating: 4.8,
      views: 125000,
      likes: 8900,
      chapters: 45,
      genres: ["Fantasy", "Magic", "Academy", "Coming of Age"],
      status: "ongoing" as const,
      lastUpdated: "2 days ago",
      isBookmarked: true,
    },
    {
      id: "2", 
      title: "Digital Realms",
      author: "Cyber Phoenix",
      description: "In a world where virtual reality and reality blend seamlessly, hacker Zane must navigate multiple digital dimensions to prevent a catastrophic system collapse that threatens both the virtual and real worlds.",
      coverImage: digitalRealms,
      rating: 4.6,
      views: 98000,
      likes: 7200,
      chapters: 38,
      genres: ["Sci-Fi", "Cyberpunk", "VR", "Thriller"],
      status: "ongoing" as const,
      lastUpdated: "1 day ago",
    },
    {
      id: "3",
      title: "Dragon's Crown",
      author: "Mythril Forge",
      description: "An epic tale of dragons, ancient kingdoms, and the legendary Dragon's Crown that holds the power to unite or destroy the entire realm. Join Prince Aldric on his quest to restore balance to a world on the brink of war.",
      coverImage: dragonsCrown,
      rating: 4.9,
      views: 210000,
      likes: 15600,
      chapters: 62,
      genres: ["Fantasy", "Dragons", "Epic", "Adventure"],
      status: "completed" as const,
      lastUpdated: "1 week ago",
    },
    {
      id: "4",
      title: "Starlit Dreams",
      author: "Luna Nightshade",
      description: "A heartwarming romance that spans across time and space, where two souls destined to be together find each other among the stars, defying the laws of physics and fate itself.",
      coverImage: starlitDreams,
      rating: 4.7,
      views: 87000,
      likes: 12300,
      chapters: 28,
      genres: ["Romance", "Fantasy", "Time Travel", "Supernatural"],
      status: "ongoing" as const,
      lastUpdated: "3 days ago",
    },
  ];

  const genres = ["All", "Fantasy", "Romance", "Sci-Fi", "Adventure", "Mystery", "Action", "Drama"];

  const [filteredNovels, setFilteredNovels] = useState(allNovels);

  useEffect(() => {
    let filtered = [...allNovels];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(novel => 
        novel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        novel.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        novel.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        novel.genres.some(genre => genre.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by genre
    if (filterGenre !== "all") {
      filtered = filtered.filter(novel => 
        novel.genres.some(genre => genre.toLowerCase() === filterGenre.toLowerCase())
      );
    }

    // Sort novels
    switch (sortBy) {
      case "popular":
        filtered.sort((a, b) => b.views - a.views);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "recent":
        filtered.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
        break;
      case "alphabetical":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    setFilteredNovels(filtered);
  }, [searchQuery, filterGenre, sortBy]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (searchQuery) {
      params.set("search", searchQuery);
    } else {
      params.delete("search");
    }
    setSearchParams(params);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Browse Novels</h1>
          <p className="text-muted-foreground">
            Discover your next favorite story from our collection of {allNovels.length.toLocaleString()} amazing novels
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gradient-card border rounded-lg p-6 mb-8 space-y-4">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search novels, authors, genres..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button type="submit">Search</Button>
          </form>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filters:</span>
              </div>
              
              <Select value={filterGenre} onValueChange={setFilterGenre}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genres</SelectItem>
                  {genres.slice(1).map((genre) => (
                    <SelectItem key={genre} value={genre.toLowerCase()}>
                      {genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

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
            </div>

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

          {/* Active Filters */}
          {(searchQuery || filterGenre !== "all") && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {searchQuery && (
                <Badge variant="secondary" className="gap-1">
                  Search: "{searchQuery}"
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {filterGenre !== "all" && (
                <Badge variant="secondary" className="gap-1">
                  Genre: {filterGenre}
                  <button 
                    onClick={() => setFilterGenre("all")}
                    className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing {filteredNovels.length} {filteredNovels.length === 1 ? 'novel' : 'novels'}
            {searchQuery && ` for "${searchQuery}"`}
          </p>
          <div className="flex items-center gap-2">
            <SortDesc className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Sorted by {sortBy === "popular" ? "popularity" : sortBy}
            </span>
          </div>
        </div>

        {/* Novels Grid/List */}
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
            <div className="max-w-md mx-auto">
              <p className="text-xl font-playfair font-semibold mb-2">No novels found</p>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filters to find more results.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setFilterGenre("all");
                  setSearchParams({});
                }}
                variant="outline"
              >
                Clear all filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;