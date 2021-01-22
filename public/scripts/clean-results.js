let clearResults = document.querySelector('.clear-results')

clearResults.addEventListener('click', function() {
  for (let index = 0; index < outputResults.length; index++) {
    let outputs = outputResults[index];

    outputs.textContent = '0.00';

    outputs.classList.remove('is-deducted_value');
    netSalary.classList.remove('is-final_value');
  }
});