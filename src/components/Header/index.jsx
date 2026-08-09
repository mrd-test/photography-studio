import { useState, useEffect } from 'react'
import Logo from '../Logo'
import { NAV_LINKS, APP_STORE_URL } from '../../constants'
import './index.css'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // console.log('render, scrolled =', scrolled)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    // window.scrollTo(0, 1000)
    // console.log('после scrollTo, scrollY =', window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // console.log(window.scrollY)
  // console.log(history.scrollRestoration)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Logo />

        <nav className={`header__nav ${open ? 'header__nav--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header__link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="header__download header__download--mobile"
          >
            Скачать
          </a>
        </nav>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noreferrer"
          className="header__download"
        >
          Скачать
        </a>

        <button
          className="header__burger"
          aria-label="Меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}


export default Header