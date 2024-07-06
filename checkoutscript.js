!function() {
    // First script block
    // Get a reference to the button
    var checkoutButton = document.getElementById("checkout-button");

    // Automatically click the checkout button when the page loads
    document.addEventListener("DOMContentLoaded", function() {
        var checkoutButton = document.getElementById("checkout-button");
        checkoutButton.click();
    });

}();
