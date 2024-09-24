/* eslint-disable react/no-unescaped-entities */
"use client"

import { createElement, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  AlarmClock,
  HeartHandshake,
  Moon,
  PuzzleIcon,
  Ribbon,
  SunMedium,
} from "lucide-react"

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
import { AnimatedInfoGraphic } from "@/components/animated-info-graphic"

export default function Component() {
  const [visualIntensity, setVisualIntensity] = useState(50)
  const [audioIntensity, setAudioIntensity] = useState(50)
  const [tactileIntensity, setTactileIntensity] = useState(50)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const getSensitivityLabel = (intensity: number) => {
    if (intensity < 33) return "Baixa"
    if (intensity < 66) return "Normal"
    return "Alta"
  }

  const accessibilityStats = [
    { label: "Indivíduos com TDAH ou Autismo no mundo", percentage: 15 },
    { label: "Sites totalmente acessíveis", percentage: 2 },
    {
      label: "Aumento no engajamento dos usuários com design acessível",
      percentage: 40,
    },
  ]

  const dailyLifeSchedule = [
    {
      icon: AlarmClock,
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
      icon: SunMedium,
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
      icon: Moon,
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

  const handleAudioToggle = () => {
    if (isPlaying) {
      audioRef.current?.pause()
      audioRef.current!.currentTime = 0
      setIsPlaying(false)
    } else {
      audioRef.current = new Audio("/audio/white-noise.MP3")
      audioRef.current.volume = audioIntensity / 100
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1">
        <section
          id="sobre"
          className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32"
        >
          <div className="absolute -left-16 bottom-10 hidden rotate-12 md:block">
            <PuzzleIcon className="size-96 fill-blue-700 stroke-blue-500 opacity-65" />
          </div>
          <div className="absolute -right-24 top-10 hidden rotate-90 md:block">
            <PuzzleIcon className="size-64 fill-yellow-400 stroke-yellow-600 opacity-65 lg:size-96" />
          </div>
          <div className="absolute inset-0 bg-[url('/assets/puzzle-background.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="container relative px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter text-primary sm:text-6xl md:text-6xl">
              Compreendendo o TDAH e o Autismo
            </h2>
            <Tabs defaultValue="adhd" className="w-full">
              <TabsList className="mb-4 grid w-full grid-cols-2">
                <TabsTrigger
                  value="adhd"
                  className="text-xl font-semibold md:text-2xl"
                >
                  TDAH
                </TabsTrigger>
                <TabsTrigger
                  value="autismo"
                  className="text-xl font-semibold md:text-2xl"
                >
                  Autismo
                </TabsTrigger>
              </TabsList>
              <TabsContent value="adhd">
                <Card>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="mb-4 text-3xl font-bold text-primary md:text-3xl">
                      TDAH
                    </h3>
                    <p className="mb-4 text-lg text-muted-foreground md:text-xl">
                      O Transtorno de Déficit de Atenção e Hiperatividade (TDAH)
                      é um transtorno neurológico que afeta milhões de pessoas
                      em todo o mundo, tanto crianças quanto adultos.
                      Caracterizado por dificuldades em manter a atenção,
                      hiperatividade e comportamento impulsivo, o TDAH pode
                      interferir nas atividades diárias e nas interações
                      sociais. No entanto, com o diagnóstico adequado e
                      estratégias de manejo, como a terapia comportamental e, em
                      alguns casos, medicação, é possível melhorar
                      significativamente a qualidade de vida dos indivíduos que
                      convivem com o transtorno.
                    </p>
                    <Badge variant="secondary" className="text-sm">
                      Neurodiversidade
                    </Badge>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="autismo">
                <Card>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="mb-4 text-3xl font-bold text-secondary md:text-3xl">
                      Autismo
                    </h3>
                    <p className="mb-4 text-lg text-muted-foreground md:text-xl">
                      O Transtorno do Espectro Autista (TEA) é uma condição
                      complexa do neurodesenvolvimento que envolve desafios em
                      três áreas principais: interação social, comunicação e
                      comportamentos restritivos ou repetitivos. O autismo é
                      chamado de "espectro" porque os sintomas podem variar
                      muito em tipo e gravidade. Alguns indivíduos apresentam
                      grandes habilidades em áreas específicas, enquanto outros
                      podem precisar de mais suporte no dia a dia. Com
                      intervenções precoces e adequadas, é possível promover
                      maior independência e qualidade de vida para pessoas
                      dentro do espectro.
                    </p>
                    <Badge variant="secondary" className="text-sm">
                      Espectro
                    </Badge>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section
          id="galeria"
          className="relative w-full overflow-hidden bg-muted py-12 md:py-24 lg:py-32"
        >
          <div className="absolute -right-24 top-10 z-0 rotate-90">
            <PuzzleIcon className="hidden size-96 fill-red-400 stroke-red-600 opacity-65 md:block" />
          </div>

          <div className="rotate absolute -left-24 bottom-10 z-0">
            <HeartHandshake className="hidden size-96 fill-cyan-400 stroke-cyan-600  opacity-65 md:block" />
          </div>
          <div className="container relative z-20 px-4 md:px-6">
            <h2 className="mb-8 text-4xl font-bold tracking-tighter text-accent sm:text-6xl md:text-6xl">
              Perspectivas Visuais
            </h2>
            <div className="z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  text: "Criança com TDAH concentrando-se em uma tarefa",
                  image: "/assets/TDAH1.jpg?height=300&width=400",
                },
                {
                  text: "Ferramentas interativas para melhorar a concentração em crianças com TDAH",
                  image: "/assets/TDAH2.jpg?height=300&width=400",
                },
                {
                  text: "Símbolos de conscientização sobre TDAH e Autismo",
                  image: "/assets/autismo2.png?height=300&width=400",
                },
                {
                  text: "Ambiente sensorialmente amigável para indivíduos com Autismo",
                  image: "/assets/autismo3.png?height=300&width=400",
                },
                {
                  text: "Adulto com Autismo envolvido em um interesse especial",
                  image: "/assets/autismo1.png?height=300&width=400",
                },
                {
                  text: "Sala de aula inclusiva para estudantes neurodiversos",
                  image: "/assets/neuro1.jpg?height=300&width=400",
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
                    <p className="text-base text-muted-foreground sm:text-lg md:text-xl">
                      {caption.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id="vida-diária"
          className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32"
        >
          <div className="rotate absolute -top-10 right-0 translate-x-1/4">
            <Ribbon className="hidden size-[800px] text-yellow-500 opacity-25 md:block " />
          </div>
          <div className="absolute inset-0 bg-[url('/assets/daily-life-background.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="container relative px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter text-secondary sm:text-6xl md:text-6xl">
              <span className="text-secondary">TDAH</span> e Autismo na Vida
              Diária
            </h2>
            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              Experimente um dia na vida de indivíduos com TDAH e Autismo.
              Explore os desafios únicos e os pontos fortes que vêm com a
              neurodiversidade em situações cotidianas.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {dailyLifeSchedule.map((timeBlock, index) => (
                <AccordionItem value={timeBlock.time.toLowerCase()} key={index}>
                  <AccordionTrigger className="flex w-full items-center justify-start gap-3 text-2xl font-semibold md:text-3xl [&[data-state=open]>svg]:rotate-0">
                    {createElement(timeBlock.icon, { className: "size-8" })}{" "}
                    {timeBlock.time}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-4">
                      {timeBlock.activities.map((activity, activityIndex) => (
                        <Card key={activityIndex}>
                          <CardContent className="p-4">
                            <h4 className="mb-2 text-xl font-semibold md:text-2xl">
                              {activity.name}
                            </h4>
                            <div className="grid gap-2">
                              <div>
                                <span className="font-medium text-primary md:text-xl">
                                  Desafio:{" "}
                                </span>
                                <span className="text-sm text-muted-foreground md:text-xl">
                                  {activity.challenge}
                                </span>
                              </div>
                              <div>
                                <span className="font-medium text-accent md:text-xl">
                                  Ponto forte:{" "}
                                </span>
                                <span className="text-sm text-muted-foreground md:text-xl">
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
            <h2 className="mb-8 text-3xl font-bold tracking-tighter text-primary sm:text-6xl md:text-6xl">
              Acessibilidade para TDAH e Autismo
            </h2>

            <div className="mb-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {accessibilityStats.map((stat, index) => (
                <AnimatedInfoGraphic
                  key={index}
                  label={stat.label}
                  percentage={stat.percentage}
                />
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
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
                <Card
                  key={index}
                  className="transition-all duration-300 ease-in-out hover:scale-105 hover:border-2 hover:border-primary/50 hover:shadow-lg"
                >
                  <CardContent className="p-4 md:p-6">
                    <h3 className="mb-4 text-2xl font-bold text-secondary md:text-3xl">
                      {category.title}
                    </h3>
                    <ul className="list-disc space-y-2 pl-6 text-base text-muted-foreground md:text-xl">
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
        <section
          id="experiência"
          className="relative w-full py-12 md:py-24 lg:py-32"
        >
          <div className="absolute inset-0 bg-[url('/assets/sensory-background.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="container relative px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter text-secondary sm:text-6xl md:text-6xl">
              Simulador Interativo de Experiência Sensorial
            </h2>
            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              Ajuste os controles deslizantes abaixo para simular diferentes
              experiências sensoriais que indivíduos com TDAH ou Autismo podem
              enfrentar. Esta ferramenta interativa visa promover compreensão e
              empatia.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="p-4 md:p-6">
                  <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
                    Sensibilidade Visual
                  </h3>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-base">Baixa</span>
                    <span className="text-base">Normal</span>
                    <span className="text-base">Alta</span>
                  </div>
                  <Slider
                    value={[visualIntensity]}
                    onValueChange={(value) => setVisualIntensity(value[0])}
                    max={100}
                    step={1}
                    className="mb-4 cursor-pointer"
                    aria-label="Ajustar intensidade visual"
                  />
                  <div className="mb-4 text-center text-lg font-semibold">
                    Sensibilidade: {getSensitivityLabel(visualIntensity)}
                  </div>
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
                  <p className="text-base text-muted-foreground md:text-base">
                    Isso simula sensibilidades visuais a padrões e luzes
                    piscando. Dica: Use iluminação natural ou lâmpadas de cor
                    quente e minimize padrões no ambiente.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 md:p-6">
                  <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
                    Sensibilidade Auditiva
                  </h3>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-base">Baixa</span>
                    <span className="text-base">Normal</span>
                    <span className="text-base">Alta</span>
                  </div>
                  <Slider
                    value={[audioIntensity]}
                    onValueChange={(value) => setAudioIntensity(value[0])}
                    max={100}
                    step={1}
                    className="mb-4 cursor-pointer"
                    aria-label="Ajustar intensidade auditiva"
                  />
                  <div className="mb-4 text-center text-lg font-semibold">
                    Sensibilidade: {getSensitivityLabel(audioIntensity)}
                  </div>
                  <Button
                    onClick={handleAudioToggle}
                    className={`mb-4 w-full ${
                      isPlaying ? "bg-stop text-white hover:bg-stopHover" : ""
                    }`}
                  >
                    {isPlaying ? "Parar Som" : "Reproduzir Som de Exemplo"}
                  </Button>
                  <p className="text-base text-muted-foreground md:text-base">
                    Isso simula sensibilidades auditivas ao ruído de fundo.
                    Dica: Use fones de ouvido com cancelamento de ruído ou crie
                    zonas silenciosas em espaços de convivência e trabalho.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 md:p-6">
                  <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
                    Sensibilidade Tátil
                  </h3>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-base">Baixa</span>
                    <span className="text-base">Normal</span>
                    <span className="text-base">Alta</span>
                  </div>
                  <Slider
                    value={[tactileIntensity]}
                    onValueChange={(value) => setTactileIntensity(value[0])}
                    max={100}
                    step={1}
                    className="mb-4 cursor-pointer"
                    aria-label="Ajustar intensidade tátil"
                  />
                  <div className="mb-4 text-center text-lg font-semibold">
                    Sensibilidade: {getSensitivityLabel(tactileIntensity)}
                  </div>
                  <div
                    className="mb-4 flex h-40 w-full items-center justify-center overflow-hidden rounded-md bg-accent/10"
                    style={{
                      boxShadow: `inset 0 0 ${tactileIntensity}px 0 rgba(0,0,0,0.5)`,
                    }}
                  >
                    <span
                      className="select-none text-3xl md:text-6xl"
                      style={{ filter: `blur(${tactileIntensity / 10}px)` }}
                    >
                      Toque
                    </span>
                  </div>
                  <p className="text-base text-muted-foreground md:text-base">
                    Isso representa sensibilidades táteis a texturas e toques.
                    Dica: Escolha materiais de vestuário confortáveis e esteja
                    atento às texturas no ambiente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-muted-foreground">
          © 2024 NeuroMundo. Todos os direitos reservados.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            className="text-xs transition-colors hover:text-primary"
            target="_blank"
            href="https://espacocinthiafranca.com.br/diferencas-entre-autismo-e-tdah/"
          >
            Saiba mais
          </Link>
        </nav>
      </footer>
    </div>
  )
}
