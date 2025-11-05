import { BookOpen, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">TechKids</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Promovendo inclusão digital e educação tecnológica para crianças e adolescentes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#inicio" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#conteudos" className="hover:text-primary transition-colors">Conteúdos</a></li>
              <li><a href="#categorias" className="hover:text-primary transition-colors">Categorias</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Programação</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Robótica</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Internet Segura</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Jogos Digitais</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Nova Iguaçu - RJ</li>
              <li>Bairro São Benedito</li>
              <li className="pt-2">Projeto Extensionista</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Feito com <Heart className="h-4 w-4 text-red-500 fill-current" /> para a educação digital
          </p>
          <p className="mt-2">© 2024 TechKids - Tecnologia Aplicada à Inclusão Digital</p>
        </div>
      </div>
    </footer>
  );
};
