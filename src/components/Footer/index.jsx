import Logo from '../Logo'
import { NAV_LINKS } from '../../constants'
import './index.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__glow footer__glow--lilac" />
      <div className="footer__glow footer__glow--yellow" />
      <div className="container footer__inner">
        <div className="footer__top">
          <Logo dark />
          <nav className="footer__nav">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="footer__link">{link.label}</a>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <div className="footer__meta">
            <span className="footer__pill">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="var(--purple-600)" ><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
              Москва
            </span>
            <span className="footer__pill">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="var(--purple-600)" ><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/></svg>
              Русский
            </span>
          </div>
          <p className="footer__copy">©Linza Copyright 2020</p>
        </div>
      </div>
    </footer>
  )
}


export default Footer