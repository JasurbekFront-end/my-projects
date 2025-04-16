/**
 * Challenge 10: Interface
 *
 * Vazifa: To'lov tizimi uchun interfacelarni yarating
 *
 * Bu challenge da quyidagi narsalarni o'rganasiz:
 * 1. Interface yaratish
 * 2. Interface implementatsiya qilish
 * 3. Interface metodlarini belgilash
 * 4. Interface orqali polimorfizmni qo'llash
 *
 * Talablar:
 * 1. IPayment interfaceini quyidagi metodlar bilan yarating:
 *    - processPayment(amount: number): boolean - to'lovni amalga oshirish
 *    - getPaymentDetails(): string - to'lov haqida ma'lumot olish
 *
 * 2. CreditCardPayment classini IPayment interfaceini implementatsiya qilgan holda yarating:
 *    - cardNumber: string (kredit karta raqami)
 *    - expiryDate: string (muddati)
 *    - processPayment(): boolean - kredit karta orqali to'lov
 *    - getPaymentDetails(): string - kredit karta ma'lumotlari
 *
 * 3. PayPalPayment classini IPayment interfaceini implementatsiya qilgan holda yarating:
 *    - email: string (PayPal email)
 *    - processPayment(): boolean - PayPal orqali to'lov
 *    - getPaymentDetails(): string - PayPal ma'lumotlari
 *
 * 4. PaymentProcessor classini yarating:
 *    - processPayment(payment: IPayment, amount: number): void - to'lovni amalga oshirish
 *
 * Masalan:
 * const creditCard = new CreditCardPayment("1234-5678-9012-3456", "12/25");
 * const paypal = new PayPalPayment("user@example.com");
 *
 * const processor = new PaymentProcessor();
 *
 * processor.processPayment(creditCard, 100); // Kredit karta orqali to'lov
 * console.log(creditCard.getPaymentDetails()); // Kredit karta ma'lumotlari
 *
 * processor.processPayment(paypal, 50); // PayPal orqali to'lov
 * console.log(paypal.getPaymentDetails()); // PayPal ma'lumotlari
 */

// Sizning yechimingizni shu yerda yozing
