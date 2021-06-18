class myCar {
    constructor (name, brand, year, model, mileage) {
        this.name = name,
        this.brand = brand,
        this.year = year,
        this.model = model,
        this.mileage = mileage;
    }

present () {
        return 'I have a' + this.year + this.name + 'that is ' + this.brand + this.year + 'with' + this.mileage 
        
        + 'mileage';
    }
    show() {
        return this.present()
    }
}
myNewCar = new myCar ("toyota", "toyota", 2021, "new engine", 1000);
myNewCar.show();
