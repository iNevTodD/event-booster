import{a as l,i as u}from"./assets/vendor-C4mnirqh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p="q1OGko686XkVkvBskaVLxmx2BaA9sFoJ",m="https://app.ticketmaster.com/discovery/v2/events.json";async function f(s,r,n){return(await l.get(m,{params:{apikey:p,keyword:s,countryCode:r,page:n}})).data}function v(s){const r=document.querySelector(".events-list"),n=s.map(({name:o,dates:e,_embedded:t,images:i})=>{const a=i[0].url,c=e.start.localDate,d=t.venues[0].name;return`<li class="event">
            <div class="img-decoration"></div>
            <img class="event-img" src="${a}" alt="${o}"/>
            <div class="event-data-wrapper">
                <h3 class="event-name">${o}</h3>
                <p class="start-date">${c}</p>
                <div class="timezone-wrapper">
                    <svg class="icon-geo" width="6" height="9">
                        <use href="./img/sprite.svg#icon-geo"></use>
                    </svg>
                    <p class="timezone">${d}</p>
                </div>
            </div>
        </li>`}).join("");r.innerHTML=n}let g=0;document.addEventListener("DOMContentLoaded",async()=>{try{const s=await f("","",g);console.log(s),v(s._embedded.events)}catch(s){u.error({title:"Error",message:s.message})}});
//# sourceMappingURL=index.js.map
