// site-header.tsx

import Link from "next/link"
import { Brain, Menu } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { NavigationModal } from "@/components/navigation-modal"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  // const navItems = [
  //   {
  //     name: "Sobre",
  //     description: "Aprenda sobre TDAH e Autismo",
  //     href: "/#sobre",
  //   },
  //   {
  //     name: "Galeria",
  //     description: "Perspectivas visuais sobre neurodiversidade",
  //     href: "/#galeria",
  //   },
  //   {
  //     name: "Vida Diária",
  //     description: "Desafios e pontos fortes em situações cotidianas",
  //     href: "/#vida-diária",
  //   },
  //   {
  //     name: "Acessibilidade",
  //     description: "Criando ambientes inclusivos",
  //     href: "/#acessibilidade",
  //   },
  //   {
  //     name: "Experiência",
  //     description: "Simulador sensorial interativo",
  //     href: "/#experiência",
  //   },
  // ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center space-x-4">
          <MainNav />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex md:gap-6 ">
            <NavigationModal href="/forms">
              <span className="rounded-[8px] bg-primary p-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                Soluções Digitais
              </span>
            </NavigationModal>

            <NavigationModal href="/scholar">
              <span className="rounded-[8px] bg-primary p-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                Soluções Escolares
              </span>
            </NavigationModal>

            <NavigationModal href="/business">
              <span className="rounded-[8px] bg-primary p-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                Soluções Empresariais
              </span>
            </NavigationModal>
            {/* <TooltipProvider>
              {navItems.map((item) => (
                <Tooltip key={item.name}>
                  <TooltipTrigger asChild>
                    <NavigationModal
                      href={item.href}
                      className="rounded-md py-3 text-base font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      {item.name}
                    </NavigationModal>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider> */}
          </nav>
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="size-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-screen max-w-[400px] overflow-y-auto"
            >
              <SheetHeader>
                <SheetTitle className="flex items-center justify-start gap-2 text-2xl font-bold">
                  <Brain className="size-6" />
                  NeuroMundo
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">
                <NavigationModal href="/forms">
                  <span className="text-sm font-medium">Soluções digitais</span>
                </NavigationModal>
                <NavigationModal href="/scholar">
                  <span className="text-sm font-medium">
                    Soluções Escolares
                  </span>
                </NavigationModal>
                <NavigationModal href="/business">
                  <span className="text-sm font-medium">
                    Soluções Empresariais
                  </span>
                </NavigationModal>
                {/* {navItems.map((item) => (
                  <NavigationModal key={item.name} href={item.href}>
                    <span className="text-sm font-medium">{item.name}</span>
                  </NavigationModal>
                ))} */}
              </nav>
              <div className="mt-6 flex items-center justify-start space-x-4">
                <ThemeToggle />
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.gitHub className="size-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={buttonVariants({
                      size: "icon",
                      variant: "ghost",
                    })}
                  >
                    <Icons.gitHub className="size-5" />
                    <span className="sr-only">GitHub</span>
                  </div>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="hidden md:block">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <ThemeToggle />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Alternar tema</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </header>
  )
}
