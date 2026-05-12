import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Timezone Coordinator — Find Optimal Meeting Times',
  description: 'Analyzes your team timezones and work preferences to suggest the best meeting times that minimize after-hours participation.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e04e99c2-10e7-4fc5-b7c5-4578a571acf6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
