import { cn } from "@/lib/utils"

interface HeadingProps {
  title: string
  className?: string
}

export function Heading({ title, className }: HeadingProps) {
  return (
    <h2 className={cn(
      'heading-main',
      className
    )}>
      {title}
    </h2>
  )
}