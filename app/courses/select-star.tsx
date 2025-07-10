"use client"

import { cn } from "@/src/lib/utils"
import { Star } from "lucide-react"
import { useState } from "react"

export const SelectStar = (props: {star: number, setNewStar?: (star: number) => void}) => {
 const [hoverIndex, setHoverIndex] = useState<number | null>(null)
    return (
        <div className="flex items-center gap-1"
        onMouseEnter={() => {
            setHoverIndex(null)
        }}>
            {Array.from({ length: 5 }).map((_, i) => {
                const isFilled = i < props.star
                const isNewFilled = hoverIndex ? i - 1 < hoverIndex : null
                return (
                    <button 
                     onMouseEnter={() => {
                        setHoverIndex(i)
                     }}
                     onClick={() => {props.setNewStar?.(i + 1)}}
                    key={i}>
                        <Star
                           className={cn("text-yellow-400 transition cursor-pointer", {"fill-yellow-400": isFilled, "-translate-y-0.5 fill-orange-400 text-orange-400": isNewFilled,})}
                        />
                    </button>
                )
            })}
        </div>
    )
}
