  let cart = JSON.parse(localStorage.getItem("naChowCart")) || {};

  const cartBadge = document.getElementById("cartBadge");

  // Update cart badge UI
  function updateCartBadge() {
    const total = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.innerText = `🛒 ${total}`;
  }

  // Add to Cart buttons
  const addCartButtons = document.querySelectorAll(".cart-btn");
  addCartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".food-card");
      const name = card.querySelector("h3").innerText;
      const price = parseInt(card.querySelector(".price").innerText.replace("₦", ""));

      if (cart[name]) {
        cart[name].quantity +=1;
      } else {
        cart[name] = { price, quantity: 1 };
      }

      // Animate the card
      card.classList.add("pop");
      setTimeout(() => card.classList.remove("pop"), 300);

      localStorage.setItem("naChowCart", JSON.stringify(cart));
      updateCartBadge();
    });
  });

  // Run on load
  updateCartBadge();

