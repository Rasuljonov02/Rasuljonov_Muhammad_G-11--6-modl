class Car {
	constructor(
		public nameCar: string,

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
class BMW extends HybridCar {}


interface Capacity {
	electroCar: number;
	petrolCar: number;
	hybridCar: number;
}

interface Pricing {
	electroCarDaqiqadaNarx: number;
	petrolCarDaqiqadaNarx: number;
	hybridCarDaqiqadaNarx: number;
}

const capacityParking: Capacity = {
	electroCar: 4,
	petrolCar: 12,
	hybridCar: 3,
};

class Parking<T extends Car> {
	public cars: T[] = [];
	constructor(public nameParking: string, public capacity: Capacity, public pricing: Pricing) {}

	kirish(car: T) {
		if (this.cars.length < this.capacity.electroCar) {
			this.cars.push(car);
			console.log(`${car.nameCar} to'xtash joyiga kirdi.`);
		} else {
			console.log(`${this.nameParking} is full by => ${car.constructor.name}s.`);
		}
	}

	chiqish(car: T) {
		const index = this.cars.indexOf(car);
		if (index !== -1) {
			this.cars.splice(index, 1);
			console.log(`${car.nameCar} to'xtash joyidan chiqdi.`);
		}
	}

	PardagiCar(car: T) {
		const daqiqadaNarx =
			car instanceof ElectroCar
				? this.pricing.electroCarDaqiqadaNarx
				: car instanceof PetrolCar
				? this.pricing.petrolCarDaqiqadaNarx
				: this.pricing.hybridCarDaqiqadaNarx;
		return this.daqiqalarniHisoblash() * daqiqadaNarx;
	}

	daqiqalarniHisoblash() {
		return Math.floor(Math.random() * 60);
	}

	calculateTotalProfit() {
		return this.cars.reduce((total, car) => total + this.PardagiCar(car), 0);
	}
}

const turarjoy1 = new Parking<ElectroCar>("Chilonzor", capacityParking, pricingParking);
const turarjoy2 = new Parking<PetrolCar>("Chorsu", capacityParking, pricingParking);
const turarjoy3 = new Parking<HybridCar>("Qibray", capacityParking, pricingParking);

const car1 = new BYD("BYD");
const car2 = new Kia("Kia");
const car3 = new BMW("BMW");

console.log("-----------------------MOSHINA KIRISH-----------------------------------------");

turarjoy1.kirish(car1);
turarjoy2.kirish(car2);
turarjoy3.kirish(car3);

console.log("-----------------------MOSHINANI ketishi-----------------------------------------");

turarjoy1.chiqish(car1);
turarjoy2.chiqish(car2);
turarjoy3.chiqish(car3);

console.log("-----------------------VAQT HISOBASH-----------------------------------------");

const minutes = turarjoy1.daqiqalarniHisoblash();
const daqiqadaNarx = pricingParking.electroCarDaqiqadaNarx;
const umumiyNarx = minutes * daqiqadaNarx;

console.log("-----------------------1-moshina-----------------------------------------");
console.log(BYD.name);

console.log(`Time: ${minutes} minutes`);
console.log(`Bir daqiqa uchun narx: ${daqiqadaNarx}$`);
console.log(`Umumiy narx: ${umumiyNarx}$`);

console.log("-----------------------2-moshina-----------------------------------------");
console.log(Kia.name);

const minutes1 = turarjoy2.daqiqalarniHisoblash();
const daqiqadaNarx1 = pricingParking.electroCarDaqiqadaNarx;
const umumiyNarx1 = minutes1 * daqiqadaNarx1;
console.log(`Time: ${minutes1} minutes`);
console.log(`Bir daqiqa uchun narx: ${daqiqadaNarx1}$`);
console.log(`Umumiy narx: ${umumiyNarx1}$`);

console.log("-----------------------3-moshina-----------------------------------------");
console.log(BMW.name);

const minutes2 = turarjoy3.daqiqalarniHisoblash();
const daqiqadaNarx2 = pricingParking.electroCarDaqiqadaNarx;
const umumiyNarx2 = minutes2 * daqiqadaNarx2;
console.log(`Time: ${minutes2} minutes`);
console.log(`Bir daqiqa uchun narx: ${daqiqadaNarx2}$`);
console.log(`Umumiy narx: ${umumiyNarx2}$`);
