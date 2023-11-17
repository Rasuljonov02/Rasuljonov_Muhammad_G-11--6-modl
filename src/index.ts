


class Car {
	constructor(
		public nameCar: string,
		public tire: 4, // mashina baloni
		public color: string,
		public priceCar: string
	) {}

	run() {
		console.log(`${this.nameCar} is running...`);
	}
}

class ElectroCar extends Car {}
class PetrolCar extends Car {}
class HybridCar extends Car {}

class BYD extends ElectroCar {}
class Kia extends PetrolCar {}
class Zeekr extends HybridCar {}

interface Capacity {
	electroCar: number;
	petrolCar: number;
	hybridCar: number;
}

interface Pricing {
	electroCarPricePerMinute: number;
	petrolCarPricePerMinute: number;
	hybridCarPricePerMinute: number;
}

const capacityParking: Capacity = {
	electroCar: 4,
	petrolCar: 12,
	hybridCar: 3,
};

const pricingParking: Pricing = {
	electroCarPricePerMinute: 10,
	petrolCarPricePerMinute: 4,
	hybridCarPricePerMinute: 20,
};
let sum:number;
class Parking<T extends Car> {
	public cars: T[] = [];
	constructor(public nameParking: string, public capacity: Capacity, public pricing: Pricing) {}

	enterCar(car: T) {


		if (this.cars.length < this.capacity.electroCar) {
			this.cars.push(car);
			console.log(`${car.nameCar} to'xtash joyiga kirdi.`);
		} else {
			console.log(`${this.nameParking} is full by => ${car.constructor.name}s.`);
		}
	}

	logoutCar(car: T) {
		const index = this.cars.indexOf(car);
		if (index !== -1) {
			this.cars.splice(index, 1);
			console.log(`${car.nameCar}to'xtash joyidan chiqdi.`);
		}
	}

	calculateTotalPricePerCar(car: T) {
		// const pricePerMinute = this.pricing.electroCarPricePerMinute;
		// return this.calculateMinutes() * pricePerMinute;
	}

	calculateMinutes() {}

	calculateTotalProfit() {}

}

const parking1 = new Parking<ElectroCar>("Chilonzor", capacityParking, pricingParking);
const parking2 = new Parking<PetrolCar>("Chorsu", capacityParking, pricingParking);
const parking3 = new Parking<HybridCar>("Qibray", capacityParking, pricingParking);
console.log(parking1);
console.log(parking2);
console.log(parking3);

console.log("-----------------------MOSHINA-----------------------------------------");

const car1 = new BYD("BYD", 4, "blue", "4$");
const car2 = new Kia("Kia", 4, "green", "2$");
const car3 = new Zeekr("Zeekr", 4, "black", "3$");


console.log(car1);
console.log(car2);
console.log(car3);

console.log("-----------------------MOSHINA KIRISH-----------------------------------------");

parking1.enterCar(car1);
parking2.enterCar(car2);
parking3.enterCar(car3);

console.log("-----------------------MOSHINANI ketishi-----------------------------------------");

parking1.logoutCar(car1);
parking2.logoutCar(car2);
parking3.logoutCar(car3);




// console.log(`Total profit: $${parking.calculateTotalProfit()}`);
// // props:   (public)name, (public)sigimi, (public)narxlar
// // methods:  Methods autokirishi(car: T), autochiqishi(), tolovnaarx(carID: string), jamipul

// /**
//  *
//  * Example :
//  *
//  * const avtoturargoh = new Avtoturargoh("Sebzor", sigimi, narxlar)
//  * const car1 = new BYD("BYD Sons")
//  * avtoturargoh.autokirishi(car1) // { minutes: 5 }
//  * avtoturargoh.logout(car1) // { totalPrice: 50 }
//  *
//  *
//  * const sigimi: Sigimi = {
//  *  electroCar: 4,
//  *  petrolCar: 12,
//  *  HybridCar: 3,
//  * }
//  *
//  * narxlar = {
//  *  electroCarPricePerMinute: 10 ,
//  *  petrolCarPricePerMinute: 4,
//  *  HybridCarPricePerMinute: 20,
//  * }
//  *
//  */

// /**
//  * Rules:
//  *  ✅ Internetdan foydalansa boladi
//  *  ✅ Repo yaratish kerak
//  *  ✅ UI shart emas
//  *  ✅ Loyiha TS da bolishi kerak
//  *
//  */
