// Function to calculate the total petrol cost
function calculate() {
    const price = 1.72;  //fixed price

    const liters = parseFloat(document.getElementById("liters").value);   // Get the user input value from the input field and convert it to a number

    const total = price * liters; //Multiply the price by the number of litres to get the total cost

    document.getElementById("totalAmount").innerText = "Total Amount: AED" + total.toFixed(2);  // Show the total cost on the webpage, rounded to 2 decimal places
  }