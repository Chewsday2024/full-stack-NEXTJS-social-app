'use client'

import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"


function ModeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <Button
    className="cursor-pointer"
      variant={'outline'}
      size={'icon'}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

      <span className="sr-only">
        Toggle theme
      </span>
    </Button>
  )
}
export default ModeToggle