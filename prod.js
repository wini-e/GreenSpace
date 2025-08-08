// DOM Elements
const categoryFilter = document.getElementById('categoryFilter');
const searchBar = document.getElementById('searchBar');
const productGrid = document.querySelector('.product-grid');
const sortBy = document.getElementById('sortBy');
const allin = document.getElementById('allin');
const alleve = document.getElementById('alleve');
const allout = document.getElementById('allout');
const allbene = document.getElementById('allbene');

// Sample product data with ratings and popularity
const products = [
    { id: 1, name: 'Fiddle Leaf Fig', category: 'potted', price: 50, image: "assets\images\products\PLANT1.jpg", tags: ['Floral', 'Bestseller'], rating: 4.5, popularity: 5 },
    { id: 2, name: 'Snake Plant', category: 'potted', price: 35, image: 'assets\images\products\laven.jpg', tags: ['Out of Stock'], rating: 3.5, popularity: 4 },
    { id: 3, name: 'Areca Palm', category: 'trees', price: 60, image: 'assets\images\products\air1.webp', tags: ['Sale', 'Vaastu', 'Indoor'], rating: 4.2, popularity: 3 },
    { id: 4, name: 'Table Palm', category: 'trees', price: 75, image: 'assets\images\products\plant2.jpg', tags: ['New Arrival'], rating: 4.8, popularity: 4 },
    { id: 5, name: 'Fern', category: 'potted', price: 20, image: 'assets\images\products\kevin-lessy-aKqw_M1CmfI-unsplash.jpg', tags: ['Bestseller'], rating: 4.0, popularity: 5 },
    { id: 6, name: 'Rubber Plant', category: 'potted', price: 40, image: 'assets\images\products\p1.webp', tags: ['Floral'], rating: 4.7, popularity: 3 },
    { id: 7, name: 'Rub Plant', category: 'potted', price: 40, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Sale'], rating: 4.5, popularity: 4.2 },
    { id: 8, name: 'Lucky Bamboo', category: 'desk', price: 40, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Indoor', 'Vaastu'], rating: 3.8, popularity: 4 },
    { id: 9, name: 'Succulent Trio', category: 'desk', price: 50, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Indoor'], rating: 4.7, popularity: 4.5 },
    { id: 10, name: 'Peace Lily Mini', category: 'desk', price: 60, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Indoor'], rating: 4.8, popularity: 4.6 },
    { id: 11, name: 'Spider Plant', category: 'hang', price: 40, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Indoor'], rating: 4.6, popularity: 4.4 },
    { id: 12, name: 'Golden Pothos', category: 'hang', price: 70, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Indoor'], rating: 3.8, popularity: 4 },
    { id: 13, name: 'English Ivy', category: 'hang', price: 85, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Indoor'], rating: 3.8, popularity: 4.0 },
    { id: 14, name: 'Boston Fern', category: 'hang', price: 60, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Indoor'], rating: 3.9, popularity: 4.2 },
    { id: 15, name: 'Monstera Deliciosa', category: 'floor', price: 90, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Indoor'], rating: 3.8, popularity: 4 },
    { id: 16, name: 'String of Pearls', category: 'shelf', price: 70, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Indoor'], rating: 3.0, popularity: 4 },
    { id: 17, name: 'Jade Plant', category: 'shelf', price: 60, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Indoor'], rating: 3.8, popularity: 4.2 },
    { id: 18, name: 'Fittonia(Nerve Plant)', category: 'shelf', price: 40, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Indoor'], rating: 3.9, popularity: 4.1 },
    { id: 19, name: 'Zebra Cactus', category: 'shelf', price: 30, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Indoor'], rating: 3.8, popularity: 3.9 },
    { id: 20, name: 'Orchid Arrangements', category: 'wed', price: 2500, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Events & Decor'], rating: 3.8, popularity: 4.0 },
    { id: 21, name: 'Rose Topiaries', category: 'wed', price: 2000, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Events & Decor'], rating: 3.5, popularity: 4 },
    { id: 22, name: 'Jasmine Garlands', category: 'wed', price: 1800, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Events & Decor'], rating: 3.8, popularity: 4.2 },
    { id: 23, name: 'Hydrangea Centerpieces', category: 'wed', price: 2200, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Events & Decor'], rating: 3.8, popularity: 3.9 },
    { id: 24, name: 'Bamboo Arrangements', category: 'cor', price: 2000, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Events & Decor'], rating: 3.9, popularity: 4.0 },
    { id: 25, name: 'Money Plant Vases', category: 'cor', price: 1800, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Events & Decor'], rating: 3.7, popularity: 4.7 },
    { id: 26, name: 'Succulent bowls', category: 'cor', price: 1500, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Events & Decor'], rating: 3.6, popularity: 4.9 },
    { id: 27, name: 'Mini Bonsai Display', category: 'cor', price: 2500, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Events & Decor'], rating: 3.8, popularity: 4 },
    { id: 28, name: 'Floweing Cacti', category: 'photo', price: 1200, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Events & Decor'], rating: 3.9, popularity: 4.0 },
    { id: 29, name: 'Sunflower Arrangements', category: 'photo', price: 1800, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Events & Decor'], rating: 3.8, popularity: 4.5 },
    { id: 30, name: 'Tropical Palms', category: 'photo', price: 2000, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Events & Decor'], rating: 3.8, popularity: 4.6 },
    { id: 31, name: 'Lavender Pots', category: 'photo', price: 1500, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Events & Decor'], rating: 3.7, popularity: 4.2 },
    { id: 32, name: 'Balloon Vine Decor', category: 'parties', price: 2500, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Events & Decor'], rating: 3.6, popularity: 4.4},
    { id: 33, name: 'Tulip Bouquets', category: 'parties', price: 2000, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Events & Decor'], rating: 3.7, popularity: 4.5 },
    { id: 34, name: 'Fern Centerpieces', category: 'parties', price: 1700, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Events & Decor'], rating: 3.8, popularity: 4.0 },
    { id: 35, name: 'Hanging Wisteria', category: 'parties', price: 2200, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Events & Decor'], rating: 3.6, popularity: 4.2 },
    { id: 36, name: 'Hibiscus Shrubs', category: 'shrubs', price: 40, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Outdoor'], rating: 3.8, popularity: 4.4 },
    { id: 37, name: 'Bougainvillea', category: 'shrubs', price: 50, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Outdoor'], rating: 3.9, popularity: 4.2 },
    { id: 38, name: 'Boxwood Shrubs', category: 'shrubs', price: 70, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Outdoor'], rating: 3.4, popularity: 4 },
    { id: 39, name: 'Hydrangea Bushes', category: 'shrubs', price: 60, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Outdoor'], rating: 3.2, popularity: 4.5 },
    { id: 40, name: 'Bird of Paradise', category: 'patio', price: 40, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Outdoor'], rating: 3.6, popularity: 4.3 },
    { id: 41, name: 'Sago Palm', category: 'patio', price: 60, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Outdoor'], rating: 3.8, popularity: 4.4 },
    { id: 42, name: 'Citrus Tree(Miniature)', category: 'patio', price: 50, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Outdoor'], rating: 3.7, popularity: 4.5 },
    { id: 43, name: 'Jasmine Trellis', category: 'patio', price: 40, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Outdoor'], rating: 3.9, popularity: 4.6 },
    { id: 44, name: 'Rose(Miniature)', category: 'flower', price: 60, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Outdoor'], rating: 3.7, popularity: 4.7 },
    { id: 45, name: 'Marigolds', category: 'flower', price: 90, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Outdoor'], rating: 3.6, popularity: 4.8 },
    { id: 46, name: 'Geraniums', category: 'flower', price: 70, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Outdoor'], rating: 3.5, popularity: 4.6 },
    { id: 47, name: 'Lilies', category: 'flower', price: 80, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Outdoor'], rating: 3.8, popularity: 4.7 },
    { id: 48, name: 'Japanese Maple', category: 'small', price: 70, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Outdoor'], rating: 3.7, popularity: 4.8 },
    { id: 49, name: 'Dwarf Banana Tree', category: 'small', price: 80, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Outdoor'], rating: 3.6, popularity: 4.9 },
    { id: 50, name: 'Lemon tree(small)', category: 'small', price: 60, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Outdoor'], rating: 3.9, popularity: 4.3 },
    { id: 51, name: 'Olive Tree', category: 'small', price: 70, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Outdoor'], rating: 3.3, popularity: 4.4 },
    { id: 52, name: 'Tulsi (Holy Basil)', category: 'vaastu', price: 50, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial'], rating: 3.8, popularity: 4.3 },
    { id: 53, name: 'Money Plant', category: 'vaastu', price: 70, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial'], rating: 3.7, popularity: 4.3 },
    { id: 54, name: 'Aloe Vera', category: 'med', price: 50, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial'], rating: 3.8, popularity: 4.2 },
    { id: 55, name: 'Neem Plant', category: 'med', price: 70, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial'], rating: 3.4, popularity: 4 },
    { id: 58, name: 'Giloy(Heart-leaved Moonseed)', category: 'med', price: 60, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial'], rating: 3.8, popularity: 4 },
    { id: 59, name: 'Lemongrass', category: 'med', price: 50, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial'], rating: 3.7, popularity: 4 },
    { id: 60, name: 'Spider Plant', category: 'air', price: 60, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial'], rating: 3.6, popularity: 4 },
    { id: 61, name: 'Snake Plant', category: 'air', price: 70, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial'], rating: 3.8, popularity: 4 },
    { id: 62, name: 'Peace Lily', category: 'air', price: 80, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial'], rating: 3.9, popularity: 4 },
    { id: 63, name: 'Bamboo Palm', category: 'air', price: 100, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial', 'Pet-Friendly'], rating: 3.8, popularity: 4 },
    { id: 64, name: 'Lavender', category: 'stress', price: 80, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial'], rating: 3.6, popularity: 4.0 },
    { id: 65, name: 'Jasmine', category: 'stress', price: 90, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial'], rating: 3.7, popularity: 4.5 },
    { id: 66, name: 'Chamomile', category: 'stress', price: 70, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial'], rating: 3.3, popularity: 4.6 },
    { id: 67, name: 'Rosemary', category: 'stress', price: 75, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial'], rating: 3.8, popularity: 4.3 },
    { id: 68, name: 'Calathea', category: 'pet', price: 85, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial'], rating: 3.8, popularity: 4.5 },
    { id: 69, name: 'Spider Plant', category: 'pet', price: 60, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial'], rating: 3.6, popularity: 4.3 },
    { id: 70, name: 'Areca Palm', category: 'pet', price: 85, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial'], rating: 3.7, popularity: 4.6 },
    { id: 71, name: 'ZZ Plant', category: 'low', price: 80, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial'], rating: 3.8, popularity: 4.4 },
    { id: 72, name: 'Snake Plant', category: 'low', price: 70, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial'], rating: 3.8, popularity: 4.2 },
    { id: 73, name: 'Philodendron', category: 'low', price: 75, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: ['Beneficial'], rating: 4.6, popularity: 4.6 },
    { id: 74, name: 'Pothos', category: 'low', price: 60, image: 'C:\Users\harsh\OneDrive\Desktop\New folder\e commerce plant rental\e commerce\assets\images\products\p3.webp', tags: [ 'Beneficial'], rating: 4.6, popularity: 4.5 },
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
// Call the function to render all products initially
displayProducts(products);
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

// Event listener for category filtering
allin.addEventListener('change', (event) => {
    const selectedCategory = event.target.value;
    const filteredProducts = selectedCategory === 'indoor'
        ? products
        : products.filter(product => product.category === selectedCategory);

    displayProducts(filteredProducts);
});

// Event listener for category filtering
alleve.addEventListener('change', (event) => {
    const selectedCategory = event.target.value;
    const filteredProducts = selectedCategory === 'indoor'
        ? products
        : products.filter(product => product.category === selectedCategory);

    displayProducts(filteredProducts);
});

// Event listener for category filtering
allout.addEventListener('change', (event) => {
    const selectedCategory = event.target.value;
    const filteredProducts = selectedCategory === 'indoor'
        ? products
        : products.filter(product => product.category === selectedCategory);

    displayProducts(filteredProducts);
});

// Event listener for category filtering
allbene.addEventListener('change', (event) => {
    const selectedCategory = event.target.value;
    const filteredProducts = selectedCategory === 'indoor'
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
