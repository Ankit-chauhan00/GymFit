'use client'
// since we are using props themes and some other client side functionalities we need to use it as a client component

import { ThemeProviderProps } from 'next-themes'
import { ThemeProvider as NextThemesProvider } from 'next-themes'


const ThemeProvider = ({children, ...props}: ThemeProviderProps ) => {
  return (
    <NextThemesProvider {...props}>
        {children}
    </NextThemesProvider>
  )
}

export default ThemeProvider;