const activities = [
  { time: '16 May 21:34', dir: 'IN', item: 'AK-47 | Redline (Field-Tested)', color: '#d32ce6', partner: 'xDr4g0n' },
  { time: '16 May 19:12', dir: 'OUT', item: 'M4A1-S | Hyper Beast (Minimal Wear)', color: '#eb4b4b', partner: 'ShadowFox_92' },
  { time: '15 May 22:47', dir: 'IN', item: 'Glock-18 | Fade (Factory New)', color: '#8847ff', partner: 'NoScopeKing' },
  { time: '15 May 18:03', dir: 'OUT', item: 'AWP | Asiimov (Battle-Scarred)', color: '#eb4b4b', partner: 'TradeMaster420' },
  { time: '14 May 14:21', dir: 'IN', item: 'Karambit | Doppler (Factory New)', color: '#eb4b4b', partner: 'SkinCollector' },
  { time: '13 May 09:55', dir: 'IN', item: 'Falchion Case ×3', color: '#b0c3d9', partner: 'CaseOpener_X' },
  { time: '12 May 16:40', dir: 'OUT', item: 'USP-S | Kill Confirmed (Well-Worn)', color: '#eb4b4b', partner: 'PixelTrader' },
]

export function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        <div className="hero-content">
          <div className="overline">free · open-source · local-first</div>
          <h1>
            STEAM<span className="dot">·</span>STASH
          </h1>
          <p className="hero-tagline">
            Your Steam market &amp; trade history, finally searchable.
            A desktop app that pulls your data into a local SQLite database —
            no cloud, no accounts, no tracking.
          </p>
          <div className="hero-actions">
            <a className="app-btn app-btn-primary" href="https://github.com/tommi-fish/steam-stash/releases" target="_blank" rel="noopener noreferrer">
              Download
            </a>
            <a className="app-btn app-btn-ghost" href="https://github.com/tommi-fish/steam-stash" target="_blank" rel="noopener noreferrer">
              View Source
            </a>
          </div>
          <div className="hero-techs">
            <span>React</span>
            <span>Electron</span>
            <span>better-sqlite3</span>
            <span>steam-session</span>
          </div>
        </div>

        {/* App frame mockup */}
        <div className="app-frame">
          {/* Mini titlebar */}
          <div className="app-frame-titlebar">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-8)', fontWeight: 600 }}>
              STEAM/STASH
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-6)' }}>
              v0.4
            </span>
            <span style={{ flex: 1 }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--ink-6)', marginRight: 120 }}>
              21:34:02
            </span>
          </div>

          {/* Mini body: sidebar + content */}
          <div className="app-frame-body">
            <div className="app-frame-sidebar">
              <div className="af-logo">
                <div className="af-logo-box">
                  <span style={{ position: 'relative', zIndex: 1, fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 10 }}>S</span>
                  <div className="af-logo-box-inner" />
                </div>
                <span className="af-logo-text">Steam·Stash</span>
              </div>

              <div className="sidebar-section-label" style={{ padding: '8px 4px 4px' }}>Index</div>
              <a className="af-link active" href="#dashboard">
                <span>Dashboard</span>
                <span className="af-link-num">01</span>
              </a>
              <a className="af-link" href="#trades">
                <span>Trade History</span>
                <span className="af-link-num">02</span>
              </a>
              <a className="af-link" href="#market">
                <span>Market History</span>
                <span className="af-link-num">03</span>
              </a>
              <a className="af-link" href="#cases">
                <span>Case Openings</span>
                <span className="af-link-num">04</span>
              </a>
              <a className="af-link" href="#synclog">
                <span>Sync Log</span>
                <span className="af-link-num">05</span>
              </a>
              <a className="af-link" href="#auth">
                <span>Settings</span>
                <span className="af-link-num">06</span>
              </a>

              <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: 'var(--hair-soft)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--positive)' }}>
                  <span className="led green" style={{ width: 5, height: 5 }} />
                  Idle
                </div>
              </div>
            </div>

            <div className="app-frame-content">
              {/* Section header */}
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <div>
                  <div className="section-index">Index / 01</div>
                  <div style={{ margin: '2px 0 0', fontSize: 22, color: 'var(--ink-9)', letterSpacing: '-0.02em', fontWeight: 500 }}>
                    Dashboard
                  </div>
                </div>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'var(--positive)',
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                }}>
                  <span className="led green led-xs" />
                  Connected · Steam Session
                </span>
              </div>

              {/* 3 counters */}
              <div className="app-frame-counter-row">
                <div className="app-frame-counter">
                  <div className="af-counter-label">Connection</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--positive)', letterSpacing: '0.04em', marginTop: 'auto' }}>
                    Connected
                  </div>
                  <div className="af-counter-sub">session token · refresh active</div>
                </div>
                <div className="app-frame-counter">
                  <div className="af-counter-label">Trades Stored</div>
                  <div className="af-counter-value">2,847</div>
                  <div className="af-counter-sub">events captured · all-time</div>
                </div>
                <div className="app-frame-counter">
                  <div className="af-counter-label">Market Txns</div>
                  <div className="af-counter-value">11,302</div>
                  <div className="af-counter-sub">buy · sell · list · cancel</div>
                </div>
              </div>

              {/* Sync bar */}
              <div className="af-sync-bar">
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'var(--positive)',
                }}>
                  <span className="led green" style={{ width: 6, height: 6 }} />
                  Idle · ready
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <span style={{
                    border: 'var(--hair)', background: 'var(--accent)', color: 'var(--accent-ink)',
                    padding: '4px 10px', fontFamily: 'var(--font-mono)', fontSize: 9,
                    letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600,
                  }}>
                    Sync Now
                  </span>
                </div>
              </div>

              {/* Activity rows */}
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.16em',
                textTransform: 'uppercase', color: 'var(--ink-7)', fontWeight: 500,
                padding: '4px 10px', borderBottom: 'var(--hair-soft)',
                display: 'flex', justifyContent: 'space-between',
              }}>
                <span>Recent Activity</span>
                <span>{activities.length}/7</span>
              </div>
              {activities.slice(0, 5).map((a, i) => (
                <div key={i} className="af-activity">
                  <span className="af-activity-time">{a.time}</span>
                  <span className={`af-dir-chip ${a.dir === 'IN' ? 'in' : 'out'}`}>{a.dir}</span>
                  <span className="af-activity-item" style={{ color: a.color }}>{a.item}</span>
                  <span className="af-activity-partner">{a.partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
