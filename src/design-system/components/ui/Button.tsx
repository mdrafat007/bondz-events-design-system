import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { triggerTap } from "../../lib/haptics";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-control font-sans font-bold transition-all duration-150 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-40 cursor-pointer select-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-surface-light hover:bg-primary/85 shadow-sm",
        dark: "bg-ink text-canvas hover:bg-ink/85 shadow-sm",
        outline: "border border-hairline bg-surface/50 text-ink hover:bg-surface-light hover:border-ink/30",
        ghost: "text-ink hover:bg-surface-light",
      },
      size: { sm: "min-h-9 px-3.5 text-xs", md: "min-h-11 px-5 text-sm", lg: "min-h-12 px-6 text-base", icon: "size-11 min-w-11 p-0" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ className, variant, size, type = "button", onClick, ...props }, ref) {
  return <button ref={ref} type={type} className={cn(buttonVariants({ variant, size }), className)} onClick={(event) => { triggerTap(); onClick?.(event); }} {...props} />;
});
