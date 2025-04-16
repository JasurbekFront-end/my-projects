/**
 * Challenge 4: BankAccount Class with Encapsulation
 *
 * Vazifa: To'g'ri encapsulation bilan BankAccount classini yarating
 *
 * Bu challenge da quyidagi narsalarni o'rganasiz:
 * 1. Encapsulation tushunchasini qo'llash
 * 2. Private xususiyatlarni ishlatish
 * 3. Validatsiya qo'llash
 * 4. Xatoliklarni boshqarish
 *
 * Talablar:
 * 1. BankAccount classini quyidagi private xususiyatlar bilan yarating:
 *    - balance: number (hisob raqamidagi mablag')
 *    - accountNumber: string (hisob raqami)
 *
 * 2. Constructor yarating va xususiyatlarni initsializatsiya qiling
 *
 * 3. Quyidagi metodlarni qo'shing:
 *    - deposit(amount: number): void - pul qo'yish
 *    - withdraw(amount: number): void - pul yechish
 *    - getBalance(): number - balansni ko'rish
 *
 * 4. Validatsiya qo'shing:
 *    - Pul qo'yishda summa musbat bo'lishi kerak
 *    - Pul yechishda summa musbat bo'lishi kerak
 *    - Pul yechishda hisobda yetarli mablag' bo'lishi kerak
 *
 * Masalan:
 * const account = new BankAccount("123456789", 1000);
 * account.deposit(500); // Balans 1500 bo'ladi
 * account.withdraw(200); // Balans 1300 bo'ladi
 * console.log(account.getBalance()); // 1300 chiqarishi kerak
 * account.withdraw(2000); // Xato chiqarishi kerak, chunki hisobda yetarli mablag' yo'q
 * account.deposit(-100); // Xato chiqarishi kerak, chunki summa musbat bo'lishi kerak
 */

// Sizning yechimingizni shu yerda yozing
