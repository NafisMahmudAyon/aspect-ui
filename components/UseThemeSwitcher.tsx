'use client'

import { useEffect, useState } from 'react'

export const UseThemeSwitcher = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const preferDarkQuery = '(prefers-color-scheme: dark)'
  const [mode, setMode] = useState<string>('')

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)
    const userPref = window.localStorage.getItem('theme')

    const handleChange = () => {
      const userTheme = userPref || (mediaQuery.matches ? 'dark' : 'light')
      setMode(userTheme)
      document.documentElement.classList.toggle('dark', userTheme === 'dark')
    }

    handleChange()

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
        if(mode === "dark") {
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark")
        } 
        if(mode === 'light') {
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark")
        }

    }, [mode])

  return [mode, setMode]
}
