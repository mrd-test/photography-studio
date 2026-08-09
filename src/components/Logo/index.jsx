import './index.css'

const Logo = ({ dark = false }) => {
  return (
    <a href="#hero" className="logo" aria-label="Linza — на главную">
      <span className="logo__mark">
        <svg viewBox="0 0 32 32" width="20" height="20" >
          <path
            d="M16 2 L28 9 V23 L16 30 L4 23 V9 Z"
            fill="url(#lg)"
          />
          <circle cx="16" cy="15" r="5" fill="#fff" />
          <circle cx="16" cy="15" r="2.4" fill="url(#lg)" />
          <defs>
            <linearGradient id="lg" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6d2ce0" />
              <stop offset="1" stopColor="#a435f0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className={`logo__word ${dark ? 'logo__word--dark' : ''}`}>linza<span className="logo__dot">.</span></span>
    </a>
  )
}


export default Logo
