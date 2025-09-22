import { useState } from "react";
import { Calendar, Book, Heart, Star, Edit, Settings, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NovelCard from "@/components/NovelCard";
import mysticAcademy from "@/assets/novel-covers/mystic-academy.jpg";
import digitalRealms from "@/assets/novel-covers/digital-realms.jpg";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Sample user data - in a real app, this would come from authentication context
  const user = {
    id: "user-123",
    username: "BookwormExtraordinaire",
    displayName: "Alex Chen",
    email: "alex.chen@example.com",
    bio: "Passionate reader and aspiring author. I love diving into fantasy worlds and crafting my own magical stories. Currently working on my first light novel series!",
    joinDate: "January 2024",
    avatar: "",
    stats: {
      novelsRead: 127,
      chaptersRead: 2845,
      booksmarked: 23,
      wordsWritten: 156000,
      followers: 245,
      following: 89,
    },
    badges: [
      { name: "Early Adopter", icon: "🌟", description: "Joined NovelVerse in its first month" },
      { name: "Avid Reader", icon: "📚", description: "Read over 100 novels" },
      { name: "Speed Reader", icon: "⚡", description: "Read 50 chapters in a day" },
      { name: "Review Master", icon: "✍️", description: "Written 50+ reviews" },
    ],
    readingHistory: [
      {
        id: "1",
        title: "The Mystic Academy",
        author: "Elena Starweaver",
        coverImage: mysticAcademy,
        lastRead: "2 hours ago",
        progress: 85,
        currentChapter: 38,
        totalChapters: 45,
        rating: 5,
      },
      {
        id: "2",
        title: "Digital Realms", 
        author: "Cyber Phoenix",
        coverImage: digitalRealms,
        lastRead: "1 day ago",
        progress: 60,
        currentChapter: 23,
        totalChapters: 38,
        rating: 4,
      },
    ],
    bookmarkedNovels: [
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
        isBookmarked: true,
      },
    ],
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Profile Header */}
        <div className="bg-gradient-card border rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <Avatar className="w-24 h-24 border-4 border-primary/20">
                <AvatarImage src={user.avatar} alt={user.displayName} />
                <AvatarFallback className="text-2xl font-bold bg-gradient-primary text-primary-foreground">
                  {user.displayName.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full p-2">
                <Edit className="h-3 w-3" />
              </Button>
            </div>

            {/* User Info */}
            <div className="flex-1 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-playfair font-bold">{user.displayName}</h1>
                  <Badge variant="secondary">@{user.username}</Badge>
                </div>
                <p className="text-muted-foreground max-w-2xl leading-relaxed">
                  {user.bio}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {user.joinDate}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span><strong>{user.stats.followers}</strong> followers</span>
                    <span><strong>{user.stats.following}</strong> following</span>
                  </div>
                </div>
              </div>

              {/* User Badges */}
              <div className="flex flex-wrap gap-2">
                {user.badges.map((badge, index) => (
                  <Badge key={index} variant="outline" className="gap-1" title={badge.description}>
                    <span>{badge.icon}</span>
                    <span>{badge.name}</span>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Book, label: "Novels Read", value: user.stats.novelsRead },
            { icon: Heart, label: "Bookmarked", value: user.stats.booksmarked },
            { icon: Star, label: "Chapters Read", value: user.stats.chaptersRead.toLocaleString() },
            { icon: Trophy, label: "Words Written", value: `${Math.round(user.stats.wordsWritten / 1000)}K` },
          ].map((stat, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="reading" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="reading">Currently Reading</TabsTrigger>
            <TabsTrigger value="bookmarks">Bookmarked</TabsTrigger>
            <TabsTrigger value="history">Reading History</TabsTrigger>
            <TabsTrigger value="reviews">My Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="reading" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-playfair font-semibold">Continue Reading</h3>
              
              <div className="space-y-4">
                {user.readingHistory.map((novel) => (
                  <div key={novel.id} className="bg-gradient-card border rounded-lg p-6">
                    <div className="flex gap-4">
                      <img
                        src={novel.coverImage}
                        alt={novel.title}
                        className="w-20 h-28 object-cover rounded-lg shadow-sm"
                      />
                      
                      <div className="flex-1 space-y-3">
                        <div className="space-y-1">
                          <h4 className="font-playfair font-semibold text-lg">{novel.title}</h4>
                          <p className="text-sm text-muted-foreground">by {novel.author}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Chapter {novel.currentChapter} of {novel.totalChapters}</span>
                            <span className="text-muted-foreground">{novel.progress}% complete</span>
                          </div>
                          
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${novel.progress}%` }}
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < novel.rating ? 'fill-current text-accent' : 'text-muted-foreground'}`} 
                              />
                            ))}
                          </div>
                          <div className="text-sm text-muted-foreground">Last read {novel.lastRead}</div>
                        </div>

                        <Button className="w-full md:w-auto">
                          Continue Reading
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="bookmarks" className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-playfair font-semibold">Bookmarked Novels</h3>
                <div className="text-sm text-muted-foreground">
                  {user.bookmarkedNovels.length} novels bookmarked
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {user.bookmarkedNovels.map((novel) => (
                  <NovelCard key={novel.id} {...novel} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-playfair font-semibold">Reading History</h3>
              
              <div className="space-y-3">
                {user.readingHistory.map((novel) => (
                  <div key={novel.id} className="flex items-center gap-4 p-4 rounded-lg border hover:bg-card-hover transition-colors">
                    <img
                      src={novel.coverImage}
                      alt={novel.title}
                      className="w-12 h-16 object-cover rounded-md shadow-sm"
                    />
                    
                    <div className="flex-1">
                      <h4 className="font-medium">{novel.title}</h4>
                      <p className="text-sm text-muted-foreground">by {novel.author}</p>
                      <p className="text-xs text-muted-foreground">Read {novel.lastRead}</p>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${i < novel.rating ? 'fill-current text-accent' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-playfair font-semibold">My Reviews</h3>
              
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <Star className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-xl font-playfair font-semibold mb-2">No reviews yet</p>
                  <p className="text-muted-foreground mb-6">
                    Start reading and leave reviews to share your thoughts with the community.
                  </p>
                  <Button>
                    Browse Novels
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;