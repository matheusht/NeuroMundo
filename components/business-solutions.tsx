"use client"

import { useState } from "react"
import { Briefcase, Lightbulb, Settings, Star, Users } from "lucide-react"

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

  const workplaceExamples = [
    {
      company: "JPMorgan Chase",
      initiative: "Autism at Work Program",
      description:
        "Programa abrangente de inclusão para funcionários autistas.",
      implementation: [
        "Processo de recrutamento adaptado",
        "Treinamento de sensibilização para equipes",
        "Mentoria personalizada",
        "Adaptações no ambiente de trabalho",
      ],
      impact: "Aumento na retenção e satisfação dos funcionários autistas.",
      link: "https://www.jpmorganchase.com/impact/people/autism-at-work",
    },
    {
      company: "EY (Ernst & Young)",
      initiative: "Neurodiversity Centers of Excellence",
      description:
        "Centros especializados que aproveitam as habilidades únicas de profissionais neurodiversos.",
      implementation: [
        "Recrutamento focado em habilidades específicas",
        "Ambiente de trabalho adaptado",
        "Suporte contínuo de gerentes treinados",
        "Oportunidades de desenvolvimento de carreira",
      ],
      impact: "Aumento na inovação e eficiência em projetos complexos.",
      link: "https://www.ey.com/en_us/diversity-inclusiveness/how-neurodiversity-is-driving-innovation-from-unexpected-places",
    },
    {
      company: "Dell Technologies",
      initiative: "Neurodiversity Hiring Program",
      description:
        "Programa de contratação e integração para candidatos neurodiversos.",
      implementation: [
        "Parcerias com organizações especializadas",
        "Processo de entrevista adaptado",
        "Treinamento de liderança inclusiva",
        "Grupos de recursos para funcionários neurodiversos",
      ],
      impact:
        "Aumento na diversidade da força de trabalho e na resolução criativa de problemas.",
      link: "https://jobs.dell.com/neurodiversity",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-center text-3xl font-bold sm:text-4xl">
        Soluções Empresariais para Inclusão de Autistas
      </h1>

      <Tabs defaultValue="businesses" className="w-full">
        <TabsList className="mb-6 grid min-h-12 w-full grid-cols-2 bg-slate-400/40">
          <TabsTrigger
            value="businesses"
            className="px-2 py-1 text-base sm:px-4 sm:py-2 sm:text-sm md:text-base"
          >
            Negócios Inclusivos
          </TabsTrigger>
          <TabsTrigger
            value="workplace"
            className="px-2 py-1 text-base sm:px-4 sm:py-2 sm:text-sm md:text-base"
          >
            Melhorias no Trabalho
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
              <Carousel
                className="w-full"
                opts={{
                  loop: true,
                }}
              >
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
            <CardFooter>
              <Alert>
                <AlertTitle>Observação</AlertTitle>
                <AlertDescription>
                  Estas empresas demonstram que a inclusão de pessoas autistas
                  não é apenas uma responsabilidade social, mas também uma
                  vantagem competitiva.
                </AlertDescription>
              </Alert>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="workplace">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="mr-2 size-6" />
                Exemplos de Melhorias no Ambiente de Trabalho
              </CardTitle>
              <CardDescription className="text-base">
                Iniciativas reais de empresas para tornar o ambiente de trabalho
                mais inclusivo para funcionários autistas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {workplaceExamples.map((example, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{example.company}</CardTitle>
                      <CardDescription className="text-base">
                        {example.initiative}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">{example.description}</p>
                      <strong>Implementação:</strong>
                      <ul className="mb-2 list-disc pl-5">
                        {example.implementation.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
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
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Inclusão</Badge>
                <Badge variant="outline">Neurodiversidade</Badge>
                <Badge variant="outline">Inovação</Badge>
                <Badge variant="outline">Adaptação</Badge>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
