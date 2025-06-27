class AllCars{
    constructor(brand, model, year, color, price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
    }

    getInfo() {
        return `${this.brand} ${this.model} (${this.year}) - ${this.color} - $${this.price}`;
    }
}

class Car extends AllCars{
    constructor(brand, model, year, color, price,horn){
        super(brand, model, year, color, price);
        this.horn = horn;
    }

    getInfo() {
        return `${this.brand} ${this.model} (${this.year}) - ${this.color} - $${this.price} - Horn: ${this.horn}`;
    }
    signalHorn(){
        alert(this.horn)
    }
}


const bmw = new Car('BMW', 'M5', 2020, 'Cyan', 60000, 'Beep Beep');
const mercedes = new Car('Mercedes', 'S-Class', 2021, 'Black', 70000, 'Vroom Vroom');
const audi = new Car('Audi', 'A8', 2020, 'Black', 55000, 'Honk Honk');
const tesla = new Car('Tesla', 'Model S', 2023, 'Red', 80000, 'Whoosh Whoosh');
const allVehicles = [bmw, mercedes, audi, tesla];


const allGetInfo = document.querySelectorAll('.getInfo');
const Backblur = document.querySelector('#blur');
for(let i of allGetInfo) {
    for(let veh of allVehicles){
        if(i.classList.contains(veh.brand) && i.classList.contains('Info')) {
            i.addEventListener('click', e=> {
                const hiddenCard = e.target.closest('.card').querySelector('.card-hidden');
                hiddenCard.style.display = 'block';
                Backblur.style.display = 'block';

                const vehicleInfo = hiddenCard.querySelector('ul');
                vehicleInfo.innerHTML = `<li>${veh.getInfo()}</li>`;
            });
        }
    }
}
Backblur.addEventListener('click', e=> {
    const hiddenCard = document.querySelectorAll('.card-hidden');
    for(let i of hiddenCard){
        i.style.display = 'none';
    }
    Backblur.style.display = 'none';
})

const engine = document.querySelectorAll('.engineSound');
for(let eng of engine) {
    for(let veh of allVehicles) {
        if(eng.classList.contains(veh.brand) && eng.classList.contains('Eng')) eng.addEventListener('click', e=> veh.signalHorn());
    }
}

