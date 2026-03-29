import { useMemo, useState } from 'react'
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
} from 'lucide-react'
import { BookingModal } from './components/BookingModal'
import { Button } from './components/ui/Button'

import logoImg from './assets/Gemini_Generated_Image_xs2a0exs2a0exs2a.png'

import backgroundImg from './BackgroundImage.png'

import galleryHairStyling from './assets/hair styling.png'
import galleryBeautyGlow from './assets/Beauty and glow.png'
import galleryHairArt from './assets/hair art new.png'
import galleryWeddingMakeup from './assets/wedding makeup.png'
import galleryManiPedi from './assets/mani and pedi.png'
import galleryWeddingMehndi from './assets/wedding mehdi.png'

const services = [
  {
    title: 'Hair Styling',
    desc: 'Modern cuts, fades, and styling tailored for unisex looks.',
    meta: '45 - 60 min',
    icon: Scissors,
  },
  {
    title: 'Beauty & Glow',
    desc: 'Care-focused beauty treatments for a clean, premium finish.',
    meta: '40 - 55 min',
    icon: Sparkles,
  },
  {
    title: 'Hair Art',
    desc: 'Creative patterns and standout designs for special events.',
    meta: '60 min',
    icon: Palette,
  },
  {
    title: 'Wedding Makeup',
    desc: 'Bridal glam for day/night looks with precise detail.',
    meta: '75 - 90 min',
    icon: Crown,
  },
  {
    title: 'Manicure & Pedicure',
    desc: 'Polish, shaping, and clean finishing for hands and feet.',
    meta: '35 - 50 min',
    icon: Hand,
  },
  {
    title: 'Wedding Mehndi',
    desc: 'Intricate mehndi patterns with a bridal-ready glow.',
    meta: '90 - 120 min',
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

const gallery = [
  {
    label: 'Hair Styling',
    alt: 'Hair styling salon photo',
    imageSrc: galleryHairStyling,
    gradient: 'from-amber-500/25 to-black',
    description: 'Cuts, fades, and styling for a clean finish.',
  },
  {
    label: 'Beauty & Glow',
    alt: 'Beauty and glow salon photo',
    imageSrc: galleryBeautyGlow,
    gradient: 'from-gold-500/25 to-black',
    description: 'Facials and glow treatments for radiant skin.',
  },
  {
    label: 'Hair Art',
    alt: 'Hair art styling photo',
    imageSrc: galleryHairArt,
    gradient: 'from-amber-400/25 to-black',
    description: 'Creative patterns for events and celebrations.',
  },
  {
    label: 'Wedding Makeup',
    alt: 'Wedding makeup photo',
    imageSrc: galleryWeddingMakeup,
    gradient: 'from-yellow-400/25 to-black',
    description: 'Bridal glam with precise, long-lasting detail.',
  },
  {
    label: 'Mani & Pedi',
    alt: 'Manicure and pedicure photo',
    imageSrc: galleryManiPedi,
    gradient: 'from-amber-300/25 to-black',
    description: 'Shaping, polish, and hygienic nail care.',
  },
  {
    label: 'Wedding Mehndi',
    alt: 'Wedding mehndi photo',
    imageSrc: galleryWeddingMehndi,
    gradient: 'from-gold-400/25 to-black',
    description: 'Intricate bridal mehndi with elegant finishing.',
  },
] as const

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [contactStatus, setContactStatus] = useState<
    'idle' | 'success'
  >('idle')

  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const navItems = useMemo(
    () => [
      { id: 'services', label: 'Services' },
      { id: 'gallery', label: 'Gallery' },
      { id: 'pricing', label: 'Pricing' },
      { id: 'contact', label: 'Contact' },
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
                    Manpasand Men&apos;s Saloon
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
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-gold-200">
                Services
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Built for sharp lines.
              </h2>
              <p className="mt-3 max-w-xl text-zinc-300">
                Choose a session. We’ll handle the rest—style, comfort, and
                finishing.
              </p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setBookingOpen(true)}>
              Book from here
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, idx) => {
              const Icon = s.icon
              return (
                <motion.article
                  key={s.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-gold-500/30 hover:bg-white/7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-black/30">
                      <Icon className="h-5 w-5 text-gold-200" />
                    </div>
                    <span className="text-xs font-semibold text-gold-200">
                      {s.meta}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{s.desc}</p>
                  <div className="mt-5 h-px bg-gradient-to-r from-white/0 via-white/10 to-gold-500/25 opacity-0 transition group-hover:opacity-100" />
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-white/80">
                    Learn more <ArrowRight className="h-4 w-4 text-gold-200" />
                  </div>
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
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-gold-200">
              Gallery
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">
              The glow-up grid.
            </h2>
            <p className="mt-3 max-w-xl text-zinc-300">
              Hover the tiles. Each session ends with clean finishing and a
              premium look.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group relative min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <div className="relative aspect-[4/3] w-full max-h-[200px] overflow-hidden sm:max-h-[220px]">
                  <img
                    src={g.imageSrc}
                    alt={g.alt}
                    loading="lazy"
                    sizes="(max-width:640px) 100vw, 33vw"
                    className="h-full w-full min-h-0 min-w-0 max-h-full max-w-full object-cover object-center bg-black/10 object-center opacity-100 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>

                <div className="relative p-6">
                  <p className="text-sm font-bold text-white">{g.label}</p>
                  <p className="mt-2 text-sm text-zinc-300">
                    {g.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-gold-200">
                    <Check className="h-4 w-4" />
                    After-care included
                  </div>
                </div>
              </motion.div>
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
              © {new Date().getFullYear()} Manpasand Men&apos;s Saloon. All rights reserved.
            </p>
          </div>
        </footer>
      </main>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  )
}
