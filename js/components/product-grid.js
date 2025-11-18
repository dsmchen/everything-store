import { getProducts } from '../services/api.js';

export async function displayProducts() {
  const productGrid = document.getElementById('product-grid');
  const dataArray = await getProducts();

  dataArray.forEach((product) => {
    const productCard = document.createElement('article');
    const productTitle = document.createElement('h2');
    const productPrice = document.createElement('span');
    const productCategory = document.createElement('span');
    const productImage = document.createElement('img');
    const productImageContainer = document.createElement('div');
    const productRatingRate = document.createElement('span');
    const productRatingCount = document.createElement('span');
    const productRatingContainer = document.createElement('div');

    productCard.setAttribute('data-title', product.title);
    productCard.setAttribute('data-desc', product.description);
    productCard.setAttribute('data-price', product.price);
    productCard.setAttribute('data-rating', product.rating.rate);

    productTitle.classList.add('title');
    productPrice.classList.add('price');
    productCategory.classList.add('category');
    productImage.classList.add('image');
    productImageContainer.classList.add('image-container');
    productRatingRate.classList.add('rating-rate');
    productRatingCount.classList.add('rating-count');
    productRatingContainer.classList.add('rating-container');

    productTitle.textContent = product.title;
    productPrice.textContent = `$${product.price}`;
    productCategory.textContent = product.category;
    productImage.src = product.image;
    productImage.alt = product.title;
    productRatingCount.textContent = `(${product.rating.count})`;

    let stars = 0;

    for (let i = 1; i < product.rating.rate * 10; i++) {
      if (i % 10 === 0) {
        const starFill = document.createElement('span');
        starFill.classList.add('star-fill', 'star');
        productRatingRate.appendChild(starFill);
        stars++;
      }
    }

    const remainder = (product.rating.rate * 10) % 10;
    if (remainder >= 5) {
      const starHalf = document.createElement('span');
      starHalf.classList.add('star-half', 'star');
      productRatingRate.appendChild(starHalf);
      stars++;
    }

    if (stars < 5) {
      for (let i = 0; i < 5 - stars; i++) {
        const starLine = document.createElement('span');
        starLine.classList.add('star-line', 'star');
        productRatingRate.appendChild(starLine);
      }
    }

    productImageContainer.appendChild(productImage);
    productRatingContainer.append(productRatingRate, productRatingCount);
    productCard.append(
      productImageContainer,
      productTitle,
      productPrice,
      productRatingContainer,
      productCategory
    );
    productGrid.appendChild(productCard);
  });
}
