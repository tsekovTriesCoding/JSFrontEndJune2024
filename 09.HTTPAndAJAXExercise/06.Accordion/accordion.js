function solution() {
    const artcilesUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const mainElement = document.getElementById('main');

    fetch(artcilesUrl)
        .then(res => res.json())
        .then(data => {
            /*<!-- <div class="accordion">
                <div class="head">
                    <span>Scalable Vector Graphics</span>
                    <button class="button" id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3">More</button>
                </div>
                <div class="extra">
                    <p>Scalable Vector Graphics .....</p>
                </div>
            </div> -->*/

            data.forEach(article => {
                const pElement = document.createElement('p');

                const divExtraElement = document.createElement('div');
                divExtraElement.classList.add('extra');
                divExtraElement.appendChild(pElement);

                const buttonElement = document.createElement('button');
                buttonElement.id = article._id;
                buttonElement.classList.add('button');
                buttonElement.textContent = 'MORE';

                buttonElement.addEventListener('click', async (e) => {
                    const parentElement = e.currentTarget.parentElement.parentElement;
                
                    const paragraphElement = parentElement.querySelector('.extra>p');

                    if (buttonElement.textContent === 'MORE') {
                        buttonElement.textContent = 'LESS'

                        const detailsUrl = 'http://localhost:3030/jsonstore/advanced/articles/details';
                        const result = await fetch(detailsUrl + '/' + e.currentTarget.id);
                        const response = await result.json();
                        const details = await response;

                        paragraphElement.textContent = details.content;
                        paragraphElement.parentElement.style.display = 'block';
                    } else {
                        buttonElement.textContent = 'MORE'
                        paragraphElement.parentElement.style.display = 'none';
                    }
                });

                spanTitleElement = document.createElement('span');
                spanTitleElement.textContent = article.title;

                const divHeadElement = document.createElement('div');
                divHeadElement.classList.add('head');
                divHeadElement.appendChild(spanTitleElement);
                divHeadElement.appendChild(buttonElement);

                divAccordionElement = document.createElement('div');
                divAccordionElement.classList.add('accordion');
                divAccordionElement.appendChild(divHeadElement);
                divAccordionElement.appendChild(divExtraElement);

                mainElement.appendChild(divAccordionElement);
            });
        });
}

solution();