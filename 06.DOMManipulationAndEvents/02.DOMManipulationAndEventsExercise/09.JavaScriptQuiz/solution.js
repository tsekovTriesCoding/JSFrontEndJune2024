function solve() {
  const quizAnswerListElement = document.querySelectorAll('.quiz-answer');
  const correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  const resultsH1Element = document.querySelector('#results h1');

  let correctAnswersCount = 0;
  Array.from(quizAnswerListElement)
    .forEach(listElement => {
      listElement.addEventListener('click', (e) => {
        const sectionElement = e.currentTarget.parentElement.parentElement;
        const currentAnswerText = listElement.querySelector('.answer-text').textContent;

        sectionElement.style.display = 'none';

        if (correctAnswers.includes(currentAnswerText)) {
          correctAnswersCount++;
        }

        const nextSection = sectionElement.nextElementSibling;

        nextSection.classList.remove('hidden');
        nextSection.style.display = 'block';

        if (nextSection.id === 'results') {
          nextSection.style.display = 'block';

          if (correctAnswersCount == 3) {
            resultsH1Element.textContent = 'You are recognized as top JavaScript fan!';
          } else {
            resultsH1Element.textContent = `You have ${correctAnswersCount} right answers`
          }
        }
      });

    });
}
