import { Metadata } from "next"

const PORTFOLIO_URL = "https://www.austinserb.com"
const COMPANY_URL = "https://www.serbyte.net"
const CREDIT_PATH = "/serbyte-dev-credit"

export const metadata: Metadata = {
  title: "Web Design by Austin Serb · Serbyte Development",
  description: "Credit page for sites built by Austin Serb of Serbyte Development.",
  alternates: { canonical: CREDIT_PATH },
}

export default function SerbyteDevCreditPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-16 text-center text-gray-900">
      <div className="max-w-2xl space-y-4">
        <p className="text-sm tracking-[0.2em] text-gray-500 uppercase">Site Credit</p>
        <h1 className="text-2xl font-semibold">Web design by Austin Serb · Serbyte Development</h1>
        <p className="text-base text-gray-700">Crafted with Next.js, React, and custom Zero-UI components for performance and conversions.</p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-blue-700">
          <a href={PORTFOLIO_URL} className="underline underline-offset-4">
            View Austin&apos;s portfolio
          </a>
          <span className="text-gray-400">•</span>
          <a href={COMPANY_URL} className="underline underline-offset-4">
            Visit Serbyte Development
          </a>
        </div>
      </div>
    </main>
  )
}
