class Car {
	constructor(public name: string) {}
}

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
	public cars: T[] = [];
	public capacity: Capacity = {} as Capacity;
	public pricing: Pricing = {} as Pricing;

	constructor(public name: string, capacity: Capacity, pricing: Pricing) {
		console.log((this.capacity = capacity));
		console.log((this.pricing = pricing));

		this.capacity = capacity;
		this.pricing = pricing;
	}

	enterCar(car: T): { minutes: number } {
		const carType = this.getCarType(car);
		if (this.canParkCar(carType)) {
			this.cars.push(car);
			return { minutes: 10 }; // necha minut turishi
		} else {
			console.log(` ${carType} - Ushbu turdagi mashinalar to'la.`);
			return { minutes: 0 };
		}
	}

	 logoutCar(): { totalPrice: number } {

	     const carType = this.getCarType(this.cars[0]);
	     const totalPrice = this.calculateTotalPricePerCar(carType);
	     this.cars.pop();
	     return { totalPrice };
	 }

	 calculateTotalPricePerCar(carType: string) {
	  const pricePerMinute = this.pricing `${carType}PricePerMinute`;
	  const totalMinutes = 5;
	  return pricePerMinute * totalMinutes;
	}

	calculateTotalProfit() {
		let totalProfit = 0;
		this.cars.forEach((car) => {
			const carType = this.getCarType(car);
			totalProfit += this.calculateTotalPricePerCar(carType);
		});
		return totalProfit;
	}

	private getCarType(car: T) {
		if (car instanceof ElectroCar) {
			return "electroCar";
		} else if (car instanceof PetrolCar) {
			return "petrolCar";
		} else if (car instanceof HybridCar) {
			return "HybridCar";
		}
		throw new Error("Avtomobil turi yoq");
	}

	private canParkCar(carType: string) {
		return this.cars.length < this.capacity.HybridCar;
	}
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

const parking = new Parking<Car>("Sebzor", capacity, pricing);

const car1 = new ElectroCar("BYD Sons");
const car2 = new PetrolCar("Petrol Car 1");

console.log(parking.enterCar(car1));
console.log(parking.enterCar(car2));
console.log(parking.calculateTotalProfit());
console.log(parking.logoutCar());
console.log(parking.calculateTotalProfit());
