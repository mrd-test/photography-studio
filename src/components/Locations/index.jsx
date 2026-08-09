import { useState } from 'react'
import tsum from '../../assets/locations/tsum.png'
import flacon from '../../assets/locations/flacon.png'
import redSquare from '../../assets/locations/red-square.png'
import moscowCity from '../../assets/locations/moscow-city.png'
import patriarshy from '../../assets/locations/patriarshy.png'
import artplay from '../../assets/locations/artplay.png'
import mitino from '../../assets/locations/mitino.jpg'
import pergola from '../../assets/locations/pergola.jpg'
import muzeon from '../../assets/locations/muzeon.jpg'
import './index.css'

const BASE = [
  { img: tsum, name: 'ЦУМ' },
  { img: flacon, name: 'Флакон', popular: true },
  { img: redSquare, name: 'Красная площадь' },
  { img: moscowCity, name: 'Moscow City' },
  { img: patriarshy, name: 'Патриарший мост' },
  { img: artplay, name: 'ArtPlay' },
]

const MORE = [
  { img: mitino, name: 'Ландшафтный парк «Митино»' },
  { img: pergola, name: 'Пергола у Андреевского моста' },
  { img: muzeon, name: 'Сад скульптур в Музеоне' },
]

function Card({ item }) {
  return (
    <article className="loc-card">
      <img src={item.img} alt={item.name} loading="lazy" />
      {item.popular && <span className="loc-card__badge">ПОПУЛЯРНАЯ</span>}
      <div className="loc-card__overlay">
        <h3 className="loc-card__name">{item.name}</h3>
        <span className="loc-card__price">от 999₽</span>
      </div>
    </article>
  )
}

const Locations = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="locations" className="locations">
      <div className="container">
        <h2 className="locations__title">Примеры локаций</h2>

        <div className="locations__grid">
          {BASE.map((item) => <Card key={item.name} item={item} />)}
          {expanded && MORE.map((item) => <Card key={item.name} item={item} />)}
        </div>

        {!expanded && (
          <button className="locations__more" onClick={() => setExpanded(true)}>
            Показать еще
          </button>
        )}
      </div>
    </section>
  )
}


export default Locations
