/**
 * Challenge 1: Car Class
 *
 * Vazifa: Car classini xususiyatlar va metodlar bilan yarating
 *
 * Bu challenge da quyidagi narsalarni o'rganasiz:
 * 1. Class yaratish
 * 2. Class xususiyatlarini (properties) belgilash
 * 3. Class metodlarini yaratish
 * 4. Object yaratish va undan foydalanish
 *
 * Talablar:
 * 1. Car classini quyidagi xususiyatlar bilan yarating:
 *    - brand: string (mashina brendi, masalan: "Toyota", "BMW")
 *    - model: string (mashina modeli, masalan: "Camry", "X5")
 *    - year: number (ishlab chiqarilgan yili, masalan: 2020)
 *    - color: string (mashina rangi, masalan: "qora", "oq")
 *
 * 2. Quyidagi metodlarni qo'shing:
 *    - start(): void - mashinani ishga tushirish
 *    - stop(): void - mashinani to'xtatish
 *    - getInfo(): string - mashina haqida ma'lumot olish
 *
 * 3. Car classidan object yarating va uning metodlarini chaqiring
 *
 * Masalan:
 * const myCar = new Car("Toyota", "Camry", 2020, "qora");
 * myCar.start(); // "Toyota Camry ishga tushdi" deb chiqarishi kerak
 * myCar.stop(); // "Toyota Camry to'xtadi" deb chiqarishi kerak
 * console.log(myCar.getInfo()); // "2020 yil qora Toyota Camry" deb chiqarishi kerak
 */

// Sizning yechimingizni shu yerda yozing
class Car {
  brand: string;
  model: string;
  color: string;
  year: number;

  constructor(brand: string, model: string, color: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.year = year;
  }

  start() {
    console.log(`${this.brand} ${this.model} ishga tushdi`);
  }

  stop() {
    console.log(`${this.brand} ${this.model} to'xtadi`);
  }

  getInfo() {
    return `${this.year} yil ${this.color} ${this.brand} ${this.model}`;
  }
}

const myCar = new Car('Toyota', 'Camry', 'qora', 2020);
myCar.start();
myCar.stop();
console.log(myCar.getInfo());
