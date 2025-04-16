/**
 * Challenge 5: Vehicle Hierarchy with Inheritance
 *
 * Vazifa: Inheritance yordamida Vehicle ierarxiyasini yarating
 *
 * Bu challenge da quyidagi narsalarni o'rganasiz:
 * 1. Inheritance (meros olish) tushunchasini qo'llash
 * 2. Base class va subclass yaratish
 * 3. Method overriding
 * 4. Protected xususiyatlarni ishlatish
 *
 * Talablar:
 * 1. Base Vehicle classini quyidagi xususiyatlar bilan yarating:
 *    - brand: string (transport vositasining brendi)
 *    - model: string (transport vositasining modeli)
 *
 * 2. Vehicle classiga quyidagi metodlarni qo'shing:
 *    - start(): void - transport vositasini ishga tushirish
 *
 * 3. Car classini Vehicle dan meros oling va quyidagi xususiyat va metodlarni qo'shing:
 *    - numberOfDoors: number (eshiklar soni)
 *    - openTrunk(): void (bagajnikni ochish)
 *
 * 4. Motorcycle classini Vehicle dan meros oling va quyidagi xususiyat va metodlarni qo'shing:
 *    - hasSidecar: boolean (yon qo'shcha bor/yo'q)
 *    - wheelie(): void (oldingi g'ildirakni ko'tarish)
 *
 * Masalan:
 * const car = new Car("Toyota", "Camry", 4);
 * car.start(); // "Toyota Camry ishga tushdi" deb chiqarishi kerak
 * car.openTrunk(); // "Bagajnik ochildi" deb chiqarishi kerak
 *
 * const bike = new Motorcycle("Harley", "Davidson", false);
 * bike.start(); // "Harley Davidson ishga tushdi" deb chiqarishi kerak
 * bike.wheelie(); // "Motor velosiped oldingi g'ildirakni ko'tardi" deb chiqarishi kerak
 */

// Sizning yechimingizni shu yerda yozing
