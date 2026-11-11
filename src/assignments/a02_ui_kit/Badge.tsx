import type { ReactNode } from "react"
import type { BadgeTone } from "./types"

interface BadgeProps {
    tone? : BadgeTone,
    children : ReactNode
}
const toneVariantClass : Record<BadgeTone , string>={
    success : 'bg-green-50 ring-green-600/20 text-green-700',
    warning : 'bg-amber-50 ring-amber-600/20 text-amber-700',
    neutral : 'bg-gray-50 ring-gray-600/20 text-gray-700'
}
export const Badge = ({tone = "neutral",children} : BadgeProps) =>{
    return(
        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${toneVariantClass[tone]}`}>
            {children}
        </span>
    )
}