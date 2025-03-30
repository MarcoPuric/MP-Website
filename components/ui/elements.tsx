import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

//
// 🔘 BUTTON
//
const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all",
    {
      variants: {
        variant: {
          default: "bg-primary text-white hover:bg-primary/90",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline hover:no-underline",
          outline: "border border-input bg-background text-foreground hover:bg-muted",
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 px-3 text-sm",
            lg: "h-10 px-6 text-base",
            icon: "h-9 w-9 p-0", // <–– HINZUGEFÜGT
          },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  );
  

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}

//
// 🃏 CARD
//
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground rounded-xl border shadow-sm p-6",
        className
      )}
      {...props}
    />
  );
}

//
// 🏷️ BADGE
//
function Badge({
  className,
  variant = "default",
  children,
}: {
  className?: string;
  variant?: "default" | "secondary" | "outline";
  children: React.ReactNode;
}) {
  const styles = {
    default: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    outline: "border border-foreground text-foreground",
  };
  return (
    <span
      className={cn("text-xs font-medium px-2 py-0.5 rounded", styles[variant], className)}
    >
      {children}
    </span>
  );
}

export { Button, Card, Badge };
