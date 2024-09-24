"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface NavigationModalProps {
  href: string
  children: React.ReactNode
}

export function NavigationModal({ href, children }: NavigationModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [targetHref, setTargetHref] = useState("")
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (pathname === "/") {
      router.push(href)
    } else {
      setTargetHref(href)
      setIsOpen(true)
    }
  }

  const handleConfirm = () => {
    setIsOpen(false)
    router.push(targetHref)
  }

  return (
    <>
      <a href={href} onClick={handleClick}>
        {children}
      </a>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Mudar de página?</AlertDialogTitle>
            <AlertDialogDescription>
              Você está prestes a sair da página atual. Tem certeza que deseja
              continuar?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirm}>
              Continuar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
