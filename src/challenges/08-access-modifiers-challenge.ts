/**
 * Challenge 8: Access Modifiers
 *
 * Vazifa: Turli access modifierlarni namoyish eting
 *
 * Bu challenge da quyidagi narsalarni o'rganasiz:
 * 1. Public, private, protected access modifierlarini ishlatish
 * 2. Meros olishda access modifierlarning ta'sirini ko'rish
 * 3. Encapsulation tushunchasini qo'llash
 * 4. Getter va setter metodlarini ishlatish
 *
 * Talablar:
 * 1. AccessDemo classini quyidagi xususiyatlar bilan yarating:
 *    - publicField: string (ochiq maydon)
 *    - privateField: string (yopiq maydon)
 *    - protectedField: string (himoyalangan maydon)
 *
 * 2. Quyidagi metodlarni qo'shing:
 *    - publicMethod(): string - ochiq metod
 *    - privateMethod(): string - yopiq metod
 *    - protectedMethod(): string - himoyalangan metod
 *
 * 3. SubAccessDemo classini AccessDemo dan meros oling
 *
 * 4. SubAccessDemo classida quyidagi metodlarni qo'shing:
 *    - accessProtected(): string - protected maydonga kirish
 *    - tryAccessPrivate(): string - private maydonga kirishga urinish
 *
 * Masalan:
 * const demo = new AccessDemo();
 * console.log(demo.publicField); // Muvaffaqiyatli
 * console.log(demo.privateField); // Xato - private maydonga tashqaridan kirish mumkin emas
 * console.log(demo.protectedField); // Xato - protected maydonga tashqaridan kirish mumkin emas
 *
 * const subDemo = new SubAccessDemo();
 * console.log(subDemo.accessProtected()); // Muvaffaqiyatli - subclass ichidan protected maydonga kirish mumkin
 * console.log(subDemo.tryAccessPrivate()); // Xato - subclass ichidan ham private maydonga kirish mumkin emas
 */

// Sizning yechimingizni shu yerda yozing
