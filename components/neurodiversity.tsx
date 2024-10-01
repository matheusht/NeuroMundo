"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Moon, Palette, Sun } from "lucide-react"

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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const questions = [
  {
    id: "q1",
    text: "Você frequentemente tem dificuldade em manter a atenção em tarefas?",
  },
  {
    id: "q2",
    text: "Você se sente sobrecarregado(a) em ambientes com muitos estímulos sensoriais?",
  },
  {
    id: "q3",
    text: "Você tem interesses intensos em tópicos específicos?",
  },
  {
    id: "q4",
    text: "Você frequentemente perde ou esquece itens importantes?",
  },
  {
    id: "q5",
    text: "Você tem dificuldade em entender sinais sociais não verbais?",
  },
]

const themes = [
  {
    name: "default",
    label: "Padrão",
    icon: Palette,
    background: "bg-background",
    text: "text-foreground",
  },
  {
    name: "sepia",
    label: "Sépia",
    icon: Palette,
    background: "bg-yellow-100",
    text: "text-yellow-900",
  },
]

export function NeurodiversityAssessment() {
  const [isOpen, setIsOpen] = useState(false)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [currentStep, setCurrentStep] = useState(0)
  const [result, setResult] = useState<string | null>(null)
  const [currentTheme, setCurrentTheme] = useState(themes[0])

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const calculateResult = () => {
    const score = Object.values(answers).filter(
      (answer) => answer === "yes"
    ).length
    if (score >= 4) {
      return "Seus resultados sugerem uma alta probabilidade de neurodiversidade. Considere buscar uma avaliação profissional para obter mais informações."
    } else if (score >= 2) {
      return "Seus resultados sugerem uma possibilidade de neurodiversidade. Você pode querer explorar mais sobre o assunto ou considerar uma avaliação profissional."
    } else {
      return "Seus resultados não indicam uma forte probabilidade de neurodiversidade, mas lembre-se de que este é apenas um teste inicial. Se você tiver preocupações, sempre é melhor consultar um profissional."
    }
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setResult(calculateResult())
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const resetForm = () => {
    setAnswers({})
    setCurrentStep(0)
    setResult(null)
  }

  const renderQuestion = (question: (typeof questions)[0]) => (
    <div key={question.id} className="mb-6">
      <Label htmlFor={question.id} className="mb-3 block text-xl font-medium">
        {question.text}
      </Label>
      <RadioGroup
        onValueChange={(value) => handleAnswerChange(question.id, value)}
        value={answers[question.id]}
        className="flex space-x-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="yes"
            id={`${question.id}-yes`}
            className="size-6"
          />
          <Label htmlFor={`${question.id}-yes`} className="text-lg">
            Sim
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="no"
            id={`${question.id}-no`}
            className="size-6"
          />
          <Label htmlFor={`${question.id}-no`} className="text-lg">
            Não
          </Label>
        </div>
      </RadioGroup>
    </div>
  )

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="fixed bottom-4 right-4 z-50 rounded-full bg-primary p-4 text-lg font-bold text-primary-foreground shadow-lg hover:bg-primary/90">
          Faça o teste de neurodiversidade
        </Button>
      </DialogTrigger>
      <DialogContent
        className={`sm:max-w-[600px] ${currentTheme.background} ${currentTheme.text}`}
      >
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">
            Avaliação de Neurodiversidade
          </DialogTitle>
          <DialogDescription className="text-lg">
            Este é um teste inicial para avaliar possíveis traços de
            neurodiversidade. Não é um diagnóstico oficial.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex items-center justify-between">
          <Progress
            value={(currentStep + 1) * (100 / questions.length)}
            className="h-2 w-full"
          />
          <div className="ml-4 flex space-x-2">
            {themes.map((theme) => (
              <Button
                key={theme.name}
                variant="outline"
                size="icon"
                onClick={() => setCurrentTheme(theme)}
                className={`${
                  currentTheme.name === theme.name ? "ring-2 ring-primary" : ""
                }`}
              >
                <theme.icon className="size-4" />
                <span className="sr-only">{theme.label}</span>
              </Button>
            ))}
          </div>
        </div>
        <p className="mt-2 text-center text-lg">
          Pergunta {currentStep + 1} de {questions.length}
        </p>
        {!result ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className={`mt-4 ${
                  currentTheme.background === "bg-background"
                    ? "bg-secondary/10"
                    : ""
                }`}
              >
                <CardContent className="pt-6">
                  {renderQuestion(questions[currentStep])}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    variant="outline"
                    className="text-lg"
                  >
                    Anterior
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!answers[questions[currentStep].id]}
                    className="text-lg"
                  >
                    {currentStep === questions.length - 1
                      ? "Ver Resultado"
                      : "Próximo"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatePresence>
        ) : (
          <Card
            className={`mt-4 ${
              currentTheme.background === "bg-background"
                ? "bg-secondary/10"
                : ""
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Resultado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl">{result}</p>
            </CardContent>
            <CardFooter>
              <Button onClick={resetForm} className="mt-4 w-full text-lg">
                Fazer o teste novamente
              </Button>
            </CardFooter>
          </Card>
        )}
        <DialogFooter className="sm:justify-start">
          <DialogTrigger asChild>
            <Button type="button" variant="secondary" className="text-lg">
              Fechar
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
