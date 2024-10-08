/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState } from "react"
import {
  Award,
  Briefcase,
  Calendar,
  Handshake,
  Lightbulb,
  Mail,
  Phone,
  Settings,
  Star,
  Users,
} from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

export default function BusinessSolutions() {
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
      image: "/assets/psychiatrist.png?height=100&width=100",
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
      image: "/assets/psychologist.png?height=100&width=100",
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
      image: "/assets/neuro.png?height=100&width=100",
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
      image: "/assets/fono.png?height=100&width=100",
    },
  ]

  const successStories = [
    {
      name: "Imperador Sushi",
      type: "Restaurante",
      location: "Campo Mourão, PR",
      story:
        "O Imperador Sushi implementou uma política inovadora de reservas que prioriza famílias e indivíduos com TEA para suas salas acústicas privativas. Esta iniciativa surgiu após uma conversa com nossa plataforma, demonstrando como pequenas mudanças podem ter um grande impacto na inclusão.",
      impact:
        "Aumento nas reservas de famílias com membros autistas, criando um ambiente mais inclusivo e acolhedor.",
      testimonial:
        "A parceria com o NeuroMundo nos abriu os olhos para uma oportunidade de sermos mais inclusivos.",
      image: "/assets/Imperador.png?height=200&width=200",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-primary sm:text-4xl">
        Soluções e Conexões para Autismo
      </h1>

      <Tabs defaultValue="success-stories" className="w-full">
        <TabsList className="mb-6 grid min-h-12 w-full grid-cols-2 bg-slate-400/40">
          <TabsTrigger
            value="success-stories"
            className="px-2 py-1 text-base sm:px-4 sm:py-2 sm:text-sm md:text-base"
          >
            Histórias de Sucesso
          </TabsTrigger>
          <TabsTrigger
            value="specialists"
            className="px-2 py-1 text-base sm:px-4 sm:py-2 sm:text-sm md:text-base"
          >
            Especialistas em TEA
          </TabsTrigger>
        </TabsList>

        <TabsContent value="success-stories">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-accent">
                <Award className="mr-2 size-6 " />
                Histórias de Sucesso: Nossos Parceiros
              </CardTitle>
              <CardDescription className="text-lg">
                Conheça as empresas que estão fazendo a diferença com soluções
                inclusivas para pessoas com TEA.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {successStories.map((story, index) => (
                <Card key={index} className="mb-6">
                  <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                    <Avatar className="size-16">
                      <AvatarImage src={story.image} alt={story.name} />
                      <AvatarFallback>{story.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-2xl">{story.name}</CardTitle>
                      <CardDescription>
                        {story.type} - {story.location}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-base">{story.story}</p>
                    <Alert>
                      <Star className="size-4" />
                      <AlertTitle>Impacto</AlertTitle>
                      <AlertDescription>{story.impact}</AlertDescription>
                    </Alert>
                  </CardContent>
                  <CardFooter>
                    <blockquote className="border-l-2 border-primary pl-4 italic">
                      "{story.testimonial}"
                    </blockquote>
                  </CardFooter>
                </Card>
              ))}
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Handshake className="mr-2 size-4" />
                Torne-se um Parceiro
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="specialists">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-accent">
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
                    className="transition-transform duration-300 ease-in-out hover:scale-105 hover:border-primary"
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
