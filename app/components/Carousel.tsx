'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import { useState, useEffect } from "react"
import Autoplay from "embla-carousel-autoplay"

interface CustomCarouselProps {
  items: React.ReactNode[]
  autoplay?: boolean
  interval?: number
  showControls?: boolean
  showDots?: boolean
  className?: string
}

export function CustomCarousel({
  items,
  autoplay = true,
  interval = 4000,
  showControls = true,
  showDots = true,
  className,
}: CustomCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="relative  ">
      <Carousel
        setApi={setApi}
        className={className}
        // plugins={autoplay ? [Autoplay({ delay: interval })] : []}
        opts={{
            align: "end",
            slidesToScroll: 1,
            startIndex: 0,
            speed: 500,
            scrollSnaps: items.map((_, index) => index),


        }}
      >
        <CarouselContent className="-ml-5 p-5">
          {items.map((item, index) => (
            <CarouselItem key={index} className="pl-5 py-10 basis-1/3 md:basis-1/3 lg:basis-1/4">
              {item}
            </CarouselItem>
          ))}
        </CarouselContent>

        {showControls && (
          <>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </>
        )}
      </Carousel>

      {showDots && (
        <div className="flex justify-center gap-2 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                index === current ? "bg-primary w-4" : "bg-primary/50"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
