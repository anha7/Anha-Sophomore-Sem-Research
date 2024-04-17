// Variables corresponding to each title
const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");
const title3 = document.getElementById("title3");
const title4 = document.getElementById("title4");
const author = document.getElementById("author");
const legend = document.getElementById("legend");
const mapContainer = document.getElementById('mapContainer');
const mapCombined = document.getElementById('mapCombined');

// Run animation on title sequences
openAnim();

// Animate title sequences
function openAnim() {
    title1.classList.add("opacity");
    title2.classList.add("opacity");
    title3.classList.add("opacity");
    title4.classList.add("opacity");
    author.classList.add("opacity");
}

// Functionality for navigating the map
document.addEventListener("DOMContentLoaded", function() {
    let isDragging = false;
    let startX, startY;
    let translateX = 0, translateY = 0;
    let prevTranslateX = 0, prevTranslateY = 0;

    mapContainer.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        mapContainer.style.cursor = 'grabbing';

        // Adjust for any padding on the <main> element as before
        const mainElement = document.querySelector('main');
        const style = window.getComputedStyle(mainElement);
        const paddingLeft = parseInt(style.paddingLeft, 10);
        const paddingTop = parseInt(style.paddingTop, 10);

        startX -= paddingLeft;
        startY -= paddingTop;
    });

    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        translateX = prevTranslateX + dx;
        translateY = prevTranslateY + dy;

        updateMapPosition();
    });

    document.addEventListener('mouseup', function() {
        if (isDragging) {
            prevTranslateX = translateX;
            prevTranslateY = translateY;
            isDragging = false;
            mapContainer.style.cursor = 'grab';
        }
    });

    function updateMapPosition() {
        if (window.innerWidth <= 600) {                
            if (translateX > 100) {
                translateX = 95;
            }
            if (translateX < -1000) {
                translateX = -995;
            }
            if (translateY > 100) {
                translateY = 95;
            }
            if (translateY < -236) {
                translateY = -235;
            }

        } else if (window.innerWidth <= 800) {                
            if (translateX > 100) {
                translateX = 95;
            }
            if (translateX < -1000) {
                translateX = -995;
            }
            if (translateY > 100) {
                translateY = 95;
            }
            if (translateY < -400) {
                translateY = -399;
            }

        } else if (window.innerWidth <= 1000) {                
            if (translateX > 100) {
                translateX = 95;
            }
            if (translateX < -1400) {
                translateX = -1395;
            }
            if (translateY > 100) {
                translateY = 95;
            }
            if (translateY < -500) {
                translateY = -499;
            }
        } else {
            return;
        }

        mapCombined.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }
});

// Data structure for categories
const categories = {
    has_acceptable_door_width: {
        yes: ["architecture-yes", "bendheim-house-yes", "bowen-yes", "burr-yes", "corwin-bendheim-fisher-yes", "east-pyne-chancellor-green-yes", "equad-yes", "fine-yes", "forbes-yes", "frick-yes", "friend-cs-yes", "frist-jones-yes", "green-yes", "guyot-moffett-schultz-yes", "henry-yes", "icahn-yes", "jadwin-yes", "jrr-yes", "laura-wooten-1879-yes", "lewis-center-yes", "lewis-library-yes", "lewis-thomas-yes", "maeder-yes", "mathey-yes", "mccosh-dickinson-yes", "mcdonnell-yes", "ncw-yeh-yes", "new-south-yes", "pni-peretsmanscully-yes", "robertson-yes", "rocky-yes", "scheide-caldwell-yes", "sherrerd-yes", "wallace-yes", "whitman-yes", "woolworth-yes"],
        no: [""]  
    },

    has_ramps_and_elevators: {
        yes: ["architecture-yes", "bendheim-house-yes", "bowen-yes", "burr-yes", "corwin-bendheim-fisher-yes", "east-pyne-chancellor-green-yes", "equad-yes", "fine-yes", "forbes-yes", "frick-yes", "friend-cs-yes", "frist-jones-yes", "green-yes", "guyot-moffett-schultz-yes", "icahn-yes", "jadwin-yes", "jrr-yes", "laura-wooten-1879-yes", "lewis-center-yes", "lewis-library-yes", "lewis-thomas-yes", "maeder-yes", "mathey-yes", "mccosh-dickinson-yes", "mcdonnell-yes", "ncw-yeh-yes", "new-south-yes", "pni-peretsmanscully-yes", "robertson-yes", "rocky-yes", "scheide-caldwell-yes", "sherrerd-yes", "wallace-yes", "woolworth-yes"],
        no: ["henry-no", "whitman-no"]  
    },

    has_automated_entrances: {
        yes: ["architecture-yes", "bendheim-house-yes", "bowen-yes", "burr-yes", "corwin-bendheim-fisher-yes", "equad-yes", "forbes-yes", "frick-yes", "friend-cs-yes", "frist-jones-yes", "guyot-moffett-schultz-yes", "jadwin-yes", "jrr-yes", "laura-wooten-1879-yes", "lewis-center-yes", "lewis-library-yes", "maeder-yes", "mccosh-dickinson-yes", "ncw-yeh-yes", "new-south-yes", "pni-peretsmanscully-yes", "robertson-yes", "rocky-yes", "scheide-caldwell-yes", "sherrerd-yes", "wallace-yes"],
        no: ["east-pyne-chancellor-green-no", "fine-no", "green-no", "henry-no", "icahn-no", "lewis-thomas-no", "mathey-no", "mcdonnell-no", "whitman-no", "woolworth-no"]  
    },

    potential_affinity_spaces_have_automated_doors: {
        yes: [""],
        no: ["architecture-no", "bendheim-house-no", "bowen-no", "burr-no", "corwin-bendheim-fisher-no", "east-pyne-chancellor-green-no", "equad-no", "fine-no", "forbes-no", "frick-no", "friend-cs-no", "frist-jones-no", "green-no", "guyot-moffett-schultz-no", "henry-no", "icahn-no", "jadwin-no", "jrr-no", "laura-wooten-1879-no", "lewis-center-no", "lewis-library-no", "lewis-thomas-no", "maeder-no", "mathey-no", "mccosh-dickinson-no", "mcdonnell-no", "ncw-yeh-no", "new-south-no", "pni-peretsmanscully-no", "robertson-no", "rocky-no", "scheide-caldwell-no", "sherrerd-no", "wallace-no", "whitman-no", "woolworth-no"]  
    },

    has_braille_signage: {
        yes: ["bendheim-house-yes", "bowen-yes", "burr-yes", "corwin-bendheim-fisher-yes", "east-pyne-chancellor-green-yes", "fine-yes", "forbes-yes", "frick-yes", "friend-cs-yes", "frist-jones-yes", "green-yes", "guyot-moffett-schultz-yes", "henry-yes", "icahn-yes", "jadwin-yes", "jrr-yes", "laura-wooten-1879-yes", "lewis-center-yes", "lewis-library-yes", "maeder-yes", "mathey-yes", "mccosh-dickinson-yes", "new-south-yes", "pni-peretsmanscully-yes", "robertson-yes", "rocky-yes", "scheide-caldwell-yes", "sherrerd-yes", "wallace-yes", "whitman-yes", "woolworth-yes"],
        no: ["architecture-no", "equad-no", "lewis-thomas-no", "mcdonnell-no", "ncw-yeh-no"]
    },

    has_space_for_group_gathering: {
        yes: ["architecture-yes", "bendheim-house-yes", "bowen-yes", "burr-yes", "corwin-bendheim-fisher-yes", "east-pyne-chancellor-green-yes", "equad-yes", "fine-yes", "forbes-yes", "frick-yes", "friend-cs-yes", "frist-jones-yes", "green-yes", "guyot-moffett-schultz-yes", "henry-yes", "icahn-yes", "jadwin-yes", "jrr-yes", "laura-wooten-1879-yes", "lewis-center-yes", "lewis-library-yes", "lewis-thomas-yes", "maeder-yes", "mathey-yes", "mccosh-dickinson-yes", "mcdonnell-yes", "ncw-yeh-yes", "new-south-yes", "pni-peretsmanscully-yes", "robertson-yes", "rocky-yes", "scheide-caldwell-yes", "sherrerd-yes", "wallace-yes", "whitman-yes", "woolworth-yes"],
        no: [""] 
    },

    has_adjustable_lighting: {
        yes: ["bendheim-house-yes", "bowen-yes", "burr-yes", "corwin-bendheim-fisher-yes", "east-pyne-chancellor-green-yes", "equad-yes", "fine-yes", "frick-yes", "friend-cs-yes", "frist-jones-yes", "green-yes", "henry-yes", "icahn-yes", "jadwin-yes", "jrr-yes", "laura-wooten-1879-yes", "lewis-center-yes", "lewis-library-yes", "lewis-thomas-yes", "mccosh-dickinson-yes", "ncw-yeh-yes", "new-south-yes", "pni-peretsmanscully-yes", "robertson-yes", "rocky-yes", "scheide-caldwell-yes", "sherrerd-yes", "wallace-yes", "whitman-yes", "woolworth-yes"],
        no: ["architecture-no", "forbes-no", "guyot-moffett-schultz-no", "maeder-no", "mathey-no", "mcdonnell-no"] 
    },

    has_openable_windows: {
        yes: ["architecture-yes", "burr-yes", "bowen-yes", "corwin-bendheim-fisher-yes", "east-pyne-chancellor-green-yes", "frist-jones-yes", "green-yes", "jrr-yes", "laura-wooten-1879-yes", "lewis-thomas-yes", "mathey-yes", "mccosh-dickinson-yes", "robertson-yes", "rocky-yes", "scheide-caldwell-yes", "wallace-yes", "woolworth-yes"],
        no: ["bendheim-house-no", "equad-no", "fine-no", "forbes-no", "frick-no", "friend-cs-no", "guyot-moffett-schultz-no", "henry-no", "icahn-no", "jadwin-no", "lewis-center-no", "lewis-library-no", "maeder-no", "mcdonnell-no", "ncw-yeh-no", "new-south-no", "pni-peretsmanscully-no", "sherrerd-no", "whitman-no"] 
    },

    has_exterior_windows: {
        yes: ["architecture-yes", "bendheim-house-yes", "bowen-yes", "burr-yes", "corwin-bendheim-fisher-yes", "east-pyne-chancellor-green-yes", "equad-yes", "fine-yes", "forbes-yes", "frist-jones-yes", "green-yes", "guyot-moffett-schultz-yes", "henry-yes", "jadwin-yes", "jrr-yes", "laura-wooten-1879-yes", "lewis-center-yes", "lewis-thomas-yes", "mathey-yes", "mccosh-dickinson-yes", "mcdonnell-yes", "ncw-yeh-yes", "new-south-yes", "pni-peretsmanscully-yes", "robertson-yes", "rocky-yes", "scheide-caldwell-yes", "sherrerd-yes", "wallace-yes", "woolworth-yes"],
        no: ["frick-no", "friend-cs-no", "icahn-no", "lewis-library-no", "maeder-no", "whitman-no"]
    },

    has_nearby_water_source: {
        yes: ["architecture-yes", "bendheim-house-yes", "bowen-yes", "burr-yes", "corwin-bendheim-fisher-yes", "east-pyne-chancellor-green-yes", "equad-yes", "fine-yes", "forbes-yes", "frick-yes", "friend-cs-yes", "frist-jones-yes", "green-yes", "guyot-moffett-schultz-yes", "henry-yes", "icahn-yes", "jadwin-yes", "jrr-yes", "laura-wooten-1879-yes", "lewis-center-yes", "lewis-library-yes", "lewis-thomas-yes", "maeder-yes", "mathey-yes", "mccosh-dickinson-yes", "mcdonnell-yes", "ncw-yeh-yes", "new-south-yes", "pni-peretsmanscully-yes", "robertson-yes", "rocky-yes", "scheide-caldwell-yes", "sherrerd-yes", "wallace-yes", "whitman-yes", "woolworth-yes"],
        no: [""] 
    }
}

// Data structure for full maps
const fullMaps = {
    number_of_potential_affinity_spaces_per_building: "number-affinity-spaces-map", 
    maximum_capacity_of_biggest_potential_affinity_space_per_building: "room-capacity-map", 
    number_of_categories_fulfilled_per_building: "checked-categories-map"
}

// IDs of individual and full map categories
const individualCategoryIds = [
    "has_acceptable_door_width", "has_ramps_and_elevators", "has_automated_entrances", 
    "potential_affinity_spaces_have_automated_doors", "has_braille_signage", "has_space_for_group_gathering", 
    "has_adjustable_lighting", "has_openable_windows", "has_exterior_windows", 
    "has_nearby_water_source"
];

const fullMapCategoryIds = ["number_of_potential_affinity_spaces_per_building", 
    "maximum_capacity_of_biggest_potential_affinity_space_per_building", 
    "number_of_categories_fulfilled_per_building"
];

// Function to update map visibility based on checkbox states
function updateMapVisibility(selectedMap) {
    // Initially hide all maps
    document.querySelectorAll('.map-full').forEach(map => {
        
        if (map.id != "myimage" && map.id != "map-outline") {
            map.classList.add('map-hide');
            updateLegend(false)
        }
    });

    let fullMapSelected = false;
    fullMapCategoryIds.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox && checkbox.checked) {
            let checkboxData = fullMaps[id];
            fullMapSelected = true;
            document.querySelector(`img[src="./assets/full-maps/${checkboxData}.png"]`).classList.remove("map-hide");
            updateLegend(id)
        } else {
            let checkboxData = fullMaps[id];
            document.querySelector(`img[src="./assets/full-maps/${checkboxData}.png"]`).classList.add("map-hide");
        }
    });

    if (fullMapSelected) {
        individualCategoryIds.forEach(id => {
            const checkbox = document.getElementById(id);
            checkbox.disabled = true;
        });

        fullMapCategoryIds.forEach(id => {
            if (selectedMap != id) {
                const checkbox = document.getElementById(id);
                checkbox.disabled = true;
            }
        });

        return; // Skip processing individual categories if a full map is selected
    } else {
        individualCategoryIds.forEach(id => {
            const checkbox = document.getElementById(id);
            checkbox.disabled = false;
        });
    }

    let individualMapSelected = false;
    individualCategoryIds.forEach(categoryId => {
        const checkbox = document.getElementById(categoryId);
        if (checkbox && checkbox.checked) {
            updateLegend(true)
            individualMapSelected = true;
            let categoryData = categories[categoryId]; // Access category data using key
            if (categoryData) {
                categoryData.yes.forEach(yesImage => {
                    if (yesImage) {
                        document.querySelector(`img[src="./assets/yes-no-maps/${yesImage}.png"]`).classList.remove("map-hide");
                    }
                });
                categoryData.no.forEach(noImage => {
                    if (noImage) {
                        document.querySelector(`img[src="./assets/yes-no-maps/${noImage}.png"]`).classList.remove("map-hide");
                    }
                });
            }
        }
    });

    if (individualMapSelected) {
        fullMapCategoryIds.forEach(id => {
            const checkbox = document.getElementById(id);
            checkbox.disabled = true;
        });
        return; // Skip processing individual categories if a full map is selected
    } else {
        fullMapCategoryIds.forEach(id => {
            const checkbox = document.getElementById(id);
            checkbox.disabled = false;
        });
    }
}

// Event listeners for checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        updateMapVisibility(checkbox.id);
        
        let allChx = document.querySelectorAll(`input[type='checkbox']`);
        let count = 0;
        for (let chx of allChx) {
            count++;
            if (count == allChx.length) {

                if (chx.checked == true) {
                    break;
                }

                legend.style.display = "none";
                mapCombined.style.top = "0";
                mapCombined.style.marginBottom = "0";
            }

            if (chx.checked == true) {
                break;
            }
        }
    });
});

// Functionality for the map legend
function updateLegend(type) {
    let legendFullMaps = document.getElementsByClassName("spectrum");
    let legendIdvMaps = document.getElementsByClassName("simple");

    for (let cat of legendIdvMaps) {
        if (type === true) {
            legend.style.display = "block";
            cat.style.display = 'grid';

            if (window.innerWidth > 1000) {  
                mapCombined.style.top = "-71px";
                mapCombined.style.marginBottom = "-71px";
            } else {
                mapCombined.style.top = "-41px";
            }

        } else {
            cat.style.display = 'none';
        }
    }

    for (let cat of legendFullMaps) {
        cat.style.display = 'none';

        if (type == cat.id) {
            legend.style.display = "block";
            cat.style.display = 'grid';
            if (type == "number_of_categories_fulfilled_per_building") {
                mapCombined.style.top = "-72px";
            } else if (window.innerWidth > 1000) {  
                mapCombined.style.top = "-108px";
                mapCombined.style.marginBottom = "-108px";
            } else {
                mapCombined.style.top = "-58px";
            }

        }
    }
}
