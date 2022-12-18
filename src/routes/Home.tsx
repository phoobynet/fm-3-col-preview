import iconLuxury from '@/assets/images/icon-luxury.svg'
import iconSedans from '@/assets/images/icon-sedans.svg'
import iconSuvs from '@/assets/images/icon-suvs.svg'
import Cards from '@/components/Cards'
import { CardOptions } from '@/types/CardOptions'

const cards: CardOptions[] = [
  {
    title: 'sedans',
    content:
      'Choose a sedan for its affordability and excellent fuel economy. Ideal\n for cruising in the city or on your next road trip.',
    iconUrl: iconSedans,
  },
  {
    title: 'suvs',
    content:
      'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    iconUrl: iconSuvs,
  },
  {
    title: 'luxury',
    content:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    iconUrl: iconLuxury,
  },
]

export default function Home() {
  return (
    <main>
      <Cards cards={cards} />
    </main>
  )
}
