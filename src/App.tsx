import { useState, useEffect } from 'react'
import { Sidebar } from './components/Nav'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { DashboardPreview } from './components/DashboardPreview'
import { TradePreview } from './components/TradePreview'
import { MarketPreview } from './components/MarketPreview'
import { CaseOpeningsPreview } from './components/CaseOpeningsPreview'
import { SyncLogPreview } from './components/SyncLogPreview'
import { AuthSection } from './components/AuthSection'
import { LocalDBSection } from './components/LocalDBSection'
import { Footer } from './components/Footer'

type Page = 'landing' | 'demo'

/* Detect initial page from hash */
function getInitialPage(): Page {
  if (typeof window !== 'undefined') {
    const hash = window.location.hash.replace('#', '')
    if (hash === 'demo') return 'demo'
  }
  return 'landing'
}

/* Intersection observer for sidebar nav highlighting */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids])

  return active
}

/* Title bar — shared between both pages */
function TitleBar({ page, onPageChange }: { page: Page; onPageChange: (p: Page) => void }) {
  return (
    <div className="site-titlebar">
      {page === 'demo' && (
        <span
          onClick={() => onPageChange('landing')}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--ink-6)',
            cursor: 'pointer',
            transition: 'color 0.15s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            marginRight: 8,
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--ink-9)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--ink-6)'}
        >
          ← Back
        </span>
      )}
      <span className="tb-brand">STEAM/STASH</span>
      <span className="tb-version">v0.4</span>

      {page === 'landing' && (
        <ul className="tb-nav">
          <li><a href="#features">Features</a></li>
          <li>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); onPageChange('demo') }}
              style={{ color: 'var(--accent)' }}
            >
              Live Demo
            </a>
          </li>
          <li>
            <a href="https://github.com/tommi-fish/steam-stash" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
      )}

      {page === 'demo' && (
        <ul className="tb-nav">
          {['dashboard', 'trades', 'market', 'cases', 'synclog', 'auth', 'localdb'].map((id) => (
            <li key={id}>
              <a href={`#${id}`}>{
                id === 'dashboard' ? 'Dashboard' :
                id === 'trades' ? 'Trades' :
                id === 'market' ? 'Market' :
                id === 'cases' ? 'Cases' :
                id === 'synclog' ? 'Sync Log' :
                id === 'auth' ? 'Auth' : 'Local DB'
              }</a>
            </li>
          ))}
          <li>
            <a href="https://github.com/tommi-fish/steam-stash" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
      )}
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState<Page>(getInitialPage)
  const sectionIds = ['dashboard', 'trades', 'market', 'cases', 'synclog', 'auth', 'localdb']
  const activeSection = useActiveSection(page === 'demo' ? sectionIds : [])

  const handlePageChange = (p: Page) => {
    setPage(p)
    window.location.hash = p === 'demo' ? '#demo' : ''
    window.scrollTo({ top: 0 })
  }

  /* Landing page */
  if (page === 'landing') {
    return (
      <>
        <TitleBar page="landing" onPageChange={handlePageChange} />
        <Hero onViewDemo={() => handlePageChange('demo')} />
        <Features />
        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '60px 24px 80px', borderTop: 'var(--hair)' }}>
          <div className="container" style={{ maxWidth: 1120, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 22, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-9)', fontWeight: 600, marginBottom: 12 }}>
              See it in action
            </h2>
            <p style={{ color: 'var(--ink-6)', marginBottom: 28, fontSize: 15 }}>
              Browse interactive mockups of every screen — trades, market, cases, sync and more.
            </p>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handlePageChange('demo') }}
              className="app-btn app-btn-primary"
              style={{ fontSize: 12, padding: '14px 32px' }}
            >
              View Live Demo →
            </a>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  /* Demo page */
  return (
    <>
      <TitleBar page="demo" onPageChange={handlePageChange} />
      <div style={{ display: 'flex' }}>
        <Sidebar activeSection={activeSection} />
        <main style={{ flex: 1, minWidth: 0 }}>
          <div id="dashboard"><DashboardPreview /></div>
          <div id="trades"><TradePreview /></div>
          <div id="market"><MarketPreview /></div>
          <div id="cases"><CaseOpeningsPreview /></div>
          <div id="synclog"><SyncLogPreview /></div>
          <div id="auth"><AuthSection /></div>
          <div id="localdb"><LocalDBSection /></div>
        </main>
      </div>
    </>
  )
}
