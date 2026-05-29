export function Footer() {
  return (
    <footer>
      <div className="container" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        <div className="footer-content">
          <p className="footer-text">
            Built with React + Vite + Electron.{' '}
            <a href="https://github.com/tommi-fish/steam-stash" target="_blank" rel="noopener noreferrer">
              Source on GitHub
            </a>
          </p>
          <div className="footer-links">
            <span className="license-badge">MIT License</span>
            <a href="https://github.com/tommi-fish/steam-stash/issues" target="_blank" rel="noopener noreferrer">
              Report a bug
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
