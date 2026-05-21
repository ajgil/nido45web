"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function GlobalAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const hasAttempted = useRef(false)

  useEffect(() => {
    // Delay audio initialization to not block page load
    const initTimeout = setTimeout(() => {
      const audio = audioRef.current
      if (!audio || hasAttempted.current) return
      hasAttempted.current = true

      // Configure audio - lower priority loading
      audio.volume = 0.4
      audio.loop = true

      // Function to attempt playback
      const attemptPlay = async () => {
        if (isPlaying || !audio) return
        
        try {
          await audio.play()
          setIsPlaying(true)
        } catch {
          // Silently fail - will retry on user gesture
        }
      }

      // Try to play after a delay (don't block initial render)
      setTimeout(attemptPlay, 100)

      // Listen for any user gesture to start audio
      const userEvents = ['click', 'touchstart', 'keydown', 'scroll']
      const handleUserGesture = () => {
        attemptPlay()
        userEvents.forEach(e => document.removeEventListener(e, handleUserGesture))
      }
      userEvents.forEach(e => document.addEventListener(e, handleUserGesture, { once: true, passive: true }))

      return () => {
        userEvents.forEach(e => document.removeEventListener(e, handleUserGesture))
      }
    }, 1000) // Wait 1 second after page load before initializing audio

    return () => clearTimeout(initTimeout)
  }, [isPlaying])

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return
    
    // If not playing yet, try to start
    if (!isPlaying) {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => {})
    }
    
    const newMuted = !isMuted
    audio.muted = newMuted
    setIsMuted(newMuted)
  }

  return (
    <>
      {/* Audio element - lazy loaded to not block page render */}
      <audio
        ref={audioRef}
        src="/audio/birds.mp3"
        loop
        preload="none"
        playsInline
      />
      
      {/* Floating mute button - fixed position */}
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 p-3 bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:text-[#c9a55c] hover:border-[#c9a55c]/50 transition-all z-50 rounded-full shadow-lg"
        aria-label={isMuted ? "Activar sonido" : "Silenciar"}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </>
  )
}
