function addOutputColors() {
  for (let index = 0; index < outputResults.length; index++) {
    let outputs = outputResults[index];

    let withoutColors = true;

    if (outputs.textContent != 0) {
      outputs.classList.add('is-deducted_value');
      withoutColors = false;
    } else {
      outputs.classList.remove('is-deducted_value');
      withoutColors = true;
    }

    if (netSalary.textContent != 0) {
      netSalary.classList.add('is-final_value');
      withoutColors = false;
    } else {
      netSalary.classList.remove('is-final_value');
      withoutColors = true;
    }
  }
}

APPLICATION_FORM.addEventListener('submit', addOutputColors);