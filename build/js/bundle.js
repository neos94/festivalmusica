function navegacionfija(){const e=document.querySelector(".header");new IntersectionObserver((function(t){t[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")})).observe(document.querySelector(".sobre-festival"))}function scrolNav(){document.querySelectorAll(".navegacion-principal a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(e);document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))}))}function creargaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("IMG");n.src=`build/img/thumb/${t}.webp`,n.dataset.imagenId=t,n.onclick=mostrarImagen;const o=document.createElement("LI");o.appendChild(n),e.appendChild(o)}}function mostrarImagen(e){const t=parseInt(e.target.dataset.imagenId),n=document.createElement("IMG");n.src=`build/img/grande/${t}.webp`;const o=document.createElement("DIV");o.appendChild(n),o.classList.add("overlay"),o.onclick=function(){o.remove(),c.classList.remove("fijar-body")};const a=document.createElement("P");a.textContent="X",a.classList.add("btn-cerrar"),a.onclick=function(){o.remove(),c.classList.remove("fijar-body")},o.appendChild(a);const c=document.querySelector("body");c.appendChild(o),c.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){scrolNav(),navegacionfija()})),document.addEventListener("DOMContentLoaded",(function(){creargaleria()}));
//# sourceMappingURL=bundle.js.map