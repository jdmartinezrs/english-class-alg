let preferences = [];
const totalEntries = 10;

// Function to show the input section
function showInput() {
  document.getElementById('inputSection').style.display = 'block';
  document.getElementById('result').style.display = 'none'; // Hide result until analyzed
  document.getElementById('status').innerText = `Enter preference 1 of ${totalEntries}`;
}

// Function to submit each preference
function submitPreference() {
  const inputField = document.getElementById('preferenceInput');
  const preference = inputField.value.trim();

  if (preference) {
    preferences.push(preference);
    inputField.value = ''; // Clear the input field

    if (preferences.length >= totalEntries) {
      analyzePreferences();
    } else {
      document.getElementById('status').innerText = `Enter preference ${preferences.length + 1} of ${totalEntries}`;
    }
  } else {
    alert('Please enter a preference.');
  }
}

// Function to analyze preferences and provide recommendations
function analyzePreferences() {
  const countMap = {};
  preferences.forEach(pref => {
    countMap[pref] = (countMap[pref] || 0) + 1;
  });

  // Find the most common preference
  const mostCommon = Object.entries(countMap).reduce((a, b) => b[1] > a[1] ? b : a, [null, 0]);

  // Display result
  const resultDiv = document.getElementById('result');
  if (mostCommon[0]) {
    resultDiv.innerHTML = `Most Common Preference: ${mostCommon[0]} (Count: ${mostCommon[1]})`;
  } else {
    resultDiv.innerHTML = 'No preferences found.';
  }

  // Show the result section and hide the input section
  resultDiv.style.display = 'block';
  document.getElementById('inputSection').style.display = 'none';
}
