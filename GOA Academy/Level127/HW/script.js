let allData = [];

const div = document.querySelector('.card-container');
function createElement(data) {
    div.innerHTML = '';
    data.forEach(el => {
        let bBoxSum = el.bbox.reduce((cur, next) => cur + next) / el.bbox.length;
        let price = (el.area / 1000 + bBoxSum).toFixed(2);

        div.innerHTML += `
        <div class="card">
            <img src="test/${el.file_name}" alt="${el.category}">
            <div class="card-info">
                <h2>${el.category}</h2>
                <h3>$${price}</h3>
                <p>${el.area.toFixed(0)} cm²</p>
            </div>
        </div>
    `;
    });
}

function filterData() {
    const filterName = document.getElementById('name').checked;
    const filterSize = document.getElementById('size').checked;
    const filterPrice = document.getElementById('price').checked;

    let filteredData = [...allData];

    if (filterName) {
        filteredData.sort((a, b) => a.category.localeCompare(b.category));
    }
    if (filterSize) {
        filteredData.sort((a, b) => b.area - a.area);
    }
    if (filterPrice) {
        filteredData.sort((a, b) => {
            let priceA = a.area / 1000 + a.bbox.reduce((cur, next) => cur + next) / a.bbox.length;
            let priceB = b.area / 1000 + b.bbox.reduce((cur, next) => cur + next) / b.bbox.length;
            return priceB - priceA;
        });
    }

    createElement(filteredData);
}

function getInfo(createCard) {
    const http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            let annotations = response.annotations;

            for (const image of response.images) {
                for (const annotation of annotations) {
                    if (image.id === annotation.image_id) {
                        annotations[annotation.id].file_name = image.file_name;
                        annotations[annotation.id].data_captured = image.data_captured;
                    }
                }
            }

            for (const category of response.categories) {
                for (const annotation of annotations) {
                    if (category.id === annotation.category_id) {
                        annotations[annotation.id].category = category.name;
                    }
                }
            }

            allData = [...annotations];

            createCard(allData);

            document.querySelectorAll('.filter-container input[type=checkbox]').forEach(input => {
                input.addEventListener('change', filterData);
            });
        }
    };
    http.open("GET", "test/_annotations.coco.json");
    http.send();
}

getInfo(createElement);