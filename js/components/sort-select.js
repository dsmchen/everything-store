export function initSortSelect() {
  const sortSelect = document.getElementById('sort-select');

  function handleSelect() {
    if (sortSelect.value) {
      const products = document.querySelectorAll('article');
      const productsArray = Array.from(products);
      const productGrid = document.getElementById('product-grid');
      let sortedProducts = [];

      switch (sortSelect.value) {
        case 'price-low':
          sortedProducts = productsArray.sort(comparePriceLow);
          break;
        case 'price-high':
          sortedProducts = productsArray.sort(comparePriceHigh);
          break;
        case 'rating':
          sortedProducts = productsArray.sort(compareRating);
          break;
        default:
          const p = document.createElement('p');
          p.textContent =
            'Sorry, something went wrong. Please try again later.';
          productGrid.appendChild(p);
      }

      sortedProducts.forEach((product) => productGrid.appendChild(product));
    }
  }

  sortSelect.addEventListener('change', handleSelect);
}

function comparePriceLow(a, b) {
  return a.getAttribute('data-price') - b.getAttribute('data-price');
}

function comparePriceHigh(a, b) {
  return b.getAttribute('data-price') - a.getAttribute('data-price');
}

function compareRating(a, b) {
  return b.getAttribute('data-rating') - a.getAttribute('data-rating');
}
