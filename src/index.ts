class Car {}

class ElectroCar extends Car {}

class PetrolCar extends Car {}

class HybridCar extends Car {}

interface Capacity {
	electroCar: number;
	petrolCar: number;
	HybridCar: number;
}

interface Pricing {
	electroCarPricePerMinute: number;
	petrolCarPricePerMinute: number;
	HybridCarPricePerMinute: number;
}

class Parking<T extends Car> {
	public name: string;
	public cars: T[] = [];
	public capacity: Capacity;
	public pricing: Pricing;

	constructor(name: string, capacity: Capacity, pricing: Pricing) {
		console.log(this.name = name);

		console.log(this.capacity = capacity);


console.log(		this.pricing = pricing);

	}

	enterCar(car: T) {}

	logoutCar(car: T) {}

	calculateTotalPricePerCar(carID: string) {}

	calculateTotalProfit() {}
}

const capacity: Capacity = {
	electroCar: 4,
	petrolCar: 12,
	HybridCar: 3,
};

const pricing: Pricing = {
	electroCarPricePerMinute: 10,
	petrolCarPricePerMinute: 4,
	HybridCarPricePerMinute: 20,
};

const parking = new Parking<ElectroCar>("Sebzor", capacity, pricing);
const car1 = new ElectroCar();
parking.enterCar(car1);
parking.logoutCar(car1);










// props:   (public)name, (public)sigimi, (public)narxlar
// methods:  Methods autokirishi(car: T), autochiqishi(), tolovnaarx(carID: string), jamipul

/**
 *
 * Example :
 *
 * const avtoturargoh = new Avtoturargoh("Sebzor", sigimi, narxlar)
 * const car1 = new BYD("BYD Sons")
 * avtoturargoh.autokirishi(car1) // { minutes: 5 }
 * avtoturargoh.logout(car1) // { totalPrice: 50 }
 *
 *
 * const sigimi: Sigimi = {
 *  electroCar: 4,
 *  petrolCar: 12,
 *  HybridCar: 3,
 * }
 *
 * narxlar = {
 *  electroCarPricePerMinute: 10 ,
 *  petrolCarPricePerMinute: 4,
 *  HybridCarPricePerMinute: 20,
 * }
 *
 */

/**
 * Rules:
 *  ✅ Internetdan foydalansa boladi
 *  ✅ Repo yaratish kerak
 *  ✅ UI shart emas
 *  ✅ Loyiha TS da bolishi kerak
 *
 */
