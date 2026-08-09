import saintPeter from '../../assets/cities/saint-peter.jpg'
import moscow from '../../assets/cities/moscow.jpg'
import sochi from '../../assets/cities/sochi.jpg'
import './index.css'

const CITIES = [
  { img: saintPeter, name: 'Санкт-Петербург' },
  { img: moscow, name: 'Москва' },
  { img: sochi, name: 'Сочи' },
]

const Cities = () =>  {
  return (
    <section className="cities">
      <div className="cities__circle cities__circle--pink"/>
      <div className="cities__circle cities__circle--dot"/>
      <div className="container">
        <div className="cities__panel">
          <h2 className="cities__title">Города<br />присутствия</h2>
          <div className="cities__grid">
            {CITIES.map((c) => (
              <article className="city-card" key={c.name}>
                <img src={c.img} alt={c.name} loading="lazy" />
                <span className="city-card__name">{c.name}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cities
