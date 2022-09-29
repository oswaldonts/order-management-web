export interface IState {
  products: {
    content: Product[],
    pageable: {
      pageNumber: number
    },
    totalPages: number
  },
  orders: {
    content: Order[],
    pageable: {
      pageNumber: number
    },
    totalPages: number
  }
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
