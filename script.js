document.addEventListener('DOMContentLoaded', function () {
    rotateFeaturedProducts();

    const languageSelect = document.getElementById('language-select');
    let translations = {};

    fetch('translations.json')
        .then(response => response.json())
        .then(data => {
            translations = data;

            if (languageSelect) {
                languageSelect.addEventListener('change', function () {
                    const selectedLanguage = languageSelect.value;
                    translatePage(selectedLanguage);
                });

                translatePage('es');
            }
        })
        .catch(error => console.error('Error loading translations:', error));

    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('remember-me').checked;

            if (username === 'admin' && password === 'password') {
                if (rememberMe) {
                    // Set a cookie to remember the user
                    document.cookie = "username=admin; role=admin; expires=" + new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000).toUTCString() + "; path=/"; // Expires in 1 year
                } else {
                    // Delete the cookie if it exists
                    document.cookie = "username=; role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                }
                window.location.href = 'index.html';
            } else {
                alert('Invalid credentials');
            }
        });
    }

    // Check for existing session on page load
    function checkSession() {
        const username = getCookie("username");
        const role = getCookie("role");
        if (username && role === "admin") {
            showEditIcons();
            window.location.href = 'index.html';
        }
    }

    function showEditIcons() {
        const editIcons = document.querySelectorAll(".edit-icon");
        editIcons.forEach(icon => {
            icon.style.display = "inline-block";
            icon.addEventListener("click", function(event) {
                event.preventDefault();
                const product = this.closest(".product");
                const productId = product.dataset.productId;
                window.location.href = `edit-product.html?id=${productId}`;
            });
        });
    }

    checkSession();

    // Helper function to get a cookie value
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function translatePage(language) {
        document.title = translate('pageTitle', language);
        document.querySelector('header h1').textContent = translate('headerTitle', language);
        document.querySelector('header span').textContent = translate('headerLogo', language);
        document.querySelector('#search-form input').placeholder = translate('searchPlaceholder', language);
        document.querySelector('#search-form button').textContent = translate('searchButton', language);
        document.querySelector('#hero h2').textContent = translate('heroTitle', language);
        document.querySelector('#hero p').textContent = translate('heroDescription', language);

        // Translate product slider names
        const productSliderNames = document.querySelectorAll('#hero .product h3');
        productSliderNames.forEach((element, index) => {
            const productNameKey = `product${index + 6}Name`;
            element.textContent = translate(productNameKey, language);
        });

        // Translate advertisement names
        const advertisementNames = document.querySelectorAll('#hero .advertisement h3');
        advertisementNames.forEach((element, index) => {
            const advertisementNameKey = `advertisement${index + 1}Name`;
            element.textContent = translate(advertisementNameKey, language);
        });

        document.querySelector('#products h2').textContent = translate('productsTitle', language);

        // Translate product names
        const productListNames = document.querySelectorAll('#products .product h3');
        productListNames.forEach((element, index) => {
            const productNameKey = `product${index + 1}Name`;
            element.textContent = translate(productNameKey, language);
        });

        const productNames = document.querySelectorAll('.product h3');
        const productDescriptions = document.querySelectorAll('.product p');
        const productButtons = document.querySelectorAll('.product button');

        productNames.forEach(element => element.textContent = translate('productName', language));
        productDescriptions.forEach(element => element.textContent = translate('productDescription', language));
        productButtons.forEach(element => element.textContent = translate('addToCartButton', language));

        document.querySelector('#left-sidebar h3').textContent = translate('featuredProductsTitle', language);
        document.querySelector('#right-sidebar h3').textContent = translate('featuredProductsTitle', language);

    const adminLoginForm = document.getElementById('login-form');
    if (adminLoginForm) {
        document.querySelector('h1').textContent = translate('adminLoginTitle', language);
        document.querySelector('label[for="username"]').textContent = translate('usernameLabel', language);
        document.querySelector('label[for="password"]').textContent = translate('passwordLabel', language);
        document.querySelector('button[type="submit"]').textContent = translate('loginButton', language);
        document.querySelector('body > a').textContent = translate('goToMainPage', language);
    }
    }

    function translate(key, language) {
        return translations[language][key] || translations['en'][key] || key;
    }

    const psychedelicLine = document.getElementById('psychedelic-line');
    if (psychedelicLine) {
        psychedelicLine.style.animationPlayState = 'running';
    }
});

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
            <h3>${translate('featuredProductsTitle', 'en')}</h3>
            <div class="product">
                <h3>${translate(`product${leftIndex + 4}Name`, 'en')}</h3>
                <img src="${featuredProducts[leftIndex].image}" alt="${featuredProducts[leftIndex].name}">
                <p>${featuredProducts[leftIndex].description}</p>
                <p>${featuredProducts[leftIndex].price}</p>
                <button>${translate('addToCartButton', 'en')}</button>
            </div>
        `;

        rightSidebar.innerHTML = `
            <h3>${translate('featuredProductsTitle', 'en')}</h3>
            <div class="product">
                <h3>${translate(`product${rightIndex + 4}Name`, 'en')}</h3>
                <img src="${featuredProducts[rightIndex].image}" alt="${featuredProducts[rightIndex].name}">
                <p>${featuredProducts[rightIndex].description}</p>
                <p>${featuredProducts[rightIndex].price}</p>
                <button>${translate('addToCartButton', 'en')}</button>
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

const productSlider = document.querySelector('.product-slider');
const sliderItems = document.querySelectorAll('.product-slider > *');
let currentItemIndex = 0;

function showNextItems() {
  // Hide all items
  sliderItems.forEach(item => {
    item.style.display = 'none';
  });

  // Show the current item and the next item
  sliderItems[currentItemIndex].style.display = 'block';
  sliderItems[(currentItemIndex + 1) % sliderItems.length].style.display = 'block';

  // Update the current item index
  currentItemIndex = (currentItemIndex + 2) % sliderItems.length;
}

showNextItems();

setInterval(showNextItems, 3000);
