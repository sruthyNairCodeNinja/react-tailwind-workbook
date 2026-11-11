import type { ReactNode } from "react"

interface CardProps{
    title : string,
    description?:string,
    children : ReactNode,
    footer? : ReactNode
}
export const Card = ({title,description,children,footer} : CardProps)   =>{
    return(
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
            <header className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-base font-semibold text-gray-900 leading-[24px]">
                {title}
            </h2>

            {description && <p className="text-sm font-normal text-gray-500 leading-[20px] mt-1">{description}</p>}
            </header>
            <div className="flex flex-wrap items-center gap-3 px-6 py-7">
                {children}
            </div>
            {footer && <footer className="flex flex-wrap justify-end gap-2 border-t border-gray-100 bg-gray-50 px-6 py-3">{footer}</footer>}

        </div>
    )
}