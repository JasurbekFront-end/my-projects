// /**
//  * Challenge: Bank Account System
//  *
//  * Vazifa: Bank hisobvaraqini modellashtirish
//  *
//  * Bu challenge da quyidagi narsalarni o'rganasiz:
//  * 1. Public, private, protected access modifierlarini ishlatish
//  * 2. Meros olish va access modifierlarning ta'sirini ko'rish
//  * 3. Encapsulation tushunchasini qo'llash
//  * 4. Getter va setter metodlarini ishlatish
//  *
//  * Talablar:
//  * 1. BankAccount classini quyidagi xususiyatlar bilan yarating:
//  *    - public accountNumber: string (hisobvaraq raqami)
//  *    - private balance: number (balans)
//  *    - protected ownerName: string (egasi ismi)
//  *
//  * 2. Quyidagi metodlarni qo'shing:
//  *    - public deposit(amount: number): void - pul qo'yish
//  *    - public withdraw(amount: number): void - pul yechish
//  *    - private calculateInterest(): number - foizni hisoblash
//  *    - protected getAccountInfo(): string - hisobvaraq ma'lumotlari
//  *
//  * 3. PremiumAccount classini BankAccount dan meros oling
//  *
//  * 4. PremiumAccount classida quyidagi metodlarni qo'shing:
//  *    - public getBonus(): number - bonus olish
//  *    - protected checkVIPStatus(): boolean - VIP statusini tekshirish (balance 10000 dan katta bo'lsa VIP)
//  *
//  * Masalan:
//  * const account = new BankAccount("123456", "John Doe", 1000);
//  * account.deposit(500); // Muvaffaqiyatli
//  * account.withdraw(200); // Muvaffaqiyatli
//  * console.log(account.balance); // Xato - private maydonga tashqaridan kirish mumkin emas
//  *
//  * const premium = new PremiumAccount("789012", "Alice Smith", 5000);
//  * console.log(premium.getBonus()); // Muvaffaqiyatli
//  * console.log(premium.checkVIPStatus()); // Xato - protected metodga tashqaridan kirish mumkin emas
//  */

// // Sizning yechimingizni shu yerda yozing
// class BankAccount {
//   constructor(
//     public accountNumber: string,
//     private balance: number,
//     protected ownerName: string
//   ) {}

//   public deposit(amount: number) {
//     this.balance += amount;
//   }

//   public withdraw(amount: number) {
//     this.balance -= amount;
//   }

//   private calculateInterest() {
//     return this.balance * 0.05;
//   }

//   protected getAccountInfo() {
//     return `Account Number: ${this.accountNumber}, Balance: ${this.balance}`;
//   }
// }

// class PremiumAccount extends BankAccount {
//   public getBonus() {
//     return this.balance * 0.1;
//   }

// }
