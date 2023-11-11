function calculateCountdown(targetDate) {
  var countdownElement = document.getElementById("countdown");
  var countdownElementSmall = document.getElementById("countdown-small");

  var countdownInterval = setInterval(function () {
    var today = new Date().getTime();
    var timeRemaining = targetDate - today;

    if (timeRemaining < 0) {
      countdownElement.textContent = "Date has already passed";
      countdownElementSmall.textContent = "Date has already passed";
      clearInterval(countdownInterval);
    } else {
      var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      var countdownText =
        days +
        " days, " +
        hours +
        " hours, " +
        minutes +
        " minutes, " +
        seconds +
        " seconds";
      countdownElement.textContent = countdownText;
      countdownElementSmall.textContent = countdownText;
    }
  }, 1000);
}

window.onload = function () {
  var inputDate = prompt("Enter the target date (e.g., July 16, 2023):");
  var targetDate = new Date(inputDate).getTime();
  calculateCountdown(targetDate);
};

document
  .getElementById("toggleHamburger")
  .addEventListener("click", function () {
    var container = document.getElementById("hamburgerContainer");
    container.innerHTML = ""; // Clear previous checkboxes

    if (container.style.display === "none") {
      for (var i = days; i >= 1; i--) {
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = i;
        checkbox.id = "checkbox" + i;
        checkbox.style.marginBottom = "5px";
        container.appendChild(checkbox);

        var label = document.createElement("label");
        label.htmlFor = "checkbox" + i;
        label.className = "checkboxLabel";
        label.appendChild(document.createTextNode(i));
        container.appendChild(label);
      }
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  });
