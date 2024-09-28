"use client"

import { useEffect, useState } from "react"
import {
  BookOpen,
  CheckCircle,
  Clock,
  Settings,
  Users,
  XCircle,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ScholarSolutions() {
  const [isTimerActive, setIsTimerActive] = useState(false)
  const [remainingTime, setRemainingTime] = useState(25 * 60) // 25 minutes in seconds
  const [pomodoroLength, setPomodoroLength] = useState(25)
  const [breakLength, setBreakLength] = useState(5)
  const [isBreak, setIsBreak] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isTimerActive) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer)
            setIsTimerActive(false)
            setIsBreak(!isBreak)
            return isBreak ? pomodoroLength * 60 : breakLength * 60
          }
          return prevTime - 1
        })
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isTimerActive, isBreak, pomodoroLength, breakLength])

  const startTimer = () => {
    setIsTimerActive(true)
    setRemainingTime(isBreak ? breakLength * 60 : pomodoroLength * 60)
  }

  const resetTimer = () => {
    setIsTimerActive(false)
    setRemainingTime(pomodoroLength * 60)
    setIsBreak(false)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-8 text-4xl font-bold">
        Soluções Práticas para Estudantes com TDAH e TEA
      </h1>

      <Tabs defaultValue="pomodoro" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-slate-400/40">
          <TabsTrigger value="pomodoro">Técnica Pomodoro</TabsTrigger>
          <TabsTrigger value="checklist">Lista de Verificação</TabsTrigger>
        </TabsList>

        <TabsContent value="pomodoro">
          <Card>
            <CardHeader>
              <CardTitle>Técnica Pomodoro</CardTitle>
              <CardDescription>
                Use esta técnica para melhorar seu foco e produtividade
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-4">
                <Clock className="size-16 text-primary" />
                <div className="text-4xl font-bold">
                  {formatTime(remainingTime)}
                </div>
                <div className="flex space-x-2">
                  <Button onClick={startTimer} disabled={isTimerActive}>
                    {isTimerActive ? "Em andamento" : "Iniciar"}
                  </Button>
                  <Button onClick={resetTimer} variant="outline">
                    Reiniciar
                  </Button>
                </div>
                <div className="w-full max-w-xs space-y-2">
                  <Label>Duração do Pomodoro (minutos)</Label>
                  <Slider
                    value={[pomodoroLength]}
                    onValueChange={(value) => setPomodoroLength(value[0])}
                    min={5}
                    max={60}
                    step={5}
                  />
                  <Input
                    type="number"
                    value={pomodoroLength}
                    onChange={(e) => setPomodoroLength(Number(e.target.value))}
                    min={5}
                    max={60}
                  />
                </div>
                <div className="w-full max-w-xs space-y-2">
                  <Label>Duração da Pausa (minutos)</Label>
                  <Slider
                    value={[breakLength]}
                    onValueChange={(value) => setBreakLength(value[0])}
                    min={1}
                    max={15}
                    step={1}
                  />
                  <Input
                    type="number"
                    value={breakLength}
                    onChange={(e) => setBreakLength(Number(e.target.value))}
                    min={1}
                    max={15}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p>
                {pomodoroLength} minutos de foco, {breakLength} minutos de pausa
              </p>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="checklist">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Verificação para Tarefas</CardTitle>
              <CardDescription>
                Use esta lista para organizar suas tarefas escolares
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  "Preparar materiais para a aula",
                  "Revisar anotações da aula anterior",
                  "Completar tarefa de casa",
                  "Fazer uma pausa de 5 minutos",
                  "Estudar para a próxima prova",
                ].map((task, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Switch id={`task-${index}`} />
                    <Label htmlFor={`task-${index}`}>{task}</Label>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <p>Marque as tarefas conforme você as completa</p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
