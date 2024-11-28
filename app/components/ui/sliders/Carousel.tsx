"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { twMerge } from "tailwind-merge"
 
interface CustomCarouselProps {
    items: React.ReactNode[]
    autoplay?: boolean
    interval?: number,
    loop?: boolean,
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
    loop = true,
    contentClassName,
    itemClassName
  }: CustomCarouselProps) {
  return (
    <Carousel 
     opts={{
      containScroll: 'keepSnaps',
      align:'start',
      loop: loop,
      dragFree:false
     }}
    plugins={autoplay ? [Autoplay({ delay: interval, stopOnInteraction: false, stopOnMouseEnter:true })]:[]}
    className={twMerge('' ,className)}>
      <CarouselContent className={twMerge('' ,contentClassName)}>
        {
        items.map((item, index) => (
            <CarouselItem key={index} className={twMerge('',itemClassName)}>
              {item}
            </CarouselItem>
          ))
        }
      </CarouselContent>
    </Carousel>
  )
}