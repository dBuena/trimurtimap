document.addEventListener("DOMContentLoaded", () => {
    // Monsters with associated highlight images and relative coordinates
    const monsters = [
        { name: "Vasabhum & Vasabhum Caura", top: 53, left: 50, image: "highlight/vasabhum.png" },
        { name: "Vasabhum Kulapra", top: 49.5, left: 50, image: "highlight/vasabhumkulapra.png" },
        { name: "Vcra", top: 53.3, left: 50, image: "highlight/vcra.png" }
    ];

    const monsterList = document.getElementById("monster-list");
    const mapContainer = document.querySelector(".map-container");
    const mapImage = document.getElementById("map");

    // Add monsters to the left panel
    monsters.forEach((monster, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = monster.name;
        listItem.dataset.index = index;

        // Add click event to highlight the corresponding area
        listItem.addEventListener("click", () => {
            highlightMonster(monster);
        });

        monsterList.appendChild(listItem);
    });

    // Function to highlight a monster area
    function highlightMonster(monster) {
        // Remove existing highlights
        document.querySelectorAll(".highlight").forEach((el) => el.remove());

        // Calculate the actual position of the highlight relative to the map's size
        const mapWidth = mapImage.offsetWidth;
        const mapHeight = mapImage.offsetHeight;

        const highlightLeft = (monster.left / 100) * mapWidth;
        const highlightTop = (monster.top / 100) * mapHeight;

        // Create the highlight element
        const highlight = document.createElement("img");
        highlight.className = "highlight";
        highlight.src = monster.image;
        highlight.style.top = `${highlightTop}px`;   // Set position based on calculated absolute coordinates
        highlight.style.left = `${highlightLeft}px`; // Set position based on calculated absolute coordinates

        // Append the highlight to the map container
        mapContainer.appendChild(highlight);
    }
});
