const dbPoints = [
  {
    title: 'better-sqlite3',
    desc: 'Embedded database, zero config. Schema migrations handled in-app via _migrations table. No external database server needed.',
  },
  {
    title: 'No Cloud',
    desc: 'Your trade history, market data, and sync logs stay on your machine. No accounts, no registration, no telemetry.',
  },
  {
    title: 'No Tracking',
    desc: 'No analytics, no crash reporting, no data collection. The app has no network access except for Steam API calls.',
  },
  {
    title: 'Full Query Access',
    desc: 'SQLite database file is yours. Open it with any SQLite client, write your own queries, export to CSV — no lock-in.',
  },
]

export function LocalDBSection() {
  return (
    <section className="page-section" id="localdb">
      <div className="container" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        <div className="page-section-inner">
          <div>
            <div className="section-index">Architecture</div>
            <h2 className="section-heading">Your data, your machine</h2>
            <p className="section-desc">
              Steam Stash uses an embedded SQLite database via better-sqlite3. No cloud, no accounts, no tracking.
              Your trade history, market transactions, and sync logs are stored locally and queryable however you want.
            </p>
          </div>

          <div className="localdb-grid">
            {dbPoints.map((p) => (
              <div key={p.title} className="stash-card localdb-card">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* System tray mockup */}
          <div className="tray-section">
            <div className="section-index">System Tray</div>
            <h2 className="section-heading" style={{ fontSize: 22 }}>Background sync, zero friction</h2>
            <p className="section-desc" style={{ marginBottom: 24 }}>
              Minimize to tray. Right-click menu for quick actions. Live tooltip showing sync status.
              Continues syncing while minimized.
            </p>

            <div className="tray-mockup">
              <div className="tray-menu">
                <div className="tm-title">Steam Stash</div>
                <div className="tm-status">● Syncing — Page 47/57</div>
                <div className="tm-sep" />
                <div className="tm-item">Open</div>
                <div className="tm-item">Sync Now</div>
                <div className="tm-item">Pause Sync</div>
                <div className="tm-sep" />
                <div className="tm-item">Quit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
