import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, BookOpen, PlusCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/browse?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-card backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-primary text-primary-foreground transition-all duration-300 group-hover:shadow-glow">
            <BookOpen className="h-6 w-6" />
          </div>
          <span className="text-2xl font-playfair font-bold bg-gradient-primary bg-clip-text text-transparent">
            NovelVerse
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/browse" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Browse
          </Link>
          <Link 
            to="/trending" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Trending
          </Link>
          <Link 
            to="/genres" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Genres
          </Link>
        </nav>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search novels, authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background-secondary border-0 focus-visible:ring-primary"
            />
          </div>
        </form>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild>
            <Link to="/write">
              <PlusCircle className="h-4 w-4 mr-2" />
              Write
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="p-2">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/profile">My Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/library">My Library</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/dashboard">Author Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background-secondary">
          <div className="container py-4 px-4 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search novels..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </form>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-2">
              <Link 
                to="/browse" 
                className="py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse
              </Link>
              <Link 
                to="/trending" 
                className="py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Trending
              </Link>
              <Link 
                to="/write" 
                className="py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Write Novel
              </Link>
              <Link 
                to="/profile" 
                className="py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                My Profile
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;