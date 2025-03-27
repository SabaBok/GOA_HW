let outLog = document.querySelector(".log-out")
if(localStorage.getItem('isLogged') == "true"){
    document.querySelector(".log-in").style.display = "none"
    outLog.style.display = "flex"
}else{
    document.querySelector(".log-in").style.display = "flex"
    outLog.style.display = "none"
}
outLog.addEventListener("click",function(){
    localStorage.setItem('isLogged','false')
    document.querySelector(".log-in").style.display = "flex"
    outLog.style.display = "none"
    alert("You Have Logged Out Of Your Account")
})



function nothing(){}
let listing = document.querySelectorAll(".cool-cont")
let blur = document.querySelector(".card-blur")
for(let i of listing){
    i.addEventListener("click",function(){
        this.querySelector(".full-card").style.display = "block"
        blur.style.display = "block"
    })
}

let closes = document.querySelectorAll(".close")
for(let i of closes){
    i.addEventListener("click",function(event){
        event.stopPropagation()
        this.closest(".full-card").style.display = "none"
        blur.style.display = "none"
    })
}

for(let i of listing){
    let fullCard = i.querySelector(".full-card")
    let images = fullCard.querySelectorAll(".slider-img")
    let counter = 0

    function updateImage(){
        for(let iss of images){
            iss.style.display = "none"
        }
        images[counter].style.display = "block"
    }

    let rightArr = fullCard.querySelector(".right") 
    rightArr.addEventListener("click",function(){
        if(counter == images.length-1){
            counter = 0
        }else{
            counter++
        }
        updateImage()
    })

    let leftArr = fullCard.querySelector(".left")
    leftArr.addEventListener("click",function(){
        if(counter == 0){
            counter = images.length-1
        }else{
            counter--
        }
        updateImage()
    })
    updateImage();
}

for(let i of listing){
    let lang = "eng"
    let flags = i.querySelectorAll(".flag")
    for(let iss of flags){
        iss.addEventListener("click",function(){
            let text = i.querySelector(".full-bot-text").querySelectorAll("p")
            if(this.classList.contains("geo")){
                for(let idk of text){
                    idk.style.display = "none"
                }
                text[0].style.display = "block"
            }
            if(this.classList.contains("rus")){
                for(let idk of text){
                    idk.style.display = "none"
                }
                text[1].style.display = "block"
            }
            if(this.classList.contains("eng")){
                for(let idk of text){
                    idk.style.display = "none"
                }
                text[2].style.display = "block"
            }
        }) 
    }
}

let drop = document.querySelectorAll(".drop-but")
for(let i of drop){
    let semi = i.querySelector(".semi-drop")
    i.addEventListener("mouseenter",function(){
        i.style.height = "250px"
        semi.style.display = "block"
        semi.style.opacity = 1
    })
    i.addEventListener("mouseleave",function(){
        if(!i.matches(":hover") && !semi.matches(":hover")){
            i.style.height = "auto"
            semi.style.display = "none"
            semi.style.opacity = 0
        }
    })
}

let cities = document.querySelector(".city").querySelectorAll("li")
let everyFilt = document.querySelector(".drop-down").querySelectorAll("li")
let sizeBut = document.querySelector(".size").querySelectorAll("li")
let priceBut = document.querySelector(".pricy").querySelectorAll("li")
function resetColor() {
    for (let i of everyFilt) {
        i.style.backgroundColor = ""
        i.className = ""
    }
}
function filterCity(){
    for(let i = 0;i<cities.length;i++){
        cities[i].addEventListener("click",function(){
            if(i == 0){
                resetColor()
                for(let i of listing){
                    i.style = "block"
                }
            }else{
                resetColor()
                this.className = "selected"
                if(this.className = "selected"){
                    this.style.backgroundColor = "#c3c3c3"
                    for(let iss of listing){
                        if(!iss.className.includes(this.textContent)){
                            iss.style.display = "none"
                        }
                        if(iss.className.includes(this.textContent)){
                            iss.style.display = "block"
                        }
                    }
                }
            }
        })
    }
}
function filterSize(){
    for(let i = 0;i<sizeBut.length;i++){
        let filterSpan = sizeBut[i].querySelector("span")

        sizeBut[i].addEventListener("click", function(){
            if(i == 0){
                resetColor()
                for(let iss of listing){
                    iss.style.display = "block"
                }
            }else{
                resetColor()
                this.className = "selected"
                if(this.className == "selected"){
                    this.style.backgroundColor = "#c3c3c3"
                    for(let iss of listing){
                        let sizeSpan = iss.querySelector(".square")
                        if(Number(sizeSpan.textContent) >= Number(filterSpan.textContent)){
                            iss.style.display = "block"
                        }else{
                            iss.style.display = "none"
                        }
                    }
                }
            }
        })
    }
}
function filterPrice(){
    for(let i = 0;i<priceBut.length;i++){
        let filterSpan = priceBut[i].querySelector("span")
        priceBut[i].addEventListener("click", function(){
            if(i == 0){
                resetColor()
                for(let iss of listing){
                    iss.style.display = "block"
                }
            }else{
                resetColor()
                this.className = "selected"
                if(this.className == "selected"){
                    this.style.backgroundColor = "#c3c3c3"
                    for(let iss of listing){
                        let price = iss.querySelector(".idk").querySelector("span")
                        if(Number(price.textContent) >= Number(filterSpan.textContent)){
                            iss.style.display = "block"
                        }else{
                            iss.style.display = "none"
                        }
                    }
                }
            }
        })
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    event.preventDefault();

    const addImageButton = document.getElementById("add-image-button");
    const imageInput = document.getElementById("image-input");
    const uploadedImage = document.getElementById("uploaded-image");
    let uploadedImageURL = "";

    addImageButton.addEventListener("click", function () {
        imageInput.click(); 
    });

    imageInput.addEventListener("change", function () {
        const file = imageInput.files[0]; 
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                uploadedImage.src = e.target.result;
                uploadedImage.style.display = "block";
                uploadedImageURL = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});

function submit(event) {
    event.preventDefault();

    // Get form inputs
    let inputs = document.querySelectorAll(".inputs-container input");
    let parent = document.querySelector(".listing"); // Target listing container

    // Clone the existing listing template
    let originalListing = document.querySelector(".cool-cont");
    let clone = originalListing.cloneNode(true);

    // Update cloned listing with form data
    let displayImg = clone.querySelector(".card-img");
    let square = clone.querySelector(".square");
    let beds = clone.querySelector(".beds");
    let price = clone.querySelector(".idk span");
    let quickText = clone.querySelector(".card-price p");
    let location = clone.querySelector(".card-loc p");

    let fullCardPrice = clone.querySelector(".full-price");
    let fullLocation = clone.querySelector(".full-card .card-loc p");
    let fullDescription = clone.querySelector(".geo-text");

    // Assign input values
    price.textContent = inputs[0].value ;
    square.textContent = inputs[1].value;
    clone.classList.add(inputs[2].value); // Add city as a class
    fullLocation.textContent = location.textContent = inputs[7].value;
    beds.innerHTML = inputs[6].value;
    quickText.textContent = inputs[8].value;
    fullCardPrice.textContent = inputs[0].value;
    fullDescription.textContent = inputs[9].value;

    // Update image
    if (uploadedImageURL) {
        displayImg.style.backgroundImage = `url(${uploadedImageURL})`;
        let fullImg = clone.querySelector(".full-card-img .slider-img");
        if (fullImg) {
            fullImg.src = uploadedImageURL;
        }
    }

    // Append the updated clone to the listing
    parent.appendChild(clone);
}





