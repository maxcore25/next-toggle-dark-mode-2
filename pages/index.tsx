import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-4xl">Current Theme Mode: {theme}</h1>
      <button
        className="mt-5 bg-black px-6 py-2 text-white dark:bg-white dark:text-black"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Toggle to {theme === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  )
}

export default Home
