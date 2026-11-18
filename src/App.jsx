
import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
  const sections = document.querySelectorAll('section[data-theme]')

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries.filter(
        (entry) => entry.isIntersecting
      )

      if (visibleSections.length === 0) return

      const center = window.innerHeight / 2

      const activeSection = visibleSections.reduce((closest, entry) => {
        const distance = Math.abs(
          (entry.boundingClientRect.top + entry.boundingClientRect.bottom) / 2 - center
        )

        const closestDistance = Math.abs(
          (closest.boundingClientRect.top + closest.boundingClientRect.bottom) / 2 - center
        )

        return distance < closestDistance ? entry : closest
      })

      document.body.dataset.theme =
        activeSection.target.dataset.theme
    },
    {
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    }
  )

  sections.forEach((section) => observer.observe(section))

  return () => observer.disconnect()
}, [])

  return (
    <>
      {/* Section 1: Dark */}
      <section id="center" data-theme="dark">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      {/* Section 2: Light */}
      <section id="next-steps" data-theme="light">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>

          <h2>Documentation</h2>
          <p>Your questions, answered</p>

          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>

        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>

          <h2>Connect with us</h2>
          <p>Join the Vite community</p>

          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer">
                Discord
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>

      {/* Section 3: Dark */}
      <section id="spacer" data-theme="dark">
        <h2>Another Section</h2>
        <p>This section uses dark theme.</p>
      </section>
    </>
  )
}

export default App
