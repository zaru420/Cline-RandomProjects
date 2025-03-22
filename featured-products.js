function rotateFeaturedProducts() {
    const featuredProducts = [
        { name: "Product 4", image: "https://via.placeholder.com/150", description: "Description of Product 4.", price: "$49.99" },
        { name: "Product 5", image: "https://via.placeholder.com/150", description: "Description of Product 5.", price: "$59.99" },
        { name: "Product 6", image: "https://via.placeholder.com/150", description: "Description of Product 6.", price: "$69.99" },
        { name: "Product 7", image: "https://via.placeholder.com/150", description: "Description of Product 7.", price: "$79.99" }
    ];

    const leftSidebar = document.getElementById('left-sidebar');
    const rightSidebar = document.getElementById('right-sidebar');

    let leftIndex = 0;
    let rightIndex = 1;

    function updateSidebars() {
        leftSidebar.innerHTML = `
            <h3>Featured Products</h3>
            <div class="product">
                <h3>${featuredProducts[leftIndex].name}</h3>
                <img src="${featuredProducts[leftIndex].image}" alt="${featuredProducts[leftIndex].name}">
                <p>${featuredProducts[leftIndex].description}</p>
                <p>${featuredProducts[leftIndex].price}</p>
                <button>Add to Cart</button>
            </div>
        `;

        rightSidebar.innerHTML = `
            <h3>Featured Products</h3>
            <div class="product">
                <h3>${featuredProducts[rightIndex].name}</h3>
                <img src="${featuredProducts[rightIndex].image}" alt="${featuredProducts[rightIndex].name}">
                <p>${featuredProducts[rightIndex].description}</p>
                <p>${featuredProducts[rightIndex].price}</p>
                <button>Add to Cart</button>
            </div>
        `;
}

    updateSidebars();

    setInterval(() => {
        leftIndex = (leftIndex + 2) % featuredProducts.length;
        rightIndex = (rightIndex + 2) % featuredProducts.length;
        updateSidebars();
    }, 3000);
}

window.rotateFeaturedProducts = rotateFeaturedProducts;
