import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Agents Assemble - Why?',
    description: 'A minimal UI demo for AI agent decision transparency',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

