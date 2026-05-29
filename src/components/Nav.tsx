/* Sidebar — mirrors the app's sidebar component exactly */

interface SidebarProps {
  activeSection: string
}

const navLinks = [
  { id: 'hero', label: 'Home', num: '' },
  { id: 'dashboard', label: 'Dashboard', num: '01' },
  { id: 'trades', label: 'Trade History', num: '02' },
  { id: 'market', label: 'Market History', num: '03' },
  { id: 'cases', label: 'Case Openings', num: '04' },
  { id: 'synclog', label: 'Sync Log', num: '05' },
  { id: 'auth', label: 'Settings', num: '06' },
  { id: 'localdb', label: 'Local DB', num: '' },
]

export function Sidebar({ activeSection }: SidebarProps) {
  return (
    <aside className="site-sidebar">
      <div className="sidebar-header" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div className="sidebar-logo">
          <span>S</span>
          <span className="sidebar-logo-inner" />
        </div>
        <div>
          <div className="sidebar-brand">Steam·Stash</div>
          <div className="sidebar-vault">Vault / 0x4F2A</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="sidebar-section-label">Index</div>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`sidebar-link ${activeSection === link.id ? 'active' : ''}`}
          >
            <span>{link.label}</span>
            <span className="sidebar-link-num">{link.num}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sync-status-mini">
          <span className="led green led-xs" />
          Idle · ready
        </div>
      </div>
    </aside>
  )
}
