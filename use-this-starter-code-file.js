class Vehicle {
	constructor(make, model, year, color, mileage) {
			this.make = make;
			this.model = model;
			this.year = year;
			this.color = color;
			this.passenger = 0;
			this.speed = 0;
			this.mileage = mileage;
			this.started = false;
			this.numberOfWheels = 0;
	}

	start() {
			if (this.fuel > 0) {
					return this.started = true;
					console.log("engine started...!!!");
			} else {
					return this.started = false;
					console.log("engine cannot start...");
			}
	}
	accelerate() {
			if (this.started) {
					if (this.fuel > 0) {
							console.log(this.speed += 1);
							this.fuel = this.fuel - 1;
					} else {
							console.log("out of fuel.");
							this.stop();
					}
			} else {
					alert("You need to start the engine first.");
			}
	}
	decelerate() {
			if (this.started) {
					if (this.fuel > 0) {
							if (this.speed > 0) {
									console.log(this.speed -= 1);
									this.fuel = this.fuel - 1;
							} else {
									console.log(this + " has stopped moving");
									this.fuel = this.fuel - 1;
							}
					} else {
							console.log("out of fuel.");
							this.stop();
					}
			} else {
					alert("You need to start the engine first.");
			}
	}
	stop() {
			this.started = false;
	}

	//optional methods to code for the Vehicle base class

	drive() {
			accelerate();
	}
	brake() {
			decelerate();
	}

	autoPark()
	{

	}

	autoDrive()
	{

	}

	typeOfVehicle(wheels) {
			if (this.numberOfWheels == 8 && 8 == wheels) {
					console.log(this.model + " " + this.make + " is a Truck");
			} else if (this.numberOfWheels == 4 && 4 == wheels) {
					console.log(this.model + " " + this.make + " is a CAr");
			} else if (this.numberOfWheels == 2 && 2 == wheels) {
					console.log(this.model + " " + this.make + " is a Bike");
			} else {
					console.log("Unknown type of vehicle");
			}
	}
}



//Code the Car subclass here

//The arguments for Vehicle are make, model, year, color and mileage

let v = new Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle{
	constructor(make, model, year, color, mileage){
		super(make, model, year, color, mileage)
		this.maximumPassenger =5;
		this.passenger =0;
		this.numberOfWheels =4;
		this.maximumSpeed=160;
		this.fuel=10;
		this.scheduleService=false;
	}
}
//car needs maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel and schedule Service

//create new instances of the Car class here
let u = new Car("Mercury", "Sedan", "1800", "color", "mileage");
console.log(u.year)







//Bonus

//Code the Truck subclass here