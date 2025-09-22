import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Eye, Heart, Clock, BookOpen, Share2, Flag, Plus, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import mysticAcademy from "@/assets/novel-covers/mystic-academy.jpg";

const NovelDetails = () => {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);

  // Sample novel data - in a real app, this would be fetched based on the ID
  const novel = {
    id: "1",
    title: "The Mystic Academy",
    author: "Elena Starweaver",
    description: "In a world where magic flows through ancient academies, seventeen-year-old Aria discovers she possesses powers unlike any seen before. When she enrolls at the prestigious Mystic Academy, she uncovers a conspiracy that threatens not just the school, but the entire magical realm. With the help of unlikely allies and facing dangerous enemies, Aria must learn to control her abilities while navigating the complex politics of the magical world.",
    fullDescription: `
      Aria Blackthorne never expected her life to change when strange incidents started happening around her. Books would flip their own pages, candles would light themselves, and sometimes, just sometimes, she could swear she heard whispers in languages she didn't understand.

      Everything changed the day Professor Evelyn Morningstar arrived at her doorstep with an invitation to the Mystic Academy—a hidden institution where young mages learn to harness their magical abilities. For Aria, it seemed like a dream come true, a chance to finally understand the strange occurrences that had plagued her throughout her childhood.

      But the Academy holds darker secrets than Aria could have imagined. Ancient rivalries between magical houses, forbidden spells hidden in restricted libraries, and a growing shadow that threatens to consume everything she holds dear. As Aria delves deeper into her studies, she discovers that her powers are tied to an ancient prophecy—one that could either save the magical world or destroy it entirely.

      With the help of her new friends—Marcus, a talented but troubled fire mage; Luna, whose mastery of illusion magic is matched only by her sharp wit; and Kai, a mysterious student with connections to the Academy's founding families—Aria must navigate not only her studies but also the dangerous political intrigue that surrounds her.

      As dark forces gather and long-buried secrets surface, Aria realizes that her enrollment at the Mystic Academy was no coincidence. She is the key to an ancient power that has been sleeping for centuries, and there are those who would do anything to claim that power for themselves.
    `,
    coverImage: mysticAcademy,
    rating: 4.8,
    views: 125000,
    likes: 8900,
    bookmarks: 12400,
    chapters: 45,
    words: 287000,
    genres: ["Fantasy", "Magic", "Academy", "Coming of Age", "Adventure"],
    status: "ongoing",
    lastUpdated: "2 days ago",
    publishDate: "January 15, 2024",
    language: "English",
    contentRating: "Teen",
    tags: ["Strong Female Lead", "Magic System", "School Life", "Friendship", "Mystery", "Prophecy"],
    authorBio: "Elena Starweaver is a bestselling fantasy author known for her immersive magical worlds and compelling characters. She has been writing for over a decade and has published numerous acclaimed works.",
  };

  const chapters = [
    { id: 1, title: "The Invitation", publishDate: "Jan 15, 2024", isRead: true },
    { id: 2, title: "Welcome to Mystic Academy", publishDate: "Jan 17, 2024", isRead: true },
    { id: 3, title: "First Lessons", publishDate: "Jan 20, 2024", isRead: true },
    { id: 4, title: "The Library's Secret", publishDate: "Jan 22, 2024", isRead: false },
    { id: 5, title: "House Rivalries", publishDate: "Jan 25, 2024", isRead: false },
    { id: 6, title: "Forbidden Magic", publishDate: "Jan 27, 2024", isRead: false },
    // More chapters...
  ];

  const reviews = [
    {
      id: 1,
      author: "BookLover123",
      rating: 5,
      date: "2 days ago",
      content: "Absolutely incredible! The world-building is phenomenal and Aria is such a relatable protagonist. Can't wait for the next chapter!",
      likes: 24,
    },
    {
      id: 2,
      author: "FantasyReader",
      rating: 4,
      date: "1 week ago", 
      content: "Great story with excellent character development. The magic system is well thought out and the academy setting feels authentic.",
      likes: 18,
    },
    {
      id: 3,
      author: "MagicFan",
      rating: 5,
      date: "2 weeks ago",
      content: "This is quickly becoming one of my favorite novels! Elena Starweaver has created something truly special here.",
      likes: 31,
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center space-x-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/browse" className="hover:text-primary transition-colors">Browse</Link>
          <ChevronRight className="h-4 w-4" />
          <span>Fantasy</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{novel.title}</span>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Cover & Actions */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Cover Image */}
              <div className="relative group">
                <img
                  src={novel.coverImage}
                  alt={novel.title}
                  className="w-full aspect-[3/4] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button asChild size="lg" className="w-full bg-gradient-primary hover:shadow-glow">
                  <Link to={`/read/${novel.id}/chapter/1`}>
                    <BookOpen className="mr-2 h-5 w-5" />
                    Start Reading
                  </Link>
                </Button>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={isBookmarked ? "text-red-500 border-red-200" : ""}
                  >
                    <Heart className={`mr-2 h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                    {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => setIsFollowing(!isFollowing)}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    {isFollowing ? 'Following' : 'Follow'}
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="ghost" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Flag className="mr-2 h-4 w-4" />
                    Report
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-gradient-card border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current text-accent" />
                    <span className="font-semibold">{novel.rating}</span>
                    <span className="text-sm text-muted-foreground">({novel.likes.toLocaleString()} reviews)</span>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-muted-foreground" />
                    <span>{novel.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-muted-foreground" />
                    <span>{novel.bookmarks.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{novel.chapters} chapters</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{novel.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl lg:text-4xl font-playfair font-bold leading-tight">
                  {novel.title}
                </h1>
                <p className="text-lg text-muted-foreground">
                  by <Link to={`/author/${novel.author.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary hover:underline">
                    {novel.author}
                  </Link>
                </p>
              </div>

              {/* Status & Info */}
              <div className="flex flex-wrap gap-2 items-center">
                <Badge variant="secondary" className="bg-success text-white">
                  {novel.status.charAt(0).toUpperCase() + novel.status.slice(1)}
                </Badge>
                <Badge variant="outline">{novel.language}</Badge>
                <Badge variant="outline">{novel.contentRating}</Badge>
                <span className="text-sm text-muted-foreground">
                  {novel.words.toLocaleString()} words
                </span>
                <span className="text-sm text-muted-foreground">
                  Published {novel.publishDate}
                </span>
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-2">
                {novel.genres.map((genre) => (
                  <Link key={genre} to={`/browse?genre=${genre.toLowerCase()}`}>
                    <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                      {genre}
                    </Badge>
                  </Link>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {novel.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tabs Content */}
            <Tabs defaultValue="description" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="chapters">Chapters ({novel.chapters})</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({reviews.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-6">
                <div className="bg-gradient-card border rounded-lg p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-4">Synopsis</h3>
                  <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                    {novel.fullDescription}
                  </div>
                </div>

                <div className="bg-gradient-card border rounded-lg p-6">
                  <h3 className="text-xl font-playfair font-semibold mb-4">About the Author</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {novel.authorBio}
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="chapters" className="space-y-4">
                <div className="bg-gradient-card border rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-playfair font-semibold">Chapter List</h3>
                    <Button variant="outline" size="sm">
                      Mark All as Read
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {chapters.map((chapter) => (
                      <div key={chapter.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-card-hover transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${chapter.isRead ? 'bg-primary' : 'bg-muted-foreground'}`} />
                          <div>
                            <Link 
                              to={`/read/${novel.id}/chapter/${chapter.id}`}
                              className="font-medium hover:text-primary transition-colors"
                            >
                              Chapter {chapter.id}: {chapter.title}
                            </Link>
                            <p className="text-sm text-muted-foreground">{chapter.publishDate}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/read/${novel.id}/chapter/${chapter.id}`}>
                            Read
                          </Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                <div className="bg-gradient-card border rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-playfair font-semibold">Reader Reviews</h3>
                    <Button variant="outline" size="sm">
                      Write Review
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b pb-4 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{review.author}</span>
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-current text-accent' : 'text-muted-foreground'}`} />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <p className="text-muted-foreground mb-2 leading-relaxed">{review.content}</p>
                        <div className="flex items-center space-x-4">
                          <Button variant="ghost" size="sm">
                            <Heart className="mr-1 h-3 w-3" />
                            {review.likes}
                          </Button>
                          <Button variant="ghost" size="sm">
                            Reply
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelDetails;