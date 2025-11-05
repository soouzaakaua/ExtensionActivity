import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Aprenda Tecnologia de Forma{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Divertida e Acessível
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Plataforma educacional gratuita para crianças e adolescentes explorarem o mundo da tecnologia através de vídeos, artigos e atividades interativas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-soft)] transition-all">
                Começar a Aprender
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Saiba Mais
              </Button>
            </div>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-medium)]">
              <img
                src={heroImage}
                alt="Crianças e adolescentes aprendendo tecnologia"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
