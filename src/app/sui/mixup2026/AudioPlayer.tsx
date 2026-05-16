'use client'

import { useEffect, useRef, useState } from 'react'

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [blocked, setBlocked] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) {
      return
    }

    const syncPlayState = () => setIsPlaying(!audio.paused)
    const tryAutoplay = async () => {
      try {
        await audio.play()
        setBlocked(false)
      } catch {
        setBlocked(true)
      }
    }

    void tryAutoplay()

    audio.addEventListener('play', syncPlayState)
    audio.addEventListener('pause', syncPlayState)

    return () => {
      audio.removeEventListener('play', syncPlayState)
      audio.removeEventListener('pause', syncPlayState)
    }
  }, [])

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) {
      return
    }

    if (audio.paused) {
      try {
        await audio.play()
        setBlocked(false)
      } catch {
        setBlocked(true)
      }
      return
    }

    audio.pause()
  }

  return (
    <div className="w-full max-w-md">
      <div className="rounded-[28px] border border-white/15 bg-black/35 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-white/50">Mixup 2026</p>
            <h2 className="mt-2 text-xl font-semibold text-white">饼饼的干</h2>
            <p className="mt-2 text-sm leading-6 text-white/68">
              小岁给饼干岁的甜蜜语音的说，快听快听
            </p>
          </div>
          <span className="mt-1 rounded-full border border-white/15 px-3 py-1 text-[11px] text-white/70">
            {isPlaying ? 'Playing' : 'Paused'}
          </span>
        </div>

        <button
          type="button"
          onClick={togglePlayback}
          className="w-full rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90 active:scale-[0.99]"
        >
          {isPlaying ? '暂停播放' : blocked ? '点击播放音频' : '开始播放'}
        </button>

        <audio
          ref={audioRef}
          controls
          loop
          preload="auto"
          className="mt-4 w-full opacity-90"
        >
          <source src="/media/冰冰的感.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  )
}
