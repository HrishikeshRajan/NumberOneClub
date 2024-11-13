"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
 
interface CustomCarouselProps {
    items: React.ReactNode[]
    autoplay?: boolean
    interval?: number
    showControls?: boolean
    showDots?: boolean
    className?: string
  }
  
export function CarouselSpacing({
    items,
    autoplay = true,
    interval = 3000,
  }: CustomCarouselProps) {
  return (
    <Carousel 
    
    plugins={autoplay ? [Autoplay({ delay: interval })]:[]}
    className="w-full max-w-sm md:max-w-3xl lg:max-w-6xl ">
      <CarouselContent className="-ml-5 py-5 pl-10 md:p-10 md:pl-20 lg:pl-10">
        {
        items.map((item, index) => (
            <CarouselItem key={index} className="pl-5  basis-3/4 md:basis-1/3 lg:basis-1/4">
              {item}
            </CarouselItem>
          ))
        }
      </CarouselContent>
    </Carousel>
  )
}