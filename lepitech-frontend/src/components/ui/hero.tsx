import { Button } from "./button"

export function Hero() {
  const scrollToSearch = () => {
    const element = document.getElementById("search-section")

    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#f5fbf8] px-6 py-24 text-center text-slate-900 dark:bg-[#050b09] dark:text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,_rgba(52,211,153,0.16),_transparent_22%),radial-gradient(circle_at_right_center,_rgba(52,211,153,0.16),_transparent_22%),radial-gradient(circle_at_top_center,_rgba(52,211,153,0.08),_transparent_18%),linear-gradient(180deg,_rgba(255,255,255,0.92),_rgba(245,251,248,0.98))] dark:bg-[radial-gradient(circle_at_left_center,_rgba(52,211,153,0.26),_transparent_24%),radial-gradient(circle_at_right_center,_rgba(52,211,153,0.26),_transparent_24%),radial-gradient(circle_at_top_center,_rgba(52,211,153,0.08),_transparent_18%),linear-gradient(180deg,_rgba(5,12,10,0.82),_rgba(2,6,5,0.92))]" />
      <div className="absolute inset-0 opacity-24 [background-image:radial-gradient(rgba(34,197,94,0.25)_1px,transparent_1px)] [background-size:82px_82px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.92),rgba(0,0,0,0.5)_22%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.42)_78%,rgba(0,0,0,0.88))] dark:opacity-70 dark:[background-image:radial-gradient(rgba(74,222,128,0.6)_1px,transparent_1px)]" />

      <svg
        aria-hidden="true"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        className="absolute inset-0 hidden h-full w-full dark:block"
      >
        <defs>
          <linearGradient id="heroGlowDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6ee7b7" stopOpacity="1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="heroLinesDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.1" />
          </linearGradient>
          <filter id="heroBlurDark" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        <g opacity="0.92">
          <path
            d="M 0 360 C 150 160, 290 160, 430 290 S 720 450, 860 300 S 1140 150, 1320 250 S 1510 430, 1600 310"
            fill="none"
            stroke="url(#heroGlowDark)"
            strokeWidth="8"
            filter="url(#heroBlurDark)"
          />
          <path
            d="M 0 390 C 150 190, 290 190, 430 320 S 720 480, 860 330 S 1140 180, 1320 280 S 1510 460, 1600 340"
            fill="none"
            stroke="url(#heroLinesDark)"
            strokeWidth="2"
          />
          <path
            d="M 0 385 C 150 185, 290 185, 430 315 S 720 475, 860 325 S 1140 175, 1320 275 S 1510 455, 1600 335"
            fill="none"
            stroke="url(#heroGlowDark)"
            strokeWidth="8"
            filter="url(#heroBlurDark)"
          />
          <path
            d="M 0 410 C 150 210, 290 210, 430 340 S 720 500, 860 350 S 1140 200, 1320 300 S 1510 480, 1600 360"
            fill="none"
            stroke="url(#heroLinesDark)"
            strokeWidth="2"
          />
          <g fill="#6ee7b7" fillOpacity="1">
            <circle cx="310" cy="96" r="4" />
            <circle cx="1180" cy="85" r="3" />
            <circle cx="1412" cy="225" r="3" />
            <circle cx="1280" cy="655" r="4" />
            <circle cx="410" cy="720" r="3" />
            <circle cx="40" cy="370" r="3" />
          </g>
        </g>
      </svg>

      <svg
        aria-hidden="true"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        className="absolute inset-0 block h-full w-full dark:hidden"
      >
        <defs>
          <linearGradient id="heroGlowLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="heroLinesLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.48" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.08" />
          </linearGradient>
          <filter id="heroBlurLight" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        <g opacity="0.44">
          <path
            d="M 0 360 C 150 160, 290 160, 430 290 S 720 450, 860 300 S 1140 150, 1320 250 S 1510 430, 1600 310"
            fill="none"
            stroke="url(#heroGlowLight)"
            strokeWidth="7"
            filter="url(#heroBlurLight)"
          />
          <path
            d="M 0 390 C 150 190, 290 190, 430 320 S 720 480, 860 330 S 1140 180, 1320 280 S 1510 460, 1600 340"
            fill="none"
            stroke="url(#heroLinesLight)"
            strokeWidth="2"
          />
          <g fill="#10b981" fillOpacity="0.22">
            <circle cx="310" cy="96" r="4" />
            <circle cx="1180" cy="85" r="3" />
            <circle cx="1412" cy="225" r="3" />
            <circle cx="1280" cy="655" r="4" />
            <circle cx="410" cy="720" r="3" />
            <circle cx="40" cy="370" r="3" />
          </g>
        </g>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-white/14 dark:from-black/10 dark:via-transparent dark:to-black/18" />

      <div className="relative z-10 mx-auto max-w-4xl rounded-[2rem] border border-emerald-200/60 bg-white/88 px-8 py-12 shadow-[0_20px_60px_rgba(16,185,129,0.1)] backdrop-blur-md dark:border-white/10 dark:bg-black/24 sm:px-12 sm:py-16">
        <div className="mx-auto mb-8 h-px w-44 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_20px_rgba(16,185,129,0.45)]" />

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 drop-shadow-[0_0_18px_rgba(16,185,129,0.15)] dark:text-white sm:text-6xl">
          Willkommen bei LepiTech
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-slate-700 dark:text-emerald-100/90 sm:text-xl">
          Wir zeigen dir, was du brauchst.
        </p>

        <div className="mx-auto mt-8 h-px w-44 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_20px_rgba(16,185,129,0.45)]" />

        <div className="mt-8 flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-[hsl(var(--primary))] text-white shadow-lg shadow-emerald-500/25 hover:bg-[hsl(var(--accent))]"
            onClick={scrollToSearch}
          >
            Jetzt starten
          </Button>
        </div>
      </div>
    </section>
  )
}