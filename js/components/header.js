export function search() {
  const submitBtn = document.querySelector('form button');

  function handleSubmit(e) {
    e.preventDefault();

    const products = document.querySelectorAll('article');
    const searchInput = document.getElementById('product-search');
    const keywords = searchInput.value.toLowerCase();

    Array.from(products).map((product) => showSearchResults(product, keywords));
  }

  function showSearchResults(product, keywords) {
    const title = product.getAttribute('data-title').toLowerCase();
    const desc = product.getAttribute('data-desc').toLowerCase();

    product.classList.remove('hidden');

    if (!title.includes(keywords) && !desc.includes(keywords)) {
      product.classList.add('hidden');
    }
  }

  submitBtn.addEventListener('click', handleSubmit);
}
