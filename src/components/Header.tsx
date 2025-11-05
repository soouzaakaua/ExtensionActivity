import { Button } from "@/components/ui/button";
import { BookOpen, Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl">TechKids</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
            Início
          </a>
          <a href="#conteudos" className="text-foreground hover:text-primary transition-colors font-medium">
            Conteúdos
          </a>
          <a href="#categorias" className="text-foreground hover:text-primary transition-colors font-medium">
            Categorias
          </a>
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium">
            Sobre
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex">
            Começar Agora
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
