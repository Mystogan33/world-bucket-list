!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";let o,i;n.r(t);const r=document.querySelector("#panorama"),a=document.querySelector("#reset-map"),l=document.querySelector("#back-to-map");function s(){o=new google.maps.Map(document.getElementById("map"),{center:{lat:48.858159,lng:2.294497},zoom:3}),i=new google.maps.StreetViewPanorama(document.getElementById("panorama"),{position:{lat:48.858159,lng:2.294497},pov:{heading:34,pitch:10}}),o.setStreetView(i),a.addEventListener("click",c),l.addEventListener("click",u),r.style.display="none",l.style.display="none"}function d(e){const t=new google.maps.Marker({position:e.coordinates,map:o,icon:e.done?"images/marker-done.png":"images/marker.png"});t.addListener("click",function(){var e;e=t.getPosition(),o.setZoom(20),o.setCenter(e),o.setMapTypeId("satellite")})}function c(){o.setZoom(3),o.setCenter({lat:48.858159,lng:2.294497}),o.setMapTypeId("roadmap")}function u(){r.style.display="none",l.style.display="none",a.style.display="block"}const p=[{id:1,imagePath:"dist/images/img-road66.jpg",description:"Roadtrip moto sur la route 66",done:!1,link:"https://www.westeurobikes.com/route-66-liberte/",coordinates:{lat:35.254619,lng:-101.64389}},{id:2,imagePath:"dist/images/img-got.jpg",description:"Visiter les lieux de tournages de Got",done:!1,link:"https://www.euskoguide.com/fr/lieux-pays-basque/espagne/san-juan-de-gaztelugatxe/",coordinates:{lat:43.4430213,lng:-2.7835854}},{id:3,imagePath:"dist/images/img-europapark.jpg",description:"Aller à Europa-Park",done:!0,link:"https://www.europapark.de/fr",coordinates:{lat:48.2660194,lng:7.7220076}}],m=document.querySelector("#dreams-container");function g(){for(;m.hasChildNodes();)m.removeChild(m.lastChild);p.forEach(f),document.querySelectorAll(".btn-visit").forEach(e=>{e.addEventListener("click",t=>{!function(e){!function(e){i.setPosition(e),l.style.display="block",a.style.display="none",r.style.display="block"}(p.filter(t=>t.id==e)[0].coordinates)}(e.parentElement.parentElement.getAttribute("id"))})}),document.querySelectorAll(".btn-action").forEach(e=>{e.addEventListener("click",t=>{!function(e){let t=p.filter(t=>t.id==e)[0];t.done=!t.done}(e.parentElement.parentElement.getAttribute("id")),g()})})}function f(e){const t=document.createElement("div");t.innerHTML=`<div class="card text-center mt-2" id="${e.id}">\n  <h4 class="card-header">${e.description}</h4>\n  <img src="${e.imagePath}" class="card-img-top" alt="...">\n  <div class="card-body">\n  <a href="#" class="btn-action btn btn-${e.done?"secondary":"danger"} btn-block font-weight-bold">${e.done?"Je veux le refaire":"Je me lance !"}</a>\n  </div>\n  <div class="card-footer text-muted text-right">\n  <a href="#" class="btn-visit btn btn-outline-secondary btn-sm">Visiter</a>\n  <a href="${e.link}" target="_blank" class="btn btn-outline-dark btn-sm">Plus d'infos</a>\n  </div>\n  </div>`,m.appendChild(t),d(e)}window.init=function(){s(),g()}}]);
//# sourceMappingURL=bundle.js.map