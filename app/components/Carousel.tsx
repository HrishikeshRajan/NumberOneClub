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
    contentClassName?:string
    itemClassName?:string
  }
  
export function ShowInCarousel({
    items,
    autoplay = true,
    interval = 3000,
    className,

    contentClassName,
    itemClassName
  }: CustomCarouselProps) {
  return (
    <Carousel 
     opts={{
      containScroll: false,
      align:'start',
      loop: true
     }}
    plugins={autoplay ? [Autoplay({ delay: interval, stopOnInteraction: false, stopOnMouseEnter:true })]:[]}
    className={`w-full max-w-md md:max-w-3xl lg:max-w-6xl ${className}`}>
      <CarouselContent className={`ml-10 py-10 pl-10 xl:ml-20 md:p-10 md:pl-20 lg:pl-10 mt-1 ${contentClassName}`}>
        {
        items.map((item, index) => (
            <CarouselItem key={index} className={`pl-10  basis-3/4 md:basis-1/3 lg:basis-1/4 ${itemClassName}`}>
              {item}
            </CarouselItem>
          ))
        }
      </CarouselContent>
    </Carousel>
  )
}