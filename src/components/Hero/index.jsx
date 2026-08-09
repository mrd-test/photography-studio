import { APP_STORE_URL, PLAY_STORE_URL } from '../../constants'
import iphone from '../../assets/hero/iphone.png'
import './index.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__blob" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">Linza.io</h1>
          <p className="hero__lead">
            Сервис быстрых фотографий. Профессиональные фотоснимки
            с обработкой за несколько часов. Лучшие локации в разных местах.
          </p>

          <div className="hero__cta">
            <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="btn-primary">
              Скачать прямо сейчас
            </a>
            <button className="hero__reel" type="button">
              <span className="hero__reel-play">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="#fff" >
                  <path d="M3 2l7 4-7 4z" />
                </svg>
              </span>
              Шоурил
            </button>
          </div>

          <div className="hero__stores">
            <span className="hero__stores-label">Доступно в:</span>
            <div className="hero__badges">
              <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="store-badge" aria-label="Скачать в App Store">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M16.4 12.9c0-2 1.6-3 1.7-3-.9-1.4-2.4-1.5-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.2 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.4 2 1 0 1.3-.6 2.5-.6s1.5.6 2.5.6 1.7-1 2.3-2c.7-1.1 1-2.2 1-2.3 0 0-2-.7-2.1-3zM14.5 6.7c.5-.6.9-1.5.8-2.4-.8 0-1.7.5-2.2 1.1-.5.5-.9 1.4-.8 2.3.9.1 1.7-.4 2.2-1z"/></svg>
                <span><small>Загрузите в</small><strong>App Store</strong></span>
              </a>
              <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer" className="store-badge" aria-label="Скачать в Google Play">
                <svg viewBox="0 0 24 24" width="20" height="20"><path d="M3.6 2.3 13 12 3.6 21.7c-.3-.2-.6-.6-.6-1.2V3.5c0-.6.3-1 .6-1.2z" fill="#00d0ff"/><path d="M16.8 8.6 13 12l3.8 3.4 3.4-2c.8-.5.8-1.4 0-1.9l-3.4-1.9z" fill="#ffce00"/><path d="M3.6 2.3c.4-.2.9-.2 1.4.1l11.8 6.2L13 12 3.6 2.3z" fill="#00f076"/><path d="M13 12l3.8 3.4L5 21.6c-.5.3-1 .3-1.4.1L13 12z" fill="#ff3a44"/></svg>
                <span><small>Доступно в</small><strong>Google Play</strong></span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__phone">
            <img src={iphone} alt="Приложение Linza — экран категорий" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
