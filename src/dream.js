import { data } from "./data";
import { visitDreamOnMap, addMarkerOnMap } from "./maps.js";

const dreamsContainer = document.querySelector("#dreams-container");

function buildAllDreams() {
	while (dreamsContainer.hasChildNodes()) {
		dreamsContainer.removeChild(dreamsContainer.lastChild);
	}
	data.forEach(buildOneDream);
	addDreamsListeners();
}

function buildOneDream(dream) {
	const dreamElement = document.createElement("div");
	dreamElement.innerHTML = `<div class="card text-center mt-2" id="${dream.id}">
  <h4 class="card-header">${dream.description}</h4>
  <img src="${dream.imagePath}" class="card-img-top" alt="...">
  <div class="card-body">
  <a href="#" class="btn-action btn btn-${
		dream.done ? "secondary" : "danger"
	} btn-block font-weight-bold">${
		dream.done ? "Je veux le refaire" : "Je me lance !"
	}</a>
  </div>
  <div class="card-footer text-muted text-right">
  <a href="#" class="btn-visit btn btn-outline-secondary btn-sm">Visiter</a>
  <a href="${
		dream.link
	}" target="_blank" class="btn btn-outline-dark btn-sm">Plus d'infos</a>
  </div>
  </div>`;

	dreamsContainer.appendChild(dreamElement);
	addMarkerOnMap(dream);
}

function addDreamsListeners() {
	document.querySelectorAll(".btn-visit").forEach((button) => {
		button.addEventListener("click", (ev) => {
			visitDream(button.parentElement.parentElement.getAttribute("id"));
		});
	});
	document.querySelectorAll(".btn-action").forEach((button) => {
		button.addEventListener("click", (ev) => {
			toggleDreamDown(button.parentElement.parentElement.getAttribute("id"));
			buildAllDreams();
		});
	});
}

function visitDream(dreamId) {
	let position = data.filter((dream) => dream.id == dreamId)[0].coordinates;
	visitDreamOnMap(position);
}

function toggleDreamDown(dreamId) {
	let dreamToToggle = data.filter((dream) => dream.id == dreamId)[0];
	dreamToToggle.done = !dreamToToggle.done;
}

export { buildAllDreams };
