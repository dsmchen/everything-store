import { getProducts } from '../services/api.js';

export async function displayProducts() {
  const productGrid = document.getElementById('product-grid');
  const dataArray = await getProducts();

  dataArray.forEach((product) => {
    const productCard = document.createElement('article');
    const productTitle = document.createElement('h2');
    const productPrice = document.createElement('span');
    const productRating = document.createElement('span');
    const productCategory = document.createElement('span');
    const productImage = document.createElement('img');
    const productTextContainer = document.createElement('div');
    const productImageContainer = document.createElement('div');

    productTitle.classList.add('title');
    productPrice.classList.add('price');
    productRating.classList.add('rating');
    productCategory.classList.add('category');
    productImage.classList.add('image');
    productTextContainer.classList.add('text-container');
    productImageContainer.classList.add('image-container');

    productTitle.textContent = product.title;
    productPrice.textContent = `$${product.price}`;
    productRating.textContent = `${product.rating.rate}/5 (${product.rating.count})`;
    productCategory.textContent = product.category;
    productImage.src = product.image;
    productImage.alt = product.title;

    productTextContainer.append(productRating, productPrice);
    productImageContainer.appendChild(productImage);
    productCard.append(
      productImageContainer,
      productTextContainer,
      productTitle,
      productCategory
    );
    productGrid.appendChild(productCard);
  });
}
