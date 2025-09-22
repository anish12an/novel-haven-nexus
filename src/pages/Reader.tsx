import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ChevronLeft, 
  ChevronRight, 
  Settings, 
  BookOpen, 
  Moon, 
  Sun, 
  Minus, 
  Plus,
  List,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Reader = () => {
  const { id, chapter } = useParams();
  const [fontSize, setFontSize] = useState(18);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontFamily, setFontFamily] = useState("serif");
  const [lineHeight, setLineHeight] = useState(1.8);
  const [maxWidth, setMaxWidth] = useState(800);
  const [showSettings, setShowSettings] = useState(false);
  const [progress, setProgress] = useState(0);

  // Sample chapter data
  const chapterData = {
    title: "Chapter 1: The Invitation",
    novelTitle: "The Mystic Academy",
    author: "Elena Starweaver",
    content: `
The letter arrived on a Tuesday morning, delivered by a raven with eyes like polished obsidian.

Aria Blackthorne had been watering her grandmother's herbs when the bird landed on the windowsill, its talons clicking against the weathered wood. The envelope it carried bore no postmark, no return address—only her name written in elegant script that seemed to shimmer in the morning light.

"Gran," she called, her voice carrying through the small cottage. "There's a raven here with a letter for me."

Her grandmother, Elara Blackthorne, emerged from the kitchen, her silver hair braided with small bells that chimed softly as she moved. At seventy-three, she still moved with the grace of someone half her age, though Aria had always suspected there was more to her grandmother than met the eye.

"A raven, you say?" Elara's green eyes, so similar to Aria's own, sparkled with something that might have been anticipation. "Well, don't keep the poor creature waiting. Ravens are notoriously impatient."

Aria carefully took the letter from the raven's beak. The bird regarded her with those intelligent dark eyes for a moment longer before spreading its wings and disappearing into the morning sky with barely a sound.

The envelope was heavy, made of cream-colored parchment that felt expensive beneath her fingertips. Her name was indeed written in that strange, shimmering ink, and as she turned it over, she found a wax seal pressed with an intricate symbol: a tree with branches reaching toward seven stars.

"The Mystic Academy seal," her grandmother said softly, though Aria was certain she hadn't seen it.

"The what?" Aria looked up from the letter, confusion creasing her brow.

But her grandmother had already turned away, busying herself with the tea kettle that had begun to whistle on the stove. "Open it, dear. Some letters are not meant to wait."

With trembling fingers, Aria broke the seal. The parchment unfolded on its own, revealing elegant handwriting that seemed to glow faintly in the morning light:

*Dear Miss Blackthorne,*

*We are pleased to inform you that you have been selected for enrollment at the Mystic Academy for the Advancement of Magical Arts. Your unique talents have not gone unnoticed, and we believe you would benefit greatly from proper instruction in the magical disciplines.*

*Term begins on the autumnal equinox. Professor Evelyn Morningstar will arrive at your residence three days prior to escort you to the Academy. Please prepare accordingly.*

*We look forward to welcoming you to our halls of learning.*

*Cordially yours,*
*Headmaster Aldric Thornfield*
*The Mystic Academy*

Aria read the letter three times, each reading making the words seem more impossible than the last. Magic? Academy? It had to be some kind of joke, though she couldn't imagine who would go to such elaborate lengths to prank her.

"Gran," she said slowly, "what exactly is the Mystic Academy?"

Elara set down two cups of steaming tea, her movements careful and deliberate. "It's a school, dear one. A very special school for very special people."

"Special how?" Aria's voice was barely above a whisper.

Her grandmother's eyes met hers across the small kitchen table, and in them, Aria saw confirmation of something she had long suspected but never dared to voice.

"Special like you, Aria. Special like the way books sometimes open to exactly the page you need, or how candles light themselves when you're feeling particularly lonely. Special like the way you can sometimes hear what the wind is saying when it rustles through the leaves."

Aria's hands shook as she set down the letter. She had always noticed these things, had always wondered if other people experienced the strange little coincidences that seemed to follow her around. But magic? Actual, real magic?

"I don't understand," she whispered.

"You will," Elara said gently, reaching across to cover Aria's hand with her own. "The Academy will teach you everything you need to know. They'll teach you how to control your gifts, how to use them properly. It's what your mother would have wanted for you."

At the mention of her mother, Aria's heart clenched. Her parents had died when she was five years old, in what the authorities had called a tragic accident. She had few memories of them, just impressions of warmth and laughter and the scent of jasmine that her mother always wore.

"Did my mother... was she like me?"

Elara's smile was sad and beautiful. "Your mother was one of the most talented witches I ever knew. And your father, though he had no magic of his own, loved her for exactly what she was. They both wanted you to grow up knowing about your heritage, but..." She trailed off, her eyes distant.

"But they died before they could tell me."

"Yes. And I thought... I hoped that perhaps the magic had passed you by. That you could live a normal life, free from the complications that magic brings. But it seems the Academy has other plans."

Aria stared down at the letter, its words seeming to pulse with their own inner light. Part of her wanted to tear it up, to pretend she had never received it, to continue her quiet life in her grandmother's cottage. But a larger part—the part that had always felt like she was waiting for something, always felt like she didn't quite fit in the ordinary world—thrilled at the possibilities the letter represented.

"What happens if I go?" she asked.

"You'll learn to use your gifts. You'll meet others like yourself. You'll discover that the world is far larger and more wonderful than you ever imagined."

"And what happens if I don't?"

Elara was quiet for a long moment. "The magic will still be there, Aria. It doesn't simply go away because you ignore it. And magic without training, without understanding... it can be dangerous."

As if to emphasize her grandmother's words, the tea cup in Aria's hands began to warm—not from the tea within, but from her own touch. She set it down quickly, staring at her hands in wonder and fear.

"When does this Professor Morningstar arrive?" she asked.

"Three days, according to the letter. The equinox is in six days."

Six days. In six days, her entire life could change. Aria looked around the cottage that had been her home for as long as she could remember—the herb garden visible through the window, the worn wooden floors, the shelves lined with her grandmother's mysterious books. It was all so familiar, so safe.

But safety, she was beginning to realize, was an illusion she could no longer maintain.

"Gran," she said, her voice stronger now, "tell me everything. Tell me about magic, about the Academy, about my parents. I need to know."

Elara smiled, and for the first time since the raven's arrival, it was a smile without sadness. "Where would you like me to begin?"

Outside, the wind picked up, rustling through the leaves of the old oak tree that shaded the cottage. And for once, Aria listened carefully to what it was trying to tell her.

*Change is coming,* it seemed to whisper. *Change and wonder and magic beyond your wildest dreams.*

Aria Blackthorne, seventeen years old and on the threshold of a destiny she had never imagined, took a deep breath and stepped forward to meet it.
    `,
    wordCount: 1247,
    totalChapters: 45,
    currentChapter: parseInt(chapter || "1"),
  };

  // Calculate reading progress
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fontOptions = [
    { value: "serif", label: "Serif (Georgia)" },
    { value: "sans", label: "Sans-serif (Inter)" },
    { value: "mono", label: "Monospace" },
  ];

  const getFontClass = () => {
    switch (fontFamily) {
      case "serif": return "font-playfair";
      case "sans": return "font-inter";
      case "mono": return "font-mono";
      default: return "font-playfair";
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div 
          className="h-full bg-primary transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Reader Header */}
      <header className="sticky top-1 z-40 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Navigation */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to={`/novel/${id}`}>
                  <BookOpen className="h-4 w-4 mr-2" />
                  Novel Details
                </Link>
              </Button>
            </div>

            {/* Chapter Info */}
            <div className="hidden md:block text-center">
              <h1 className="font-playfair font-semibold">{chapterData.title}</h1>
              <p className="text-sm text-muted-foreground">
                {chapterData.novelTitle} by {chapterData.author}
              </p>
            </div>

            {/* Settings & Theme */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Reading Settings</SheetTitle>
                  </SheetHeader>
                  <div className="space-y-6 mt-6">
                    {/* Font Size */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Font Size</label>
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="min-w-12 text-center text-sm">{fontSize}px</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    {/* Font Family */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Font Family</label>
                      <Select value={fontFamily} onValueChange={setFontFamily}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {fontOptions.map((font) => (
                            <SelectItem key={font.value} value={font.value}>
                              {font.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Line Height */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Line Height</label>
                      <Slider
                        value={[lineHeight]}
                        onValueChange={(value) => setLineHeight(value[0])}
                        min={1.2}
                        max={2.4}
                        step={0.1}
                      />
                      <div className="text-xs text-muted-foreground text-center">
                        {lineHeight.toFixed(1)}
                      </div>
                    </div>

                    {/* Max Width */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Reading Width</label>
                      <Slider
                        value={[maxWidth]}
                        onValueChange={(value) => setMaxWidth(value[0])}
                        min={600}
                        max={1200}
                        step={50}
                      />
                      <div className="text-xs text-muted-foreground text-center">
                        {maxWidth}px
                      </div>
                    </div>

                    <Separator />

                    {/* Theme Toggle */}
                    <Button
                      variant="outline"
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      className="w-full"
                    >
                      {isDarkMode ? (
                        <>
                          <Sun className="mr-2 h-4 w-4" />
                          Switch to Light Mode
                        </>
                      ) : (
                        <>
                          <Moon className="mr-2 h-4 w-4" />
                          Switch to Dark Mode
                        </>
                      )}
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <List className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Chapter List</SheetTitle>
                  </SheetHeader>
                  <div className="space-y-2 mt-6">
                    {Array.from({ length: chapterData.totalChapters }, (_, i) => i + 1).map((chapterNum) => (
                      <Link
                        key={chapterNum}
                        to={`/read/${id}/chapter/${chapterNum}`}
                        className={`block p-3 rounded-lg border transition-colors hover:bg-card-hover ${
                          chapterNum === chapterData.currentChapter ? 'bg-primary text-primary-foreground' : ''
                        }`}
                      >
                        <div className="font-medium">Chapter {chapterNum}</div>
                        <div className="text-sm opacity-80">
                          {chapterNum === 1 && "The Invitation"}
                          {chapterNum === 2 && "Welcome to Mystic Academy"}
                          {chapterNum === 3 && "First Lessons"}
                          {chapterNum > 3 && `Chapter ${chapterNum}`}
                        </div>
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Chapter Content */}
      <main className="container mx-auto px-4 py-8">
        <div 
          className="mx-auto"
          style={{ maxWidth: `${maxWidth}px` }}
        >
          {/* Chapter Header */}
          <div className="text-center mb-12 space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-playfair font-bold">
                {chapterData.title}
              </h1>
              <p className="text-muted-foreground">
                {chapterData.novelTitle} by {chapterData.author}
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <span>Chapter {chapterData.currentChapter} of {chapterData.totalChapters}</span>
              <Separator orientation="vertical" className="h-4" />
              <span>{chapterData.wordCount} words</span>
            </div>
          </div>

          {/* Chapter Text */}
          <div 
            className={`reading-content ${getFontClass()}`}
            style={{ 
              fontSize: `${fontSize}px`,
              lineHeight,
            }}
          >
            {chapterData.content.split('\n\n').map((paragraph, index) => (
              paragraph.trim() && (
                <p key={index} className="mb-6">
                  {paragraph.trim()}
                </p>
              )
            ))}
          </div>

          {/* Chapter Navigation */}
          <div className="flex items-center justify-between mt-16 pt-8 border-t">
            <Button 
              variant="outline" 
              asChild
              disabled={chapterData.currentChapter === 1}
            >
              <Link to={`/read/${id}/chapter/${chapterData.currentChapter - 1}`}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous Chapter
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link to={`/novel/${id}`}>
                <BookOpen className="mr-2 h-4 w-4" />
                Novel Details
              </Link>
            </Button>

            <Button 
              asChild
              disabled={chapterData.currentChapter === chapterData.totalChapters}
            >
              <Link to={`/read/${id}/chapter/${chapterData.currentChapter + 1}`}>
                Next Chapter
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reader;