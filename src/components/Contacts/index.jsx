import './index.css'

const Contacts = () => {
  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <div className="contacts__banner">
          <span className="contacts__label">Контакты</span>
          <a href="tel:+78001008080" className="contacts__phone">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" >
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1l-2.3 2.3z"/>
            </svg>
            8-800-100-80-80
          </a>
          <p className="contacts__addr">Москва, ул. Петровка, д. 5, помещение 13</p>
        </div>
      </div>
    </section>
  )
}

export default Contacts