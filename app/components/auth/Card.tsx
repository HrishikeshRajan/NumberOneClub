import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import React from 'react'

function AuthWrapper({children, className}:{children:React.ReactNode, className?:string}) {
  return (
    <Card className={cn('w-full h-auto pb-5 bg-white font-euclid rounded-3xl px-5 shadow-md', className)}>
    {children}
    </Card>
  )
}

export default AuthWrapper