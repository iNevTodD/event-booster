export function renderEvents(events) {
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

export function clearEvents() {
    document.querySelector('.events-list').innerHTML = '';
    document.querySelector('.pagination').innerHTML = '';
}
export function clearCountriesList() {
    document.querySelector('.country-list').innerHTML = '';
}

function getPaginationPages(currentPage, totalPages) {
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages = new Array(7).fill(0);
    pages[0] = 1;
    pages[6] = totalPages;


    if (totalPages - currentPage <= 3) {
        pages[1] = "...";
        let page = totalPages - 4;

        for (let i = 2; i <= 5; i++) {
            pages[i] = page;
            page++;
        }

        return pages;
    } else {
        pages[pages.length - 2] = "...";
        let nextPage = Math.max(2, currentPage - 2);

        for (let index = 1; pages[index] === 0; index++) {
            pages[index] = nextPage;
            nextPage++;
        }
        return pages;
    }
}

function renderPagination(currentPage, totalPages) {
    totalPages = Math.min(totalPages, 51);
    const pages = getPaginationPages(currentPage, totalPages);
    const markup = pages.map((page) => {
        if (page === "...") {
            return `<span class="page-dots">...</span>`;
        }
        const activeClass = page === currentPage ? "active" : "";
        return `<button class="page-btn ${activeClass}" data-page="${page}">${page}</button>`;
    }).join("");

    const nav = document.querySelector('.pagination');
    nav.innerHTML = markup;
}

export function renderEventsPage(events, currentPage, totalPages) {
    renderEvents(events);
    renderPagination(currentPage, totalPages);
}

export function renderCountries(countries) {
    const countriesList = document.querySelector('.country-list');

    const markup = countries.map(country => {
        return `
      <li class="country" data-code="${country.code}">
        ${country.name}
      </li>
    `;
    }).join('');

    countriesList.innerHTML = markup;
}