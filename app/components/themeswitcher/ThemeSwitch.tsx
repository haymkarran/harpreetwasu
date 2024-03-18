// app/components/ThemeSwitch.tsx
'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  console.log(setTheme);

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <div>loading...</div>
  )

  if (resolvedTheme === 'dark') {
    return <FiSun size={24} onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <FiMoon size={24} onClick={() => setTheme('dark')} />
  }

}