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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

export default function Component() {
  const [visualIntensity, setVisualIntensity] = useState(50)
  const [audioIntensity, setAudioIntensity] = useState(50)
  const [tactileIntensity, setTactileIntensity] = useState(50)

  const navItems = [
    { name: "About", description: "Learn about ADHD and Autism" },
    { name: "Gallery", description: "Visual perspectives on neurodiversity" },
    {
      name: "Daily Life",
      description: "Challenges and strengths in everyday situations",
    },
    { name: "Accessibility", description: "Creating inclusive environments" },
    { name: "Experience", description: "Interactive sensory simulator" },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="flex h-14 items-center border-b px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Autism and ADHD Awareness</span>
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
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              Understanding ADHD and Autism
            </h2>
            <Tabs defaultValue="adhd" className="w-full">
              <TabsList className="mb-4 grid w-full grid-cols-2">
                <TabsTrigger value="adhd" className="text-lg font-semibold">
                  ADHD
                </TabsTrigger>
                <TabsTrigger value="autism" className="text-lg font-semibold">
                  Autism
                </TabsTrigger>
              </TabsList>
              <TabsContent value="adhd">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-2xl font-bold text-primary">
                      ADHD
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      Attention Deficit Hyperactivity Disorder (ADHD) is a
                      neurodevelopmental disorder characterized by inattention,
                      hyperactivity, and impulsivity. It affects both children
                      and adults, impacting focus, organization, and
                      self-regulation.
                    </p>
                    <Badge variant="secondary">Neurodiversity</Badge>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="autism">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-2xl font-bold text-primary">
                      Autism
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      Autism Spectrum Disorder (ASD) is a complex developmental
                      condition involving challenges with social interaction,
                      communication, and restricted or repetitive behaviors.
                      It's a spectrum, meaning it affects individuals
                      differently and to varying degrees.
                    </p>
                    <Badge variant="secondary">Spectrum</Badge>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section
          id="gallery"
          className="w-full bg-muted py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              Visual Perspectives
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Child with ADHD focusing on a task",
                "Adult with Autism engaging in a special interest",
                "ADHD and Autism awareness symbols",
                "Sensory-friendly environment for individuals with Autism",
                "ADHD coping strategies visualization",
                "Inclusive classroom setting for neurodiverse students",
              ].map((caption, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-shadow hover:shadow-lg"
                >
                  <CardContent className="p-4">
                    <Image
                      alt={caption}
                      className="mb-4 aspect-video rounded-lg object-cover"
                      height="300"
                      src={`/placeholder.svg?height=300&width=400`}
                      width="400"
                    />
                    <p className="text-sm text-muted-foreground">{caption}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="daily-life" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              ADHD and Autism in Daily Life
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="challenges">
                  <AccordionTrigger className="text-lg font-semibold text-primary">
                    Challenges
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                      <li>Time management and organization</li>
                      <li>Social interactions and communication</li>
                      <li>Sensory sensitivities</li>
                      <li>Executive functioning</li>
                      <li>Emotional regulation</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="strengths">
                  <AccordionTrigger className="text-lg font-semibold text-primary">
                    Strengths
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                      <li>Creativity and out-of-the-box thinking</li>
                      <li>Hyperfocus on areas of interest</li>
                      <li>Pattern recognition and problem-solving</li>
                      <li>Attention to detail</li>
                      <li>Unique perspectives and insights</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        <section
          id="accessibility"
          className="w-full bg-muted py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              Accessibility for ADHD and Autism
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  title: "Environmental Adaptations",
                  items: [
                    "Quiet spaces for focus and sensory breaks",
                    "Adjustable lighting and sound levels",
                    "Clear signage and visual schedules",
                    "Fidget tools and comfort items",
                  ],
                },
                {
                  title: "Communication Support",
                  items: [
                    "Alternative and augmentative communication (AAC) devices",
                    "Visual aids and social stories",
                    "Clear, concise instructions",
                    "Patience and understanding in interactions",
                  ],
                },
                {
                  title: "Inclusive Practices",
                  items: [
                    "Flexible deadlines and work arrangements",
                    "Structured routines with built-in breaks",
                    "Assistive technology and organizational tools",
                    "Neurodiversity training for peers and colleagues",
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
        <section
          id="experience"
          className="w-full bg-muted py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              Interactive Sensory Experience Simulator
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Adjust the sliders below to simulate different sensory experiences
              that individuals with ADHD or Autism might encounter. This
              interactive tool aims to promote understanding and empathy.
            </p>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">
                    Visual Sensitivity
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
                    This simulates visual sensitivities to patterns and
                    flickering lights. Coping strategy: Use natural lighting or
                    warm-colored light bulbs, and minimize patterns in the
                    environment.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">
                    Auditory Sensitivity
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
                      const audio = new Audio("white-noise.MP3")
                      audio.volume = audioIntensity / 100
                      audio.play()
                    }}
                    className="mb-4 w-full"
                  >
                    Play Sample Sound
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    This simulates auditory sensitivities to background noise.
                    Coping strategy: Use noise-cancelling headphones or create
                    quiet zones in living and working spaces.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">
                    Tactile Sensitivity
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
                      Touch
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This represents tactile sensitivities to textures and touch.
                    Coping strategy: Choose comfortable clothing materials and
                    be mindful of textures in the environment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-muted-foreground">
          © 2024 Autism and ADHD Awareness. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            className="text-xs transition-colors hover:text-primary"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs transition-colors hover:text-primary"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
