import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
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

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <TooltipProvider>
              {navItems.map((item) => (
                <Tooltip key={item.name}>
                  <TooltipTrigger asChild>
                    <Link
                      className="rounded-md py-3 text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
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

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
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
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>

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
          </nav>
        </div>
      </div>
    </header>
  )
}
