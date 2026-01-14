// app/components/Clarity.tsx
import Script from "next/script"

const CLARITY_ID = "t4bi2igt7h"

export function Clarity() {
  if (process.env.NEXT_PUBLIC_DISABLE_CLARITY === "true") return null

  return (
    <Script
      id="ms-clarity"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
(function(c,l,a,r,i,t,y){
  if (c[a] && typeof c[a] !== "function") { try { delete c[a]; } catch(_) {} }
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_ID}");
        `,
      }}
    />
  )
}
