import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const products = [
  {
    title: "Consultoria em Acessibilidade",
    description:
      "Avaliação e implementação de soluções de acessibilidade para seu negócio.",
    details: [
      "Análise completa do ambiente de trabalho",
      "Recomendações personalizadas",
      "Suporte na implementação",
    ],
  },
  {
    title: "Treinamento em Neurodiversidade",
    description:
      "Capacitação para equipes sobre inclusão e trabalho com pessoas neurodiversas.",
    details: [
      "Workshops interativos",
      "Material didático especializado",
      "Programa de acompanhamento",
    ],
  },
  {
    title: "Análise de Adequação",
    description:
      "Se você ja possui um software, contate-nos para avaliação e sugestão de pontos de melhoria do seu software.",
    details: [
      "Análise de plataforma",
      "Feedback de pontos para inclusão",
      "Relatórios de progresso e impacto",
    ],
  },
]

export function ProductSection() {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold ">
          Nossos Produtos
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card
              key={index}
              className="flex flex-col transition-all hover:scale-105 hover:border-primary"
            >
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="grow">
                <ul className="list-inside list-disc space-y-2">
                  {product.details.map((detail, detailIndex) => (
                    <li className="text-base" key={detailIndex}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Mail className="mr-2 size-4" /> Contate-nos
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
