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
  const totalDose = calculatedDose * med.dividedDoses;

  const resultText =
    `💊 Medicine: ${med.name}\n` +
    `👶 Weight: ${weight} kg\n` +
    `📈 Calculated Dose: ${calculatedDose.toFixed(2)} mg\n` +
    `🚫 Max Allowed Dose (Adult): ${med.maxDose} mg/day\n` +
    `✅ Final Daily Dose: ${totalDose.toFixed(2)} mg/day\n` +
    `🕒 Divided Doses: ${med.dividedDoses} × ${calculatedDose.toFixed(2)} mg`;

  document.getElementById("result").innerText = resultText;
}
// Load medicines when page opens
loadMedicines();