
interface CardlistInfo {
  containerid: string,
  show_style: number,
  since_id: number,
  total: number,
  v_p: number
}

interface CardType {
  card_type: number,
  itemid: string,
  mblog: object,
  profile_type_id: string, 
  scheme: string
}
interface data {
  cardlistInfo?: CardlistInfo,
  cards?: Array<CardType>,
}
interface Weibo {
  data: data,
  ok: number
}

export {Weibo, CardType};