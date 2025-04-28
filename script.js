// detective_name.js

// Function to handle the form submission and redirect the user
function startInvestigation() {
  const detectiveName = document.getElementById("detectiveName").value;

  // If the detective name is not empty
  if (detectiveName.trim() !== "") {
    // Store the detective's name in localStorage (so we can use it later)
    localStorage.setItem("detectiveName", detectiveName);

    // Redirect to the case selection page
    window.location.href = "case_selection.html";
  } else {
    // If no name is entered, prompt the user to enter a name
    alert("Please enter a detective name to proceed!");
  }
}

// case_selection.js

// On page load, retrieve the detective name from localStorage and display it
document.addEventListener("DOMContentLoaded", function () {
  const detectiveName = localStorage.getItem("detectiveName");
  if (detectiveName) {
    document.getElementById("detective-name").innerText = detectiveName;
  } else {
    window.location.href = "detective_name.html"; // Redirect to the detective name page if not found
  }
});

// case_details.js

// On page load, you can add logic to fetch or display case details (victim, evidence, etc.)
// For now, this will just handle a simple button click

document.addEventListener("DOMContentLoaded", function () {
  // Detect the case and set relevant data (you can enhance this for multiple cases)
  const caseName = "The Missing Heir"; // You can retrieve this dynamically from localStorage or other methods
  document.getElementById("case-title").innerText = caseName;

  // Add more case-specific information below as needed, like victim, evidence, etc.
});

function solveCase() {
  const suspects = document.querySelectorAll(".suspect");
  let correctSuspect = "James"; // Placeholder for correct suspect

  // Logic to check the selected suspect
  for (let i = 0; i < suspects.length; i++) {
    if (suspects[i].checked) {
      const selectedSuspect = suspects[i].value;
      if (selectedSuspect === correctSuspect) {
        // If the user selects the correct suspect
        alert("Congratulations, Detective! You solved the case!");
        window.location.href = "case_solved.html";
      } else {
        // If the user selects the wrong suspect
        alert("Not this time, Detective. Try again!");
      }
    }
  }
}
