document.addEventListener('DOMContentLoaded', function () {
  fetch('content.json')
    .then(response => response.json())
    .then(data => {
      const productList = document.getElementById('product-list');
      const leftSidebar = document.getElementById('left-sidebar');
      const rightSidebar = document.getElementById('right-sidebar');
      const footerText = document.getElementById('footer-text');

      // Populate product list
      data.products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
          <h3>${product.name}</h3>
          <img src="${product.image}" alt="${product.name}">
          <p>${product.description}</p>
          <p>${product.price}</p>
          <button>Add to Cart</button>
        `;
        productList.appendChild(productDiv);
      });

      // Populate left sidebar
      if (data.sidebars.length > 0) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
          <h3>Featured Products</h3>
          <h3>${data.sidebars[0].name}</h3>
          <img src="${data.sidebars[0].image}" alt="${data.sidebars[0].name}">
          <p>${data.sidebars[0].description}</p>
          <p>${data.sidebars[0].price}</p>
          <button>Add to Cart</button>
        `;
        leftSidebar.appendChild(productDiv);
      }

      // Populate right sidebar
      if (data.sidebars.length > 1) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
          <h3>Featured Products</h3>
          <h3>${data.sidebars[1].name}</h3>
          <img src="${data.sidebars[1].image}" alt="${data.sidebars[1].name}">
          <p>${data.sidebars[1].description}</p>
          <p>${data.sidebars[1].price}</p>
          <button>Add to Cart</button>
        `;
        rightSidebar.appendChild(productDiv);
      }

      // Populate footer
      footerText.innerHTML = data.footer;
    })
    .catch(error => console.error('Error loading content:', error));
});
