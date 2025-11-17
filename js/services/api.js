export async function getProducts() {
  let response;

  try {
    const url = 'https://fakestoreapi.com/products';
    response = await fetch(url);
  } catch (error) {
    console.error(error);
  }

  if (response?.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error(`HTTP Response Code: ${response?.status}`);
  }
}
