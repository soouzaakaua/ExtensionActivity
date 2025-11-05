import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Video, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ContentCardProps {
  title: string;
  description: string;
  type: "video" | "article" | "news";
  duration?: string;
  thumbnail: string;
  category: string;
  slug: string;
}

export const ContentCard = ({ title, description, type, duration, thumbnail, category, slug }: ContentCardProps) => {
  const navigate = useNavigate();
  
  const typeIcons = {
    video: <Video className="h-4 w-4" />,
    article: <FileText className="h-4 w-4" />,
    news: <FileText className="h-4 w-4" />
  };

  const typeLabels = {
    video: "Vídeo",
    article: "Artigo",
    news: "Notícia"
  };

  return (
    <Card 
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-medium)] hover:-translate-y-1"
      onClick={() => navigate(`/conteudo/${slug}`)}
    >
      <CardContent className="p-0">
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {duration && (
            <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {duration}
            </div>
          )}
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="flex items-center gap-1">
              {typeIcons[type]}
              {typeLabels[type]}
            </Badge>
            <Badge variant="outline">{category}</Badge>
          </div>
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};
