import galleryHairStyling from '../assets/hair styling neww.png'
import galleryBeautyGlow from '../assets/Beauty and glow.png'
import galleryHairArt from '../assets/hair art new.png'
import galleryWeddingMakeup from '../assets/wedding makeup.png'
import galleryManiPedi from '../assets/mani and padi new.png'
import galleryWeddingMehndi from '../assets/wedding mehdi.png'

export const galleryItems = [
  {
    slug: 'hair-styling',
    label: 'Hair Styling',
    alt: 'Unisex hair styling at the salon',
    imageSrc: galleryHairStyling,
    gradient: 'from-amber-500/25 to-black',
    description:
      'Cuts, fades, and finishes — every length, texture, and vibe welcome.',
  },
  {
    slug: 'beauty-glow',
    label: 'Beauty & Glow',
    alt: 'Beauty and facial glow treatment',
    imageSrc: galleryBeautyGlow,
    gradient: 'from-gold-500/25 to-black',
    description:
      'Facials and glow care tailored to your skin — relaxed, inclusive chair.',
  },
  {
    slug: 'hair-art',
    label: 'Hair Art',
    alt: 'Creative hair art and patterns',
    imageSrc: galleryHairArt,
    gradient: 'from-amber-400/25 to-black',
    description:
      'Statement patterns for parties, festivals, and big days — yours to own.',
  },
  {
    slug: 'wedding-makeup',
    label: 'Wedding Makeup',
    alt: 'Wedding and event makeup',
    imageSrc: galleryWeddingMakeup,
    gradient: 'from-yellow-400/25 to-black',
    description:
      'Bridal, groom, and party glam — camera-ready looks for the whole crew.',
  },
  {
    slug: 'mani-pedi',
    label: 'Mani & Pedi',
    alt: 'Manicure and pedicure service',
    imageSrc: galleryManiPedi,
    gradient: 'from-amber-300/25 to-black',
    description:
      'Hands and feet, polished and hygienic — classic or bold, you choose.',
  },
  {
    slug: 'wedding-mehndi',
    label: 'Wedding Mehndi',
    alt: 'Wedding and celebration mehndi',
    imageSrc: galleryWeddingMehndi,
    gradient: 'from-gold-400/25 to-black',
    description:
      'Fine-line bridal sets and celebration henna — traditions, your way.',
  },
] as const

export type GalleryItem = (typeof galleryItems)[number]

export function getGalleryItem(slug: string): GalleryItem | undefined {
  return galleryItems.find((g) => g.slug === slug)
}
