import { search } from './components/header.js';
import { sortSelect } from './components/sort-select.js';
import { displayProducts } from './components/product-grid.js';

window.addEventListener('load', () => {
  search();
  sortSelect();
  displayProducts();
});
