let cart = []; // Cart array to store items
let cartTotal = 0; // Total cost

// Function to add products to the cart
function addToCart(itemName, price) {
  cart.push({ itemName, price });
  updateCart();
}

// Update cart UI
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotalEl = document.getElementById('cart-total');
  cartItems.innerHTML = ''; // Clear previous items

  cartTotal = 0;
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.itemName} - $${item.price.toFixed(2)}`;
    
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => removeFromCart(index);

    li.appendChild(removeBtn);
    cartItems.appendChild(li);

    cartTotal += item.price;
  });

  cartTotalEl.textContent = cartTotal.toFixed(2);
}

// Function to remove items from the cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Checkout function
function checkout() {
  alert(`Total: $${cartTotal.toFixed(2)}`);
  cart = []; // Clear the cart after checkout
  updateCart();
}

// Expose functions globally to be accessible in HTML
window.addToCart = addToCart;
window.checkout = checkout;
