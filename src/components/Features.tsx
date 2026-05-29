const features = [
  {
    tag: '14 EVENT TYPES',
    title: 'Trade History',
    description: 'Full log of every trade — items with rarity-colored names, 64×40 thumbnails, quantity badges, and +IN/−OUT direction chips. Paginated inline cards (50/page) with item name search, partner filter, app/rarity dropdowns, and date range. Covers: trade, market_list, market_cancel, market_purchase, market_expired, store_purchase, arms_dealer, game_drop, case_open, sticker_applied, sticker_removed, storage_transfer, earned, unknown.',
  },
  {
    tag: 'PRICE MATCHING',
    title: 'Market History',
    description: 'Paginated transaction table (50/page) with BUY/SELL/LIST/CXL chips, price data from /market/myhistory endpoint, and item search. Two-phase sync: inventory scraper creates rows with price=null, market scraper fills prices by matching appid+classid+instanceid+month+day. Offset-based pagination with 50 rows per page.',
  },
  {
    tag: '4 SOURCE TYPES',
    title: 'Case Openings',
    description: 'Track every case, capsule, and souvenir package you\'ve opened. Four source types: Unlocked (keys), Souvenir (tournament highlight packages), Sticker Capsules (autographs/graphite/holo), and Arms Dealer. Counter + Stats view modes with rarity distribution panels.',
  },
  {
    tag: 'ZERO CONFIG',
    title: 'Local SQLite Database',
    description: 'All data lives on your machine in a better-sqlite3 database. No cloud, no accounts, no tracking. Schema migrations handled in-app via _migrations table. Open the .db file with any SQLite client — full query access, no lock-in.',
  },
  {
    tag: 'EXPONENTIAL BACKOFF',
    title: 'Sync Engine',
    description: 'Incremental + full sync with cursor-based pagination (50 events/page). Rate limiting with configurable delays (default 4s). HTTP 429 handling: 20s → 40s → 60s backoff. 5 consecutive 429s triggers 5min pause, cookie refresh via steamSession.webLogOn(), 5 more retries before hard stop. Market sync chains after inventory goes idle.',
  },
  {
    tag: 'SAFESTORAGE',
    title: 'Steam Session Auth',
    description: 'Login via steam-session library with full TOTP, email code, and phone confirmation support. Refresh tokens encrypted via OS keychain (Windows DPAPI / macOS Keychain / Linux libsecret). Manual cookie paste fallback. Auto-renew on validation success. getActiveCookies() dispatches based on auth_mode.',
  },
  {
    tag: 'BACKGROUND SYNC',
    title: 'System Tray',
    description: 'Minimize to tray with right-click menu: Open, Sync Now, Pause Sync, Quit. Live tooltip updates via updateTrayStatus() showing sync status. Configurable minimize behavior. Continues syncing in background while minimized.',
  },
  {
    tag: 'IPC EVENTS',
    title: 'Sync Log',
    description: 'Live feed via IPC sync-log-entry events. Level filter for OK/WARN/ERR/INFO toggleable in UI. Auto-purge entries older than configured days (default 90). Full persistent audit trail stored in SQLite. Entries include timestamp, action, detail, and level.',
  },
  {
    tag: 'LIVE STATS',
    title: 'Dashboard',
    description: 'Connection status LED (green/red/amber), sync pipeline with pulse animation, Odometer animated counters for trade and market counts. Recent activity feed showing newest 7 trades with partner links and direction chips. Last successful sync timestamp tracked in sync_state.',
  },
]

export function Features() {
  return (
    <section className="page-section" id="features">
      <div className="container" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        <div className="page-section-inner">
          <div>
            <p className="section-index">Features</p>
            <h2 className="section-heading">Everything Steam makes hard to find</h2>
            <p className="section-desc">
              Free, open-source Electron app. Your data stays on your machine.
              Zero configuration, zero cloud dependency.
            </p>
          </div>
          <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="fc-icon">{f.tag}</div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
