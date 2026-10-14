import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import fetchEvents from './js/ticketmaster-api';
import {displayEvents, clearGallery} from './js/render-function';

let page = 0;

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const data = await fetchEvents("", "", page);
        console.log(data);
        displayEvents(data._embedded.events);
    } catch (error) {
        iziToast.error({
            title: "Error",
            message: error.message
        });
    }
});

const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(searchForm);
    const name = formData.get("search").trim();
    const country = formData.get("country").trim();

    page = 0;
    clearGallery();

    try {
        const data = await fetchEvents(name, country, page);
        displayEvents(data._embedded.events);
    } catch (error) {
        iziToast.error({
            title: "Error",
            message: error.message
        });
    }
})
