"use client"

import { useState } from "react"
import {
  Briefcase,
  Calendar,
  Lightbulb,
  Mail,
  Phone,
  Settings,
  Star,
  Users,
} from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ProductSection } from "./product-solution"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function BusinessSolutions() {
  const businessExamples = [
    {
      name: "Auticon",
      description:
        "Empresa de consultoria de TI que emprega consultores no espectro autista.",
      implementation:
        "Oferece ambiente de trabalho adaptado e suporte contínuo aos funcionários autistas.",
      impact:
        "Mais de 300 consultores autistas empregados em projetos de TI de alto nível.",
      link: "https://auticon.com",
    },
    {
      name: "Microsoft Autism Hiring Program",
      description:
        "Programa de contratação específico para candidatos autistas.",
      implementation:
        "Processo de entrevista adaptado, incluindo um evento de avaliação de 5 dias.",
      impact:
        "Contratação de dezenas de funcionários autistas em várias funções na Microsoft.",
      link: "https://www.microsoft.com/en-us/diversity/inside-microsoft/cross-disability/neurodiversityhiring",
    },
    {
      name: "SAP Autism at Work",
      description:
        "Iniciativa para integrar pessoas autistas na força de trabalho da SAP.",
      implementation:
        "Parcerias com organizações especializadas para recrutamento e suporte.",
      impact:
        "Meta de 1% da força de trabalho composta por pessoas autistas alcançada.",
      link: "https://www.sap.com/corporate/en/company/diversity/differently-abled.html",
    },
    {
      name: "Specialisterne",
      description:
        "Organização global que ajuda empresas a contratar e reter talentos autistas.",
      implementation:
        "Oferece treinamento, consultoria e suporte para empresas e candidatos autistas.",
      impact:
        "Milhares de empregos criados para pessoas autistas em todo o mundo.",
      link: "https://specialisterne.com",
    },
  ]

  const specialists = [
    {
      name: "Dra. Maria Silva",
      specialty: "Psiquiatra Especialista em Autismo",
      description:
        "Com mais de 15 anos de experiência no diagnóstico e tratamento de TEA em adultos.",
      availability: "Segundas e Quartas",
      contact: {
        phone: "(44) 9999-8888",
        email: "maria.silva@example.com",
      },
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Dr. João Santos",
      specialty: "Neuropsicólogo",
      description:
        "Especializado em avaliação cognitiva e intervenções comportamentais para indivíduos com TEA.",
      availability: "Terças e Quintas",
      contact: {
        phone: "(44) 7777-6666",
        email: "joao.santos@example.com",
      },
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Profa. Ana Oliveira",
      specialty: "Terapeuta Ocupacional",
      description:
        "Foco em integração sensorial e habilidades da vida diária para pessoas no espectro autista.",
      availability: "Quartas e Sextas",
      contact: {
        phone: "(44) 5555-4444",
        email: "ana.oliveira@example.com",
      },
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Dr. Carlos Mendes",
      specialty: "Fonoaudiólogo",
      description:
        "Especialista em comunicação alternativa e aumentativa para indivíduos com TEA.",
      availability: "Segundas e Quintas",
      contact: {
        phone: "(44) 3333-2222",
        email: "carlos.mendes@example.com",
      },
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-primary sm:text-4xl">
        Soluções e Conexões para Autismo
      </h1>

      <Tabs defaultValue="specialists" className="w-full">
        <TabsList className="mb-6 grid min-h-12 w-full grid-cols-2 bg-slate-400/40">
          <TabsTrigger
            value="specialists"
            className="px-2 py-1 text-base sm:px-4 sm:py-2 sm:text-sm md:text-base"
          >
            Especialistas em TEA
          </TabsTrigger>
          <TabsTrigger
            value="businesses"
            className="px-2 py-1 text-base sm:px-4 sm:py-2 sm:text-sm md:text-base"
          >
            Negócios Inclusivos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="businesses">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="mr-2 size-6" />
                Exemplos de Negócios Inclusivos
              </CardTitle>
              <CardDescription className="text-lg">
                Empresas e iniciativas que estão liderando a inclusão de pessoas
                autistas no mercado de trabalho.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {businessExamples.map((example, index) => (
                    <CarouselItem
                      key={index}
                      className="sm:basis-1/2 md:basis-1/3"
                    >
                      <Card className="flex h-full flex-col justify-between">
                        <CardHeader>
                          <CardTitle>{example.name}</CardTitle>
                          <CardDescription className="text-base">
                            {example.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-2">
                            <strong>Implementação:</strong>{" "}
                            {example.implementation}
                          </p>
                          <p>
                            <strong>Impacto:</strong> {example.impact}
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button asChild className="w-full sm:w-auto">
                            <a
                              href={example.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Saiba mais
                            </a>
                          </Button>
                        </CardFooter>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
              </Carousel>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="specialists">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Users className="mr-2 size-6" />
                Conecte-se com Especialistas em TEA
              </CardTitle>
              <CardDescription className="text-lg">
                Encontre profissionais especializados para apoiar sua jornada
                com o Transtorno do Espectro Autista.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {specialists.map((specialist, index) => (
                  <Card
                    key={index}
                    className="transition-all hover:scale-105 hover:border-primary"
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage
                            src={specialist.image}
                            alt={specialist.name}
                          />
                          <AvatarFallback>
                            {specialist.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle>{specialist.name}</CardTitle>
                          <CardDescription>
                            {specialist.specialty}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">{specialist.description}</p>
                      <div className="flex items-center space-x-2">
                        <Calendar className="size-4" />
                        <span>{specialist.availability}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" className="flex items-center">
                        <Phone className="mr-2 size-4" />
                        {specialist.contact.phone}
                      </Button>
                      <Button variant="outline" className="flex items-center">
                        <Mail className="mr-2 size-4" />
                        Enviar e-mail
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Alert>
                <AlertTitle>Como funciona</AlertTitle>
                <AlertDescription>
                  Entre em contato conosco para agendar uma consulta com
                  qualquer um desses especialistas. Nós facilitamos a conexão e
                  garantimos um atendimento personalizado para suas
                  necessidades.
                </AlertDescription>
              </Alert>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <ProductSection />
    </div>
  )
}
