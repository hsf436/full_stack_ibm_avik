document.addEventListener("DOMContentLoaded", function () {
  // Set default date
  let departDate = document.getElementById("depart-date");
  let today = new Date().toISOString().split("T")[0];
  departDate.value = today;

  // Handle round trip toggle
  document.getElementById("add-return").addEventListener("click", function (event) {
      event.preventDefault();
      let returnInput = document.createElement("input");
      returnInput.type = "date";
      returnInput.id = "return-date";
      returnInput.className = "input-group";
      document.getElementById("add-return").replaceWith(returnInput);
  });

  // Search button functionality
  document.querySelector(".search-btn").addEventListener("click", function () {
      alert("Searching flights...");
  });
});

  