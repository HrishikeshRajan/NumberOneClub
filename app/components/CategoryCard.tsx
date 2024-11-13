import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

type CategoryCardProps = {
    title:string,
    description:string,
}
function CategoryCard({title,description}:CategoryCardProps) {
  return (
     <Card className='w-auto h-44 shadow-category font-euclid rounded-3xl'>
      <CardHeader>
        <CardTitle className='text-darkslategray'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
      <CardDescription className='text-darkgray'>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

export default CategoryCard