document.addEventListener('DOMContentLoaded', function () {
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

    rotateFeaturedProducts();
});
