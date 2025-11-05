import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb } from "lucide-react";

export const About = () => {
  const objectives = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Inclusão Digital",
      description: "Promover o acesso à tecnologia e educação de qualidade para crianças e adolescentes de todas as comunidades."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Educação Gratuita",
      description: "Disponibilizar conteúdos educacionais de qualidade totalmente gratuitos e acessíveis para todos."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Desenvolvimento de Habilidades",
      description: "Preparar jovens para o futuro digital, desenvolvendo habilidades tecnológicas fundamentais desde cedo."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Sobre o Projeto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma iniciativa extensionista focada em tecnologia aplicada à inclusão digital,
            promovendo o desenvolvimento educacional através da inovação.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {objectives.map((obj, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {obj.icon}
                </div>
                <h3 className="text-xl font-bold">{obj.title}</h3>
                <p className="text-muted-foreground">{obj.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-0">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">Resultados Esperados</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A plataforma visa ajudar crianças a desenvolverem habilidades tecnológicas fundamentais,
                  preparando-as para um futuro profissional digital. Com vídeos interativos e materiais de
                  qualidade, buscamos enriquecer o aprendizado acadêmico, estimular a criatividade e a
                  curiosidade, oferecendo uma base sólida para futuras carreiras na tecnologia.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-lg p-6 text-center shadow-[var(--shadow-soft)]">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Gratuito</div>
                </div>
                <div className="bg-background rounded-lg p-6 text-center shadow-[var(--shadow-soft)]">
                  <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Disponível</div>
                </div>
                <div className="bg-background rounded-lg p-6 text-center shadow-[var(--shadow-soft)]">
                  <div className="text-3xl font-bold text-accent mb-2">Kids</div>
                  <div className="text-sm text-muted-foreground">Foco Infantil</div>
                </div>
                <div className="bg-background rounded-lg p-6 text-center shadow-[var(--shadow-soft)]">
                  <div className="text-3xl font-bold text-primary mb-2">Tech</div>
                  <div className="text-sm text-muted-foreground">Educação</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
