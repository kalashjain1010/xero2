import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

const Input = forwardRef<HTMLInputElement, InputProps>(({className, placeholder, type, disabled, ...props}, ref) => {
    return (
        <input placeholder={placeholder} ref={ref} type="text" className={twMerge('flex w-full rounded-md border border-transparent p-3 text-sm placeholder:text-neutral-200 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none', className)} />
    )
})
Input.displayName = 'Input'
export default Input