/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { AnimatedInfoGraphic } from "@/components/animated-info-graphic"

export default function Component() {
  const [visualIntensity, setVisualIntensity] = useState(50)
  const [audioIntensity, setAudioIntensity] = useState(50)
  const [tactileIntensity, setTactileIntensity] = useState(50)

  const navItems = [
    { name: "Sobre", description: "Aprenda sobre TDAH e Autismo" },
    {
      name: "Galeria",
      description: "Perspectivas visuais sobre neurodiversidade",
    },
    {
      name: "Vida Diária",
      description: "Desafios e pontos fortes em situações cotidianas",
    },
    { name: "Acessibilidade", description: "Criando ambientes inclusivos" },
    { name: "Experiência", description: "Simulador sensorial interativo" },
  ]

  const accessibilityStats = [
    { label: "Indivíduos com deficiência", percentage: 15 },
    { label: "Sites totalmente acessíveis", percentage: 2 },
    {
      label: "Aumento no engajamento dos usuários com design acessível",
      percentage: 40,
    },
  ]

  const dailyLifeSchedule = [
    {
      time: "Manhã",
      activities: [
        {
          name: "Acordar",
          challenge: "Dificuldade em fazer a transição do sono para a vigília",
          strength: "Pode ter ideias criativas ao acordar",
        },
        {
          name: "Preparar-se",
          challenge: "Desafios na função executiva ao sequenciar tarefas",
          strength: "Pode desenvolver rotinas únicas e eficientes",
        },
        {
          name: "Deslocamento",
          challenge: "Sobrecarga sensorial em ambientes movimentados",
          strength: "Capacidade de notar detalhes que outros podem ignorar",
        },
      ],
    },
    {
      time: "Tarde",
      activities: [
        {
          name: "Trabalho/Escola",
          challenge: "Manter o foco em tarefas não preferidas",
          strength: "Hiperfoco em assuntos interessantes",
        },
        {
          name: "Intervalo para almoço",
          challenge: "Interações sociais podem ser desgastantes",
          strength: "Aprecia atividades solitárias ou conversas profundas",
        },
        {
          name: "Reuniões",
          challenge: "Processar várias vozes e informações",
          strength: "Oferece perspectivas únicas e soluções criativas",
        },
      ],
    },
    {
      time: "Noite",
      activities: [
        {
          name: "Tarefas domésticas",
          challenge: "Iniciar e concluir afazeres",
          strength: "Explosões de energia para atividades preferidas",
        },
        {
          name: "Tempo livre",
          challenge: "Dificuldade em transitar entre atividades",
          strength: "Envolvimento intenso em hobbies ou interesses",
        },
        {
          name: "Rotina de dormir",
          challenge: "Pensamentos acelerados podem atrasar o sono",
          strength:
            "Reflexão e resolução de problemas durante o tempo de silêncio",
        },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="flex h-14 items-center border-b px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Conscientização sobre Autismo e TDAH</span>
          <svg
            className="size-6 text-primary"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <TooltipProvider>
            {navItems.map((item) => (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <Link
                    className="rounded-md px-2 py-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    href={`#${item.name.toLowerCase().replace(" ", "-")}`}
                  >
                    {item.name}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
      </header>
      <main className="flex-1">
        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              Compreendendo o TDAH e o Autismo
            </h2>
            <Tabs defaultValue="adhd" className="w-full">
              <TabsList className="mb-4 grid w-full grid-cols-2">
                <TabsTrigger value="adhd" className="text-lg font-semibold">
                  TDAH
                </TabsTrigger>
                <TabsTrigger value="autismo" className="text-lg font-semibold">
                  Autismo
                </TabsTrigger>
              </TabsList>
              <TabsContent value="adhd">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-2xl font-bold text-primary">
                      TDAH
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      O Transtorno de Déficit de Atenção e Hiperatividade (TDAH)
                      é um transtorno do neurodesenvolvimento caracterizado por
                      desatenção, hiperatividade e impulsividade. Afeta tanto
                      crianças quanto adultos, impactando foco, organização e
                      autorregulação.
                    </p>
                    <Badge variant="secondary">Neurodiversidade</Badge>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="autismo">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-2xl font-bold text-primary">
                      Autismo
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      O Transtorno do Espectro Autista (TEA) é uma condição
                      complexa de desenvolvimento que envolve desafios na
                      interação social, comunicação e comportamentos restritos
                      ou repetitivos. É um espectro, o que significa que afeta
                      os indivíduos de forma diferente e em vários graus.
                    </p>
                    <Badge variant="secondary">Espectro</Badge>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section
          id="galeria"
          className="w-full bg-muted py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              Perspectivas Visuais
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  text: "Criança com TDAH concentrando-se em uma tarefa",
                  image: "/assets/image.png?height=300&width=400",
                },
                {
                  text: "Adulto com Autismo envolvido em um interesse especial",
                  image: "/assets/image.png?height=300&width=400",
                },
                {
                  text: "Símbolos de conscientização sobre TDAH e Autismo",
                  image: "/assets/image.png?height=300&width=400",
                },
                {
                  text: "Ambiente sensorialmente amigável para indivíduos com Autismo",
                  image: "/assets/image.png?height=300&width=400",
                },
                {
                  text: "Visualização de estratégias de enfrentamento para TDAH",
                  image: "/assets/image.png?height=300&width=400",
                },
                {
                  text: "Sala de aula inclusiva para estudantes neurodiversos",
                  image: "/assets/image.png?height=300&width=400",
                },
              ].map((caption, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-shadow hover:shadow-lg"
                >
                  <CardContent className="p-4">
                    <Image
                      alt={caption.text}
                      className="mb-4 aspect-video rounded-lg object-cover"
                      height="300"
                      src={caption.image}
                      width="400"
                    />
                    <p className="text-sm text-muted-foreground">
                      {caption.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="vida-diária" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              TDAH e Autismo na Vida Diária
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Experimente um dia na vida de indivíduos com TDAH e Autismo.
              Explore os desafios únicos e os pontos fortes que vêm com a
              neurodiversidade em situações cotidianas.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {dailyLifeSchedule.map((timeBlock, index) => (
                <AccordionItem value={timeBlock.time.toLowerCase()} key={index}>
                  <AccordionTrigger className="text-xl font-semibold">
                    {timeBlock.time}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-4">
                      {timeBlock.activities.map((activity, activityIndex) => (
                        <Card key={activityIndex}>
                          <CardContent className="p-4">
                            <h4 className="mb-2 text-lg font-semibold">
                              {activity.name}
                            </h4>
                            <div className="grid gap-2">
                              <div>
                                <span className="font-medium text-primary">
                                  Desafio:{" "}
                                </span>
                                <span className="text-muted-foreground">
                                  {activity.challenge}
                                </span>
                              </div>
                              <div>
                                <span className="font-medium text-primary">
                                  Ponto forte:{" "}
                                </span>
                                <span className="text-muted-foreground">
                                  {activity.strength}
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section
          id="acessibilidade"
          className="w-full bg-muted py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              Acessibilidade para TDAH e Autismo
            </h2>

            <div className="mb-12 grid gap-8 md:grid-cols-3">
              {accessibilityStats.map((stat, index) => (
                <AnimatedInfoGraphic
                  key={index}
                  label={stat.label}
                  percentage={stat.percentage}
                />
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  title: "Adaptações Ambientais",
                  items: [
                    "Espaços silenciosos para foco e pausas sensoriais",
                    "Iluminação e níveis de som ajustáveis",
                    "Sinalização clara e horários visuais",
                    "Ferramentas de inquietação e itens de conforto",
                  ],
                },
                {
                  title: "Suporte à Comunicação",
                  items: [
                    "Dispositivos de comunicação alternativa e aumentativa (CAA)",
                    "Ajudas visuais e histórias sociais",
                    "Instruções claras e concisas",
                    "Paciência e compreensão nas interações",
                  ],
                },
                {
                  title: "Práticas Inclusivas",
                  items: [
                    "Prazos flexíveis e arranjos de trabalho",
                    "Rotinas estruturadas com intervalos incorporados",
                    "Tecnologia assistiva e ferramentas organizacionais",
                    "Treinamento sobre neurodiversidade para colegas",
                  ],
                },
              ].map((category, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-bold text-primary">
                      {category.title}
                    </h3>
                    <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="experiência" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              Simulador Interativo de Experiência Sensorial
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Ajuste os controles deslizantes abaixo para simular diferentes
              experiências sensoriais que indivíduos com TDAH ou Autismo podem
              enfrentar. Esta ferramenta interativa visa promover compreensão e
              empatia.
            </p>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">
                    Sensibilidade Visual
                  </h3>
                  <Slider
                    value={[visualIntensity]}
                    onValueChange={(value) => setVisualIntensity(value[0])}
                    max={100}
                    step={1}
                    className="mb-4"
                  />
                  <div
                    className="mb-4 h-40 w-full overflow-hidden rounded-md"
                    style={{
                      background: `repeating-linear-gradient(
                        45deg,
                        hsl(0, 0%, ${100 - visualIntensity}%),
                        hsl(0, 0%, ${100 - visualIntensity}%) 10px,
                        hsl(0, 0%, ${Math.max(
                          0,
                          100 - visualIntensity - 10
                        )}%) 10px,
                        hsl(0, 0%, ${Math.max(
                          0,
                          100 - visualIntensity - 10
                        )}%) 20px
                      )`,
                      animation: `flicker ${101 - visualIntensity}ms infinite`,
                    }}
                  ></div>
                  <p className="text-sm text-muted-foreground">
                    Isso simula sensibilidades visuais a padrões e luzes
                    piscando. Estratégia de enfrentamento: Use iluminação
                    natural ou lâmpadas de cor quente e minimize padrões no
                    ambiente.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">
                    Sensibilidade Auditiva
                  </h3>
                  <Slider
                    value={[audioIntensity]}
                    onValueChange={(value) => setAudioIntensity(value[0])}
                    max={100}
                    step={1}
                    className="mb-4"
                  />
                  <Button
                    onClick={() => {
                      const audio = new Audio("/audio/white-noise.MP3")
                      audio.volume = audioIntensity / 100
                      audio.play()
                    }}
                    className="mb-4 w-full"
                  >
                    Reproduzir Som de Exemplo
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Isso simula sensibilidades auditivas ao ruído de fundo.
                    Estratégia de enfrentamento: Use fones de ouvido com
                    cancelamento de ruído ou crie zonas silenciosas em espaços
                    de convivência e trabalho.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">
                    Sensibilidade Tátil
                  </h3>
                  <Slider
                    value={[tactileIntensity]}
                    onValueChange={(value) => setTactileIntensity(value[0])}
                    max={100}
                    step={1}
                    className="mb-4"
                  />
                  <div
                    className="mb-4 flex h-40 w-full items-center justify-center overflow-hidden rounded-md bg-primary/10"
                    style={{
                      boxShadow: `inset 0 0 ${tactileIntensity}px 0 rgba(0,0,0,0.5)`,
                    }}
                  >
                    <span
                      className="select-none text-4xl"
                      style={{ filter: `blur(${tactileIntensity / 10}px)` }}
                    >
                      Toque
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Isso representa sensibilidades táteis a texturas e toques.
                    Estratégia de enfrentamento: Escolha materiais de vestuário
                    confortáveis e esteja atento às texturas no ambiente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-muted-foreground">
          © 2024 Conscientização sobre Autismo e TDAH. Todos os direitos
          reservados.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            className="text-xs transition-colors hover:text-primary"
            href="#"
          >
            Termos de Serviço
          </Link>
          <Link
            className="text-xs transition-colors hover:text-primary"
            href="#"
          >
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  )
}
