import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Check,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Crown,
  Hand,
  Palette,
  Scissors,
  Sparkles,
  Flower2,
  Users,
  Star,
} from 'lucide-react'
import { BookingModal } from '../components/BookingModal'
import { Button } from '../components/ui/Button'
import { galleryItems as gallery } from '../data/gallery'

import logoImg from '../assets/Gemini_Generated_Image_xs2a0exs2a0exs2a.png'

import backgroundImg from '../assets/backgrond image new.jpg'

const services = [
  {
    title: 'Hair Styling',
    desc: 'Modern cuts, fades, and styling tailored for unisex looks.',
    meta: '45 - 60 min',
    category: 'Hair & style',
    icon: Scissors,
  },
  {
    title: 'Beauty & Glow',
    desc: 'Care-focused beauty treatments for a clean, premium finish.',
    meta: '40 - 55 min',
    category: 'Beauty & care',
    icon: Sparkles,
  },
  {
    title: 'Hair Art',
    desc: 'Creative patterns and standout designs for special events.',
    meta: '60 min',
    category: 'Hair & style',
    icon: Palette,
  },
  {
    title: 'Wedding Makeup',
    desc: 'Bridal glam for day/night looks with precise detail.',
    meta: '75 - 90 min',
    category: 'Weddings & events',
    icon: Crown,
  },
  {
    title: 'Manicure & Pedicure',
    desc: 'Polish, shaping, and clean finishing for hands and feet.',
    meta: '35 - 50 min',
    category: 'Beauty & care',
    icon: Hand,
  },
  {
    title: 'Wedding Mehndi',
    desc: 'Intricate mehndi patterns with a bridal-ready glow.',
    meta: '90 - 120 min',
    category: 'Weddings & events',
    icon: Flower2,
  },
] as const

const pricing = [
  {
    name: 'Glow Session',
    price: '799',
    period: 'per session',
    emphasis: false,
    perks: ['Hair styling', 'Beauty glow add-on', 'Premium after-care tips'],
  },
  {
    name: 'Wedding Pro',
    price: '1499',
    period: 'per session',
    emphasis: true,
    perks: ['Wedding makeup', 'Touch-up kit guidance', 'Bridal-ready finishing'],
  },
  {
    name: 'Mehndi & Glam',
    price: '1699',
    period: 'per session',
    emphasis: false,
    perks: ['Wedding mehndi', 'Creative hair art option', 'After-care product guidance'],
  },
] as const

export default function Home() {
  const prefersReducedMotion = false
  const [bookingOpen, setBookingOpen] = useState(false)
  const [contactStatus, setContactStatus] = useState<
    'idle' | 'success'
  >('idle')

  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const [feedbackStatus, setFeedbackStatus] = useState<'idle' | 'success'>(
    'idle'
  )
  const [feedbackError, setFeedbackError] = useState<string | null>(null)
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    rating: 0,
    comment: '',
  })

  const navItems = useMemo(
    () => [
      { id: 'services', label: 'Services' },
      { id: 'gallery', label: 'Gallery' },
      { id: 'pricing', label: 'Pricing' },
      { id: 'contact', label: 'Contact' },
      { id: 'feedback', label: 'Feedback' },
    ],
    []
  )

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main>
        
        <section className="relative overflow-hidden pb-20">
         
          <div className="absolute inset-0 z-0">
            <img
              src={backgroundImg}
              alt=""
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/16" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            {/* Fade image into page background at the bottom (no hard edge) */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-black via-black/75 to-transparent sm:h-52 md:h-64"
              aria-hidden="true"
            />
          </div>

          <header className="relative z-20 ">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-gold-500/30 bg-gradient-to-br from-gold-500/20 to-white/0 shadow-glow">
                  <img
                    src={logoImg}
                    alt="Manpasand Saloon logo"
                    className="h-7 w-7 object-contain"
                    loading="eager"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight text-white">
                    Manpasand Unisex Saloon
                  </p>
                  <p className="text-xs text-zinc-300">Cuts • Beard • Hygiene</p>
                </div>
              </div>

              <nav
                className="flex min-w-0 flex-1 items-center justify-center gap-5 overflow-x-auto whitespace-nowrap sm:gap-7"
                aria-label="Primary"
              >
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-sm font-medium text-zinc-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] hover:text-white transition"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex shrink-0 items-center gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setBookingOpen(true)}
                >
                  Book now <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Hero content */}
          <div className="relative z-10 mx-auto max-w-7xl px-6 pt-10 sm:pt-14">
    <div className="max-w-2xl">

      {/* TOP BADGE */}
      <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-black/40 px-4 py-2 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-gold-400" />
        <span className="text-xs font-semibold tracking-widest text-gold-300 uppercase">
          Premium grooming experience
        </span>
      </div>

      {/* HEADING */}
      <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white sm:text-6xl">
        Precision cuts <br /> for modern men.
      </h1>

      {/* SUBTEXT */}
      <p className="mt-5 text-lg text-zinc-300">
        A Nike-level look for your everyday. Fresh fades, clean lines,
        and beard sculpting in a hygiene-first setup.
      </p>

      {/* BUTTONS */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={() => setBookingOpen(true)}
          className="flex items-center gap-2 rounded-xl bg-gold-500 px-6 py-3 text-sm font-semibold text-black hover:bg-gold-400 transition"
        >
          Book Appointment <ArrowRight size={18} />
        </button>

        <a
          href="#services"
          className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
        >
          Explore Services
        </a>
      </div>

      {/* STATS */}
      <div className="mt-10 flex gap-6">
        {[
          { k: '40+', v: 'Years experience' },
          { k: '100%', v: 'Hygiene checked' },
          { k: '4.9', v: 'Client satisfaction' },
        ].map((item) => (
          <div
            key={item.k}
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md"
          >
            <p className="text-xl font-bold text-gold-300">{item.k}</p>
            <p className="text-xs text-zinc-300">{item.v}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.28em] text-gold-200">
                Services
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Built for sharp lines.
              </h2>
              <p className="mt-3 max-w-xl text-zinc-300">
                Unisex menu — pick a session, we’ll handle comfort, hygiene, and
                finishing. See real work in the{' '}
                <a
                  href="#gallery"
                  className="font-medium text-gold-200 decoration-gold-500/40 underline-offset-4 transition hover:text-gold-100 hover:decoration-gold-400/60"
                >
                  gallery
                </a>
                .
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:items-end">
              <Button size="sm" onClick={() => setBookingOpen(true)}>
                Book a session
              </Button>
              <p className="text-xs text-zinc-500">
                Est. times shown — may vary by style
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => {
              const Icon = s.icon
              return (
                <motion.article
                  key={s.title}
                  initial={
                    prefersReducedMotion ? false : { opacity: 0, y: 12 }
                  }
                  whileInView={
                    prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.45,
                    delay: prefersReducedMotion ? 0 : idx * 0.04,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="group relative flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)] transition-[border-color,box-shadow,background-color] duration-300 hover:border-gold-500/35 hover:shadow-[0_16px_40px_-16px_rgba(212,175,55,0.12)] focus-within:border-gold-500/40 focus-within:ring-2 focus-within:ring-gold-500/25 focus-within:ring-offset-2 focus-within:ring-offset-black"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-gold-500/20 bg-gradient-to-br from-gold-500/15 to-black/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                      <Icon className="h-5 w-5 text-gold-200" aria-hidden />
                    </div>
                    <span className="shrink-0 rounded-full border border-gold-500/20 bg-black/30 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-gold-200">
                      {s.meta}
                    </span>
                  </div>
                  <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    {s.category}
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold tracking-tight text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-300">
                    {s.desc}
                  </p>
                  <div className="mt-5 h-px bg-gradient-to-r from-white/0 via-white/15 to-gold-500/30 opacity-60 transition-opacity group-hover:opacity-100" />
                  <a
                    href="#gallery"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition group-hover:gap-3 group-hover:text-white"
                  >
                    See in gallery
                    <ArrowRight className="h-4 w-4 text-gold-200 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </motion.article>
              )
            })}
          </div>
        </section>

        <section
          className="mx-auto max-w-7xl px-4 pb-14"
          aria-label="Highlights"
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-white/0 to-gold-500/10 p-6 md:p-8">
            <div
              className="flex gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="list"
            >
              {[
                {
                  title: 'Fast check-in',
                  desc: 'Skip queues with smart time slots.',
                },
                {
                  title: 'Barber-grade hygiene',
                  desc: 'Sanitised tools and clean touchpoints.',
                },
                { title: 'Premium finishing', desc: 'Styling that looks good all day.' },
              ].map((b) => (
                <div
                  key={b.title}
                  className="min-w-[280px] flex-1 rounded-2xl border border-white/10 bg-black/20 p-5 md:min-w-0"
                  role="listitem"
                >
                  <p className="text-sm font-bold">{b.title}</p>
                  <p className="mt-2 text-sm text-zinc-300">{b.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-zinc-300">
                Ready for a fresh look?
              </p>
              <div className="flex gap-3">
                <Button size="sm" onClick={() => setBookingOpen(true)}>
                  Book a time
                </Button>
                <a
                  href="#pricing"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                >
                  View pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="min-w-0 flex-1">
              <p className="text-xs uppercase tracking-[0.28em] text-gold-200">
                Gallery
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Looks for every vibe.
              </h2>
              <p className="mt-3 max-w-xl text-zinc-300">
                Our chairs are unisex by design — same craft, same gold
                standard. Hover the tiles for a closer look.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="relative overflow-hidden rounded-2xl border border-gold-500/35 bg-gradient-to-br from-gold-500/[0.12] via-black/40 to-amber-500/[0.08] p-[1px] shadow-[0_0_32px_-8px_rgba(212,175,55,0.45)]">
                <div className="flex items-center gap-3 rounded-[0.9rem] bg-black/55 px-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold-500/25 bg-gradient-to-br from-gold-500/20 to-transparent">
                    <Users className="h-5 w-5 text-gold-200" aria-hidden />
                  </div>
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold-300/90">
                      Unisex studio
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-white">
                      All genders · All styles
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-wrap gap-2 sm:flex-col sm:gap-2"
                aria-label="Inclusive services"
              >
                {['Cuts & colour', 'Skin & glow', 'Nails & events'].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.7rem] font-medium tracking-wide text-zinc-300"
                    >
                      {chip}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <Link
                key={g.slug}
                to={`/gallery/${g.slug}`}
                className="block min-h-0 rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label={`Open ${g.label} — full page`}
              >
              <motion.div
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 20 }
                }
                whileInView={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.2 }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : {
                        duration: 0.4,
                        delay: i * 0.04,
                        ease: [0.25, 0.1, 0.25, 1],
                      }
                }
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: -8,
                        transition: {
                          type: 'tween',
                          duration: 0.22,
                          ease: 'easeOut',
                        },
                      }
                }
                className="group relative aspect-[3/4] w-full min-h-0 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.65)] ring-1 ring-white/5 transition-[box-shadow,transform] duration-300 ease-out hover:shadow-[0_20px_48px_-16px_rgba(212,175,55,0.22)] hover:ring-gold-500/35"
              >
                <img
                  src={g.imageSrc}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width:640px) 100vw, 33vw"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105"
                />

                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-500/15 via-transparent to-amber-500/5 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                  aria-hidden
                />

                <div className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/35 bg-black/70 shadow-glow transition-transform duration-300 ease-out group-hover:scale-105">
                  <Sparkles className="h-4 w-4 text-gold-200" />
                </div>

                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[55%] bg-gradient-to-t from-black via-black/80 to-transparent"
                  aria-hidden
                />

                <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center px-5 pb-6 pt-16 text-center sm:px-6 sm:pb-7">
                  <p className="text-lg font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                    {g.label}
                  </p>
                  <p className="mt-2 max-w-[22rem] text-sm leading-relaxed text-zinc-200/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.75)]">
                    {g.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold-500/35 bg-black/65 px-3.5 py-1.5 text-xs font-semibold text-gold-200 shadow-[0_4px_20px_-4px_rgba(212,175,55,0.35)]">
                    <Check className="h-4 w-4 shrink-0 text-gold-300" />
                    After-care included
                  </div>
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-4 py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-gold-200">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              Simple plans. Premium results.
            </h2>
            <p className="mt-3 max-w-xl text-zinc-300">
              Choose your session. We’ll match your style and timing.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {pricing.map((p, idx) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={[
                  'relative overflow-hidden rounded-3xl border bg-white/5 p-7',
                  p.emphasis
                    ? 'border-gold-500/40 shadow-glow'
                    : 'border-white/10 hover:border-gold-500/25',
                ].join(' ')}
              >
                {p.emphasis && (
                  <div className="absolute right-5 top-5 rounded-full border border-gold-500/30 bg-gold-500/15 px-3 py-1 text-xs font-bold text-gold-200">
                    Best value
                  </div>
                )}
                <h3 className="text-xl font-black">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-black tracking-tight text-white">
                    {p.price}
                  </span>
                  <span className="text-sm text-zinc-300">{p.period}</span>
                </div>
                <div className="mt-6 space-y-3">
                  {p.perks.map((perk) => (
                    <div
                      key={perk}
                      className="flex items-start gap-2 text-sm text-zinc-200"
                    >
                      <Check className="mt-0.5 h-4 w-4 text-gold-200" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7">
                  <Button
                    className="w-full"
                    variant={p.emphasis ? 'primary' : 'secondary'}
                    size="md"
                    onClick={() => setBookingOpen(true)}
                  >
                    Book {p.name}
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-gold-200">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Let&apos;s get you styled.
              </h2>
              <p className="mt-3 text-zinc-300">
                Send your details and we’ll confirm your session. (No backend
                wired yet—this is UI-ready.)
              </p>

              <div className="mt-7 space-y-3">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-gold-200" />
                  <div>
                    <p className="text-sm font-bold">Your Location</p>
                    <p className="mt-1 text-sm text-zinc-300">
                      Add your saloon address here.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Phone className="mt-0.5 h-5 w-5 text-gold-200" />
                  <div>
                    <p className="text-sm font-bold">Call / WhatsApp</p>
                    <p className="mt-1 text-sm text-zinc-300">
                      +91 98XXXXXX12
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Mail className="mt-0.5 h-5 w-5 text-gold-200" />
                  <div>
                    <p className="text-sm font-bold">Email</p>
                    <p className="mt-1 text-sm text-zinc-300">
                      hello@manpasandsaloon.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
                <p className="text-sm font-bold">Follow the work</p>
                <p className="mt-2 text-sm text-zinc-300">
                  Post your look. Get updates on new styles.
                </p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="#"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-gold-200" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-gold-200">
                    Quick message
                  </p>
                  <p className="mt-2 text-lg font-bold">Book via contact</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2">
                  <p className="text-xs text-zinc-300">Average reply</p>
                  <p className="text-sm font-bold text-gold-200">5-10 min</p>
                </div>
              </div>

              <div className="mt-6">
                {contactStatus === 'success' ? (
                  <div className="rounded-2xl border border-gold-500/30 bg-gold-500/10 p-5">
                    <p className="text-sm font-bold text-gold-200">
                      Message sent.
                    </p>
                    <p className="mt-1 text-sm text-zinc-300">
                      We’ll get back to you shortly.
                    </p>
                    <div className="mt-4">
                      <Button
                        size="md"
                        onClick={() => {
                          setContactStatus('idle')
                          setContactForm({ name: '', phone: '', message: '' })
                        }}
                      >
                        Send another
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setContactStatus('success')
                      setContactForm({ name: '', phone: '', message: '' })
                      window.setTimeout(() => setContactStatus('idle'), 4500)
                    }}
                    className="space-y-4"
                  >
                    <label className="block space-y-1">
                      <span className="block text-sm font-medium text-zinc-200">
                        Name
                      </span>
                      <input
                        required
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm((p) => ({ ...p, name: e.target.value }))
                        }
                        className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-gold-500/40 focus:ring-2 focus:ring-gold-500/30"
                        placeholder="e.g., Rahul Sharma"
                      />
                    </label>

                    <label className="block space-y-1">
                      <span className="block text-sm font-medium text-zinc-200">
                        Phone
                      </span>
                      <input
                        required
                        value={contactForm.phone}
                        onChange={(e) =>
                          setContactForm((p) => ({
                            ...p,
                            phone: e.target.value,
                          }))
                        }
                        className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-gold-500/40 focus:ring-2 focus:ring-gold-500/30"
                        placeholder="e.g., 9876543210"
                      />
                    </label>

                    <label className="block space-y-1">
                      <span className="block text-sm font-medium text-zinc-200">
                        Message
                      </span>
                      <textarea
                        required
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm((p) => ({
                            ...p,
                            message: e.target.value,
                          }))
                        }
                        rows={4}
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-gold-500/40 focus:ring-2 focus:ring-gold-500/30"
                        placeholder="Tell us your preferred service & timing…"
                      />
                    </label>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs text-zinc-400">
                        By sending, you agree to be contacted for scheduling.
                      </p>
                      <Button type="submit">Send message</Button>
                    </div>
                  </form>
                )}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-bold">Need instant booking?</p>
                <p className="mt-2 text-sm text-zinc-300">
                  Use the booking modal for service selection and time.
                </p>
                <div className="mt-4">
                  <Button size="md" variant="secondary" onClick={() => setBookingOpen(true)}>
                    Open booking modal
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="feedback"
          className="border-t border-white/5 bg-gradient-to-b from-black to-zinc-950/80"
        >
          <div className="mx-auto max-w-7xl px-4 py-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gold-200">
                  Feedback
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight">
                  Tell us how we did.
                </h2>
                <p className="mt-3 max-w-md text-zinc-300">
                  Your visit matters — rate your experience and help us keep
                  the chair comfortable for everyone. (Demo form — connect a
                  backend when you&apos;re ready.)
                </p>
                <ul className="mt-8 space-y-3 text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                    <span>Honest ratings shape training and service tweaks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                    <span>Optional name — share as much as you like.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.6)] md:p-8">
                {feedbackStatus === 'success' ? (
                  <div className="rounded-2xl border border-gold-500/30 bg-gold-500/10 p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/30 bg-black/30">
                      <Star className="h-7 w-7 fill-gold-400 text-gold-400" />
                    </div>
                    <p className="text-lg font-bold text-gold-100">
                      Thanks for the feedback.
                    </p>
                    <p className="mt-2 text-sm text-zinc-300">
                      We read every note and use it to improve the studio.
                    </p>
                    <div className="mt-6">
                      <Button
                        size="md"
                        onClick={() => {
                          setFeedbackStatus('idle')
                          setFeedbackForm({ name: '', rating: 0, comment: '' })
                          setFeedbackError(null)
                        }}
                      >
                        Leave another review
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form
                    className="space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault()
                      setFeedbackError(null)
                      if (feedbackForm.rating < 1) {
                        setFeedbackError('Tap a star rating before sending.')
                        return
                      }
                      if (!feedbackForm.comment.trim()) {
                        setFeedbackError('Add a short comment so we know what stood out.')
                        return
                      }
                      setFeedbackStatus('success')
                      setFeedbackForm({ name: '', rating: 0, comment: '' })
                    }}
                  >
                    <div>
                      <p className="text-sm font-medium text-zinc-200">
                        Overall experience
                      </p>
                      <div
                        className="mt-3 flex flex-wrap items-center gap-1"
                        role="group"
                        aria-label="Star rating"
                      >
                        {[1, 2, 3, 4, 5].map((n) => (
                          <button
                            key={n}
                            type="button"
                            onClick={() =>
                              setFeedbackForm((p) => ({ ...p, rating: n }))
                            }
                            className="rounded-xl p-1.5 text-zinc-500 transition hover:scale-110 hover:text-gold-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/50"
                            aria-label={`${n} out of 5 stars`}
                            aria-pressed={feedbackForm.rating >= n}
                          >
                            <Star
                              className={`h-8 w-8 transition-colors sm:h-9 sm:w-9 ${
                                n <= feedbackForm.rating
                                  ? 'fill-gold-400 text-gold-400 drop-shadow-[0_0_12px_rgba(212,175,55,0.45)]'
                                  : 'fill-zinc-800 text-zinc-600'
                              }`}
                            />
                          </button>
                        ))}
                        {feedbackForm.rating > 0 && (
                          <span className="ml-2 text-sm font-semibold text-gold-200/90">
                            {feedbackForm.rating}/5
                          </span>
                        )}
                      </div>
                    </div>

                    <label className="block space-y-1">
                      <span className="text-sm font-medium text-zinc-200">
                        Name{' '}
                        <span className="font-normal text-zinc-500">
                          (optional)
                        </span>
                      </span>
                      <input
                        value={feedbackForm.name}
                        onChange={(e) =>
                          setFeedbackForm((p) => ({
                            ...p,
                            name: e.target.value,
                          }))
                        }
                        className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-gold-500/40 focus:ring-2 focus:ring-gold-500/30"
                        placeholder="First name or initials"
                      />
                    </label>

                    <label className="block space-y-1">
                      <span className="text-sm font-medium text-zinc-200">
                        Your feedback
                      </span>
                      <textarea
                        required
                        value={feedbackForm.comment}
                        onChange={(e) =>
                          setFeedbackForm((p) => ({
                            ...p,
                            comment: e.target.value,
                          }))
                        }
                        rows={4}
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-gold-500/40 focus:ring-2 focus:ring-gold-500/30"
                        placeholder="What went well? What could be better?"
                      />
                    </label>

                    {feedbackError && (
                      <p
                        className="text-sm text-amber-200/90"
                        role="alert"
                      >
                        {feedbackError}
                      </p>
                    )}

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs text-zinc-500">
                        Feedback is for our team only — not shown on the site yet.
                      </p>
                      <Button type="submit">Send feedback</Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 bg-black/90">
          <div className="mx-auto max-w-7xl px-4 py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold">Manpasand Unisex Saloon</p>
                <p className="mt-2 text-sm text-zinc-400">
                  Premium grooming with a hygiene-first mindset.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/10 transition"
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setBookingOpen(true)}
                >
                  Book now
                </Button>
              </div>
            </div>
            <p className="mt-8 text-xs text-zinc-500">
              © {new Date().getFullYear()} Prajoth Vitekar. All rights reserved.
            </p>
          </div>
        </footer>
      </main>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  )
}
