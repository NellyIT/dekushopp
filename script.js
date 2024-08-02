let cart = [];

function addToCart(button) {
    const productElement = button.parentElement;
    const name = productElement.getAttribute('data-name');
    const price = parseInt(productElement.getAttribute('data-price'));
    
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.reduce((total, item) => total + item.quantity, 0);
    
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    let totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - ${item.quantity} x ${item.price} VND`;
        cartItems.appendChild(li);
        totalPrice += item.quantity * item.price;
    });
    
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerText = totalPrice;
}

function toggleCart() {
   
}