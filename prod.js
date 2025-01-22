// DOM Elements
const categoryFilter = document.getElementById('categoryFilter');
const searchBar = document.getElementById('searchBar');
const productGrid = document.querySelector('.product-grid');
const sortBy = document.getElementById('sortBy');

// Sample product data with ratings and popularity
const products = [
    { id: 1, name: 'Fiddle Leaf Fig', category: 'potted', price: 50, image: "images/products/plant1.jpg", tags: ['Floral', 'Bestseller'], rating: 4.5, popularity: 5 },
    { id: 2, name: 'Snake Plant', category: 'potted', price: 35, image: 'images/products/laven.jpg', tags: ['Out of Stock'], rating: 3.5, popularity: 4 },
    { id: 3, name: 'Areca Palm', category: 'trees', price: 60, image: 'images/products/air1.webp".jpg', tags: ['Sale'], rating: 4.2, popularity: 3 },
    { id: 4, name: 'Table Palm', category: 'trees', price: 75, image: 'images/products/plant2.jpg', tags: ['New Arrival'], rating: 4.8, popularity: 4 },
    { id: 5, name: 'Fern', category: 'potted', price: 20, image: 'images/products/kevin-lessy-aKqw_M1CmfI-unsplash.jpg".jpg', tags: ['Bestseller'], rating: 4.0, popularity: 5 },
    { id: 6, name: 'Rubber Plant', category: 'potted', price: 40, image: 'images/products/p1.webp".jpg', tags: ['Floral'], rating: 4.7, popularity: 3 },
    { id: 7, name: 'Rub Plant', category: 'potted', price: 40, image: 'images/products/p3.webp".jpg', tags: ['Sale'], rating: 3.8, popularity: 4 }
];

// Function to display products
function displayProducts(productsToDisplay) {
    productGrid.innerHTML = '';  // Clear previous products

    // Generate product cards dynamically
    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Generate tags dynamically
        const tags = product.tags.map(tag => `<span class="product-tag ${tag.toLowerCase().replace(/\s+/g, '-')}">${tag}</span>`).join('');

        // Generate rating stars dynamically
        const getRatingStars = (rating) => {
            let stars = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    stars += `<span class="star">★</span>`;
                } else {
                    stars += `<span class="star">☆</span>`;
                }
            }
            return stars;
        };

        productCard.innerHTML = `
            <div class="product-tags">${tags}</div>
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">₹${product.price}</p>
                <div class="product-rating">${getRatingStars(product.rating)} <span>(${product.rating})</span></div>
            </div>
        `;

        productGrid.appendChild(productCard);
    });
}

// Function to sort products
function sortProducts(productsToSort, criteria) {
    let sortedProducts = [...productsToSort];  // Create a shallow copy to avoid modifying the original array

    switch (criteria) {
        case 'price-asc':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'popularity':
            sortedProducts.sort((a, b) => b.popularity - a.popularity);
            break;
        case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            break;
    }

    return sortedProducts;
}

// Initial display of all products
displayProducts(products);

// Event listener for category filtering
categoryFilter.addEventListener('change', (event) => {
    const selectedCategory = event.target.value;
    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    displayProducts(filteredProducts);
});

// Event listener for search functionality
searchBar.addEventListener('input', (event) => {
    const searchText = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText)
    );

    displayProducts(filteredProducts);
});

// Event listener for sorting functionality
sortBy.addEventListener('change', (event) => {
    const selectedSortOption = event.target.value;

    const sortedProducts = sortProducts(products, selectedSortOption);
    displayProducts(sortedProducts);
});
