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
     <Card className='w-[294px] max-w-[294px] min-h-44 shadow-category font-euclid rounded-3xl'>
      <CardHeader>
        <CardTitle className='text-darkslategray text-xl font-semibold line-clamp-2'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
      <CardDescription className='text-darkgray text-md font-normal -mt-5 line-clamp-3'>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

export default CategoryCard