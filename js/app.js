import { initSearch } from './components/header.js';
import { initSortSelect } from './components/sort-select.js';
import { initPriceRange } from './components/price-range.js';
import { displayProducts } from './components/product-grid.js';

window.addEventListener('load', () => {
  initSearch();
  initSortSelect();
  initPriceRange();
  displayProducts();
});
