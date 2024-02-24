import type { ProductItem } from '../types/types'

export const getProducts: ProductItem[] = () => {
  return fetch('https://fakestoreapi.com/products?limit=10')
    .then((res) => res.json())
    .then((json) => json)
}
