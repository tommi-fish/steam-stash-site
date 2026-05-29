const activities = [
  { time: '16 May 21:34', dir: 'IN', item: 'AK-47 | Redline (Field-Tested)', color: '#d32ce6', partner: 'xDr4g0n' },
  { time: '16 May 19:12', dir: 'OUT', item: 'M4A1-S | Hyper Beast (Minimal Wear)', color: '#eb4b4b', partner: 'ShadowFox_92' },
  { time: '15 May 22:47', dir: 'IN', item: 'Glock-18 | Fade (Factory New)', color: '#8847ff', partner: 'NoScopeKing' },
  { time: '15 May 18:03', dir: 'OUT', item: 'AWP | Asiimov (Battle-Scarred)', color: '#eb4b4b', partner: 'TradeMaster420' },
  { time: '14 May 14:21', dir: 'IN', item: 'Karambit | Doppler (Factory New)', color: '#eb4b4b', partner: 'SkinCollector' },
  { time: '13 May 09:55', dir: 'IN', item: 'Falchion Case ×3', color: '#b0c3d9', partner: 'CaseOpener_X' },
  { time: '12 May 16:40', dir: 'OUT', item: 'USP-S | Kill Confirmed (Well-Worn)', color: '#eb4b4b', partner: 'PixelTrader' },
]

export function DashboardPreview() {
  return (
    <section className="page-section" id="dashboard">
      <div className="container" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        <div className="page-section-inner">
          {/* Section header matching app layout */}
          <div className="section-header">
            <div>
              <div className="section-index">Index / 01</div>
              <h2 className="section-heading">Dashboard</h2>
              <p className="section-desc">
                Connection status LED, sync pipeline with pulse animation, Odometer counters,
                and recent activity feed — exactly as the app renders it.
              </p>
            </div>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--positive)',
              display: 'inline-flex', alignItems: 'center', gap: 6, flexShrink: 0,
            }}>
              <span className="led green led-xs" />
              Connected · Steam Session
            </span>
          </div>

          {/* 3 counter cards */}
          <div className="counter-grid">
            <div className="stash-card corners counter-block lit counter-card">
              <div className="counter-label">Connection</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 18, color: 'var(--positive)', letterSpacing: '0.04em' }}>
                Connected
              </div>
              <div className="counter-sub" style={{ marginTop: 'auto' }}>session token · refresh active</div>
            </div>
            <div className="stash-card corners counter-block lit counter-card">
              <div className="counter-label">Trades Stored</div>
              <div className="counter-value">2,847</div>
              <div className="counter-sub" style={{ marginTop: 'auto' }}>events captured · all-time</div>
            </div>
            <div className="stash-card corners counter-block lit counter-card">
              <div className="counter-label">Market Transactions</div>
              <div className="counter-value">11,302</div>
              <div className="counter-sub" style={{ marginTop: 'auto' }}>buy · sell · list · cancel</div>
            </div>
          </div>

          {/* Sync Pipeline card */}
          <div className="stash-card corners">
            <div className="card-head">
              <h3>Sync Pipeline</h3>
              <span className="meta">IDLE</span>
            </div>
            <div className="sync-bar">
              <span className="sync-label" style={{ color: 'var(--positive)' }}>
                <span className="led green" />
                Idle · ready
              </span>
              <button className="app-btn app-btn-primary" style={{ marginLeft: 'auto', padding: '8px 16px', fontSize: 10 }}>
                Sync Now
              </button>
            </div>
          </div>

          {/* Recent Activity card */}
          <div className="stash-card corners">
            <div className="card-head">
              <h3>Recent Activity</h3>
              <span className="meta">{activities.length}/7</span>
            </div>
            <div className="activity-feed">
              {activities.map((a, i) => (
                <div key={i} className="activity-row">
                  <span className="activity-time">{a.time}</span>
                  <span className={`dir-chip ${a.dir === 'IN' ? 'in' : 'out'}`}>{a.dir}</span>
                  <span className="activity-item" style={{ color: a.color }}>{a.item}</span>
                  <span className="activity-partner">{a.partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
