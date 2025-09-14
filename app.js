async function loadMedicines() {
  const response = await fetch("medicines.json");
  const medicines = await response.json();

  const medicineSelect = document.getElementById("medicine");
  medicines.forEach((med, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = med.name;
    medicineSelect.appendChild(option);
  });

  // Save globally so we can use in calculate()
  window.medicines = medicines;
}

function calculate() {
  const selectedIndex = document.getElementById("medicine").value;
  const weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(weight) || weight <= 0) {
    document.getElementById("result").innerText = "⚠️ Please enter a valid weight.";
    return;
  }

  const med = window.medicines[selectedIndex];
  const calculatedDose = weight * med.dosePerKg;
  const cappedDose = Math.min(calculatedDose, med.maxDose);
  const perDose = (cappedDose / med.dividedDoses).toFixed(2);

  let resultText =
    `💊 Medicine: ${med.name}\n` +
    `👶 Weight: ${weight} kg\n` +
    `📈 Calculated Dose: ${calculatedDose.toFixed(2)} mg/day\n` +
    `🚫 Max Allowed Dose: ${med.maxDose} mg/day\n` +
    `✅ Final Dose Used: ${cappedDose.toFixed(2)} mg/day\n` +
    `🕒 Divided Doses: ${med.dividedDoses} × ${perDose} mg`;

  if (calculatedDose > med.maxDose) {
    resultText += `\n⚠️ Note: Calculated dose exceeds max limit and has been capped.`;
  }

  document.getElementById("result").innerText = resultText;
}

// Load medicines when page opens
loadMedicines();