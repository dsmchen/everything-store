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

    productTitle.textContent = product.title;
    productPrice.textContent = product.price;
    productRating.textContent = `${product.rating.rate}/5 (${product.rating.count})`;
    productCategory.textContent = product.category;
    productImage.src = product.image;

    productCard.append(
      productTitle,
      productPrice,
      productRating,
      productCategory,
      productImage
    );
    productGrid.appendChild(productCard);
  });
}
