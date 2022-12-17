import styles from './Card.module.scss'
import { CardOptions } from '@/types/CardOptions'

interface Props {
  options: CardOptions
}

export default function Card({ options }: Props) {
  const { iconUrl, title, content } = options
  return (
    <article className={styles.card}>
      <img
        src={iconUrl}
        alt=""
      />
      <h2>{title}</h2>
      <p>{content}</p>
      <div>
        <button>Learn More</button>
      </div>
    </article>
  )
}
