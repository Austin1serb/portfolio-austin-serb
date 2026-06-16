import Image, { ImageProps } from "next/image"
import { ReactElement } from "react"
import { Socials } from "./Socials"
import { socialLinks } from "./Footer/FooterV2"
import { MotionDiv } from "../utils/lazy-ui"

interface ImageRevealProps extends Omit<ImageProps, "placeholder"> {
  className?: string
}

export function ImageReveal({ className = "", ...img }: ImageRevealProps): ReactElement {
  return (
    <div className={`relative max-w-60 overflow-hidden rounded-2xl ${className} `}>
      <MotionDiv
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0 }}
        style={{
          transformOrigin: "right",
        }}
        className="absolute inset-0 bg-slate-900"
        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      />

      {/* IMAGE ------------------------------------------------------*/}
      <MotionDiv
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.3, type: "spring", bounce: 0 }}
        style={{ transformOrigin: "right" }}
        className="absolute inset-0"
        viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      >
        <Socials socialLinks={socialLinks} className="absolute right-4 bottom-4 z-5" iconClassName="md:opacity-95 hover:opacity-100" />
        <Image
          id="headshot"
          {...img}
          fill
          alt="Austin Serb Profile Photo"
          className={`rounded-2xl object-cover`}
          sizes="(max-width: 560px) 300px, (max-width: 768px) 500px, 50vw"
        />
      </MotionDiv>
    </div>
  )
}
