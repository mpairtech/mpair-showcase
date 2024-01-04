import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const shellVariants = cva("grid items-center gap-8 pb-8 pt-6 md:py-8", {
  variants: {
    variant: {
      default: "container",
      sidebar: "",
      centered: "mx-auto mb-16 mt-20 max-w-md justify-center",
      markdown: "container max-w-3xl gap-0 py-8 md:py-10 lg:py-10",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})


function Shell({
  className,
  as: Comp = "section",
  variant,
  ...props
}) {
  return (
    <Comp className={cn(shellVariants({ variant }), className)} {...props} />
  )
}

export { Shell, shellVariants }