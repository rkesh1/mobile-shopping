import { createContext } from 'react';

const ProductListContext = createContext({
  products: [],
  setProducts: () => {},
  cart:[],
  setCart: () => {},
});

export default ProductListContext;