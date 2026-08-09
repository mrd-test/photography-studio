import { useState } from 'react'
import { APP_STORE_URL } from '../../constants'
import mission1 from '../../assets/mission/mission1.jpg'
import mission2 from '../../assets/mission/mission2.png'
import mission3 from '../../assets/mission/mission3.png'
import mission4 from '../../assets/mission/mission4.png'
import './index.css'

const SLIDES = [
  { img: mission1, title: 'Доступно\nкаждому' },
  { img: mission2, title: 'Качественная\nобработка фото' },
  { img: mission3, title: 'Только лучшие\nлокации' },
  { img: mission4, title: 'Профессиональные\nфотографы' },
]

const Mission = () => {
  const [index, setIndex] = useState(0)
  const last = SLIDES.length - 1

  const next = () => setIndex((i) => (i >= last ? 0 : i + 1))

  return (
    <section id="mission" className="mission">
      <div className="mission__circle mission__circle--yellow" />
      <div className="mission__circle mission__circle--lilac"  />
      <div className="mission__dot" />

      <div className="container mission__inner">
        <div className="mission__copy">
          <h2 className="mission__title">Наша<br />Миссия</h2>
          <p className="mission__lead">
            Мы хотим сделать профессиональные снимки доступными для всех
          </p>
          <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="mission__link">
            Скачать прямо сейчас
          </a>
        </div>

        <div className="mission__slider">
          <div className="mission__viewport">
            <div
              className="mission__track"
              style={{ transform: `translateX(calc(${-index} * (var(--card-w) + var(--card-gap))))` }}
            >
              {SLIDES.map((s, i) => (
                <article className="mission-card" key={i}>
                  <div className="mission-card__img">
                    <img src={s.img}  />
                  </div>
                  <h3 className="mission-card__title">
                    {s.title.split('\n').map((line, k) => <span key={k}>{line}</span>)}
                  </h3>
                </article>
              ))}
            </div>
          </div>

          <div className="mission__controls">
            <div className="mission__dots">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`mission__pip ${i === index ? 'is-active' : ''}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <button className="mission__next" onClick={next}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h13M13 6l6 6-6 6" stroke="var(--purple-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
