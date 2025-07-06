'use client'
import { Button } from '@/app/src'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Desktop, MoonIcon, SunIcon } from './icons/Icons'

const ThemeSwitcher = () => {
  const { setTheme } = useTheme()
  const [client, setClient] = useState(false)
  const [showTheme, setShowTheme] = useState(false)

  useEffect(() => {
    let ignore = false
    if (!ignore) {
      setClient(true)
    }
    return () => {
      ignore = true
    }
  }, [])

  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        showTheme && setShowTheme(false)
      }
    }

    const handleClickOutsideModal = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.list-menu')) {
        showTheme && setShowTheme(false)
      }
    }

    if (showTheme) {
      document.addEventListener('keydown', handleEscapeKeyPress)
      document.addEventListener('mousedown', handleClickOutsideModal)
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress)
      document.removeEventListener('mousedown', handleClickOutsideModal)
    }
  }, [showTheme])

  return client ? (
    <div className="relative">
      <button
        onClick={() => setShowTheme(!showTheme)}
        className="rounded-lg border border-primary bg-primary p-1.5 transition-all duration-300 text-primary-foreground">
        <AnimatePresence>
          <motion.span
            key="light"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="hidden dark:block">
            <MoonIcon size={24} />
          </motion.span>
          <motion.span
            key="dark"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="block dark:hidden">
            <SunIcon size={24} />
          </motion.span>
          <span className="sr-only">Toggle theme</span>
        </AnimatePresence>
      </button>
      <AnimatePresence>
        {showTheme && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, y: 10 }}
            className="list-menu absolute right-0 top-[calc(100%+24px)] w-[150px] rounded-xl border border-border/90 bg-primary p-4 space-y-2">
            <Button
              variant='ghost'
              className="theme-switch flex items-center hover:bg-primary-foreground/10 gap-3 w-full transition-all duration-150 ease-in-out rounded-md"
              onClick={() => {
                setTheme('light')
                setShowTheme(false)
              }}>
              <SunIcon size={24} className='grow-0' />
              Light
            </Button>
            <Button
              variant='ghost'
              className="theme-switch flex items-center hover:bg-primary-foreground/10 gap-3 w-full transition-all duration-150 ease-in-out rounded-md"
              onClick={() => {
                setTheme('dark')
                setShowTheme(false)
              }}>
              <MoonIcon size={24} className='grow-0' />
              Dark
            </Button>
            <Button
              variant='ghost'
              className="theme-switch flex items-center hover:bg-primary-foreground/10 gap-3 w-full transition-all duration-150 ease-in-out rounded-md"
              onClick={() => {
                setTheme('system')
                setShowTheme(false)
              }}>
              <Desktop size={24} />
              System
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ) : null
}

export default ThemeSwitcher
