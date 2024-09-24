"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  AlertTriangle,
  Coffee,
  IceCream,
  Pizza,
  Salad,
  Sparkles,
  Utensils,
} from "lucide-react"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function FormsPage() {
  const [formType, setFormType] = useState<"non-accessible" | "accessible">(
    "non-accessible"
  )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    toast({
      title: "Formulário enviado",
      description: "Obrigado por compartilhar suas experiências.",
    })
  }

  const accessibleMenuItems = [
    {
      category: "Entradas",
      icon: <Salad className="size-6 text-green-500" />,
      items: [
        {
          name: "Salada Caesar",
          description: "Alface, croutons, parmesão",
          price: "R$ 18",
        },
        {
          name: "Bruschetta",
          description: "Tomate, manjericão, azeite",
          price: "R$ 15",
        },
      ],
    },
    {
      category: "Pratos Principais",
      icon: <Pizza className="size-6 text-red-500" />,
      items: [
        {
          name: "Pizza Margherita",
          description: "Molho, mussarela, manjericão",
          price: "R$ 35",
        },
        {
          name: "Lasanha",
          description: "Camadas de massa, molho, queijo",
          price: "R$ 40",
        },
      ],
    },
    {
      category: "Sobremesas",
      icon: <IceCream className="size-6 text-pink-500" />,
      items: [
        {
          name: "Tiramisu",
          description: "Café, mascarpone, cacau",
          price: "R$ 20",
        },
        { name: "Gelato", description: "Escolha 2 sabores", price: "R$ 15" },
      ],
    },
    {
      category: "Bebidas",
      icon: <Coffee className="text-brown-500 size-6" />,
      items: [
        {
          name: "Espresso",
          description: "Café forte e encorpado",
          price: "R$ 5",
        },
        {
          name: "Limonada",
          description: "Limão fresco e hortelã",
          price: "R$ 8",
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto overflow-x-hidden py-10">
      <h1 className="mb-8 text-center text-4xl font-bold">
        Formulários e Menus de TDAH e Autismo
      </h1>
      <Tabs defaultValue="forms" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="forms">Formulários</TabsTrigger>
          <TabsTrigger value="menus">Menus de Restaurante</TabsTrigger>
        </TabsList>
        <TabsContent value="forms">
          <div className="mb-6 flex justify-center">
            <Button
              onClick={() => setFormType("non-accessible")}
              variant={formType === "non-accessible" ? "default" : "outline"}
              className="mr-4"
            >
              Formulário Não Acessível
            </Button>
            <Button
              onClick={() => setFormType("accessible")}
              variant={formType === "accessible" ? "default" : "outline"}
            >
              Formulário Acessível
            </Button>
          </div>

          <motion.div
            key={formType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-md"
          >
            {formType === "non-accessible" ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <AlertTriangle className="mr-2 text-yellow-500" />
                    Formulário Não Acessível
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Nome"
                        className="w-full border p-2 text-sm focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full border p-2 text-sm focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <select
                        className="w-full border p-2 text-sm focus:outline-none"
                        required
                      >
                        <option value="">Selecione uma condição</option>
                        <option value="tdah">TDAH</option>
                        <option value="autismo">Autismo</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        placeholder="Descreva suas experiências"
                        className="w-full border p-2 text-sm focus:outline-none"
                        rows={4}
                        required
                      ></textarea>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox" required /> Concordo com os
                        termos e condições
                      </label>
                    </div>
                    <Button type="submit" className="w-full">
                      Enviar
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center text-2xl">
                    <Sparkles className="mr-2 text-purple-500" />
                    Formulário Acessível
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label className="text-xl" htmlFor="name">
                        Nome
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        className="text-base"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xl" htmlFor="email">
                        Email
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        className="text-base"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xl">Condição</Label>
                      <RadioGroup defaultValue="tdah" required>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="tdah" id="tdah" />
                          <Label className="text-base" htmlFor="tdah">
                            TDAH
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="autismo" id="autismo" />
                          <Label className="text-base" htmlFor="autismo">
                            Autismo
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="ambos" id="ambos" />
                          <Label className="text-base" htmlFor="ambos">
                            Ambos
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xl" htmlFor="experiences">
                        Suas Experiências
                      </Label>
                      <Textarea
                        id="experiences"
                        className="text-base"
                        placeholder="Compartilhe suas experiências aqui..."
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="terms"
                        className="size-4 rounded border-gray-300"
                        required
                      />
                      <Label className="text-lg" htmlFor="terms">
                        Concordo com os termos e condições
                      </Label>
                    </div>
                    <Button type="submit" className="w-full">
                      Enviar Formulário
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </TabsContent>
        <TabsContent value="menus">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900">
              <CardHeader>
                <CardTitle className="flex items-center justify-center text-2xl">
                  <Sparkles className="mr-2 text-purple-500" />
                  Menu Acessível
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {accessibleMenuItems.map((category, index) => (
                    <div key={index}>
                      <h3 className="mb-2 flex items-center text-xl font-semibold">
                        {category.icon}
                        <span className="ml-2">{category.category}</span>
                      </h3>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-center justify-between"
                          >
                            <div>
                              <span className="font-medium">{item.name}</span>
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                            <span className="font-semibold">{item.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center text-2xl">
                  <AlertTriangle className="mr-2 text-yellow-500" />
                  Menu Não Acessível
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>Entradas: Salada Caesar (R$ 18), Bruschetta (R$ 15)</p>
                  <p>
                    Pratos Principais: Pizza Margherita (R$ 35), Lasanha (R$ 40)
                  </p>
                  <p>Sobremesas: Tiramisu (R$ 20), Gelato (R$ 15)</p>
                  <p>Bebidas: Espresso (R$ 5), Limonada (R$ 8)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
