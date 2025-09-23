// Wait until the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector("#searchInput");
  const searchButton = document.querySelector("#searchButton");

  // Handle search on button click
  searchButton.addEventListener("click", function () {
    performSearch();
  });

  // Handle search on Enter key
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      performSearch();
    }
  });

  function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
      // Redirect to products page with query in URL
      window.location.href = `products.html?search=${encodeURIComponent(query)}`;
    } else {
      alert("Please enter a search term!");
    }
  }
});
