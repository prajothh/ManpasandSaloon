import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { Button } from './ui/Button'

type ServiceId =
  | 'hair'
  | 'beauty'
  | 'hairArt'
  | 'weddingMakeup'
  | 'manicurePedicure'
  | 'mehndi'

export function BookingModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const panelRef = useRef<HTMLDivElement | null>(null)
  const nameRef = useRef<HTMLInputElement | null>(null)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState<ServiceId>('hair')
  const [time, setTime] = useState('Soon')
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const services = useMemo(
    () => [
      { id: 'hair' as const, label: 'Hair Styling' },
      { id: 'beauty' as const, label: 'Beauty & Glow' },
      { id: 'hairArt' as const, label: 'Hair Art' },
      { id: 'weddingMakeup' as const, label: 'Wedding Makeup' },
      { id: 'manicurePedicure' as const, label: 'Manicure & Pedicure' },
      { id: 'mehndi' as const, label: 'Wedding Mehndi' },
    ],
    []
  )

  useEffect(() => {
    if (!open) return
    setStatus('idle')
    // Focus the first field for accessibility.
    window.setTimeout(() => nameRef.current?.focus(), 50)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // No backend yet: show a success state and reset fields.
    setStatus('success')
    window.setTimeout(() => {
      onClose()
      setName('')
      setPhone('')
      setService('hair')
      setTime('Soon')
      setStatus('idle')
    }, 1200)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-hidden={!open}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onMouseDown={onClose}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Book an appointment"
            className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 shadow-glow"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gold-300">
                  Appointment
                </p>
                <h2 className="mt-1 text-lg font-bold text-white">
                  Book your session
                </h2>
              </div>
              <button
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                onMouseDown={(e) => e.stopPropagation()}
                onClick={onClose}
                aria-label="Close booking modal"
                type="button"
              >
                <X className="h-5 w-5 text-gold-200" />
              </button>
            </div>

            <div className="px-5 py-5">
              {status === 'success' ? (
                <div className="rounded-2xl border border-gold-500/30 bg-gold-500/10 p-4">
                  <p className="text-sm font-semibold text-gold-200">
                    Request received.
                  </p>
                  <p className="mt-1 text-sm text-zinc-300">
                    We’ll contact you shortly to confirm your time.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-1">
                      <span className="block text-sm font-medium text-zinc-200">
                        Full name
                      </span>
                      <input
                        ref={nameRef}
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-gold-500/40 focus:ring-2 focus:ring-gold-500/30"
                        placeholder="e.g., Rahul Sharma"
                      />
                    </label>

                    <label className="space-y-1">
                      <span className="block text-sm font-medium text-zinc-200">
                        Phone
                      </span>
                      <input
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-gold-500/40 focus:ring-2 focus:ring-gold-500/30"
                        placeholder="e.g., 9876543210"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="space-y-1">
                      <span className="block text-sm font-medium text-zinc-200">
                        Service
                      </span>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value as ServiceId)}
                        className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none focus:border-gold-500/40 focus:ring-2 focus:ring-gold-500/30"
                      >
                        {services.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="space-y-1">
                      <span className="block text-sm font-medium text-zinc-200">
                        Preferred time
                      </span>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none focus:border-gold-500/40 focus:ring-2 focus:ring-gold-500/30"
                      >
                        {['Soon', 'Today Evening', 'Tomorrow', 'This Week'].map(
                          (t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          )
                        )}
                      </select>
                    </label>
                  </div>

                  <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-zinc-400">
                      You’ll get a confirmation message after submitting.
                    </p>
                    <Button type="submit">Confirm request</Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

