"use client"
import Image from "next/image"
import { H3, Text } from "@/app/ui/Elements"
import { Phase } from "./ApproachSection"
import { useScopedUI } from "@react-zero-ui/core"
import { LazyTiltedWrapper } from "@/app/utils/lazy-splash-cursor"

const TAB_ACTIVE_CLASS: Record<string, string> = {
  "1": "phase-1:text-slate-200 phase-1:border-none",
  "2": "phase-2:text-slate-200 phase-2:border-none",
  "3": "phase-3:text-slate-200 phase-3:border-none",
  "4": "phase-4:text-slate-200 phase-4:border-none",
  "5": "phase-5:text-slate-200 phase-5:border-none",
}

const PANEL_VISIBLE_CLASS: Record<PhaseId, string> = {
  "1": "phase-1:opacity-100 phase-1:pointer-events-auto phase-1:relative",
  "2": "phase-2:opacity-100 phase-2:pointer-events-auto phase-2:relative",
  "3": "phase-3:opacity-100 phase-3:pointer-events-auto phase-3:relative",
  "4": "phase-4:opacity-100 phase-4:pointer-events-auto phase-4:relative",
  "5": "phase-5:opacity-100 phase-5:pointer-events-auto phase-5:relative",
}

const PANEL_ANIMATION_CLASS: Record<PhaseId, string> = {
  "1": "phase-1:translate-x-0 phase-1:delay-200",
  "2": "phase-2:translate-x-0 phase-2:delay-200",
  "3": "phase-3:translate-x-0 phase-3:delay-200",
  "4": "phase-4:translate-x-0 phase-4:delay-200",
  "5": "phase-5:translate-x-0 phase-5:delay-200",
}

const PANEL_RIGHT_ANIMATION_CLASS: Record<PhaseId, string> = {
  "1": "phase-1:animate-fade-in phase-1:scale-x-100 phase-1:duration-500 phase-1:delay-200",
  "2": "phase-2:animate-fade-in phase-2:scale-x-100 phase-2:duration-500 phase-2:delay-200",
  "3": "phase-3:animate-fade-in phase-3:scale-x-100 phase-3:duration-500 phase-3:delay-200",
  "4": "phase-4:animate-fade-in phase-4:scale-x-100 phase-4:duration-500 phase-4:delay-200",
  "5": "phase-5:animate-fade-in phase-5:scale-x-100 phase-5:duration-500 phase-5:delay-200",
}
const PANEL_DETAILS_ANIMATION_CLASS: Record<PhaseId, string> = {
  "1": "phase-1:[animation-delay:calc(var(--d,1)*100ms+200ms)] phase-1:animate-fade-in ",
  "2": "phase-2:[animation-delay:calc(var(--d,2)*100ms+200ms)] phase-2:animate-fade-in ",
  "3": "phase-3:[animation-delay:calc(var(--d,3)*100ms+200ms)] phase-3:animate-fade-in ",
  "4": "phase-4:[animation-delay:calc(var(--d,4)*100ms+200ms)] phase-4:animate-fade-in ",
  "5": "phase-5:[animation-delay:calc(var(--d,1)*100ms+200ms)] phase-5:animate-fade-in ",
}

type PhaseId = "1" | "2" | "3" | "4" | "5"

export const ApproachTabs: React.FC<{ phases: Phase[] }> = ({ phases }) => {
  if (phases.length > 5) throw new Error("ApproachTabs max 5 phases")

  const [phase, setPhase] = useScopedUI<PhaseId>("phase", "1")

  const tabWidthPct = 100 / phases.length

  return (
    <div data-phase={phase} ref={setPhase.ref} className="flex flex-col gap-4 sm:gap-8" style={{ "--phases-length": phases.length } as React.CSSProperties}>
      {/* Phase Navigation - Tab Style */}
      <div className="relative rounded-2xl sm:py-2">
        {/* Animated Background for Active Tab */}
        <div
          className={
            "absolute inset-0 left-0 z-1 rounded-xl bg-gradient-to-br from-slate-500 to-slate-900 [box-shadow:var(--button-shadow)] sm:inset-y-2" +
            "phase-1:translate-x-[0%] phase-2:translate-x-[100%] phase-3:translate-x-[200%] phase-4:translate-x-[300%] phase-5:translate-x-[400%] transition-transform duration-300 ease-in-out"
          }
          style={{
            width: `${tabWidthPct}%`,
          }}
        />

        {/* Tab Buttons */}
        <div className="relative grid w-full [grid-template-columns:repeat(var(--phases-length),minmax(0,1fr))] justify-between">
          {phases.map((phase) => {
            const phaseId = String(phase.id) as PhaseId
            const tw = TAB_ACTIVE_CLASS[phaseId]
            return (
              <button
                key={phase.id}
                onClick={() => setPhase(phaseId)}
                className={`group relative rounded-xl p-4 text-center shadow-inner shadow-slate-900/20 transition-all duration-500 sm:p-2 ${tw} `}
              >
                <div className="absolute inset-0 z-0 rounded-xl border border-slate-300" />
                <div className="flex flex-col items-center gap-1">
                  <div className="z-1">
                    <Image src={phase.icon} alt={phase.title} width={50} height={50} />
                    <span className="text-xs font-semibold text-nowrap max-sm:hidden">Phase {phase.id}</span>
                  </div>
                  <span className="z-1 text-xs leading-tight opacity-75 sm:text-nowrap">{phase.title}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Phase Content */}
      <div className="relative min-h-[320px] lg:max-h-[400px]">
        {phases.map((phase) => {
          const pid = String(phase.id) as PhaseId
          const tw = PANEL_VISIBLE_CLASS[pid]
          const animation = PANEL_ANIMATION_CLASS[pid]
          const animation2 = PANEL_RIGHT_ANIMATION_CLASS[pid]
          const detailsAnimation = PANEL_DETAILS_ANIMATION_CLASS[pid]
          return (
            <div
              key={pid}
              className={`pointer-events-none absolute inset-0 grid translate-x-5 grid-cols-1 items-start gap-4 opacity-0 transition-all duration-300 ease-in-out md:gap-12 lg:grid-cols-2 ${tw} ${animation}`}
            >
              {/* Left */}
              <div className="space-y-2 md:space-y-4">
                <div className="flex items-center gap-4 max-sm:justify-center">
                  <Image src={phase.icon} alt={phase.title} width={100} height={100} className="max-sm:h-20 max-sm:w-20" />
                  <div>
                    <H3 className="mb-2 max-sm:text-xl">{phase.title}</H3>
                    <Text size="sm">{phase.subtitle}</Text>
                  </div>
                </div>
                <Text>{phase.description}</Text>
                <ul className="hidden list-disc space-y-2 md:block">
                  {phase.details.map((detail, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-3 opacity-0 ${detailsAnimation}`}
                      style={{ ["--d" as keyof React.CSSProperties]: i + 1 } as React.CSSProperties}
                    >
                      <div className="aspect-square h-2 w-2 rounded-full bg-slate-900" />
                      <Text size="sm" className="leading-relaxed text-slate-600">
                        {detail}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right */}
              <div className={`relative aspect-[5/3] w-full scale-x-50 opacity-0 delay-300 ${animation2} transition-all duration-300 ease-in-out`}>
                <LazyTiltedWrapper
                  height="100%"
                  width="100%"
                  scaleOnHover={1.05}
                  rotateAmplitude={8}
                  className="h-full w-full transform-gpu [box-shadow:var(--button-shadow)]"
                >
                  <div className="relative h-full w-full">{phase.feature}</div>
                </LazyTiltedWrapper>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
