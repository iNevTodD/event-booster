import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import fetchEvents from './js/ticketmaster-api';
import displayEvents from './js/render-function';

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