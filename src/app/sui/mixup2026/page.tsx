import type { Metadata } from 'next'
import AudioPlayer from './AudioPlayer'

const socialLinks = [
  {
    href: 'https://space.bilibili.com/1954091502',
    label: 'B站',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M8.2 4.1a.9.9 0 0 1 1.27 0L12 6.62l2.53-2.52a.9.9 0 0 1 1.27 1.27l-1.91 1.91h2.02c2.47 0 4.09 1.56 4.09 3.96v5.06c0 2.4-1.62 3.96-4.09 3.96H8.09C5.62 20.26 4 18.7 4 16.3v-5.06c0-2.4 1.62-3.96 4.09-3.96h2.02L8.2 5.37a.9.9 0 0 1 0-1.27Zm-.11 5.18c-1.32 0-2.09.72-2.09 1.96v5.06c0 1.24.77 1.96 2.09 1.96h7.82c1.32 0 2.09-.72 2.09-1.96v-5.06c0-1.24-.77-1.96-2.09-1.96H8.09Zm1.16 3.08c.55 0 1 .45 1 1v1.16a1 1 0 1 1-2 0v-1.16c0-.55.45-1 1-1Zm5.5 0c.55 0 1 .45 1 1v1.16a1 1 0 1 1-2 0v-1.16c0-.55.45-1 1-1Z"
        />
      </svg>
    ),
  },
  {
    href: 'https://weibo.com/u/7785772638',
    label: '微博',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M18.45 5.18c1.77.74 2.55 2.51 1.88 4.26a.82.82 0 1 1-1.53-.58c.35-.93-.04-1.82-.98-2.21a.82.82 0 1 1 .63-1.47Zm-9.62 4.44c.86-.18 1.77-.23 2.67-.13.26-.96.95-2.15 2.13-2.33.79-.13 1.4.17 1.82.7.35.44.48.97.53 1.35 1.56.7 2.52 1.86 2.52 3.19 0 2.52-3.4 4.58-7.6 4.58s-7.6-2.06-7.6-4.58c0-1.13.69-2.15 1.82-2.94l-.02-.08c-.18-.78.3-1.56 1.07-1.74.58-.14 1.15.09 1.49.52.36-.48.79-.88 1.17-1.15a.9.9 0 1 1 1.04 1.47c-.44.31-.84.74-1.04 1.14Zm2.07 5.54c3.05 0 5.6-1.35 5.6-2.76s-2.55-2.76-5.6-2.76-5.6 1.35-5.6 2.76 2.55 2.76 5.6 2.76Zm6.97-7.17c.86.36 1.23 1.21.91 2.06a.76.76 0 0 1-1.42-.54c.02-.05-.02-.11-.08-.14a.76.76 0 0 1 .59-1.38Zm-8.82 3.53a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Zm3.17.17a.82.82 0 1 1 0 1.64.82.82 0 0 1 0-1.64Z"
        />
      </svg>
    ),
  },
]

export const metadata: Metadata = {
  title: 'Mixup 2026',
  description: '一个带背景图和音频播放器的移动端页面。',
}

export default function Mixup2026Page() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#09090b] text-white"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(8, 9, 14, 0.2) 0%, rgba(8, 9, 14, 0.78) 48%, rgba(8, 9, 14, 0.96) 100%), url('/img/sui_xingdian.jpg')",
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(125,211,252,0.16),transparent_22%),radial-gradient(circle_at_20%_80%,rgba(244,114,182,0.12),transparent_24%)]" />

      <section className="relative flex min-h-screen items-end px-5 pb-8 pt-10 sm:px-8 sm:pb-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col justify-between gap-10 lg:min-h-[88vh] lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.42em] text-white/60">Sui / Mixup 2026</p>
            <h1 className="mt-5 text-[clamp(2.8rem,12vw,6rem)] font-semibold leading-[0.94] tracking-[-0.06em]">
              岁己SUI
            </h1>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/72 sm:text-base">
              喜欢唱歌的叽叽喳喳的小鸟！
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 text-sm font-medium text-white/90 shadow-[0_12px_32px_rgba(0,0,0,0.24)] backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/16 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-[#09090b]"
                  aria-label={`打开岁己SUI的${link.label}`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="w-full lg:flex lg:justify-end">
            <AudioPlayer />
          </div>
        </div>
      </section>
    </main>
  )
}
