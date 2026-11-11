import type { ComponentProps } from "react";
import type { ButtonSize, ButtonVariant } from "./types";

interface ButtonProps extends ComponentProps<'button'> {
    variant?: ButtonVariant,
    size?: ButtonSize
}
const variantClass: Record<ButtonVariant, string> = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-500',
    secondary: 'bg-white text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50',
    danger: 'bg-red-600 text-white hover:bg-red-500',
}
const sizeClass: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
}
export const Button = ({ variant = 'primary', size = 'md',
    className = '', ...rest }: ButtonProps) => {
    return (
        <button className={`inline-flex items-center justify-center rounded-lg font-medium shadow-sm 
transition-colors 
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 
        disabled:cursor-not-allowed disabled:opacity-50
        ${variantClass[variant]} ${sizeClass[size]} ${className}`} {...rest}/>
    )
}