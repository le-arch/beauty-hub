"use client"

import Image from "next/image"
import { useState } from "react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  layout?: string
  objectFit?: string
  "data-ai-hint"?: string
}

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className,
  "data-ai-hint": aiHint,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  const fallbackSrc = aiHint
    ? `/placeholder.svg?height=${height || 400}&width=${width || 600}&query=${encodeURIComponent(aiHint)}`
    : `/placeholder.svg?height=${height || 400}&width=${width || 600}`

  return (
    <Image
      {...props}
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={`${className} ${isLoading ? "animate-pulse bg-gray-200" : ""}`}
      onLoad={() => setIsLoading(false)}
      onError={() => {
        setImgSrc(fallbackSrc)
        setIsLoading(false)
      }}
    />
  )
}
