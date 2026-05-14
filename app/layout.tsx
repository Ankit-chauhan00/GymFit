import localFont from 'next/font/local'
import "./globals.css";

const iceland = localFont({
  src:"../public/fonts/iceland.ttf",
  variable:"--font-iceland",
  weight:"100 200 300 400 500 600 700 800 800 900",
})

const frans = localFont({
  src:"../public/fonts/frans.ttf",
  variable:"--font-frans",
  weight:"100 200 300 400 500 600 700 800 800 900",
})

const asap= localFont({
  src:"../public/fonts/asap.ttf",
  variable:"--font-asap",
  weight:"100 200 300 400 500 600 700 800 800 900",
})

export const metadata ={
  title: "GYMFIT",
  description: "Live Healthy and make Environment Healthy"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${iceland.variable} ${frans.variable} ${asap.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
