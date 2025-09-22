import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  PlusCircle, 
  BookOpen, 
  Save, 
  Eye, 
  Upload, 
  Image as ImageIcon,
  X,
  ChevronRight,
  FileText,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const Write = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [coverImage, setCoverImage] = useState<string | null>(null);
  
  const [novelForm, setNovelForm] = useState({
    title: "",
    description: "",
    synopsis: "",
    contentRating: "",
    language: "English",
    status: "ongoing",
    tags: [] as string[],
  });

  const [chapterForm, setChapterForm] = useState({
    title: "",
    content: "",
    authorNote: "",
    isPublished: false,
  });

  const availableGenres = [
    "Fantasy", "Romance", "Sci-Fi", "Adventure", "Mystery", "Action", 
    "Drama", "Horror", "Comedy", "Slice of Life", "Supernatural", "Historical"
  ];

  const availableTags = [
    "Strong Female Lead", "Magic System", "School Life", "Friendship", 
    "Adventure", "Coming of Age", "Time Travel", "Dragons", "Academy",
    "Virtual Reality", "AI", "Cyberpunk", "Space Opera", "Martial Arts"
  ];

  const handleGenreToggle = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre)
        : [...prev, genre].slice(0, 5) // Max 5 genres
    );
  };

  const handleTagToggle = (tag: string) => {
    setNovelForm(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag].slice(0, 10) // Max 10 tags
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCoverImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNovelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating novel:", { ...novelForm, genres: selectedGenres, coverImage });
    // Handle novel creation
  };

  const handleChapterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating chapter:", chapterForm);
    // Handle chapter creation
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center space-x-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Write</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground">
              <PlusCircle className="h-6 w-6" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-playfair font-bold">Create Your Story</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Share your imagination with the world. Create compelling novels and engaging chapters that will captivate readers.
          </p>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="create">New Novel</TabsTrigger>
            <TabsTrigger value="chapter">Add Chapter</TabsTrigger>
            <TabsTrigger value="manage">Manage</TabsTrigger>
          </TabsList>

          {/* Create Novel Tab */}
          <TabsContent value="create" className="space-y-8">
            <form onSubmit={handleNovelSubmit} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Cover Upload */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ImageIcon className="h-5 w-5" />
                        Cover Image
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="aspect-[3/4] border-2 border-dashed border-muted-foreground/25 rounded-lg flex items-center justify-center relative overflow-hidden bg-muted/10">
                        {coverImage ? (
                          <>
                            <img
                              src={coverImage}
                              alt="Cover preview"
                              className="w-full h-full object-cover"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              className="absolute top-2 right-2"
                              onClick={() => setCoverImage(null)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        ) : (
                          <div className="text-center p-6">
                            <ImageIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground mb-4">
                              Upload a cover image for your novel
                            </p>
                            <Label htmlFor="coverUpload" className="cursor-pointer">
                              <Button type="button" variant="outline" asChild>
                                <span>
                                  <Upload className="h-4 w-4 mr-2" />
                                  Choose Image
                                </span>
                              </Button>
                            </Label>
                          </div>
                        )}
                      </div>
                      
                      <Input
                        id="coverUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      
                      {!coverImage && (
                        <Label htmlFor="coverUpload" className="cursor-pointer">
                          <Button type="button" variant="outline" className="w-full" asChild>
                            <span>
                              <Upload className="h-4 w-4 mr-2" />
                              Upload Cover
                            </span>
                          </Button>
                        </Label>
                      )}

                      <div className="text-xs text-muted-foreground">
                        <p>Recommended: 400x600px</p>
                        <p>Max size: 5MB</p>
                        <p>Formats: JPG, PNG, WebP</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column - Novel Details */}
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Novel Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2 space-y-2">
                          <Label htmlFor="title">Novel Title *</Label>
                          <Input
                            id="title"
                            value={novelForm.title}
                            onChange={(e) => setNovelForm(prev => ({ ...prev, title: e.target.value }))}
                            placeholder="Enter your novel title"
                            required
                            className="text-lg font-semibold"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="language">Language</Label>
                          <Select value={novelForm.language} onValueChange={(value) => setNovelForm(prev => ({ ...prev, language: value }))}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="English">English</SelectItem>
                              <SelectItem value="Spanish">Spanish</SelectItem>
                              <SelectItem value="French">French</SelectItem>
                              <SelectItem value="German">German</SelectItem>
                              <SelectItem value="Japanese">Japanese</SelectItem>
                              <SelectItem value="Korean">Korean</SelectItem>
                              <SelectItem value="Chinese">Chinese</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="contentRating">Content Rating *</Label>
                          <Select value={novelForm.contentRating} onValueChange={(value) => setNovelForm(prev => ({ ...prev, contentRating: value }))}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select rating" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General (All Ages)</SelectItem>
                              <SelectItem value="teen">Teen (13+)</SelectItem>
                              <SelectItem value="mature">Mature (17+)</SelectItem>
                              <SelectItem value="explicit">Explicit (18+)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Short Description *</Label>
                        <Textarea
                          id="description"
                          value={novelForm.description}
                          onChange={(e) => setNovelForm(prev => ({ ...prev, description: e.target.value }))}
                          placeholder="Write a compelling short description (1-2 sentences)"
                          rows={2}
                          required
                        />
                        <div className="text-xs text-muted-foreground">
                          {novelForm.description.length}/200 characters
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="synopsis">Full Synopsis *</Label>
                        <Textarea
                          id="synopsis"
                          value={novelForm.synopsis}
                          onChange={(e) => setNovelForm(prev => ({ ...prev, synopsis: e.target.value }))}
                          placeholder="Write a detailed synopsis of your story..."
                          rows={6}
                          required
                        />
                        <div className="text-xs text-muted-foreground">
                          {novelForm.synopsis.length}/2000 characters
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Genres */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Genres (Select up to 5)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {availableGenres.map((genre) => (
                          <div key={genre} className="flex items-center space-x-2">
                            <Checkbox
                              id={genre}
                              checked={selectedGenres.includes(genre)}
                              onCheckedChange={() => handleGenreToggle(genre)}
                              disabled={!selectedGenres.includes(genre) && selectedGenres.length >= 5}
                            />
                            <Label htmlFor={genre} className="cursor-pointer text-sm">
                              {genre}
                            </Label>
                          </div>
                        ))}
                      </div>
                      
                      {selectedGenres.length > 0 && (
                        <div className="mt-4">
                          <p className="text-sm font-medium mb-2">Selected genres:</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedGenres.map((genre) => (
                              <Badge key={genre} variant="secondary" className="gap-1">
                                {genre}
                                <button
                                  type="button"
                                  onClick={() => handleGenreToggle(genre)}
                                  className="ml-1 hover:bg-muted-foreground/20 rounded-full"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Tags */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Tags (Select up to 10)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {availableTags.map((tag) => (
                          <div key={tag} className="flex items-center space-x-2">
                            <Checkbox
                              id={tag}
                              checked={novelForm.tags.includes(tag)}
                              onCheckedChange={() => handleTagToggle(tag)}
                              disabled={!novelForm.tags.includes(tag) && novelForm.tags.length >= 10}
                            />
                            <Label htmlFor={tag} className="cursor-pointer text-sm">
                              {tag}
                            </Label>
                          </div>
                        ))}
                      </div>
                      
                      {novelForm.tags.length > 0 && (
                        <div className="mt-4">
                          <p className="text-sm font-medium mb-2">Selected tags:</p>
                          <div className="flex flex-wrap gap-2">
                            {novelForm.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="gap-1 text-xs">
                                {tag}
                                <button
                                  type="button"
                                  onClick={() => handleTagToggle(tag)}
                                  className="ml-1 hover:bg-muted-foreground/20 rounded-full"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Submit */}
                  <div className="flex gap-4">
                    <Button type="submit" className="bg-gradient-primary hover:shadow-glow">
                      <Save className="h-4 w-4 mr-2" />
                      Create Novel
                    </Button>
                    <Button type="button" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </TabsContent>

          {/* Add Chapter Tab */}
          <TabsContent value="chapter" className="space-y-8">
            <form onSubmit={handleChapterSubmit} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    New Chapter
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="chapterTitle">Chapter Title *</Label>
                    <Input
                      id="chapterTitle"
                      value={chapterForm.title}
                      onChange={(e) => setChapterForm(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter chapter title"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="chapterContent">Chapter Content *</Label>
                    <Textarea
                      id="chapterContent"
                      value={chapterForm.content}
                      onChange={(e) => setChapterForm(prev => ({ ...prev, content: e.target.value }))}
                      placeholder="Start writing your chapter..."
                      rows={20}
                      className="font-mono resize-y"
                      required
                    />
                    <div className="text-xs text-muted-foreground flex justify-between">
                      <span>{chapterForm.content.split(' ').filter(word => word.length > 0).length} words</span>
                      <span>{chapterForm.content.length} characters</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="authorNote">Author's Note (Optional)</Label>
                    <Textarea
                      id="authorNote"
                      value={chapterForm.authorNote}
                      onChange={(e) => setChapterForm(prev => ({ ...prev, authorNote: e.target.value }))}
                      placeholder="Add any notes for your readers..."
                      rows={3}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="publishNow"
                      checked={chapterForm.isPublished}
                      onCheckedChange={(checked) => setChapterForm(prev => ({ ...prev, isPublished: checked as boolean }))}
                    />
                    <Label htmlFor="publishNow" className="cursor-pointer">
                      Publish immediately
                    </Label>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="bg-gradient-primary hover:shadow-glow">
                      <Save className="h-4 w-4 mr-2" />
                      {chapterForm.isPublished ? 'Publish Chapter' : 'Save Draft'}
                    </Button>
                    <Button type="button" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </form>
          </TabsContent>

          {/* Manage Tab */}
          <TabsContent value="manage" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Manage Your Novels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-xl font-playfair font-semibold mb-2">No novels yet</p>
                  <p className="text-muted-foreground mb-6">
                    Create your first novel to start managing your stories and chapters.
                  </p>
                  <Button onClick={() => setActiveTab("create")}>
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Create First Novel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Write;