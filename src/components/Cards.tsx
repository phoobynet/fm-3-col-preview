import style from './Cards.module.scss'
import Card from '@/components/Card'
import { CardOptions } from '@/types/CardOptions'

interface Props {
  cards: CardOptions[]
}

export default function Cards({ cards }: Props) {
  return (
    <div className={style.cards}>
      {cards.map((cardOptions) => (
        <Card
          options={cardOptions}
          key={cardOptions.title}
        />
      ))}
    </div>
  )
}
