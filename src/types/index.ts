export interface IState {
  products: Product[],
  orders: Order[]
}

export type Product = {
  id: string,
  name: string,
  category: string,
  unitPrice: number,
  active: boolean,
}

export type Order = {
  id: string,
  number: string,
  status: string,
  createdAt: Date,
  updatedAt: Date,
  customer: string,
  products: String[],
  taxes: number,
  totalTaxes: number,
  total: number,
}
