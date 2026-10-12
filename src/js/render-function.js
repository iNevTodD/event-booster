export default function displayEvents(events) {
    const eventsList = document.querySelector('.events-list');

    const markup = events.map(({ name, dates, _embedded, images }) => {
        const imageURL = images[0].url;
        const date = dates.start.localDate;
        const venueName = _embedded.venues[0].name;

        return `<li class="event">
            <div class="img-decoration"></div>
            <img class="event-img" src="${imageURL}" alt="${name}"/>
            <div class="event-data-wrapper">
                <h3 class="event-name">${name}</h3>
                <p class="start-date">${date}</p>
                <div class="timezone-wrapper">
                    <svg class="icon-geo" width="6" height="9">
                        <use href="./img/sprite.svg#icon-geo"></use>
                    </svg>
                    <p class="timezone">${venueName}</p>
                </div>
            </div>
        </li>`
    }).join("");

    eventsList.innerHTML = markup;
}