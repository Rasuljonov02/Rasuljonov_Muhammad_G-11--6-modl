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
     this.capacity = capacity;
     this.pricing = pricing;
 }

 enterCar(car: T): { minutes: number } {
     const carType = this.getCarType(car);
     if (this.canParkCar(carType)) {
         this.cars.push(car);
         return { minutes: 5 }; // or any other default duration
     } else {
         console.log(`Cannot park ${carType} - Parking is full for this type.`);
         return { minutes: 0 };
     }
 }

 logoutCar(): { totalPrice: number } {
     // Assuming there is a method to get the car type and calculate the total price
     const carType = this.getCarType(this.cars[0]); // Assuming there's at least one car
     const totalPrice = this.calculateTotalPricePerCar(carType);
     this.cars.pop(); // Remove the logged-out car from the array
     return { totalPrice };
 }

 calculateTotalPricePerCar(carType: string): number {
     const pricePerMinute = this.pricing[`${carType}PricePerMinute`];
     const totalMinutes = 5; // or any other calculation based on your system
     return pricePerMinute * totalMinutes;
 }

 calculateTotalProfit(): number {
     let totalProfit = 0;
     this.cars.forEach((car) => {
         const carType = this.getCarType(car);
         totalProfit += this.calculateTotalPricePerCar(carType);
     });
     return totalProfit;
 }

 private getCarType(car: T): string {
     if (car instanceof ElectroCar) {
         return 'electroCar';
     } else if (car instanceof PetrolCar) {
         return 'petrolCar';
     } else if (car instanceof HybridCar) {
         return 'HybridCar';
     }
     throw new Error('Invalid car type');
 }

 private canParkCar(carType: string): boolean {
     return this.cars.length < this.capacity[carType];
 }
}

// Example usage:
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

console.log(parking.enterCar(car1)); // { minutes: 5 }
console.log(parking.enterCar(car2)); // { minutes: 5 }
console.log(parking.calculateTotalProfit()); // Total profit from parked cars
console.log(parking.logoutCar()); // { totalPrice: 50 }
console.log(parking.calculateTotalProfit()); // Updated total profit after logging out a car
