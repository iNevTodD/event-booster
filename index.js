import{a as v,i as l}from"./assets/vendor-C4mnirqh.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const g="q1OGko686XkVkvBskaVLxmx2BaA9sFoJ",y="https://app.ticketmaster.com/discovery/v2/events.json";async function d(t,s,n){return(await v.get(y,{params:{apikey:g,keyword:t,countryCode:s,page:n}})).data}function u(t){const s=document.querySelector(".events-list"),n=t.map(({name:o,dates:e,_embedded:r,images:a})=>{const m=a[0].url,p=e.start.localDate,f=r.venues[0].name;return`<li class="event">
            <div class="img-decoration"></div>
            <img class="event-img" src="${m}" alt="${o}"/>
            <div class="event-data-wrapper">
                <h3 class="event-name">${o}</h3>
                <p class="start-date">${p}</p>
                <div class="timezone-wrapper">
                    <svg class="icon-geo" width="6" height="9">
                        <use href="./img/sprite.svg#icon-geo"></use>
                    </svg>
                    <p class="timezone">${f}</p>
                </div>
            </div>
        </li>`}).join("");s.innerHTML=n}function h(){const t=document.querySelector(".events-list");t.innerHTML=""}let c=0;document.addEventListener("DOMContentLoaded",async()=>{try{const t=await d("","",c);console.log(t),u(t._embedded.events)}catch(t){l.error({title:"Error",message:t.message})}});const i=document.querySelector(".search-form");i.addEventListener("submit",async t=>{t.preventDefault();const s=new FormData(i),n=s.get("search").trim(),o=s.get("country").trim();c=0,h();try{const e=await d(n,o,c);u(e._embedded.events)}catch(e){l.error({title:"Error",message:e.message})}});
//# sourceMappingURL=index.js.map
