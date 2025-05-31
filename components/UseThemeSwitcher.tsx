'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const UseThemeSwitcher = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mode, setMode] = useState<string>('')

  useEffect(() => {
    if (resolvedTheme) {
      setMode(resolvedTheme)
    }
  }, [resolvedTheme])

  useEffect(() => {
    if (mode === 'dark' || mode === 'light') {
      setTheme(mode)
    }
  }, [mode, setTheme])

  return [mode, setMode]
}
