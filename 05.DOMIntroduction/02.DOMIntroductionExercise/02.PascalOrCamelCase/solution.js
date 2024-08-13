function solve() {
  const textElement = document.getElementById('text');
  const namingConventionElement = document.getElementById('naming-convention');
  const resultElement = document.getElementById('result');

  const text = (textElement.value).toLowerCase();
  const namingConvention = namingConventionElement.value;

  const convertToPascalCase = (text) =>
    text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

  const convertor = {
    'Pascal Case': convertToPascalCase,
    'Camel Case': (text) => text.charAt(0).toLowerCase() + convertToPascalCase(text).slice(1)
  };

  if (!convertor[namingConvention]) {
    resultElement.textContent = 'Error!';
    return;
  }

  resultElement.textContent = convertor[namingConvention](text);
}