import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Video, FileText, Lightbulb, Rocket } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const contentData = {
  "algoritmos": {
    title: "O que são Algoritmos?",
    type: "article" as const,
    category: "Programação",
    thumbnail: "/src/assets/category-programming.jpg",
    description: "Descubra o que são algoritmos e como eles fazem parte do nosso dia a dia!",
    content: {
      intro: "Você sabia que você usa algoritmos todos os dias sem perceber? Um algoritmo é como uma receita de bolo: uma sequência de passos que você segue para chegar a um resultado!",
      sections: [
        {
          icon: "🍪",
          title: "Algoritmo é como uma Receita",
          text: "Imagina que você quer fazer biscoitos. Você precisa seguir alguns passos: pegar os ingredientes, misturar, colocar no forno e esperar. Isso é um algoritmo! Computadores também seguem passos para fazer as coisas."
        },
        {
          icon: "🎮",
          title: "Algoritmos nos Jogos",
          text: "Quando você joga um jogo no celular ou computador, existem algoritmos decidindo o que acontece. Se você pular, um algoritmo calcula para onde seu personagem vai. Se você acertar um inimigo, outro algoritmo conta os pontos!"
        },
        {
          icon: "🤖",
          title: "Por que são importantes?",
          text: "Algoritmos ajudam os computadores a resolver problemas. Desde encontrar o caminho mais rápido no GPS até mostrar os vídeos que você mais gosta no YouTube, tudo usa algoritmos!"
        }
      ],
      activity: {
        title: "Atividade Divertida!",
        description: "Tente criar seu próprio algoritmo! Escreva os passos para escovar os dentes, desde pegar a escova até guardar tudo. Viu? Você acabou de criar um algoritmo da vida real!"
      }
    }
  },
  "criadores-de-jogos": {
    title: "Quem Cria Nossos Jogos?",
    type: "video" as const,
    duration: "15 min",
    category: "Jogos Digitais",
    thumbnail: "/src/assets/category-games.jpg",
    description: "Conheça as pessoas incríveis que criam os jogos que você ama jogar!",
    content: {
      intro: "Já se perguntou quem inventa os jogos que você adora? São pessoas muito criativas chamadas desenvolvedores de jogos, e você também pode se tornar um!",
      sections: [
        {
          icon: "🎨",
          title: "A Equipe de Criação",
          text: "Criar um jogo é trabalho de equipe! Tem designers que desenham os personagens, programadores que fazem tudo funcionar, músicos que criam as trilhas sonoras, e muitas outras pessoas trabalhando juntas."
        },
        {
          icon: "💡",
          title: "Como Tudo Começa",
          text: "Tudo começa com uma ideia! Alguém pensa 'e se fizéssemos um jogo sobre...?' Então a equipe desenha o jogo no papel primeiro, decidindo como vai funcionar e o que vai acontecer."
        },
        {
          icon: "⚡",
          title: "Você Pode Criar Também!",
          text: "Existem ferramentas fáceis que permitem que crianças criem seus próprios jogos! Programas como Scratch, Roblox Studio e outros deixam você criar jogos sem precisar ser um expert."
        }
      ],
      activity: {
        title: "Desafio Criativo!",
        description: "Desenhe seu jogo dos sonhos! Pense: qual seria o personagem principal? O que ele faria? Onde seria a aventura? Desenhe tudo isso no papel. Essa é a primeira etapa para criar um jogo de verdade!"
      }
    }
  },
  "chatgpt": {
    title: "Como Usar ChatGPT e IA",
    type: "article" as const,
    category: "Internet Segura",
    thumbnail: "/src/assets/category-internet.jpg",
    description: "Aprenda a usar inteligência artificial de forma segura e divertida!",
    content: {
      intro: "ChatGPT e outras inteligências artificiais são como assistentes super inteligentes que podem te ajudar a aprender coisas novas. Vamos descobrir como usar de forma segura!",
      sections: [
        {
          icon: "🤖",
          title: "O que é ChatGPT?",
          text: "ChatGPT é um programa de computador que conversa com você! Ele sabe muitas coisas e pode te ajudar a entender assuntos difíceis, criar histórias, fazer perguntas sobre a lição de casa e muito mais."
        },
        {
          icon: "🛡️",
          title: "Usando com Segurança",
          text: "Importante: NUNCA compartilhe informações pessoais com IA, como seu endereço, telefone ou nome completo. Use sempre com a supervisão de um adulto. E lembre-se: a IA pode errar às vezes, então sempre confirme informações importantes."
        },
        {
          icon: "🎓",
          title: "Maneiras Legais de Usar",
          text: "Você pode pedir para a IA explicar coisas difíceis de forma simples, criar histórias divertidas, ajudar com ideias para projetos escolares, ou até aprender programação! É como ter um tutor que está sempre disponível."
        }
      ],
      activity: {
        title: "Experimente!",
        description: "Com a ajuda de um adulto, tente perguntar para uma IA: 'Me explique como funciona a internet usando uma história com animais'. Veja que resposta legal você recebe!"
      }
    }
  },
  "scratch": {
    title: "Introdução à Programação com Scratch",
    type: "video" as const,
    duration: "15 min",
    category: "Programação",
    thumbnail: "/src/assets/category-programming.jpg",
    description: "Aprenda os conceitos básicos de programação de forma visual e divertida",
    content: {
      intro: "Scratch é uma linguagem de programação visual criada especialmente para crianças. É como montar LEGO, mas para criar jogos e animações!",
      sections: [
        {
          icon: "🧩",
          title: "Programação com Blocos",
          text: "No Scratch, você não precisa digitar códigos complicados. Você arrasta blocos coloridos que se encaixam como peças de quebra-cabeça. Cada bloco faz uma coisa diferente: mover, girar, fazer sons..."
        },
        {
          icon: "🎬",
          title: "Crie Animações e Jogos",
          text: "Com Scratch você pode criar histórias animadas, jogos de pegar, jogos de corrida, quiz e muito mais! Você escolhe os personagens (sprites), os cenários e programa tudo do seu jeito."
        },
        {
          icon: "🌟",
          title: "Compartilhe suas Criações",
          text: "Quando terminar seu projeto, você pode compartilhar com amigos e família! Milhões de crianças no mundo todo usam Scratch e compartilham seus projetos na comunidade."
        }
      ],
      activity: {
        title: "Primeiro Projeto!",
        description: "Acesse scratch.mit.edu e crie uma animação simples: faça um gato (sprite padrão) andar pela tela e dizer 'Olá!'. Use os blocos de movimento e fala. É super fácil e divertido!"
      }
    }
  },
  "senhas-seguras": {
    title: "Como Criar Senhas Seguras",
    type: "article" as const,
    category: "Internet Segura",
    thumbnail: "/src/assets/category-internet.jpg",
    description: "Dicas essenciais para proteger suas contas online e navegar com segurança",
    content: {
      intro: "Senhas são como chaves digitais que protegem suas coisas na internet. Vamos aprender a criar senhas super fortes que ninguém consegue adivinhar!",
      sections: [
        {
          icon: "🔐",
          title: "O que é uma Senha Forte?",
          text: "Uma senha forte é como um código secreto impossível de adivinhar. Ela deve ter letras (maiúsculas e minúsculas), números e símbolos. Quanto mais longa e misturada, melhor!"
        },
        {
          icon: "❌",
          title: "Senhas que NUNCA Usar",
          text: "NUNCA use: seu nome, data de nascimento, '123456', 'senha', nome do seu pet. Hackers tentam essas primeiro! Também não use a mesma senha em todos os lugares."
        },
        {
          icon: "✅",
          title: "Dicas para Criar Senhas",
          text: "Use frases que só você entende e transforme em senha. Por exemplo: 'MeuGato3Amarelo!' é bem melhor que 'senha123'. Você também pode usar gerenciadores de senha com ajuda dos pais."
        }
      ],
      activity: {
        title: "Teste suas Senhas!",
        description: "Com um adulto, verifique se suas senhas são fortes. Tente criar uma senha nova usando uma frase secreta que só você conhece. Lembre-se: nunca compartilhe suas senhas com ninguém (exceto seus pais/responsáveis)!"
      }
    }
  },
  "robos-mundo": {
    title: "Robôs que Ajudam o Mundo",
    type: "news" as const,
    category: "Robótica",
    thumbnail: "/src/assets/category-robotics.jpg",
    description: "Conheça robôs incríveis que estão sendo usados para resolver problemas reais",
    content: {
      intro: "Robôs não são só coisas de filmes! Hoje em dia, robôs reais ajudam pessoas, salvam vidas e tornam o mundo melhor. Vamos conhecer alguns deles!",
      sections: [
        {
          icon: "🏥",
          title: "Robôs Médicos",
          text: "Existem robôs que ajudam médicos a fazer cirurgias com mais precisão. Outros robôs levam remédios para pacientes em hospitais. Tem até robôs que ajudam crianças com autismo a aprender e se comunicar melhor!"
        },
        {
          icon: "🌊",
          title: "Robôs de Resgate",
          text: "Quando acontecem desastres como enchentes ou terremotos, robôs podem ir a lugares perigosos onde pessoas não conseguem chegar. Eles procuram sobreviventes e ajudam nas operações de resgate."
        },
        {
          icon: "🌱",
          title: "Robôs Ambientais",
          text: "Robôs especiais limpam oceanos tirando plástico da água. Outros plantam árvores muito mais rápido que humanos. Existem até robôs abelhas que podem ajudar na polinização de plantas!"
        }
      ],
      activity: {
        title: "Invente um Robô!",
        description: "Se você pudesse criar um robô para ajudar o mundo, o que ele faria? Desenhe e escreva sobre seu robô inventor. Que problema ele resolveria? Como ele funcionaria? Seja criativo!"
      }
    }
  }
};

export const ContentPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const content = slug ? contentData[slug as keyof typeof contentData] : null;

  if (!content) {
    navigate("/");
    return null;
  }

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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Início
          </Button>

          <div className="mb-8">
            <img
              src={content.thumbnail}
              alt={content.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="flex items-center gap-1">
                {typeIcons[content.type]}
                {typeLabels[content.type]}
              </Badge>
              <Badge variant="outline">{content.category}</Badge>
              {'duration' in content && content.duration && (
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {content.duration}
                </Badge>
              )}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {content.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {content.content.intro}
            </p>

            <div className="space-y-6 my-8">
              {content.content.sections.map((section, index) => (
                <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-5xl flex-shrink-0">
                        {section.icon}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {section.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {section.text}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    {content.content.activity.title}
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {content.content.activity.description}
                </p>
              </CardContent>
            </Card>

            <div className="flex justify-center pt-8">
              <Button
                size="lg"
                onClick={() => navigate("/")}
                className="gap-2"
              >
                <Rocket className="h-5 w-5" />
                Explorar Mais Conteúdos
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
