import { Link } from "react-router-dom";
import { Star, Eye, Heart, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NovelCardProps {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  rating: number;
  views: number;
  likes: number;
  chapters: number;
  genres: string[];
  status: "ongoing" | "completed" | "hiatus";
  lastUpdated: string;
  isBookmarked?: boolean;
}

const NovelCard = ({
  id,
  title,
  author,
  description,
  coverImage,
  rating,
  views,
  likes,
  chapters,
  genres,
  status,
  lastUpdated,
  isBookmarked = false,
}: NovelCardProps) => {
  const statusColors = {
    ongoing: "bg-success text-white",
    completed: "bg-primary text-primary-foreground", 
    hiatus: "bg-warning text-warning-foreground",
  };

  return (
    <div className="group bg-gradient-card border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden">
      {/* Cover Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Bookmark Button */}
        <Button
          size="sm"
          variant="secondary"
          className="absolute top-2 right-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Heart className={`h-4 w-4 ${isBookmarked ? 'fill-current text-red-500' : ''}`} />
        </Button>

        {/* Status Badge */}
        <Badge className={`absolute top-2 left-2 text-xs ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>

        {/* Quick Actions Overlay */}
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
          <Button asChild className="w-full bg-primary hover:bg-primary-glow">
            <Link to={`/novel/${id}`}>
              View Details
            </Link>
          </Button>
          {chapters > 0 && (
            <Button asChild variant="secondary" className="w-full">
              <Link to={`/read/${id}/chapter/1`}>
                Start Reading
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title and Author */}
        <div>
          <h3 className="font-playfair font-semibold text-lg leading-tight line-clamp-2 mb-1">
            <Link 
              to={`/novel/${id}`} 
              className="hover:text-primary transition-colors"
            >
              {title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground">
            by <Link to={`/author/${author.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary transition-colors">
              {author}
            </Link>
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Genres */}
        <div className="flex flex-wrap gap-1">
          {genres.slice(0, 3).map((genre) => (
            <Badge key={genre} variant="secondary" className="text-xs">
              {genre}
            </Badge>
          ))}
          {genres.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{genres.length - 3}
            </Badge>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 fill-current text-accent" />
              <span>{rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-3 w-3" />
              <span>{views.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="h-3 w-3" />
              <span>{likes.toLocaleString()}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{lastUpdated}</span>
          </div>
        </div>

        {/* Chapters */}
        <div className="text-xs text-muted-foreground">
          {chapters} {chapters === 1 ? 'chapter' : 'chapters'}
        </div>
      </div>
    </div>
  );
};

export default NovelCard;