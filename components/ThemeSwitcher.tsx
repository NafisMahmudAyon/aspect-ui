'use client'
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
        className="rounded-lg border border-primary-800 bg-primary-100 p-1.5 transition-all duration-300 hover:bg-primary-50 dark:border-primary-800 dark:bg-primary-900 dark:hover:border-primary-600 dark:hover:bg-primary-900">
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
            className="list-menu absolute right-0 top-[calc(100%+24px)] w-[150px] rounded-xl border border-primary-100 bg-primary-100 p-4 dark:border-primary-800 dark:bg-primary-900 ">
            <button
              className="theme-switch flex items-center gap-3 w-full  hover:border-primary-50/50 border-b border-transparent transition-all duration-150 ease-in-out rounded-xs py-2 px-2"
              onClick={() => {
                setTheme('light')
                setShowTheme(false)
              }}>
              <SunIcon size={24} className='grow-0' />
              Light
            </button>
            <button
              className="theme-switch flex items-center gap-3 w-full hover:border-primary-100/50 border-b border-transparent transition-all duration-150 ease-in-out rounded-xs py-2 px-2"
              onClick={() => {
                setTheme('dark')
                setShowTheme(false)
              }}>
              <MoonIcon size={24} className='grow-0' />
              Dark
            </button>
            <button
              className="theme-switch flex items-center gap-3 w-full  hover:border-primary-100/50 border-b border-transparent transition-all duration-150 ease-in-out rounded-xs py-2 px-2"
              onClick={() => {
                setTheme('system')
                setShowTheme(false)
              }}>
              <Desktop size={24} />
              System
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ) : null
}

export default ThemeSwitcher
