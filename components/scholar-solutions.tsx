"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  BookOpen,
  CheckCircle,
  Clock,
  Puzzle,
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
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ScholarSolutions() {
  const [isTimerActive, setIsTimerActive] = useState(false)
  const [remainingTime, setRemainingTime] = useState(25 * 60)
  const [pomodoroLength, setPomodoroLength] = useState(25)
  const [breakLength, setBreakLength] = useState(5)
  const [isBreak, setIsBreak] = useState(false)
  const [tasks, setTasks] = useState([
    { id: "task-1", label: "Preparar materiais para a aula", checked: false },
    {
      id: "task-2",
      label: "Revisar anotações da aula anterior",
      checked: false,
    },
    { id: "task-3", label: "Completar tarefa de casa", checked: false },
    { id: "task-4", label: "Fazer uma pausa de 5 minutos", checked: false },
    { id: "task-5", label: "Estudar para a próxima prova", checked: false },
  ])

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

  const stopTimer = () => {
    setIsTimerActive(false)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`
  }

  const toggleTask = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, checked: !task.checked } : task
      )
    )
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-8 text-4xl font-bold text-yellow-500 ">
        Soluções Práticas para Estudantes com TDAH e TEA
      </h1>

      <Tabs defaultValue="pomodoro" className="mb-8 w-full">
        <TabsList className="grid w-full grid-cols-2 bg-slate-400/40">
          <TabsTrigger value="pomodoro">Técnica Pomodoro</TabsTrigger>
          <TabsTrigger value="checklist">Lista de Verificação</TabsTrigger>
        </TabsList>

        <TabsContent value="pomodoro">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Técnica Pomodoro</CardTitle>
              <CardDescription>
                Use esta técnica para melhorar seu foco e produtividade
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-4">
                <Clock className="size-24 text-primary" />
                <div className="text-4xl font-bold">
                  {formatTime(remainingTime)}
                </div>
                <div className="flex space-x-2">
                  <Button onClick={startTimer} disabled={isTimerActive}>
                    {isTimerActive ? "Em andamento" : "Iniciar"}
                  </Button>
                  <Button onClick={stopTimer} variant="outline" className="">
                    Parar
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
              <CardTitle className="text-red-400">
                Lista de Verificação para Tarefas
              </CardTitle>
              <CardDescription>
                Use esta lista para organizar suas tarefas escolares
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {tasks.map((task) => (
                  <li key={task.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={task.id}
                      checked={task.checked}
                      onCheckedChange={() => toggleTask(task.id)}
                    />
                    <Label
                      htmlFor={task.id}
                      className={
                        task.checked ? "text-muted-foreground line-through" : ""
                      }
                    >
                      {task.label}
                    </Label>
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

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-primary">
            Símbolo de Inclusão para Estudantes Autistas
          </CardTitle>
          <CardDescription className="text-base">
            Uma solução prática para promover a inclusão e empatia nas escolas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <div className="flex w-full justify-center md:w-1/3">
              <div className="rounded-full bg-primary/10 p-8">
                <Image
                  src="/assets/heart3.png"
                  width={250}
                  height={200}
                  alt="Simbolo do Autismo"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="mb-4 text-lg">
                Nossa proposta é oferecer um símbolo de quebra-cabeça para
                estudantes autistas que desejam se identificar. Este símbolo
                serve como um sinal sutil para promover a compreensão e a
                empatia no ambiente escolar.
              </p>
              <p className="mb-4 text-lg">Benefícios:</p>
              <ul className="mb-4 list-inside list-disc">
                <li>Facilita a comunicação das necessidades do estudante</li>
                <li>Promove a conscientização sobre o autismo</li>
                <li>Encoraja a empatia e o suporte dos colegas</li>
                <li>Ajuda os professores a adaptar suas abordagens</li>
              </ul>
              <p className="text-lg">
                É importante ressaltar que o uso deste símbolo é completamente
                voluntário e deve ser uma decisão do estudante e sua família.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
