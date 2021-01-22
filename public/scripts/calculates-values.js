let calculateValue = true;

function calculatesDependents() {
  const FIXED_VALUE_DEPENDENTS = 189.59;

  if (Number.isNaN(parseFloat(dependents.value))) {
    dependentsDeduction.textContent = `${(0).toFixed(2)}`;
    calculateValue = false;
  }

  if (calculateValue) {
    if (dependents.value == 0) {
      dependentsDeduction.textContent = `${parseFloat(dependents.value).toFixed(2)}`;
    } else if (dependents.value == 1) {
      dependentsDeduction.textContent = `${FIXED_VALUE_DEPENDENTS}`;
    } else {
      dependentsDeduction.textContent = `${dependents.value * FIXED_VALUE_DEPENDENTS}`;
    }
  }
}

function calculatesOthersDeductions() {
  if (Number.isNaN(parseFloat(dependents.value))) {
    othersDeductions.textContent = `${(0).toFixed(2)}`;
    calculateValue = false;
  }

  if (deductions.value === '') {
    othersDeductions.textContent = `${(0).toFixed(2)}`;
    calculateValue = false;
  }

  if (calculateValue) {
    othersDeductions.textContent = `${deductions.value}`;
  }
}

function calculatesInss() {
  let inssAliquot;
  let previousTracksValue;

  if (grossSalary.value <= 1045.0) {
    inssAliquot = 7.5 / 100;
    inssDeduction.textContent = `${(grossSalary.value * inssAliquot).toFixed(2)}`;
  } else if (grossSalary.value <= 2089.6) {
    inssAliquot = 9.0 / 100;
    previousTracksValue = 78.38;
    inssDeduction.textContent = `${((grossSalary.value - 1045.0) * inssAliquot + previousTracksValue).toFixed(2)}`;
  } else if (grossSalary.value <= 3134.4) {
    inssAliquot = 12.0 / 100;
    previousTracksValue = 78.38 + 94.01;
    inssDeduction.textContent = `${((grossSalary.value - 2089.6) * inssAliquot + previousTracksValue).toFixed(2)}`;
  } else {
    inssAliquot = 14.0 / 100;
    previousTracksValue = 78.38 + 94.01 + 124.38;
    inssDeduction.textContent = `${((grossSalary.value - 3134.4) * inssAliquot + previousTracksValue).toFixed(2)}`;
  }
}

function calculatesBaseSalary() {
  let grossSalaryValue = grossSalary.value;
  let dependentsValue = dependentsDeduction.textContent;
  let othersDeductionsValue = othersDeductions.textContent;
  let inssValue = inssDeduction.textContent;

  let calculatedBaseSalary = (grossSalaryValue - dependentsValue - othersDeductionsValue - inssValue);

  return calculatedBaseSalary.toFixed(2);
}

function calculatesIrrf() {
  let baseSalary = calculatesBaseSalary();

  let irrfAliquot;

  if (baseSalary <= 1903.98) {
    irrfAliquot = 0.0;
    irrfDeduction.textContent = irrfAliquot.toFixed(2);
  } else if (baseSalary <= 2826.65) {
    irrfAliquot = 7.5 / 100;
    irrfDeduction.textContent = `${(baseSalary * irrfAliquot - 142.8).toFixed(2)}`;
  } else if (baseSalary <= 3751.05) {
    irrfAliquot = 15.0 / 100;
    irrfDeduction.textContent = `${(baseSalary * irrfAliquot - 354.8).toFixed(2)}`;
  } else if (baseSalary < 4664.68) {
    irrfAliquot = 22.5 / 100;
    irrfDeduction.textContent = `${(baseSalary * irrfAliquot - 636.13).toFixed(2)}`;
  } else {
    irrfAliquot = 27.5 / 100;
    irrfDeduction.textContent = `${(baseSalary * irrfAliquot - 839.36).toFixed(2)}`;
  }
}

function calculatesNetSalary() {
  let irrfOutputValue = irrfDeduction.textContent;

  let netSalaryDeduction = calculatesBaseSalary() - irrfOutputValue;

  netSalary.textContent = `${netSalaryDeduction.toFixed(2)}`;

  if (netSalary.textContent === '') {
    inssDeduction.textContent = `${(0).toFixed(2)}`;
  }
}