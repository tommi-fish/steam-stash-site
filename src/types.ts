// Types for the website components — mostly unused since we use inline data
export interface TradeItem {
  name: string
  color: string
  img: string
}

export interface TradeEntry {
  partner: string
  date: string
  received: TradeItem[]
  sent: TradeItem[]
}

export interface MarketTx {
  type: string
  cls: string
  item: string
  color: string
  price: string
  date: string
  img: string
}
