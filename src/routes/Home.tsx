import iconLuxury from '@/assets/images/icon-luxury.svg'
import iconSedans from '@/assets/images/icon-sedans.svg'
import iconSuvs from '@/assets/images/icon-suvs.svg'

export default function Home() {
  return (
    <div className="cards">
      <div
        id="sedans"
        className="card"
      >
        <img
          src={iconSedans}
          alt=""
        />
        <h2>sedans</h2>
        <p>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <div>
          <button>Learn More</button>
        </div>
      </div>
      <div
        id="suvs"
        className="card"
      >
        <img
          src={iconSuvs}
          alt=""
        />
        <h2>suvs</h2>
        <p>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <div>
          <button>Learn More</button>
        </div>
      </div>
      <div
        id="luxury"
        className="card"
      >
        <img
          src={iconLuxury}
          alt=""
        />
        <h2>luxury</h2>
        <p>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  )
}
