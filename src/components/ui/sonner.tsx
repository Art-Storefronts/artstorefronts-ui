"use client"

import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <OctagonXIcon className="size-4" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      toastOptions={{
        classNames: {
          toast: "cn-toast group",
          description: "group-[.cn-toast]:text-muted-foreground",
          actionButton: "group-[.cn-toast]:bg-primary group-[.cn-toast]:text-primary-foreground group-[.cn-toast]:hover:bg-primary/90",
          cancelButton: "group-[.cn-toast]:bg-muted group-[.cn-toast]:text-muted-foreground group-[.cn-toast]:hover:bg-muted/80",
          closeButton: "group-[.cn-toast]:bg-background group-[.cn-toast]:text-foreground group-[.cn-toast]:border group-[.cn-toast]:border-border group-[.cn-toast]:hover:bg-muted",
        },
      }}
      {...props}
    />
  )
}

export { Toaster as SonnerToaster }
