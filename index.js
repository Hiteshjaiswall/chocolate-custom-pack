// Get a reference to the form element and total price element by their IDs
const form = document.getElementById("chocolateForm");
const totalPriceElement = document.getElementById("totalPrice");

// Add an event listener to the form's change event, triggering the updateTotalPrice function
form.addEventListener("change", updateTotalPrice);

// Function to update the total price based on selected chocolates and quantities
function updateTotalPrice() {
  // Initialize the total price to zero
  let totalPrice = 0;

  // Get all the checkboxes and quantity input elements in the form
  const checkboxes = form.querySelectorAll('input[name="chocolate"]');
  const quantities = form.querySelectorAll('input[name="quantity"]');

  // Iterate through each checkbox and quantity input
  checkboxes.forEach((checkbox, index) => {
    // Check if the checkbox is checked
    if (checkbox.checked) {
      // Get the quantity value from the corresponding input
      const quantity = parseInt(quantities[index].value);

      // Check if the quantity is a valid number
      if (!isNaN(quantity)) {
        // Check if the quantity is within the valid range (1 to 8)
        if (quantity > 0 && quantity <= 8) {
          // Calculate the total price based on the selected chocolate type
          if (checkbox.value === "Dark Chocolate") {
            totalPrice += quantity * 279.5;
          } else if (checkbox.value === "Milk Chocolate") {
            totalPrice += quantity * 300.9;
          } else if (checkbox.value === "White Chocolate") {
            totalPrice += quantity * 150.1;
          } else if (checkbox.value === "Bittersweet Chocolate") {
            totalPrice += quantity * 425.6;
          }
        }
      }
    }
  });

  // Update the content of the total price element with the calculated total price, rounded to 2 decimal places
  totalPriceElement.textContent = totalPrice.toFixed(2);
}
