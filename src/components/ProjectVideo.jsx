import { useRef, useState } from 'react'

export default function ProjectVideo({ src, caption, title }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState(false)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
    } else {
      v.pause()
    }
  }

  return (
    <figure>
      <div
        className="relative rounded-xl overflow-hidden border border-navy-lighter bg-navy aspect-video cursor-pointer group/video"
        onClick={togglePlay}
      >
        {!error ? (
          <video
            ref={videoRef}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-cool gap-2">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <p className="text-xs font-mono-code px-4 text-center">
              Add demo video at <span className="text-cyan-neon">public{src}</span>
            </p>
          </div>
        )}

        {/* Play/Pause overlay */}
        {!error && (
          <div
            className={`absolute inset-0 flex items-center justify-center bg-navy/50 transition-opacity duration-300 ${
              playing ? 'opacity-0 group-hover/video:opacity-100' : 'opacity-100'
            }`}
          >
            <span className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-neon text-navy shadow-lg shadow-cyan-neon/30 hover:scale-110 transition-transform">
              {playing ? (
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.75 5.25h3v13.5h-3zM14.25 5.25h3v13.5h-3z" />
                </svg>
              ) : (
                <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5.14v13.72a1 1 0 001.5.87l11-6.86a1 1 0 000-1.74l-11-6.86A1 1 0 008 5.14z" />
                </svg>
              )}
            </span>
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-xs text-gray-cool font-mono-code flex items-start gap-2">
        <svg className="w-4 h-4 text-cyan-neon shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
        </svg>
        <span>{caption}</span>
      </figcaption>
    </figure>
  )
}
