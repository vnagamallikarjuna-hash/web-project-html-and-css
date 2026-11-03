let cart = [];

// Add food to cart
function addToCart(name, price) {

    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    displayCart();
}

// Display cart items
function displayCart() {

    let cartItems = document.getElementById("cart-items");
    let totalElement = document.getElementById("total");

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }

    cart.forEach((item, index) => {

        let itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>
                    ${item.name} - ₹${item.price}
                    × ${item.quantity}
                </span>

                <span>₹${itemTotal}</span>

                <div>
                    <button onclick="changeQuantity(${index}, -1)">-</button>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                    <button onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `;
    });

    totalElement.textContent = total;
}

// Change quantity
function changeQuantity(index, amount) {

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    displayCart();
}

// Remove item
function removeItem(index) {

    cart.splice(index, 1);
    displayCart();
}

// Place order
function placeOrder() {

    if (cart.length === 0) {
        alert("Please add food items to your cart!");
        return;
    }

    let total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    alert(
        "Your order has been placed!\n" +
        "Total Amount: ₹" + total
    );

    cart = [];
    displayCart();
}

// Contact form
function sendMessage(event) {

    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    event.target.reset();
}
