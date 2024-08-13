function solve() {
  const inputTextElement = document.getElementById('input');

  const sentencesFromText = (inputTextElement.value).split('.');

  const result = sentencesFromText
    .filter(sentence => sentence)
    .reduce((result, sentence, i) => {
      const currentIndex = Math.trunc(i / 3);

      if (!result[currentIndex]) {
        result[currentIndex] = [];
      }

      result[currentIndex].push(sentence.trim());

      return result;
    }, [])
    .map(sentences => `<p>${sentences.join('.')}.</p>`)
    .join('\n');


  const outputElement = document.getElementById('output');

  outputElement.innerHTML = result;
}