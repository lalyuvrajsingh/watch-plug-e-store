'use client'
import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`relative rounded-full w-12 h-6 flex items-center justify-center p-1 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-700'
      } border border-gray-600/30`}
    >
      <motion.div
        layout
        className={`absolute w-5 h-5 rounded-full ${
          theme === 'dark' ? 'bg-gray-400' : 'bg-gray-300'
        }`}
        animate={{ x: theme === 'dark' ? 12 : -12 }}
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
} 