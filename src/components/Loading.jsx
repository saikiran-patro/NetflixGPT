"use client"

import * as React from "react"

import { Progress } from "./progress"

export function Loading() {
  const [progress, setProgress] = React.useState(20)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(93), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[50%]" />
}
