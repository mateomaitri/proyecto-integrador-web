const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

function addTask() {
    if (inputBox.value === "") {
        alert("DEBES ESCRIBIR ALGO!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;

        // Crear el contenedor padre con la clase "lateralicons"
        let containerDiv = document.createElement("div");
        containerDiv.className = "lateralicons";

        // Crear el div del ícono
        let iconDiv = document.createElement("div");
        iconDiv.className = "iconShare";

        // Crear el ícono SVG
        let svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgIcon.setAttribute("viewBox", "0 0 24 24");
        svgIcon.setAttribute("fill", "currentColor");
        svgIcon.classList.add("size-6");

        let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("fill-rule", "evenodd");
        path.setAttribute("d", "M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z");
        path.setAttribute("clip-rule", "evenodd");

        // Ensamblar el SVG
        svgIcon.appendChild(path);
        iconDiv.appendChild(svgIcon);

        // Crear el botón de eliminar
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        // Agregar el iconDiv y el span al contenedor div
        containerDiv.appendChild(iconDiv);
        containerDiv.appendChild(span);

        // Agregar el contenedor div al li
        li.appendChild(containerDiv);

        // Agregar el li al contenedor
        listContainer.appendChild(li);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.closest('li').remove();
    }
}, false);