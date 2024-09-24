/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedInfoGraphicProps {
  label: string
  percentage: number
}

export function AnimatedInfoGraphic({
  label,
  percentage,
}: AnimatedInfoGraphicProps) {
  const [isVisible, setIsVisible] = useState(false)
  const graphRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (graphRef.current) {
      observer.observe(graphRef.current)
    }

    return () => {
      if (graphRef.current) {
        observer.unobserve(graphRef.current)
      }
    }
  }, [])

  return (
    <div ref={graphRef} className="flex flex-col items-center">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="20"
        />
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="currentColor"
          strokeWidth="20"
          strokeDasharray={`${2 * Math.PI * 90}`}
          strokeDashoffset={
            isVisible
              ? `${2 * Math.PI * 90 * (1 - percentage / 100)}`
              : `${2 * Math.PI * 90}`
          }
          transform="rotate(-90 100 100)"
          className="text-primary transition-all duration-1000 ease-out dark:text-background"
        />
        <text
          x="100"
          y="100"
          textAnchor="middle"
          dy=".3em"
          className="fill-primary text-6xl font-bold"
        >
          {isVisible ? percentage : 0}%
        </text>
      </svg>
      <p className="mt-4 text-center text-lg text-muted-foreground">{label}</p>
    </div>
  )
}
