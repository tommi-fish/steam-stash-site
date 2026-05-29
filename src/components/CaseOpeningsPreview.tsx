const caseOpens = [
  {
    container: 'Revolution Case',
    containerImg: 'https://community.steamstatic.com/economy/image/-9a81dlWLwJ2UXp-JQ0bSVRSfHxqQlRfUkVb7kMFY1I1c0d3D7cRFh0YB4cGFh0YB4cGFh0YB4cGFh0YB4cGFh0YB4cGFh0YB4cGFh0YB4cGFh0Y/56fx36f',
    source: 'unlocked',
    sourceLabel: 'KEY',
    sourceColor: 'var(--positive)',
    received: 'AK-47 | Head Shot (Factory New)',
    receivedColor: '#eb4b4b',
    receivedImg: 'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlV6xoIfSsHW-f1dF-v-1mcCW6khUz_TzRnNigd3-SOg4lAsF1QOQN4xS4wdHnMu-0swaMjIxExSSoiyof6ih1o7FVGHIdVhw/64fx40f',
    date: '16 May 2026 · 20:15',
  },
  {
    container: 'Dreams & Nightmares Case',
    containerImg: 'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frnIV7Kb5OaU-JqfHDzXFle0u4LY8Gy_kkRgisGzcm4v4J3vDOAQmDMdyRvlK7EcmeCU3yw/56fx36f',
    source: 'unlocked',
    sourceLabel: 'KEY',
    sourceColor: 'var(--positive)',
    received: 'MP7 | Abyssal Apparition (Minimal Wear)',
    receivedColor: '#8847ff',
    receivedImg: 'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf_jdk4uL5V6JoIeKsAm6Xyfo45uc9GnnnzBh-5zzTw9n9I3mQPAEgD5YlFuIOthC6wNK1MeKwsgHeiZUFk3vcOiyhPQ/64fx40f',
    date: '15 May 2026 · 23:42',
  },
  {
    container: 'Stockholm 2021 Dust II Souvenir Package',
    containerImg: 'https://community.steamstatic.com/economy/image/-9a81dlWLwJ2UXp-JQ0bSVRSfHxqQlRfUkVb7kMFY1I1c0d3D7cRFh0YB4cGFh0YB4cGFh0YB4cGFh0YB4cGFh0YB4cGFh0YB4cGFh0YB4cGFh0Y/56fx36f',
    source: 'souvenir',
    sourceLabel: 'SOUVENIR',
    sourceColor: 'var(--ink-8)',
    received: 'Glock-18 | Sand Dune (Field-Tested)',
    receivedColor: '#b0c3d9',
    receivedImg: 'https://community.steamstatic.com/economy/image/-9a81dlWLwJ2UXp-JQ0bSVRSfHxqQlRfUkVb7kMFY1I1c0d3D7cRFh0YB4cGFh0YB4cGFh0YB4cGFh0YB4cGFh0YB4cGFh0YB4cGFh0YB4cGFh0Y/64fx40f',
    date: '14 May 2026 · 18:30',
  },
  {
    container: 'Kilowatt Case',
    containerImg: 'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frnEVvqf_a6VoIfGSXz7Hlbwg57QwSS_mxhl15jiGyN37c3_GZw91W8BwRflK7EfKsa2sfw/56fx36f',
    source: 'unlocked',
    sourceLabel: 'KEY',
    sourceColor: 'var(--positive)',
    received: 'Zeus x27 | Olympus (Factory New)',
    receivedColor: '#4b69ff',
    receivedImg: 'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLln4Xl7x1B6ue9V7BlNf6XC3WvxuFyj-1gSCGn2xl2sm7XnI6hdC-XPAcmXsF2RLIP4xbslty2NLvqswePjYlEySn33S9XrnE8cYTqlUY/64fx40f',
    date: '13 May 2026 · 14:08',
  },
  {
    container: 'Sticker Capsule',
    containerImg: 'https://community.steamstatic.com/economy/image/-9a81dlWLwJ2UXp-JQ0bSVRSfHxqQlRfUkVb7kMFY1I1c0d3D7cRFh0YB4cGFh0YB4cGFh0YB4cGFh0YB4cGFh0YB4cGFh0YB4cGFh0YB4cGFh0Y/56fx36f',
    source: 'sticker_capsule',
    sourceLabel: 'CAPSULE',
    sourceColor: 'var(--warn)',
    received: 'Sticker | Natus Vincere (Holo) | Katowice 2014',
    receivedColor: '#e4ae39',
    receivedImg: 'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJai0ki7VeTHjM-sJnCW8Vli_YTxuAm2FVL_n4DpwipU4_3gav08c6jBWzHElbck5ONvGX2yxU8m6mnXwtetcnOfOgMiCJclRbIMsg74zIPTbZA4cw/64fx40f',
    date: '12 May 2026 · 09:55',
  },
  {
    container: 'Chroma 3 Case',
    containerImg: 'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frHAVuKf7PaJucPLHW2TExb9z4OdvHirixEomtW7cyduvci2VZ1AiCsR2Q_lK7EdW_VBhrw/56fx36f',
    source: 'unlocked',
    sourceLabel: 'KEY',
    sourceColor: 'var(--positive)',
    received: 'M4A1-S | Mecha Industries (Factory New)',
    receivedColor: '#eb4b4b',
    receivedImg: 'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_eAMWrEwL9JveRqRyiMnBMjpi6RiIb8MhTLN1F4TowiE7EMtRW7ltzlMbvi5wPej4pDmCT2i3tKuHo4sOoEWKFz8qPS3F7BL_Rjtn0I4s52/64fx40f',
    date: '11 May 2026 · 22:17',
  },
]

export function CaseOpeningsPreview() {
  return (
    <section className="page-section" id="cases">
      <div className="container" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        <div className="page-section-inner">
          <div>
            <div className="section-index">Index / 04</div>
            <h2 className="section-heading">Case Openings</h2>
            <p className="section-desc">
              Track every case, capsule, and souvenir package you've opened.
              4 source types: Unlocked (keys), Souvenir (tournament packages), Sticker Capsules, and Arms Dealer.
              Counter + Stats view modes with rarity distribution panels.
            </p>
          </div>

          {/* 4 counter cards (matching the app's 4-column grid) */}
          <div className="counter-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="stash-card corners counter-block lit counter-card">
              <div className="counter-label">Total Opens</div>
              <div className="counter-value" style={{ fontSize: 42 }}>847</div>
              <div className="counter-sub" style={{ marginTop: 'auto' }}>case openings · all-time</div>
            </div>
            <div className="stash-card corners counter-block lit counter-card">
              <div className="counter-label">Unlocked</div>
              <div className="counter-value" style={{ fontSize: 42 }}>623</div>
              <div className="counter-sub" style={{ marginTop: 'auto' }}>keys · containers</div>
            </div>
            <div className="stash-card corners counter-block lit counter-card">
              <div className="counter-label">Souvenir</div>
              <div className="counter-value" style={{ fontSize: 42 }}>142</div>
              <div className="counter-sub" style={{ marginTop: 'auto' }}>packages · highlights</div>
            </div>
            <div className="stash-card corners counter-block lit counter-card">
              <div className="counter-label">Stickers</div>
              <div className="counter-value" style={{ fontSize: 42 }}>82</div>
              <div className="counter-sub" style={{ marginTop: 'auto' }}>capsules · autographs</div>
            </div>
          </div>

          {/* Filters */}
          <div className="stash-card corners">
            <div className="card-head">
              <h3>Filters</h3>
              <span className="meta">847 openings</span>
            </div>
            <div className="filter-bar">
              <input type="text" placeholder="Filter by container..." style={{ width: 200 }} readOnly />
              <select defaultValue="">
                <option value="">All sources</option>
                <option value="unlocked">Unlocked</option>
                <option value="souvenir">Souvenir</option>
                <option value="sticker_capsule">Sticker Capsule</option>
                <option value="arms_dealer">Arms Dealer</option>
              </select>
              <select defaultValue="newest">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>

          {/* Opening rows */}
          <div className="stash-card corners">
            <div className="card-head">
              <h3>Opens</h3>
              <span className="meta">Page 1 of 17</span>
            </div>
            {caseOpens.map((o, i) => (
              <div key={i} className="market-row">
                {o.containerImg && <img src={o.containerImg} alt="" className="market-thumb" />}
                <span style={{ flex: '0 0 180px', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: 13, color: 'var(--ink-9)' }}>
                  {o.container}
                </span>
                <span className={`tx-chip ${o.source === 'unlocked' ? 'buy' : o.source === 'souvenir' ? 'list' : o.source === 'sticker_capsule' ? 'cxl' : 'sell'}`}
                  style={{ color: o.sourceColor }}>
                  {o.sourceLabel}
                </span>
                {o.receivedImg && <img src={o.receivedImg} alt="" className="market-thumb" />}
                <span className="market-name" style={{ color: o.receivedColor }}>{o.received}</span>
                <span className="market-date">{o.date}</span>
              </div>
            ))}
            <div className="pag-bar">
              <button className="app-btn app-btn-ghost" style={{ padding: '8px 16px', fontSize: 10 }} disabled>← Prev</button>
              <span className="pag-text">Page 1 / 17</span>
              <button className="app-btn app-btn-ghost" style={{ padding: '8px 16px', fontSize: 10 }}>Next →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
