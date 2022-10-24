export function extractNumbers(formData) {
  const num1Input = formData.get('num1');
  const num2Input = formData.get('num2');

  return [num1Input, num2Input];
}

export function extractEnteredNumberValues() {
  const num1Input = document.getElementById('num1').value;
  const num2Input = document.getElementById('num2').value;

  return [num1Input, num2Input];
}
