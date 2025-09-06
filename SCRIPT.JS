let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, price) {
  cart.push({ name: productName, price });
  updateCartUI();
  saveCart();
}

function updateCartUI() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price.toFixed(2)} 
      <button onclick="removeFromCart(${index})">✖</button>
    `;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
  saveCart();
}

function clearCart() {
  cart = [];
  updateCartUI();
  saveCart();
}

function toggleCart() {
  const modal = document.getElementById("cart-modal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

window.onload = () => {
  updateCartUI();


}