document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Sample product data (replace with your actual data source)
    const products = {
        1: { name: "Product 1", image: "https://via.placeholder.com/150", description: "Descripción del producto 1.", price: 19.99 },
        2: { name: "Product 2", image: "https://via.placeholder.com/150", description: "Descripción del producto 2.", price: 29.99 },
        3: { name: "Product 3", image: "https://via.placeholder.com/150", description: "Descripción del producto 3.", price: 39.99 },
        4: { name: "Product 4", image: "https://via.placeholder.com/150", description: "Descripción del producto 4.", price: 49.99 },
        5: { name: "Product 5", image: "https://via.placeholder.com/150", description: "Descripción del producto 5.", price: 59.99 },
        6: { name: "Product 6", image: "https://via.placeholder.com/150", description: "Descripción del producto 6.", price: 69.99 },
        7: { name: "Product 7", image: "https://via.placeholder.com/150", description: "Descripción del producto 7.", price: 79.99 }
    };

    const product = products[productId];

    if (product) {
        document.getElementById('product-name').value = product.name;
        document.getElementById('product-image').value = product.image;
        document.getElementById('product-description').value = product.description;
        document.getElementById('product-price').value = product.price;
    } else {
        alert('Product not found');
    }

    const productForm = document.getElementById('product-form');

    productForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const productName = document.getElementById('product-name').value;
        const productImage = document.getElementById('product-image').value;
        const productDescription = document.getElementById('product-description').value;
        const productPrice = document.getElementById('product-price').value;

        // Update the product data (in a real application, you would send this data to a server)
        product.name = productName;
        product.image = productImage;
        product.description = productDescription;
        product.price = productPrice;

        alert('Product updated successfully');

        // Redirect to the main page
        window.location.href = 'index.html';
    });
});
