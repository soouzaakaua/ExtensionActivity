import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryCard } from "@/components/CategoryCard";
import { ContentCard } from "@/components/ContentCard";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

import programmingImg from "@/assets/category-programming.jpg";
import roboticsImg from "@/assets/category-robotics.jpg";
import internetImg from "@/assets/category-internet.jpg";
import gamesImg from "@/assets/category-games.jpg";

const Index = () => {
  const categories = [
    {
      title: "Programação",
      description: "Aprenda a criar seus próprios programas e jogos com linguagens de programação amigáveis.",
      image: programmingImg,
      itemCount: 24
    },
    {
      title: "Robótica",
      description: "Descubra como funcionam os robôs e aprenda a construir suas próprias criações tecnológicas.",
      image: roboticsImg,
      itemCount: 18
    },
    {
      title: "Internet Segura",
      description: "Navegue com segurança e aprenda boas práticas para usar a internet de forma responsável.",
      image: internetImg,
      itemCount: 32
    },
    {
      title: "Jogos Digitais",
      description: "Entenda como os jogos são criados e desenvolva suas próprias ideias de games.",
      image: gamesImg,
      itemCount: 21
    }
  ];

  const featuredContent = [
    {
      title: "O que são Algoritmos?",
      description: "Descubra o que são algoritmos e como eles fazem parte do nosso dia a dia!",
      type: "article" as const,
      thumbnail: programmingImg,
      category: "Programação",
      slug: "algoritmos"
    },
    {
      title: "Quem Cria Nossos Jogos?",
      description: "Conheça as pessoas incríveis que criam os jogos que você ama jogar!",
      type: "video" as const,
      duration: "15 min",
      thumbnail: gamesImg,
      category: "Jogos Digitais",
      slug: "criadores-de-jogos"
    },
    {
      title: "Como Usar ChatGPT e IA",
      description: "Aprenda a usar inteligência artificial de forma segura e divertida!",
      type: "article" as const,
      thumbnail: internetImg,
      category: "Internet Segura",
      slug: "chatgpt"
    },
    {
      title: "Introdução à Programação com Scratch",
      description: "Aprenda os conceitos básicos de programação de forma visual e divertida",
      type: "video" as const,
      duration: "15 min",
      thumbnail: programmingImg,
      category: "Programação",
      slug: "scratch"
    },
    {
      title: "Como Criar Senhas Seguras",
      description: "Dicas essenciais para proteger suas contas online e navegar com segurança",
      type: "article" as const,
      thumbnail: internetImg,
      category: "Internet Segura",
      slug: "senhas-seguras"
    },
    {
      title: "Robôs que Ajudam o Mundo",
      description: "Conheça robôs incríveis que estão sendo usados para resolver problemas reais",
      type: "news" as const,
      thumbnail: roboticsImg,
      category: "Robótica",
      slug: "robos-mundo"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div id="inicio">
          <Hero />
        </div>

        <section id="conteudos" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Conteúdos em Destaque
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore nossos conteúdos mais populares e comece sua jornada no mundo da tecnologia
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {featuredContent.map((content, index) => (
                <ContentCard key={index} {...content} />
              ))}
            </div>
          </div>
        </section>

        <section id="categorias" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Explore por Categoria
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Escolha uma área de interesse e descubra conteúdos incríveis sobre tecnologia
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>
          </div>
        </section>

        <div id="sobre">
          <About />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
