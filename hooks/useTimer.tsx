'use client'
import { useEffect, useState } from 'react'

const useTimer = ({upperLimit = 180}:{upperLimit:number}) => {
    const [time, setTime] = useState(upperLimit);

     useEffect(() =>{
        const timer = setInterval(() => {
            setTime((time) => {
                if(time <= 0){
                    clearInterval(timer);
                    return 0;
                }else{
                    return time - 1
                }
            })
        },1000);

       return () => clearInterval(timer)
     }, [])
  return [time]
}

export default useTimer