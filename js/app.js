import { search } from './components/header.js';
import { sortSelect } from './components/sort-select.js';
import { priceRange } from './components/price-range.js';
import { displayProducts } from './components/product-grid.js';

window.addEventListener('load', () => {
  search();
  sortSelect();
  priceRange();
  displayProducts();
});
