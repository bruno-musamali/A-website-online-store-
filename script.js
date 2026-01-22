// Sample products data (array of objects)
const products = [
    { id: 1, name: 'T-Shirt', price: 20, image: 'https://via.placeholder.com/200?text=T-Shirt' },
    { id: 2, name: 'Jeans', price: 50, image: 'https://via.placeholder.com/200?text=Jeans' },
    { id: 3, name: 'Sneakers', price: 80, image: 'https://via.placeholder.com/200?text=Sneakers' }
];

// Cart array to store added items
let cart = [];

// Function to display products
function displayProducts() {
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Function to add item to cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartButton();
    alert(`${product.name} added to cart!`);
}

// Function to update cart button count
function updateCartButton() {
    const cartButton = document.getElementById('view-cart');
    cartButton.textContent = `View Cart (${cart.length} items)`;
}

// Function to show cart
function showCart() {
    const cartSection = document.getElementById('cart-section');
    cartSection.classList.toggle('hidden');
    
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous items
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    
    document.getElementById('cart-total').textContent = total;
}

// Event listeners
document.addEventListener('DOMContentLoaded', displayProducts);
document.getElementById('view-cart').addEventListener('click', showCart);
document.getElementById('checkout').addEventListener('click', () => alert('Checkout complete! Total: $' + document.getElementById('cart-total').textContent));