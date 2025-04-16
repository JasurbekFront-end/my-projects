/**
 * Challenge 11: Library Management System
 *
 * Vazifa: Oddiy Kutubxona Boshqaruv Tizimini yarating
 *
 * Bu challenge da quyidagi narsalarni o'rganasiz:
 * 1. Classlar o'rtasidagi munosabatlarni yaratish
 * 2. Encapsulation va validatsiya qo'llash
 * 3. Xatoliklarni boshqarish
 * 4. Real loyiha yaratish
 *
 * Talablar:
 * 1. Book classini quyidagi xususiyat va metodlar bilan yarating:
 *    - title: string (kitob nomi)
 *    - author: string (muallif)
 *    - isAvailable: boolean (mavjud/yo'q)
 *    - borrow(): void - kitobni olish
 *    - return(): void - kitobni qaytarish
 *    - getInfo(): string - kitob haqida ma'lumot
 *
 * 2. Member classini quyidagi xususiyat va metodlar bilan yarating:
 *    - name: string (a'zo ismi)
 *    - memberId: string (a'zo ID)
 *    - borrowedBooks: Book[] (olingan kitoblar)
 *    - borrowBook(book: Book): void - kitob olish
 *    - returnBook(book: Book): void - kitob qaytarish
 *    - getBorrowedBooks(): Book[] - olingan kitoblarni ko'rish
 *
 * 3. Library classini quyidagi xususiyat va metodlar bilan yarating:
 *    - books: Book[] (kitoblar)
 *    - members: Member[] (a'zolar)
 *    - addBook(book: Book): void - kitob qo'shish
 *    - addMember(member: Member): void - a'zo qo'shish
 *    - findBook(title: string): Book | undefined - kitob qidirish
 *    - findMember(memberId: string): Member | undefined - a'zo qidirish
 *
 * 4. Validatsiya qo'shing:
 *    - Kitob allaqachon olingan bo'lsa, uni qayta olish mumkin emas
 *    - Kitob mavjud bo'lmaganda, uni qaytarish mumkin emas
 *    - A'zo allaqachon olingan kitobni qayta olishi mumkin emas
 *
 * Masalan:
 * const library = new Library();
 *
 * const book1 = new Book("TypeScript Basics", "John Doe");
 * const book2 = new Book("OOP in TypeScript", "Jane Smith");
 *
 * const member = new Member("Alice", "M001");
 *
 * library.addBook(book1);
 * library.addBook(book2);
 * library.addMember(member);
 *
 * member.borrowBook(book1);
 * console.log(member.getBorrowedBooks()); // [book1]
 *
 * member.borrowBook(book1); // Xato - kitob allaqachon olingan
 *
 * member.returnBook(book1);
 * console.log(member.getBorrowedBooks()); // []
 *
 * const foundBook = library.findBook("TypeScript");
 * console.log(foundBook?.getInfo()); // TypeScript Basics - John Doe
 */

// Sizning yechimingizni shu yerda yozing
