import type { Metadata } from 'next'
import AudioPlayer from './AudioPlayer'

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
              叽叽喳喳的小鸟
            </p>
          </div>

          <div className="w-full lg:flex lg:justify-end">
            <AudioPlayer />
          </div>
        </div>
      </section>
    </main>
  )
}
