import { displayProducts } from './product-grid.js';

export function initPriceRange() {
  const rangeInput = document.querySelectorAll('.range-input input'),
    priceInput = document.querySelectorAll('.price-input input'),
    range = document.querySelector('.slider .progress');
  let priceGap = 100;

  priceInput.forEach((input) => {
    input.addEventListener('input', (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (
        priceInput[0].validity.valid &&
        priceInput[1].validity.valid &&
        maxPrice > minPrice &&
        maxPrice - minPrice >= priceGap &&
        maxPrice <= rangeInput[1].max
      ) {
        hideErrorMessage('price-range-error');

        if (e.target.className === 'input-min') {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + '%';
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + '%';
        }
      } else {
        showErrorMessage('price-range-error', 'Invalid input.');
      }
    });

    input.addEventListener('change', () => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (
        priceInput[0].validity.valid &&
        priceInput[1].validity.valid &&
        maxPrice > minPrice &&
        maxPrice - minPrice >= priceGap &&
        maxPrice <= rangeInput[1].max
      ) {
        filterByPriceRange();
      }
    });
  });

  rangeInput.forEach((input) => {
    input.addEventListener('input', (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === 'range-min') {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + '%';
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
      }
    });

    input.addEventListener('change', () => {
      hideErrorMessage('price-range-error');
      filterByPriceRange();
    });
  });

  async function filterByPriceRange() {
    const productGrid = document.getElementById('product-grid');

    removeAllChildNodes(productGrid);

    const isDisplayed = await displayProducts();

    if (isDisplayed === undefined) {
      const products = document.querySelectorAll('article');
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
      let filteredProducts = Array.from(products).filter((product) =>
        filterProduct(product, minPrice, maxPrice)
      );

      removeAllChildNodes(productGrid);

      filteredProducts.forEach((product) => productGrid.appendChild(product));

      if (filteredProducts.length) {
        hideErrorMessage('product-grid-error');
      } else {
        showErrorMessage(
          'product-grid-error',
          'Sorry, no results found. Please try again.'
        );
      }
    }
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function filterProduct(product, minPrice, maxPrice) {
  return (
    product.getAttribute('data-price') >= minPrice &&
    product.getAttribute('data-price') <= maxPrice
  );
}

function showErrorMessage(id, message) {
  const error = document.getElementById(id);
  error.textContent = message;
}

function hideErrorMessage(id) {
  const error = document.getElementById(id);
  error.textContent = '';
}
