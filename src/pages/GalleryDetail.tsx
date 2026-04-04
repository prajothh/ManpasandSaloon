import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft,  Scissors, Sparkles } from 'lucide-react'
import { BookingModal, type ServiceId } from '../components/BookingModal'

import { GalleryOptionCard } from '../components/gallery/GalleryOptionCard'
import { getGalleryItem } from '../data/gallery'
import logoImg from '../assets/Gemini_Generated_Image_xs2a0exs2a0exs2a.png'
import sidePartStylingImg from '../assets/side part styling.png'
import sideBackSlickImg from '../assets/side back slick .jpg'
import messyHairStylingImg from '../assets/messy hair styling.png'
import spikeHairStylingImg from '../assets/spike hair styling.jpg'
import quiffStylingImg from '../assets/Quiff style.png'
import pompadourStylingImg from '../assets/Pompadour Styling.jpg'
import texturedHairStylingImg from '../assets/Textured Hair Styling.jpg'
import combOverStylingImg from '../assets/comb_over_crew_cut_taper.webp'
import frontLiftStylingImg from '../assets/front lift styling.png'
import sideSweepStylingImg from '../assets/Side Sweep Styling .png'
import straightHairStylingWomenImg from '../assets/Straight Hair Styling women.png'
import softCurlStylingWomenImg from '../assets/Soft Curl Styling new.jpg'
import beachWavesStylingWomenImg from '../assets/Beach Waves Styling .jpg'

export default function GalleryDetail() {
  const { slug } = useParams<{ slug: string }>()
  const item = slug ? getGalleryItem(slug) : undefined
  const [bookingOpen, setBookingOpen] = useState(false)

  if (!item) {
    return <Navigate to="/" replace />
  }

  const bookingInitialService: ServiceId =
    item.slug === 'hair-styling'
      ? 'hair'
      : item.slug === 'beauty-glow'
        ? 'beauty'
        : item.slug === 'hair-art'
          ? 'hairArt'
          : item.slug === 'wedding-makeup'
            ? 'weddingMakeup'
            : item.slug === 'mani-pedi'
              ? 'manicurePedicure'
              : 'mehndi'

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-xl py-1 pr-2 outline-none ring-offset-2 ring-offset-black focus-visible:ring-2 focus-visible:ring-gold-500/50"
          >
            <img
              src={logoImg}
              alt="Manpasand Saloon"
              className="h-9 w-9 object-contain"
            />
            <span className="text-sm font-semibold text-white">
              Manpasand Saloon
            </span>
          </Link>
          <Link
            to="/#gallery"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            Back to gallery
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-20 pt-8 sm:pt-12">

        {item.slug === 'hair-styling' && (
          <motion.section
            className="mt-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.6)] sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.28em] text-gold-200">
                    Variety
                  </p>
                  <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                    Women & Men styling options
                  </h2>
                  <p className="mt-2 max-w-2xl text-zinc-300">
                    Same unisex chair. Choose your vibe and we’ll finish
                    it with premium after-care.
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-gold-500/25 bg-black/20 px-4 py-3">
                  <Scissors className="h-5 w-5 text-gold-200" aria-hidden />
                  <p className="text-sm font-semibold text-gold-200">
                    Built for every hair type.
                  </p>
                </div>
              </div>

              <motion.div
                className="mt-8 flex flex-col gap-8"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex flex-col"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/35 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] ring-1 ring-white/5 sm:p-6">
                    <h3 className="text-xl font-black tracking-tight text-white">
                      Men Styling
                    </h3>
                    <p className="mt-2 text-sm text-zinc-300">
                      Signature cuts and clean finishing with long-lasting hold.
                    </p>
                    <div className="mt-5 grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        title: 'Side Part Styling',
                        desc: 'Clean side part finish with premium hold and sharp look.',
                        time: '40 - 60 min',
                        imageSrc: sidePartStylingImg,
                      },
                      {
                        title: 'Slick Back Styling',
                        desc: 'Sleek slick-back finish with smooth shine and control.',
                        time: '40 - 60 min',
                        imageSrc: sideBackSlickImg,
                      },
                      {
                        title: 'Messy Hair Styling',
                        desc: 'Textured messy styling with natural volume and durable hold.',
                        time: '40 - 60 min',
                        imageSrc: messyHairStylingImg,
                      },
                      {
                        title: 'Spiky Hair Styling',
                        desc: 'Spiky definition with strong hold and clean finishing.',
                        time: '40 - 60 min',
                        imageSrc: spikeHairStylingImg,
                      },
                      {
                        title: 'Quiff Styling',
                        desc: 'Modern quiff with lift, shape, and premium finish.',
                        time: '40 - 60 min',
                        imageSrc: quiffStylingImg,
                      },
                      {
                        title: 'Pompadour Styling',
                        desc: 'Classic pompadour with strong volume and smooth styling.',
                        time: '45 - 65 min',
                        imageSrc: pompadourStylingImg,
                      },
                      {
                        title: 'Textured Hair Styling',
                        desc: 'Texture-driven styling with movement and natural finish.',
                        time: '40 - 60 min',
                        imageSrc: texturedHairStylingImg,
                      },
                      {
                        title: 'Comb Over Styling',
                        desc: 'Classic comb-over with neat structure and clean hold.',
                        time: '40 - 60 min',
                        imageSrc: combOverStylingImg,
                      },
                      {
                        title: 'Front Lift Styling',
                        desc: 'Front lift volume with controlled shape and polished shine.',
                        time: '40 - 60 min',
                        imageSrc: frontLiftStylingImg,
                      },
                      {
                        title: 'Side Sweep Styling',
                        desc: 'Side-swept style with smooth flow and long-lasting finish.',
                        time: '40 - 60 min',
                        imageSrc: sideSweepStylingImg,
                      },
                    ].map((v) => (
                      <GalleryOptionCard
                        key={v.title}
                        title={v.title}
                        desc={v.desc}
                        time={v.time}
                        imageSrc={v.imageSrc}
                        imageAlt={v.title}
                        onBook={() => setBookingOpen(true)}
                      />
                    ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex flex-col"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/35 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] ring-1 ring-white/5 sm:p-6">
                    <h3 className="text-xl font-black tracking-tight text-white">
                      Women Styling
                    </h3>
                    <p className="mt-2 text-sm text-zinc-300">
                      Fresh looks with smooth movement, soft volume, and
                      camera-ready finishing.
                    </p>
                    <div className="mt-5 grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        title: 'Straight Hair Styling',
                        desc: 'Fresh, smooth styling with a clean camera-ready finish.',
                        time: '45 - 70 min',
                        imageSrc: straightHairStylingWomenImg,
                      },
                      {
                        title: 'Soft Curl Styling',
                        desc: 'Soft curl definition with premium hold and shine.',
                        time: '45 - 70 min',
                        imageSrc: softCurlStylingWomenImg,
                      },
                      {
                        title: 'Beach Waves Styling',
                        desc: 'Natural beachy waves with smooth, touchable movement.',
                        time: '45 - 70 min',
                        imageSrc: beachWavesStylingWomenImg,
                      },
                      {
                        title: 'Blow Dry Styling',
                        desc: 'Polished blowout with silky finish and long-lasting smoothness.',
                        time: '45 - 70 min',
                      },
                      {
                        title: 'Messy Bun Styling',
                        desc: 'Effortless messy bun with secure hold and neat finishing.',
                        time: '60 - 90 min',
                      },
                      {
                        title: 'High Ponytail Styling',
                        desc: 'Bold high ponytail with sleek finish and premium hold.',
                        time: '60 - 90 min',
                      },
                      {
                        title: 'Low Bun Styling',
                        desc: 'Elegant low bun with smooth edges and long-lasting shape.',
                        time: '60 - 90 min',
                      },
                      {
                        title: 'Half-Up Half-Down Styling',
                        desc: 'Balanced half-up structure with smooth volume and shine.',
                        time: '60 - 90 min',
                      },
                      {
                        title: 'Braided Hairstyle (French / Fishtail)',
                        desc: 'Braids with clean placement, definition, and polished finishing.',
                        time: '60 - 90 min',
                      },
                      {
                        title: 'Open Hair Volume Styling',
                        desc: 'Open hair volume with smooth lift and camera-ready movement.',
                        time: '50 - 75 min',
                      },
                    ].map((v) => (
                      <GalleryOptionCard
                        key={v.title}
                        title={v.title}
                        desc={v.desc}
                        time={v.time}
                        imageSrc={v.imageSrc}
                        imageAlt={v.title}
                        onBook={() => setBookingOpen(true)}
                      />
                    ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        )}

        {item.slug === 'beauty-glow' && (
          <section className="mt-12">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.6)] sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.28em] text-gold-200">
                    Variety
                  </p>
                  <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                    Glow for every skin mood
                  </h2>
                  <p className="mt-2 max-w-2xl text-zinc-300">
                    Choose your focus: hydration, clarity, or event-ready radiance.
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-gold-500/25 bg-black/20 px-4 py-3">
                  <Sparkles className="h-5 w-5 text-gold-200" aria-hidden />
                  <p className="text-sm font-semibold text-gold-200">
                    Soft, premium finishes
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'Deep Clean Facial',
                    desc: 'Cleansing, gentle exfoliation, and a polished glow.',
                    time: '40 - 55 min',
                  },
                  {
                    title: 'Hydration Glow',
                    desc: 'Moisture-rich care for smooth, bouncy skin.',
                    time: '35 - 50 min',
                  },
                  {
                    title: 'Clarity Reset',
                    desc: 'Targeted care to calm and refresh uneven texture.',
                    time: '50 - 70 min',
                  },
                  {
                    title: 'Brightening Serum Focus',
                    desc: 'Lightening + glow layering for event-ready radiance.',
                    time: '45 - 65 min',
                  },
                  {
                    title: 'Under-eye + Massage',
                    desc: 'Relaxation focus for a rested, camera-ready look.',
                    time: '25 - 40 min',
                  },
                  {
                    title: 'Consultation First',
                    desc: 'We match products to your skin and goals.',
                    time: '30 - 45 min',
                  },
                ].map((v) => (
                  <GalleryOptionCard
                    key={v.title}
                    title={v.title}
                    desc={v.desc}
                    time={v.time}
                    onBook={() => setBookingOpen(true)}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {item.slug === 'hair-art' && (
          <section className="mt-12">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.6)] sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.28em] text-gold-200">
                    Variety
                  </p>
                  <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                    Occasion-ready hair art
                  </h2>
                  <p className="mt-2 max-w-2xl text-zinc-300">
                    Pick your pattern mood: subtle, bold, or celebration level.
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-gold-500/25 bg-black/20 px-4 py-3">
                  <Sparkles className="h-5 w-5 text-gold-200" aria-hidden />
                  <p className="text-sm font-semibold text-gold-200">
                    Detail-focused styling
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'Event Patterns',
                    desc: 'Creative detailing for parties, functions, and clean contrast.',
                    time: '60 min',
                  },
                  {
                    title: 'Festival Lines',
                    desc: 'Bold line-up style with high-impact finishing.',
                    time: '45 - 60 min',
                  },
                  {
                    title: 'Wedding Hair Art',
                    desc: 'Celebration-grade detailing to match the big day look.',
                    time: '75 - 90 min',
                  },
                  {
                    title: 'Braids + Art Combo',
                    desc: 'Braids styled with statement pattern placement.',
                    time: '60 - 80 min',
                  },
                  {
                    title: 'Color Splash Styling',
                    desc: 'Accent styling for standout photos and night vibes.',
                    time: '45 - 70 min',
                  },
                  {
                    title: 'Quick Touch-up',
                    desc: 'Refresh the lines and finishing before the next event.',
                    time: '30 - 45 min',
                  },
                ].map((v) => (
                  <GalleryOptionCard
                    key={v.title}
                    title={v.title}
                    desc={v.desc}
                    time={v.time}
                    onBook={() => setBookingOpen(true)}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {item.slug === 'wedding-makeup' && (
          <section className="mt-12">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.6)] sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.28em] text-gold-200">
                    Variety
                  </p>
                  <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                    Bride, Groom & Guests
                  </h2>
                  <p className="mt-2 max-w-2xl text-zinc-300">
                    Wedding-ready looks with premium finishing and long wear.
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-gold-500/25 bg-black/20 px-4 py-3">
                  <Sparkles className="h-5 w-5 text-gold-200" aria-hidden />
                  <p className="text-sm font-semibold text-gold-200">
                    Camera-ready makeup
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'Bride Glam Session',
                    desc: 'Bridal base, definition, and premium long-wear finishing.',
                    time: '90 - 120 min',
                  },
                  {
                    title: 'Groom / Clean Minimal',
                    desc: 'Balanced refinement for a natural, sharp wedding look.',
                    time: '60 - 75 min',
                  },
                  {
                    title: 'Guest Party Look',
                    desc: 'Day-to-night glam for photos and comfortable wear.',
                    time: '45 - 60 min',
                  },
                  {
                    title: 'Airbrush-style Base',
                    desc: 'Light, smooth base for an even, radiant wedding finish.',
                    time: '80 - 110 min',
                  },
                  {
                    title: 'Touch-up Planning',
                    desc: 'We plan finishing steps to keep your look fresh.',
                    time: '20 - 30 min',
                  },
                  {
                    title: 'Consultation First',
                    desc: 'We match your style and timing for the best final look.',
                    time: '30 - 45 min',
                  },
                ].map((v) => (
                  <GalleryOptionCard
                    key={v.title}
                    title={v.title}
                    desc={v.desc}
                    time={v.time}
                    onBook={() => setBookingOpen(true)}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {item.slug === 'mani-pedi' && (
          <section className="mt-12">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.6)] sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.28em] text-gold-200">
                    Variety
                  </p>
                  <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                    Hands & feet care
                  </h2>
                  <p className="mt-2 max-w-2xl text-zinc-300">
                    Clean shaping, hygiene-first finish, and premium shine.
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-gold-500/25 bg-black/20 px-4 py-3">
                  <Sparkles className="h-5 w-5 text-gold-200" aria-hidden />
                  <p className="text-sm font-semibold text-gold-200">
                    Hygienic premium results
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'Mani + Pedi Classic',
                    desc: 'Shaping, polish, and a clean finished look.',
                    time: '50 - 70 min',
                  },
                  {
                    title: 'Gel Shine Finish',
                    desc: 'Long-lasting polish with a smooth glossy result.',
                    time: '45 - 60 min',
                  },
                  {
                    title: 'Cuticle + Shape Care',
                    desc: 'Hygiene-first trimming, shaping, and tidy finishing.',
                    time: '35 - 55 min',
                  },
                  {
                    title: 'Spa Relax Finish',
                    desc: 'Soothing care + moisturize for soft, clean hands/feet.',
                    time: '60 - 80 min',
                  },
                  {
                    title: 'Bridal Nail Detail',
                    desc: 'Extra detailing to match your wedding glam.',
                    time: '50 - 65 min',
                  },
                  {
                    title: 'Quick Clean Up',
                    desc: 'Fast refresh for nails that look neat again.',
                    time: '25 - 35 min',
                  },
                ].map((v) => (
                  <GalleryOptionCard
                    key={v.title}
                    title={v.title}
                    desc={v.desc}
                    time={v.time}
                    onBook={() => setBookingOpen(true)}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {item.slug === 'wedding-mehndi' && (
          <section className="mt-12">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.6)] sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.28em] text-gold-200">
                    Variety
                  </p>
                  <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                    Bridal & celebration mehndi
                  </h2>
                  <p className="mt-2 max-w-2xl text-zinc-300">
                    Fine-line bridal sets, plus celebration designs and touch-ups.
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-gold-500/25 bg-black/20 px-4 py-3">
                  <Sparkles className="h-5 w-5 text-gold-200" aria-hidden />
                  <p className="text-sm font-semibold text-gold-200">
                    Elegant henna work
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'Bridal Full Mehndi',
                    desc: 'Full set patterns with elegant, celebration-ready detailing.',
                    time: '90 - 120 min',
                  },
                  {
                    title: 'Celebration Mehndi',
                    desc: 'Beautiful designs for functions, events, and family days.',
                    time: '60 - 90 min',
                  },
                  {
                    title: 'Touch-up Session',
                    desc: 'Perfect for deepening and finishing already applied mehndi.',
                    time: '45 - 60 min',
                  },
                  {
                    title: 'Hands + Feet Focus',
                    desc: 'Pattern placement for balanced bridal symmetry.',
                    time: '70 - 90 min',
                  },
                  {
                    title: 'Pattern Consultation',
                    desc: 'Choose the right motif style for your overall look.',
                    time: '30 - 45 min',
                  },
                  {
                    title: 'After-care Guidance',
                    desc: 'We guide you to help your stain last longer.',
                    time: '15 - 25 min',
                  },
                ].map((v) => (
                  <GalleryOptionCard
                    key={v.title}
                    title={v.title}
                    desc={v.desc}
                    time={v.time}
                    onBook={() => setBookingOpen(true)}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialService={bookingInitialService}
      />
    </div>
  )
}
