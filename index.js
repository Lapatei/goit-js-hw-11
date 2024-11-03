import{S as m,i}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g="46874695-aa87c3456f3cd5bd5c148909d",d="https://pixabay.com/api/";async function p(a,t=1){return(await(await fetch(`${d}?key=${g}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=12`)).json()).hits}function h(a){const t=document.querySelector(".gallery"),o=a.map(({webformatURL:e,largeImageURL:r,tags:s,likes:c,views:u,comments:f,downloads:y})=>`
    <a class="gallery__link" href="${r}">
      <img class="gallery__image" src="${e}" alt="${s}" />
      <div class="gallery__info">
        <p class="gallery__info-item"><b>Likes</b> ${c}</p>
        <p class="gallery__info-item"><b>Views</b> ${u}</p>
        <p class="gallery__info-item"><b>Comments</b> ${f}</p>
        <p class="gallery__info-item"><b>Downloads</b> ${y}</p>
      </div>
    </a>
  `).join("");t.innerHTML=o,new m(".gallery a").refresh()}function b(){document.querySelector(".gallery").innerHTML=""}const _=document.querySelector("#search-form"),l=document.querySelector("#loader");_.addEventListener("submit",async a=>{a.preventDefault();const t=a.target.searchQuery.value.trim();if(!t){i.warning({title:"Warning",message:"Please enter a search query!"});return}l.style.display="block",b();try{const o=await p(t);o.length===0?i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):h(o)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later!"})}finally{l.style.display="none"}});
//# sourceMappingURL=index.js.map
