import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import fetchEvents from './js/ticketmaster-api';
import { clearEvents, renderEventsPage } from './js/render-function';

let page = 0;

const navigation = document.querySelector('.pagination');

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const data = await fetchEvents("", "", page);
        if (hasNoEvents(data)) {
            return;
        }
        renderEventsPage(data._embedded.events, page + 1, data.page.totalPages);
    } catch (error) {
        iziToast.error({
            title: "Error",
            message: error.message
        });
    }
});

const searchForm = document.querySelector(".search-form");

let name = "";
let country = "";

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    page = 0;

    const formData = new FormData(searchForm);
    name = formData.get("search").trim();
    country = formData.get("country").trim();

    try {
        const data = await fetchEvents(name, country, page);
        if (hasNoEvents(data)) {
            return;
        }
        clearEvents();
        renderEventsPage(data._embedded.events, page + 1, data.page.totalPages);
    } catch (error) {
        iziToast.error({
            title: "Error",
            message: error.message
        });
    }
});


navigation.addEventListener("click", async (event) => {
    event.preventDefault();

    if (!event.target.classList.contains("page-btn")) {
        return;
    }

    page = Number(event.target.dataset.page) - 1;

    try {
        const data = await fetchEvents(name, country, page);
        if (hasNoEvents(data)) {
            return;
        }
        clearEvents();
        renderEventsPage(data._embedded.events, page + 1, data.page.totalPages);
    } catch (error) {
        iziToast.error({
            title: "Error",
            message: error.message
        });
    }
});


function hasNoEvents(data) {
    if (data.page.totalElements === 0) {
        iziToast.error({
            title: "Error",
            message: "There are no events"
        });
        return true;
    }
    return false;
}