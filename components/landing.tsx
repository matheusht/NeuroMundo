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
import { NeurodiversityAssessment } from "@/components/neurodiversity"

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
    {
      label: "Indivíduos com Autismo no mundo",
      percentage: 1,
      color: "#60A5FA",
    },
    { label: "Sites totalmente acessíveis", percentage: 2, color: "#34D399" },
    {
      label: "Aumento no engajamento dos usuários com design acessível",
      percentage: 40,
      color: "#F472B6",
    },
  ]

  const dailyLifeSchedule = [
    {
      icon: AlarmClock,
      time: "Manhã",
      activities: [
        {
          name: "Acordar",
          challenge: "Dificuldade com mudanças na rotina",
          strength: "Capacidade de seguir rotinas estruturadas",
        },
        {
          name: "Deslocamento",
          challenge: "Ansiedade em ambientes novos ou movimentados",
          strength: "Observação aguçada do ambiente",
        },
      ],
    },
    {
      icon: SunMedium,
      time: "Tarde",
      activities: [
        {
          name: "Trabalho/Escola",
          challenge: "Dificuldades na comunicação social",
          strength: "Foco intenso em áreas de interesse",
        },
        {
          name: "Intervalo para almoço",
          challenge: "Interações sociais podem ser desgastantes",
          strength: "Aprecia atividades solitárias ou conversas profundas",
        },
      ],
    },
    {
      icon: Moon,
      time: "Noite",
      activities: [
        {
          name: "Tempo livre",
          challenge: "Dificuldade em lidar com tempo não estruturado",
          strength: "Engajamento profundo em interesses especiais",
        },
        {
          name: "Rotina de dormir",
          challenge: "Ansiedade e dificuldades para relaxar",
          strength: "Capacidade de criar e seguir rotinas relaxantes",
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
        {/* <section
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
              Compreendendo o Autismo
            </h2>
            <Tabs defaultValue="adhd" className="size-full">
              <TabsList className="grid size-full min-h-14 grid-cols-2 bg-slate-400/40">
                <TabsTrigger
                  value="adhd"
                  className="text-xl font-semibold md:text-2xl "
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
        </section> */}
        <section className="relative w-full overflow-hidden bg-background py-12 md:py-24 lg:py-32">
          <div className="absolute -left-16 bottom-10 hidden rotate-12 md:block">
            <PuzzleIcon className="size-96 fill-blue-700 stroke-blue-500 opacity-65" />
          </div>
          <div className="absolute -right-24 top-10 hidden rotate-90 md:block">
            <PuzzleIcon className="size-64 fill-yellow-400 stroke-yellow-600 opacity-65 lg:size-96" />
          </div>
          <div className="container relative px-4 md:px-6">
            <h1 className="mb-4 text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
              Compreendendo o Autismo
            </h1>

            <Card className="mb-8 bg-cyan-500 text-primary-foreground">
              <CardContent className="p-6">
                <h2 className="mb-2 text-2xl font-semibold">
                  Objetivo do NeuroMundo
                </h2>
                <p className="text-lg">
                  O NeuroMundo é dedicado a informar sobre o Transtorno do
                  Espectro Autista (TEA) e oferecer soluções inovadoras para
                  empresas que buscam criar ambientes mais inclusivos. Nosso
                  objetivo é conectar, educar e transformar a percepção sobre o
                  autismo na sociedade e no ambiente de trabalho.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <h2 className="mb-4 text-3xl font-bold text-primary">
                  O que é Autismo?
                </h2>
                <p className="text-lg text-card-foreground">
                  O Transtorno do Espectro Autista (TEA) é uma condição de
                  neurodesenvolvimento que afeta a comunicação, interação social
                  e comportamento. Cada pessoa com autismo é única, com seus
                  próprios pontos fortes e desafios. O autismo é caracterizado
                  por:
                </p>
                <ul className="mt-4 list-inside list-disc text-card-foreground">
                  <li>Diferenças na comunicação e interação social</li>
                  <li>Padrões repetitivos de comportamento ou interesses</li>
                  <li>Sensibilidades sensoriais únicas</li>
                  <li>
                    Forças em áreas como atenção aos detalhes e pensamento
                    lógico
                  </li>
                </ul>
              </CardContent>
            </Card>
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
              Curiosidades e Características
            </h2>
            <div className="z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  text: "Adulto com Autismo envolvido em um interesse especial",
                  image: "/assets/autismo1.png?height=300&width=400",
                },

                {
                  text: "Símbolos de conscientização sobre Autismo",
                  image: "/assets/autismo2.png?height=300&width=400",
                },
                {
                  text: "Ambiente sensorialmente amigável para indivíduos com Autismo",
                  image: "/assets/autismo3.png?height=300&width=400",
                },

                {
                  text: "Ferramentas interativas para melhorar a concentração em crianças com TDAH",
                  image: "/assets/TDAH2.jpg?height=300&width=400",
                },
                {
                  text: "Criança com TDAH concentrando-se em uma tarefa",
                  image: "/assets/TDAH1.jpg?height=300&width=400",
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
              Autismo na Vida Diária
            </h2>
            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              Experimente um dia na vida de indivíduos com Autismo. Explore os
              desafios únicos e os pontos fortes que vêm com a neurodiversidade
              em situações cotidianas.
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
          className="color w-full bg-muted py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter text-primary sm:text-6xl md:text-6xl">
              Acessibilidade para Autismo
            </h2>

            <div className="mb-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {accessibilityStats.map((stat, index) => (
                <AnimatedInfoGraphic
                  key={index}
                  label={stat.label}
                  percentage={stat.percentage}
                  color={stat.color}
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
              Simulador de Experiência Sensorial
            </h2>
            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              Ajuste os controles deslizantes abaixo para simular diferentes
              experiências sensoriais que indivíduos com Autismo podem
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
        <NeurodiversityAssessment />
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
