import{a as b,S as w,i as d}from"./assets/vendor-550cebad.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();async function u(o,r){const n="https://pixabay.com/api/",t={key:"43042751-379763e2b45d181b55d7040e4",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};try{const e=await b.get(n,{params:t});if(e.status!==200)throw new Error("Unable to fetch images");return e.data}catch(e){throw console.error(e),new Error("Unable to fetch images")}}function h(o){const r=document.querySelector(".gallery"),n=o.map(t=>`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${t.webformatURL}"
            data-source="${t.largeImageURL}"
            alt="${t.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${t.likes}</p>
          </li>
          <li><h3>Views</h3><p>${t.views}</p>
            </li>
            <li><h3>Comments</h3><p>${t.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${t.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`).join("");r.insertAdjacentHTML("beforeend",n),v.refresh()}const v=new w(".gallery a",{captionsData:"alt"}),S=document.querySelector("#search-form"),M=document.querySelector("#search-input"),f=document.getElementById("loader"),q=document.querySelector(".gallery"),l=document.querySelector(".load-more-btn");let i,a=1,p=0;const $=15;function E(){l.classList.remove("hidden")}function m(){l.classList.add("hidden")}function y(){f.classList.remove("hidden")}function g(){f.classList.add("hidden")}function L(){a>=p?(m(),d.info({title:"Info",position:"topRight",message:"We're sorry, but you've reached the end of search results."})):E()}S.addEventListener("submit",I);l.addEventListener("click",P);async function I(o){if(o.preventDefault(),i=M.value.trim(),q.innerHTML="",a=1,!i){m(),d.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}try{y();const r=await u(i,a);p=Math.ceil(r.totalHits/$),h(r.hits)}catch(r){console.log(r)}g(),L(),o.target.reset()}async function P(){a+=1,y();try{const o=await u(i,a);h(o.hits)}catch(o){console.log(o)}scrollBy({top:950,behavior:"smooth"}),L(),g()}
//# sourceMappingURL=commonHelpers.js.map
