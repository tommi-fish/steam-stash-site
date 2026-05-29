const logEntries = [
  { time: '21:34:02', level: 'ok', levelLabel: 'OK', action: 'TRADE_SYNC', detail: 'Page 47/57 — 50 events, cursor: AOJ1B4F2' },
  { time: '21:33:58', level: 'ok', levelLabel: 'OK', action: 'TRADE_SYNC', detail: 'Page 46/57 — 50 events, cursor: AOJ1B4E1' },
  { time: '21:33:54', level: 'warn', levelLabel: 'WARN', action: 'RATE_LIMIT', detail: '429 received — backing off 20s before retry (attempt 2/5)' },
  { time: '21:33:30', level: 'ok', levelLabel: 'OK', action: 'MARKET_SYNC', detail: 'Page 12/227 — filled prices for 48 rows via appid+classid+instanceid+month+day match' },
  { time: '21:33:22', level: 'info', levelLabel: 'INFO', action: 'SYNC', detail: 'Chain: inventory idle → pendingMarketSync=true → starting market sync' },
  { time: '21:33:18', level: 'ok', levelLabel: 'OK', action: 'TRADE_SYNC', detail: 'Page 45/57 — 50 events, cursor: AOJ1B4D0' },
  { time: '21:33:14', level: 'ok', levelLabel: 'OK', action: 'TRADE_SYNC', detail: 'Page 44/57 — 50 events, cursor: AOJ1B4C9' },
  { time: '21:33:10', level: 'err', levelLabel: 'ERR', action: 'COOKIE', detail: 'Validation failed — redirect to login page detected on GET /inventoryhistory' },
  { time: '21:33:08', level: 'warn', levelLabel: 'WARN', action: 'COOKIE', detail: 'Calling steamSession.webLogOn() to refresh session token' },
  { time: '21:33:02', level: 'ok', levelLabel: 'OK', action: 'COOKIE', detail: 'Refresh token renewed — session valid, steamId64: 76561198045231890' },
  { time: '21:32:55', level: 'warn', levelLabel: 'WARN', action: 'RATE_LIMIT', detail: '429 received — backing off 20s before retry (attempt 1/5)' },
  { time: '21:32:48', level: 'ok', levelLabel: 'OK', action: 'TRADE_SYNC', detail: 'Page 43/57 — 50 events, cursor: AOJ1B4B8' },
  { time: '21:32:42', level: 'ok', levelLabel: 'OK', action: 'TRADE_SYNC', detail: 'Page 42/57 — 50 events, cursor: AOJ1B4A7' },
  { time: '21:32:38', level: 'info', levelLabel: 'INFO', action: 'SYNC', detail: 'Incremental sync — resuming from last_cursor: AOJ1B496' },
  { time: '21:32:35', level: 'info', levelLabel: 'INFO', action: 'SYNC', detail: 'full_sync_complete=true — switching to incremental mode' },
  { time: '21:32:30', level: 'ok', levelLabel: 'OK', action: 'DB', detail: 'Auto-purge: removed 342 entries older than 90 days' },
]

export function SyncLogPreview() {
  return (
    <section className="page-section" id="synclog">
      <div className="container" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        <div className="page-section-inner">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              <div className="section-index">Index / 05</div>
              <h2 className="section-heading">Sync Log</h2>
              <p className="section-desc">
                Live feed via IPC sync-log-entry events. Level filter for OK/WARN/ERR/INFO.
                Auto-purge entries older than 90 days. Full persistent audit trail in SQLite.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="app-btn app-btn-primary" style={{ padding: '8px 16px', fontSize: 10 }}>
                Sync Now
              </button>
            </div>
          </div>

          {/* Log viewer */}
          <div className="stash-card corners">
            <div className="card-head">
              <h3>Stream</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="level-pills">
                  <span className="level-pill ok">OK</span>
                  <span className="level-pill warn">WARN</span>
                  <span className="level-pill err">ERR</span>
                  <span className="level-pill info">INFO</span>
                </div>
                <span className="meta">1,247 entries</span>
              </div>
            </div>
            {logEntries.map((entry, i) => (
              <div key={i} className="log-entry">
                <span className="log-time">{entry.time}</span>
                <span className={`log-level ${entry.level}`}>{entry.levelLabel}</span>
                <span className="log-action">{entry.action}</span>
                <span className="log-detail">{entry.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
