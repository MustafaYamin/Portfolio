import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mustafa Yamin - Frontend Developer & AI Enthusiast",
  description: "Professional portfolio of Mustafa Yamin, showcasing web development projects, skills, and experience in frontend development and AI technologies.",
  keywords: ["Mustafa Yamin", "Frontend Developer", "AI Enthusiast", "Web Development", "React", "Next.js"],
  authors: [{ name: "Mustafa Yamin" }],
  openGraph: {
    title: "Mustafa Yamin - Frontend Developer & AI Enthusiast",
    description: "Professional portfolio showcasing web development projects and AI expertise",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <div className="container mx-auto px-4">
            <main>{children}</main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}