export function AuthSection() {
  return (
    <section className="page-section" id="auth">
      <div className="container" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        <div className="page-section-inner">
          <div>
            <div className="section-index">Authentication & Sync</div>
            <h2 className="section-heading">Two ways to connect</h2>
            <p className="section-desc">
              Steam Session login with full TOTP/email/phone support, or paste your browser cookies directly.
              Tokens encrypted via OS keychain (safeStorage) — never stored plaintext.
            </p>
          </div>

          <div className="auth-grid">
            <div className="stash-card corners auth-card">
              <h3>Steam Session Login</h3>
              <p>
                Credential-based authentication via the steam-session library. Handles the full Steam login flow
                including TOTP codes, email confirmations, and phone verification. Refresh tokens auto-renewed.
              </p>
              <ul className="auth-list">
                <li>TOTP / email code / phone confirm</li>
                <li>Refresh token encrypted via safeStorage</li>
                <li>Auto-renew on validation success</li>
                <li>steam-user establishes web session</li>
                <li>No browser window needed</li>
              </ul>
            </div>

            <div className="stash-card corners auth-card">
              <h3>Manual Cookie Paste</h3>
              <p>
                Alternative method: paste your full Cookie header from browser DevTools.
                Automatically parses sessionid, steamLoginSecure, and steamId64.
              </p>
              <ul className="auth-list">
                <li>Paste full Cookie header from DevTools</li>
                <li>Auto-extract sessionid + steamId64</li>
                <li>Validation via GET /inventoryhistory</li>
                <li>Encrypted via OS keychain (safeStorage)</li>
                <li>Works alongside Steam Session mode</li>
              </ul>
            </div>
          </div>

          {/* Security callout */}
          <div className="stash-card security-callout">
            <span className="sc-icon">🔒</span>
            <div>
              <div className="sc-title">Cookies are encrypted with safeStorage</div>
              <div className="sc-desc">
                Windows DPAPI · macOS Keychain · Linux libsecret — your tokens never touch plaintext storage.
                Validation on save checks for redirects or "Sign In" responses to confirm cookies are live.
                getActiveCookies() dispatches to the right source based on auth_mode.
              </div>
            </div>
          </div>

          {/* Sync Engine details */}
          <div style={{ marginTop: 20 }}>
            <div className="section-index">Sync Engine</div>
            <h2 className="section-heading" style={{ fontSize: 22 }}>Incremental sync with exponential backoff</h2>
            <p className="section-desc" style={{ marginBottom: 24 }}>
              startSync() is a smart dispatcher: full sync → incremental sync → resume from cursor.
              Rate limiting with configurable delays. 429 recovery with cookie auto-refresh.
            </p>
          </div>

          <div className="auth-grid">
            <div className="stash-card corners auth-card">
              <h3>Sync Modes</h3>
              <ul className="auth-list">
                <li>Full sync: first run, no last_cursor</li>
                <li>Incremental: full_sync_complete flag set</li>
                <li>Resume: picks up from last_cursor</li>
                <li>Market chains after inventory goes idle</li>
                <li>Cancellation via abort signal</li>
              </ul>
            </div>

            <div className="stash-card corners auth-card">
              <h3>Rate Limiting & Recovery</h3>
              <ul className="auth-list">
                <li>Min delay between requests: 4s (configurable)</li>
                <li>429 → exponential backoff: 20s → 40s → 60s</li>
                <li>5 consecutive 429s → 5min pause</li>
                <li>steamSession.webLogOn() refresh cookies</li>
                <li>5 more retries → hard stop if still failing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
