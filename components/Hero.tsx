'use client'
import { Button, useToast } from "@/app/src"
import { Box, Code, Copy, Layers, Palette } from "lucide-react"

const Hero = () => {
  const { addToast, ToastContainer } = useToast()

  const handleClick = (type: 'success' | 'error', message: string) => {
    addToast({
      className: "",
      message: message,
      messageClassName: "",
      type: type
    })
  }
  return (
    <div className="min-h-screen pt-[80px] hero">
      <section className="container mx-auto px-4 py-6 md:py-10 lg:py-16 lg:h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="relative grid w-full h-full place-items-center">
          {/* Feature Icons */}
          <div className="absolute left-0 -top-8 md:-top-0 rounded-lg border bg-primary-200 shadow-sm animate-float border-primary-800/20 dark:border-primary-200/20 dark:bg-primary-200/50 md:p-4 animate-float">
            <div className="grid h-16 w-16 place-items-center rounded-lg">
              <Layers className="h-8 w-8" />
            </div>
          </div>

          <div className="absolute -bottom-8 md:bottom-0 left-0 rounded-lg border bg-primary-200 shadow-sm animate-float border-primary-800/20 dark:border-primary-200/20 dark:bg-primary-200/50 md:p-4 animate-float-2">
            <div className="grid h-16 w-16 place-items-center rounded-lg">
              <Code className="h-8 w-8" />
            </div>
          </div>

          <div className="absolute right-0 -top-8 md:-top-0 rounded-lg border bg-primary-200 shadow-sm animate-float border-primary-800/20 dark:border-primary-200/20 dark:bg-primary-200/50 md:p-4 animate-float-3">
            <div className="grid h-16 w-16 place-items-center rounded-lg">
              <Palette className="h-8 w-8" />
            </div>
          </div>

          <div className="absolute -bottom-8 md:bottom-0 right-0 rounded-lg border bg-primary-200 shadow-sm animate-float border-primary-800/20 dark:border-primary-200/20 dark:bg-primary-200/50 md:p-4 animate-float-4">
            <div className="grid h-16 w-16 place-items-center rounded-lg">
              <Box className="h-8 w-8" />
            </div>
          </div>

          {/* Main Content */}
          <div className="mx-auto max-w-3xl text-center text-primary-800 dark:text-primary-200">
            <div className="mb-6 rounded-full border border-primary-800/30 bg-primary-200/50 px-3 md:px-5 lg:px-6 py-2 text-sm text-primary-800 inline-flex items-center gap-2 dark:border-primary-200/30 dark:bg-primary-800/50 dark:text-primary-200 backdrop-blur-xs">
              React <span className="size-2 rounded-full bg-primary-500 animate-pulse" /> TypeScript <span className="size-2 rounded-full bg-primary-500 animate-pulse" /> Tailwind CSS 
              {/* <span className="size-2 rounded-full bg-primary-500 animate-pulse" /> Accessibility */}
            </div>

            <h1 className="mb-6 text-h2 font-bold leading-tight md:text-h1 lg:text-6xl t-shadow">
              <span className="backdrop-blur-lg inline">Build Stunning Interfaces Effortlessly With</span>
              <br />
              <span className="text-primary-500">Aspect UI</span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-primary-800 dark:text-primary-200 t-shadow">
              A professionally crafted component library that helps you build stunning interfaces faster. Fully customizable, accessible, and designed for modern web applications.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="rounded-lg px-8 py-3 font-medium transition-colors bg-primary-200/50 shadow-sm backdrop-blur-lg t-shadow border border-primary-800/10 dark:bg-primary-800/50 dark:border-primary-400/10">
                Get Started
              </Button>

              <div className="rounded-lg font-medium text-base border border-primary-800/30 bg-primary-200/50 text-primary-800 dark:border-primary-200/30 dark:bg-primary-800/50 dark:text-primary-200 hover:bg-primary-200 dark:hover:bg-primary-800 px-6 py-3 inline-flex items-center gap-2 backdrop-blur-xs t-shadow" onClick={() => {
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