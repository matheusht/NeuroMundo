/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedInfoGraphicProps {
  label: string
  percentage: number
  color?: string
}

export function AnimatedInfoGraphic({
  label,
  percentage,
  color,
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
          className="stroke-gray-300 dark:stroke-gray-600"
          strokeWidth="20"
        />
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke={color}
          strokeWidth="20"
          strokeDasharray={`${2 * Math.PI * 90}`}
          strokeDashoffset={
            isVisible
              ? `${2 * Math.PI * 90 * (1 - percentage / 100)}`
              : `${2 * Math.PI * 90}`
          }
          transform="rotate(-90 100 100)"
          className="transition-all duration-1000 ease-out"
        />
        <text
          x="100"
          y="100"
          textAnchor="middle"
          dy=".3em"
          className="text-6xl font-bold"
          fill={color}
        >
          {isVisible ? percentage : 0}%
        </text>
      </svg>
      <p className="mt-4 text-center text-lg text-gray-700 dark:text-gray-300">
        {label}
      </p>
    </div>
  )
}
