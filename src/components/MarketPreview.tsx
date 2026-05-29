const transactions = [
  { type: 'BUY', cls: 'buy', item: 'AK-47 | Neon Rider (Factory New)', color: '#eb4b4b', price: '$89.99', date: '16 May 2026 · 21:02', img: 'https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlV6poL_6sHG6UxPxJvOhuRz39xkQhsTnVzoygdy7Ea1UoCZQkRe9bs0brl9TvN-m0tVHYjY5CyS35jjQJsHhk4o5zcA/56fx36f' },
  { type: 'SELL', cls: 'sell', item: 'AWP | Redline (Field-Tested)', color: '#d32ce6', price: '$18.42', date: '16 May 2026 · 18:45', img: 'https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6diIuKSMWqVxedjva85GXDgzE1z5GmAm9iodyiXbw92DJV1RbIJukTulYeyPuri5FHfiIgX02yg2bDKVgQu/56fx36f' },
  { type: 'LIST', cls: 'list', item: 'M4A1-S | Printstream (Minimal Wear)', color: '#eb4b4b', price: '$178.00', date: '16 May 2026 · 14:30', img: 'https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9lj_F7Rienhgk1tjyIpYPwJiPTcAAoCpsiEO5ZsUbpm9C2Zuni4VHW3o5EzSX62HxP7Sg96-hWVqYi_6TJz1aW0nxrkGs/56fx36f' },
  { type: 'CXL', cls: 'cxl', item: 'Glock-18 | Water Elemental (Factory New)', color: '#8847ff', price: '$12.50', date: '15 May 2026 · 23:11', img: 'https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK72fB3aFxP11te99cCW6khUz_TjVyompc3-QOFR2DJQkFOMJtBbqk9LlY-7n5QLZjtkTxCWqhixPv311o7FVIf8eASQ/56fx36f' },
  { type: 'BUY', cls: 'buy', item: 'USP-S | Kill Confirmed (Well-Worn)', color: '#eb4b4b', price: '$52.30', date: '15 May 2026 · 19:47', img: 'https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_uV_vO1WTCa9kxQ1vjiBpYL8JSLSMxghCMEjEeNe5hHpw9zhYuOz5VfcitpBmyqt3X9O6itrsesFUfYmrKzTkUifZqPQtnZK/56fx36f' },
  { type: 'SELL', cls: 'sell', item: 'P90 | Asiimov (Factory New)', color: '#d32ce6', price: '$14.75', date: '15 May 2026 · 12:08', img: 'https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_jdk_6v-JaV-KfmeAXGvzedxuPUnTSjikRgksjuBzoz4dXLFb1QoC8QlTLQD4EPqk4LvN-Pns1aMioNBzTK-0H3gQVv65g/56fx36f' },
  { type: 'BUY', cls: 'buy', item: 'Operation Broken Fang Case', color: '#b0c3d9', price: '$0.28', date: '14 May 2026 · 08:33', img: 'https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3UVu6P-MPQ0dKbCVzLGx7wgtbM6S3jhw0V25m-EnNj7JS7GaQ4nD8QiRflK7EfH0YGFHg/56fx36f' },
  { type: 'LIST', cls: 'list', item: 'SG 553 | Integrale (Factory New)', color: '#eb4b4b', price: '$42.50', date: '13 May 2026 · 20:15', img: 'https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLimcO1qx1Y-s29b_E4c8-BD2uc2NF6ueZhW2e2wkV14m2DzditcnmQOA4gWcYlQOcDs0a7moLvZLiw5geP3dgRnnj2kGoXuQPBQAH6/56fx36f' },
  { type: 'SELL', cls: 'sell', item: 'StatTrak™ AK-47 | The Empress (Factory New)', color: '#eb4b4b', price: '$67.80', date: '13 May 2026 · 15:42', img: 'https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiVI0POlPPNSJf2DHGKD0tF6ueZhW2exxEt152rWzI7_Ii-Ubw90DMB0Ee4C5xOwx9GxZbjk71PXgogWn36tkGoXudZeYvlo/56fx36f' },
  { type: 'BUY', cls: 'buy', item: 'Desert Eagle | Blaze (Factory New)', color: '#8847ff', price: '$445.00', date: '12 May 2026 · 11:20', img: 'https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7OeRbKF-JeKHMWKRxuJzj-JmXTu8kRgpjDGMnYftb32UPwJxDJokRuUIsRi_lNPhM7izsgXZi49GySiq2nxNuCdttbtUB_A7uvqAjSk2l_c/56fx36f' },
  { type: 'CXL', cls: 'cxl', item: 'M4A4 | Howl (Factory New)', color: '#e4ae39', price: '$6,850.00', date: '11 May 2026 · 09:05', img: 'https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afVSKP-EAm6extF6ueZhW2exwkl2tmTXwt39eCiUPQR2DMN4TOVetUK8xoLgM-K341eM2otDnC6okGoXufBz_TAB/56fx36f' },
  { type: 'SELL', cls: 'sell', item: 'AK-47 | Fire Serpent (Minimal Wear)', color: '#eb4b4b', price: '$320.50', date: '10 May 2026 · 22:38', img: 'https://community.cloudflare.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0PSneqF-JeKDC2mE_u995LZWTTuygxIYvzSCkpu3cnvFPQB2DpUkROFY4Rntw93lP7i241DbiI1BxSuviHlKunk_6-sHU71lpPMTRLyP4Q/56fx36f' },
]

export function MarketPreview() {
  return (
    <section className="page-section" id="market">
      <div className="container" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>
        <div className="page-section-inner">
          <div>
            <div className="section-index">Index / 03</div>
            <h2 className="section-heading">Market History</h2>
            <p className="section-desc">
              Paginated transaction table (50/page) with BUY/SELL/LIST/CXL chips, price data from the Steam market endpoint,
              and item search. Two-phase sync: inventory scraper creates rows, market scraper fills prices.
            </p>
          </div>

          {/* 3 counter cards */}
          <div className="counter-grid">
            <div className="stash-card corners counter-block lit counter-card">
              <div className="counter-label">Total Transactions</div>
              <div className="counter-value">11,302</div>
              <div className="counter-sub" style={{ marginTop: 'auto' }}>buy · sell · list · cancel</div>
            </div>
            <div className="stash-card corners counter-block lit counter-card">
              <div className="counter-label">Newest</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 16, lineHeight: 1.2, color: '#eb4b4b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', letterSpacing: '-0.01em' }}>
                AK-47 | Neon Rider (FN)
              </div>
              <div className="counter-sub" style={{ marginTop: 'auto' }}>16 May 2026 · $89.99</div>
            </div>
            <div className="stash-card corners counter-block lit counter-card">
              <div className="counter-label">Oldest</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 16, lineHeight: 1.2, color: '#b0c3d9', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', letterSpacing: '-0.01em' }}>
                Falchion Case
              </div>
              <div className="counter-sub" style={{ marginTop: 'auto' }}>02 Jan 2024 · $0.45</div>
            </div>
          </div>

          {/* Filters */}
          <div className="stash-card corners">
            <div className="card-head">
              <h3>Filters</h3>
              <span className="meta">11,302 transactions</span>
            </div>
            <div className="filter-bar">
              <input type="text" placeholder="Filter by item..." style={{ width: 180 }} readOnly />
              <select defaultValue="all">
                <option value="all">All types</option>
                <option value="bought">Bought</option>
                <option value="sold">Sold</option>
                <option value="listed">Listed</option>
                <option value="canceled">Canceled</option>
              </select>
              <select defaultValue="730">
                <option value="730">Counter-Strike 2</option>
                <option value="440">Team Fortress 2</option>
              </select>
              <select defaultValue="newest">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
              <input type="date" readOnly style={{ width: 120 }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ink-6)' }}>to</span>
              <input type="date" readOnly style={{ width: 120 }} />
            </div>
          </div>

          {/* Transaction rows */}
          <div className="stash-card corners">
            <div className="card-head">
              <h3>Transactions</h3>
              <span className="meta">Page 1 of 227</span>
            </div>
            {transactions.map((tx, i) => (
              <div key={i} className="market-row">
                {tx.img && <img src={tx.img} alt="" className="market-thumb" />}
                <span className={`tx-chip ${tx.cls}`}>{tx.type}</span>
                <span className="market-name" style={{ color: tx.color }}>{tx.item}</span>
                <span className="market-price">{tx.price}</span>
                <span className="market-date">{tx.date}</span>
              </div>
            ))}
            <div className="pag-bar">
              <button className="app-btn app-btn-ghost" style={{ padding: '8px 16px', fontSize: 10 }} disabled>← Prev</button>
              <span className="pag-text">Page 1 / 227</span>
              <button className="app-btn app-btn-ghost" style={{ padding: '8px 16px', fontSize: 10 }}>Next →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
