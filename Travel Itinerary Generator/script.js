const form = document.getElementById("travelform");
const statusText = document.getElementById("status");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const startCity = document.getElementById("startcity").value.trim();
  const destination = document.getElementById("destination").value.trim();
  const startDate = document.getElementById("startdate").value;
  const endDate = document.getElementById("enddate").value;
  const days = document.getElementById("days").value;
  const budget = document.getElementById("budget").value;
  const mode = document.getElementById("mode").value;
  const adults = document.getElementById("adults").value;
  const kids = document.getElementById("kids").value;
  const foodPref = document.getElementById("foodPref").value;
  const email = document.getElementById("email").value.trim();
  const preferences = document.getElementById("Preferences").value.trim();

  // Field validation
  if (!startCity || !destination || !startDate || !endDate || !days || !budget || !mode || !adults || !email) {
    statusText.innerText = "Please fill in all required fields.";
    statusText.style.color = "red";
    return;
  }

  // Email validation
  if (!email.includes("@")) {
    statusText.innerText = "Please enter a valid email.";
    statusText.style.color = "red";
    return;
  }

  if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
    statusText.innerText = "End date must be the same or after start date.";
    statusText.style.color = "red";
    return;
  }

  const totalTravelers = parseInt(adults || 0, 10) + parseInt(kids || 0, 10);

  const data = {
    startCity,
    destination,
    startDate,
    endDate,
    days,
    budget,
    mode,
    adults: parseInt(adults || 0, 10),
    kids: parseInt(kids || 0, 10),
    foodPref,
    email,
    preferences,
    totalTravelers,
  };

  statusText.innerText = "Generating Itinerary...";
  statusText.style.color = "black";

  try {
    const response = await fetch(
      "https://rudrendra.app.n8n.cloud/webhook-test/3426a91f-2ab4-4d2e-acbe-1823d8c35528",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      statusText.innerText = "Itinerary sent to your email";
      statusText.style.color = "green";
      form.reset();
    } else {
      const text = await response.text().catch(() => "");
      console.error("Webhook responded with", response.status, text);
      statusText.innerText = `Webhook request failed (${response.status})`;
      statusText.style.color = "red";
    }
  } catch (error) {
    console.error("Fetch error:", error);
    statusText.innerText = "Something went wrong. Try again.";
    statusText.style.color = "red";
  }
});