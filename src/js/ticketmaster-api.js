import axios from "axios";

const API_KEY = "q1OGko686XkVkvBskaVLxmx2BaA9sFoJ";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";

export default async function fetchEvents(keyword, country, page) {
    const response = await axios.get(BASE_URL, {
        params: {
            apikey: API_KEY,
            keyword: keyword,
            countryCode: country,
            page: page
        },
    });

    return response.data;
}