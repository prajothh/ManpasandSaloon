import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

export function GalleryOptionCard({
  title,
  desc,
  time,
  onBook,
  bookLabel = 'Book Now',
  imageSrc,
  imageAlt,
}: {
  title: string
  desc: string
  time: string
  onBook: () => void
  bookLabel?: string
  imageSrc?: string
  imageAlt?: string
}) {
  if (imageSrc) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 ring-1 ring-white/5 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.65)] transition-[box-shadow,transform,border-color] duration-300 ease-out hover:border-gold-500/35 hover:shadow-[0_20px_48px_-16px_rgba(212,175,55,0.22)] hover:ring-gold-500/35"
      >
        <img
          src={imageSrc}
          alt={imageAlt ?? title}
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/95 via-black/75 to-transparent"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-5">
          <div className="translate-y-3 opacity-90 transition-all duration-300 ease-in group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="text-center text-xl font-black tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            {title}
            </h3>
            <Button
              size="sm"
              variant="secondary"
              onClick={onBook}
              className="mt-4 w-full"
            >
              {bookLabel}
            </Button>
          </div>
        </div>
      </motion.article>
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="group rounded-3xl border border-white/10 bg-black/20 p-5 ring-1 ring-white/5 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.65)] transition-[box-shadow,transform,border-color] duration-300 ease-out hover:border-gold-500/35 hover:shadow-[0_20px_48px_-16px_rgba(212,175,55,0.22)] hover:ring-gold-500/35"
    >
      {imageSrc && (
        <div className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <img
            src={imageSrc}
            alt={imageAlt ?? title}
            className="h-44 w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">{desc}</p>
        </div>
        <span className="shrink-0 rounded-full border border-gold-500/25 bg-gold-500/10 px-3 py-1 text-xs font-semibold text-gold-200">
          {time}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-white/80">
          <Check className="h-4 w-4 text-gold-200" aria-hidden />
          After-care
        </div>
        <Button size="sm" variant="secondary" onClick={onBook}>
          {bookLabel}
        </Button>
      </div>
    </motion.article>
  )
}

