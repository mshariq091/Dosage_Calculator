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
  let totalDose = weight * med.dosePerKg;
  if (totalDose > med.maxDose) totalDose = med.maxDose;

  const perDose = (totalDose / med.dividedDoses).toFixed(2);

  document.getElementById("result").innerText =
    `Medicine: ${med.name}\n` +
    `Weight: ${weight} kg\n` +
    `Total Daily Dose: ${totalDose} mg/day\n` +
    `Divided Doses: ${med.dividedDoses} × ${perDose} mg`;
}

// Load medicines when page opens
loadMedicines();