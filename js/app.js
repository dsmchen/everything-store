import { search } from './components/header.js';
import { displayProducts } from './components/product-grid.js';

window.addEventListener('load', () => {
  search();
  displayProducts();
});
