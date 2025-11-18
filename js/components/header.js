export function search() {
  const searchInput = document.getElementById('product-search');
  const submitBtn = document.querySelector('form button');

  function handleSubmit(e) {
    e.preventDefault();

    const products = document.querySelectorAll('article');
    Array.from(products).map((product) => {
      product.classList.remove('hidden');
      const title = product.getAttribute('data-title').toLowerCase();
      const desc = product.getAttribute('data-desc').toLowerCase();
      const keywords = searchInput.value.toLowerCase();

      if (!title.includes(keywords) && !desc.includes(keywords)) {
        product.classList.add('hidden');
      }
    });
  }

  submitBtn.addEventListener('click', handleSubmit);
}
