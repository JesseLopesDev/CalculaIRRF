const APPLICATION_FORM = document.querySelector('form');

let inputInformations = document.querySelectorAll('.input-informations');
let errorMessages = document.querySelectorAll('.is-error_messages');

let grossSalary = document.querySelector('#gross-salary');
let dependents = document.querySelector('#dependents');
let deductions = document.querySelector('#deductions');

let outputResults = document.querySelectorAll('.output-results');

let dependentsDeduction = document.querySelector('#dependents-deduction');
let othersDeductions = document.querySelector('#others-deductions');
let inssDeduction = document.querySelector('#inss-deduction');
let irrfDeduction = document.querySelector('#irrf-deduction');
let netSalary = document.querySelector('#net-salary');

grossSalary.focus();

APPLICATION_FORM.addEventListener('submit', function(event) {
  event.preventDefault();

  let calculate = true;

  for (let index = 0; index < inputInformations.length; index++) {
    let inputs = inputInformations[index];
    let messages = errorMessages[index];

    if (inputs.value === '') {
      messages.textContent = 'Digite um valor válido!';
      messages.classList.add('is-invalid_value');
      inputs.classList.add('is-invalid_input');
      calculate = false;
    }

    if (inputs.value < 0) {
      messages.textContent = 'Digite um valor válido!';
      messages.classList.add('is-invalid_value');
      inputs.classList.add('is-invalid_input');
      inputs.value = '';
      calculate = false;
    }
  }

  if (calculate) {
    calculatesDependents();
    calculatesOthersDeductions();
    calculatesInss();
    calculatesIrrf();
    calculatesNetSalary();
  }
});

function deleteErrorMessages() {
  for (let index = 0; index < inputInformations.length; index++) {

    for (let counter = 0; counter < errorMessages.length; counter++) {
      let inputs = inputInformations[index];
      let messages = errorMessages[index];

      messages.textContent = '';

      messages.classList.remove('is-invalid_value');
      inputs.classList.remove('is-invalid_input');
    }
  }
}