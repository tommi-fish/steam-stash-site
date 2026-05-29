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

/* Intersection observer to highlight sidebar nav on scroll */
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

export default function App() {
  const sectionIds = ['hero', 'features', 'dashboard', 'trades', 'market', 'cases', 'synclog', 'auth', 'localdb']
  const activeSection = useActiveSection(sectionIds)

  return (
    <>
      {/* TitleBar (sticky top) */}
      <div className="site-titlebar">
        <span className="tb-brand">STEAM/STASH</span>
        <span className="tb-version">v0.4</span>
        <ul className="tb-nav">
          {sectionIds.map((id) => (
            <li key={id}>
              <a href={`#${id}`}>{
                id === 'hero' ? 'Home' :
                id === 'features' ? 'Features' :
                id === 'dashboard' ? 'Dashboard' :
                id === 'trades' ? 'Trades' :
                id === 'market' ? 'Market' :
                id === 'cases' ? 'Cases' :
                id === 'synclog' ? 'Sync Log' :
                id === 'auth' ? 'Auth' :
                id === 'localdb' ? 'Local DB' : id
              }</a>
            </li>
          ))}
          <li>
            <a href="https://github.com/tommi-fish/steam-stash" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
      </div>

      {/* Main layout: Sidebar + Content */}
      <div style={{ display: 'flex' }}>
        <Sidebar activeSection={activeSection} />

        <main style={{ flex: 1, minWidth: 0 }}>
          <div id="hero"><Hero /></div>
          <div id="features"><Features /></div>
          <div id="dashboard"><DashboardPreview /></div>
          <div id="trades"><TradePreview /></div>
          <div id="market"><MarketPreview /></div>
          <div id="cases"><CaseOpeningsPreview /></div>
          <div id="synclog"><SyncLogPreview /></div>
          <div id="auth"><AuthSection /></div>
          <div id="localdb"><LocalDBSection /></div>
          <Footer />
        </main>
      </div>
    </>
  )
}
