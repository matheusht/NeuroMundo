"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AlertTriangle, Sparkles } from "lucide-react"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-8 text-center text-4xl font-bold">
        Exemplos de Formulários de TDAH e Autismo
      </h1>
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
      >
        {formType === "non-accessible" ? (
          <Card className="mx-auto max-w-md">
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
                    <input type="checkbox" required /> Concordo com os termos e
                    condições
                  </label>
                </div>
                <Button type="submit" className="w-full">
                  Enviar
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="mx-auto max-w-md bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900">
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
    </div>
  )
}
