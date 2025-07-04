document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".buttons button");
    const items = document.querySelectorAll(".gallery .item");
  
    function showCategory(category) {
        items.forEach(item => {
          if (category === "all" || item.classList.contains(category)) {
            item.classList.add("show");
          } else {
            item.classList.remove("show");
          }
        });
        updateVisibleImages(); // 🔁 This keeps visibleImages updated
      }
      
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove("active"));
        // Add active class to clicked button
        button.classList.add("active");
  
        const category = button.getAttribute("data-filter");
        showCategory(category);
      });
    });
  
    // Show all on load
    showCategory("all");
  });
  // Lightbox Next/Prev Logic (keep your existing script above this)

