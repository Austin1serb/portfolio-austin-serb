import Image from "next/image"
import clsx from "clsx"
import profilePhoto from "../images/profile.webp"
import signature from "../images/signature.png"
import { Text, Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about-austin-serb" className={clsx("border-y border-gray-200 bg-white", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500">About</span>
          <br />
          Austin Serb
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src={profilePhoto} alt="Austin Serb Headshot" className="custom-shadow aspect-[4/4.5]" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text as="h2" size="lg" className="font-medium">
                Austin Serb
              </Text>
              <p className="text-sm text-gray-500">
                Full-Stack Engineer @
                <a href="https://www.serbyte.net/" target="_blank" rel="noopener" className="text-nowrap text-slate-900 hover:underline">
                  Serbyte Development
                </a>
              </p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-500">
            <p>
              <strong className="font-semibold text-slate-900">I've always been interested in how things work.</strong>
            </p>

            <p>
              When I was a kid, I would stay up late and sneak onto the computer so I could explore the internet. It felt like a new world.
              <br />
              <br />I didn't know it then, but that curiosity would eventually turn into building software, designing systems, and creating tools for real
              businesses.
            </p>

            <p>
              Today, people come to me with ideas, and I help turn them into real products - apps, websites, or systems their customers or team can actually
              use.
            </p>
            <p>Outside of building software, I like to work out, wrench on cars, trade stocks, or learn something completely new.</p>

            {/* signature */}
            <Image src={signature} alt="Austin Serb Signature" className="relative mt-6 -ml-3 h-12 w-auto" />
          </Typography>
        </div>
      </div>
    </section>
  )
}
