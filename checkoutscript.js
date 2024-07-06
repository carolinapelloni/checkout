!function() {
    // First script block
    // Get a reference to the button
    var checkoutButton = document.getElementById("checkout-button");

    // Add an onclick event listener to the button
    checkoutButton.addEventListener("click", function() {
        // Parse query parameters
        const queryParams = new URLSearchParams(window.location.search);

        // Get the values and set them to the corresponding hidden input fields
        document.getElementById("totalAmountInput").value = queryParams.get("totalAmount");
        document.getElementById("id").value = queryParams.get("id");
        document.getElementById("shippingCostInput").value = queryParams.get("shippingCost");
        document.getElementById("couponCodeInput").value = queryParams.get("couponCode");
        document.getElementById("customerEmailInput").value = queryParams.get("customerEmail");
    });

    // Automatically click the checkout button when the page loads
    document.addEventListener("DOMContentLoaded", function() {
        var checkoutButton = document.getElementById("checkout-button");
        checkoutButton.click();
    });

    // Second script block
    // Parse query parameters
    const queryParams = new URLSearchParams(window.location.search);

    // Get the totalAmount value and set it to the corresponding HTML element
    const totalAmount = queryParams.get("totalAmount");
    document.getElementById("totalAmountDisplay").value = totalAmount;

    // Automatically click the checkout button when the page loads
    document.addEventListener("DOMContentLoaded", function() {
        var checkoutButton = document.getElementById("checkout-button");
        checkoutButton.click();
    });
}();
