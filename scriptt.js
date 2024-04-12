document.addEventListener("DOMContentLoaded", function() {
    const map = document.getElementById("map");
    const info = document.getElementById("info");

    // Данные о памятниках
    const monuments = {
        "Athens": {
            name: "Акрополь Афин",
            description: "Акрополь – это древняя крепость в Афинах, на вершине которой находятся многочисленные исторические памятники, включая Парфенон и Эрехтеион."
        },
        "Delphi": {
            name: "Дельфы",
            description: "Древний археологический комплекс в Дельфах, известный своим оракулом Аполлона и античными артефактами."
        },
        // Добавьте дополнительные памятники здесь
    };

    // Создание информационных блоков для каждого памятника
    Object.keys(monuments).forEach(monument => {
        const infoBox = document.createElement("div");
        infoBox.classList.add("info-box");
        infoBox.innerHTML = `<h3>${monuments[monument].name}</h3><p>${monuments[monument].description}</p>`;
        map.appendChild(infoBox);
        // Установка координат для каждого памятника
        infoBox.style.left = `${Math.random() * 80}%`;
        infoBox.style.top = `${Math.random() * 80}%`;

        // Добавление обработчика событий для отображения информации при наведении
        infoBox.addEventListener("mouseover", () => {
            infoBox.style.display = "block";
        });

        infoBox.addEventListener("mouseout", () => {
            infoBox.style.display = "none";
        });
    });
});
