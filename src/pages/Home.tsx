import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, TrendingUp, BookOpen, Star, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import NovelCard from "@/components/NovelCard";
import heroImage from "@/assets/hero-banner.jpg";
import mysticAcademy from "@/assets/novel-covers/mystic-academy.jpg";
import digitalRealms from "@/assets/novel-covers/digital-realms.jpg";
import dragonsCrown from "@/assets/novel-covers/dragons-crown.jpg";
import starlitDreams from "@/assets/novel-covers/starlit-dreams.jpg";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data - in a real app, this would come from an API
  const featuredNovels = [
    {
      id: "1",
      title: "The Mystic Academy",
      author: "Elena Starweaver",
      description: "A young mage discovers her extraordinary powers at the prestigious Mystic Academy, where ancient secrets and dangerous magic await.",
      coverImage: mysticAcademy,
      rating: 4.8,
      views: 125000,
      likes: 8900,
      chapters: 45,
      genres: ["Fantasy", "Magic", "Academy"],
      status: "ongoing" as const,
      lastUpdated: "2 days ago",
      isBookmarked: true,
    },
    {
      id: "2", 
      title: "Digital Realms",
      author: "Cyber Phoenix",
      description: "In a world where virtual reality and reality blend, a hacker must navigate digital dimensions to save both worlds from collapse.",
      coverImage: digitalRealms,
      rating: 4.6,
      views: 98000,
      likes: 7200,
      chapters: 38,
      genres: ["Sci-Fi", "Cyberpunk", "VR"],
      status: "ongoing" as const,
      lastUpdated: "1 day ago",
    },
    {
      id: "3",
      title: "Dragon's Crown",
      author: "Mythril Forge",
      description: "An epic tale of dragons, kingdoms, and the legendary crown that holds the power to unite or destroy the realm.",
      coverImage: dragonsCrown,
      rating: 4.9,
      views: 210000,
      likes: 15600,
      chapters: 62,
      genres: ["Fantasy", "Dragons", "Epic"],
      status: "completed" as const,
      lastUpdated: "1 week ago",
    },
    {
      id: "4",
      title: "Starlit Dreams",
      author: "Luna Nightshade",
      description: "A heartwarming romance that spans across time and space, where two souls find each other among the stars.",
      coverImage: starlitDreams,
      rating: 4.7,
      views: 87000,
      likes: 12300,
      chapters: 28,
      genres: ["Romance", "Fantasy", "Time Travel"],
      status: "ongoing" as const,
      lastUpdated: "3 days ago",
    },
  ];

  const stats = [
    { icon: BookOpen, label: "Total Novels", value: "12,845" },
    { icon: Users, label: "Active Authors", value: "2,341" },
    { icon: Star, label: "Reviews", value: "89,234" },
    { icon: TrendingUp, label: "Monthly Readers", value: "156K" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/browse?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-2xl space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-playfair font-bold leading-tight">
                Discover Your Next
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Literary Adventure
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Dive into a universe of captivating light novels, where imagination knows no bounds and every page turns into a new world of wonder.
              </p>
            </div>

            {/* Hero Search */}
            <form onSubmit={handleSearch} className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="search"
                  placeholder="Search for novels, authors, genres..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-background/90 backdrop-blur-sm border-border/50 focus-visible:ring-primary text-base"
                />
              </div>
              <Button type="submit" size="lg" className="h-12 px-8 bg-gradient-primary hover:shadow-glow">
                Search
              </Button>
            </form>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" className="bg-background/80 backdrop-blur-sm">
                <Link to="/browse">
                  Browse All Novels
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" className="text-foreground hover:bg-background/80">
                <Link to="/trending">View Trending</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center space-y-3 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-playfair font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Novels Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold">Featured Novels</h2>
              <p className="text-muted-foreground">Handpicked stories that captivate and inspire</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/browse">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredNovels.map((novel) => (
              <NovelCard key={novel.id} {...novel} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Explore by Genre</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From mystical adventures to heartwarming romances, discover stories that match your taste
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Fantasy", count: "2,845", gradient: "from-purple-500 to-pink-500" },
              { name: "Romance", count: "1,932", gradient: "from-pink-500 to-rose-500" },
              { name: "Sci-Fi", count: "1,254", gradient: "from-blue-500 to-cyan-500" },
              { name: "Adventure", count: "1,876", gradient: "from-green-500 to-emerald-500" },
              { name: "Mystery", count: "987", gradient: "from-gray-600 to-gray-800" },
              { name: "Action", count: "1,543", gradient: "from-red-500 to-orange-500" },
            ].map((genre) => (
              <Link
                key={genre.name}
                to={`/browse?genre=${genre.name.toLowerCase()}`}
                className="group relative p-6 rounded-lg bg-gradient-card border hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${genre.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative">
                  <h3 className="font-playfair font-semibold text-lg mb-1">{genre.name}</h3>
                  <p className="text-sm text-muted-foreground">{genre.count} novels</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-playfair font-bold">
              Ready to Share Your Story?
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Join thousands of authors who have found their voice on NovelVerse. 
              Create, publish, and connect with readers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                <Link to="/write">Start Writing</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/auth/signup">Join NovelVerse</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;