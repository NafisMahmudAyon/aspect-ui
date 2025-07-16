'use client'
import { Button, useToast } from "@/app/src"
import { Box, Code, Copy, Layers, Palette } from "lucide-react"
import HeroBackground from "./HeroBackground"
import Link from "next/link"

const Hero = () => {
  const { toast, ToastContainer } = useToast()

  const handleClick = (type: 'success' | 'error', message: string) => {
    toast({
      className: "",
      message: message,
      messageClassName: "",
      type: type
    })
  }
  return (
    <div className="min-h-screen pt-[60px] md:pt-[80px] relative">
      <HeroBackground className="absolute inset-0 text-bg-dark w-[100%] min-h-[calc(100vh-80px)]" />
      <section className="container mx-auto lg:h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="relative grid w-full h-full place-items-center">
          {/* Feature Icons */}
          <div className="absolute left-4 top-4 md:top-10 lg:top-16 rounded-lg border bg-bg shadow-sm animate-float border-bg md:p-4 animate-float">
            <div className="grid h-16 w-16 place-items-center rounded-lg text-primary-foreground">
              <Layers className="h-8 w-8" />
            </div>
          </div>

          <div className="absolute bottom-4 md:bottom-10 lg:bottom-16 left-4 rounded-lg border bg-bg shadow-sm animate-float border-bg md:p-4 animate-float-2">
            <div className="grid h-16 w-16 place-items-center rounded-lg text-primary-foreground">
              <Code className="h-8 w-8" />
            </div>
          </div>

          <div className="absolute right-4 top-4 md:top-10 lg:top-16 rounded-lg border bg-bg shadow-sm animate-float border-bg md:p-4 animate-float-3">
            <div className="grid h-16 w-16 place-items-center rounded-lg text-primary-foreground">
              <Palette className="h-8 w-8" />
            </div>
          </div>

          <div className="absolute bottom-4 md:bottom-10 lg:bottom-16 right-4 rounded-lg border bg-bg shadow-sm animate-float border-bg md:p-4 animate-float-4">
            <div className="grid h-16 w-16 place-items-center rounded-lg text-primary-foreground">
              <Box className="h-8 w-8" />
            </div>
          </div>

          {/* Main Content */}
          <div className="mx-auto max-w-3xl min-h-[calc(100vh-80px)] text-center flex flex-col items-center justify-center px-4 py-4 md:py-10 lg:py-16">
            <div className="mb-6 rounded-full border border-primary bg-bg px-3 md:px-5 lg:px-6 py-2 text-sm text-text inline-flex items-center gap-2 backdrop-blur-xs">
              React <span className="size-2 rounded-full bg-primary-foreground animate-pulse" /> TypeScript <span className="size-2 rounded-full bg-primary-foreground animate-pulse" /> Tailwind CSS
              {/* <span className="size-2 rounded-full bg-primary-500 animate-pulse" /> Accessibility */}
            </div>

            <h1 className="mb-6 text-display-1 font-bold text-text t-shadow">
              <span className="backdrop-blur-lg inline">Build Stunning Interfaces Effortlessly With</span>
              <br />
              <span className="text-primary-foreground">Aspect UI</span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-text-muted t-shadow">
              A professionally crafted component library that helps you build stunning interfaces faster. Fully customizable, accessible, and designed for modern web applications.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/docs/getting-started/introduction" className="rounded-lg px-8 py-3 font-medium transition-colors bg-primary text-primary-foreground shadow-sm backdrop-blur-lg t-shadow border border-primary">
                Get Started
              </Link>

              <div className="rounded-lg font-medium text-base border border-primary bg-bg-light text-text px-6 py-3 inline-flex items-center gap-2 backdrop-blur-xs t-shadow select-all" onClick={() => {
                navigator.clipboard.writeText('npx aspect-ui@latest init');
                handleClick('success', 'Copied to clipboard')
              }}>
                npx aspect-ui@latest init <span><Copy className="size-4" /></span>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
        {/* <ComponentList /> */}
      </section>
    </div>
  )
}

export default Hero