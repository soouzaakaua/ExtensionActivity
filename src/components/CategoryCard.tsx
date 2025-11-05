import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  itemCount: number;
}

export const CategoryCard = ({ title, description, image, itemCount }: CategoryCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-medium)] hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-sm text-white/90">{itemCount} conteúdos disponíveis</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
            Explorar
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
