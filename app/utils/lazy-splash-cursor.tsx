"use client"
import dynamic from "next/dynamic"
import { useMediaQuery, useTouch } from "../hooks/useMediaQuery"
import { useEffect, useState } from "react"
import { TiltedWrapperProps } from "../ui/TiltedWrapper"

// hoist this to module scope (not inside the component)
export const SplashCursor = /*#__PURE__*/ dynamic(() => import("../components/SplashCursor").then((m) => m.default), {
  ssr: false,
  loading: () => null,
})

export function LazySplashCursor() {
  const hasFinePointer = useMediaQuery("(pointer:fine)")
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)")
  const [cursorMoved, setCursorMoved] = useState(false)

  useEffect(() => {
    if (!hasFinePointer || reduceMotion || cursorMoved) return
    const onFirstMove = () => setCursorMoved(true)
    // fire once, then auto-remove
    window.addEventListener("pointermove", onFirstMove, { once: true })
    return () => window.removeEventListener("pointermove", onFirstMove)
  }, [hasFinePointer, reduceMotion, cursorMoved])

  return cursorMoved ? <SplashCursor /> : null
}

export const TiltedWrapper = /*#__PURE__*/ dynamic(() => import("../ui/TiltedWrapper").then((m) => m.TiltedWrapper), {
  ssr: false,
  loading: () => null,
})

export function LazyTiltedWrapper({ children, ...props }: TiltedWrapperProps) {
  const isTouch = useTouch()
  return isTouch ? (
    <div className="h-full w-full transform-gpu rounded-xl [box-shadow:var(--button-shadow)]">{children}</div>
  ) : (
    <TiltedWrapper {...props}>{children}</TiltedWrapper>
  )
}
