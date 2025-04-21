/**
 * Challenge 13: Advanced School ERP System
 *
 * Vazifa: Murakkab Maktab Boshqaruv Tizimini yarating
 *
 * Bu challenge da quyidagi narsalarni o'rganasiz:
 * 1. Murakkab tizim arxitekturasini yaratish
 * 2. Rollarga asoslangan kirish nazorati
 * 3. Imtihon va baholash tizimini yaratish
 * 4. Xatoliklarni boshqarish va validatsiya
 *
 * Talablar:
 * 1. User abstract classini quyidagi xususiyat va metodlar bilan yarating:
 *    - id: string (ID)
 *    - name: string (ism)
 *    - role: 'admin' | 'teacher' | 'student' | 'parent' (rol)
 *    - abstract getInfo(): string - ma'lumot olish
 *    - abstract hasPermission(action: string): boolean - ruxsatni tekshirish
 *
 * 2. Admin classini User dan meros oling va quyidagi metodlarni qo'shing:
 *    - createUser(userData: UserData): User - yangi foydalanuvchi yaratish
 *    - deleteUser(userId: string): void - foydalanuvchini o'chirish
 *    - updateUser(userId: string, userData: Partial<UserData>): void - foydalanuvchini yangilash
 *
 * 3. Teacher classini User dan meros oling va quyidagi xususiyat va metodlarni qo'shing:
 *    - subject: string (fan)
 *    - classes: Classroom[] (sinflar)
 *    - createExam(course: Course, title: string, maxScore: number): Exam - imtihon yaratish
 *    - gradeExam(exam: Exam, student: Student, score: number): void - imtihonni baholash
 *
 * 4. Student classini User dan meros oling va quyidagi xususiyat va metodlarni qo'shing:
 *    - grade: number (sinf)
 *    - courses: Course[] (fanlar)
 *    - grades: Grade[] (baholar)
 *    - getAverageGrade(): number - o'rtacha bahoni hisoblash
 *
 * 5. Parent classini User dan meros oling va quyidagi xususiyat va metodlarni qo'shing:
 *    - children: Student[] (farzandlar)
 *    - viewChildGrades(student: Student): Grade[] - farzandning baholarini ko'rish
 *
 * 6. Exam classini quyidagi xususiyatlar bilan yarating:
 *    - id: string (ID)
 *    - title: string (nomi)
 *    - course: Course (fan)
 *    - maxScore: number (maksimal ball)
 *    - grades: Map<Student, number> (o'quvchilar baholari)
 *
 * 7. Grade classini quyidagi xususiyatlar bilan yarating:
 *    - student: Student (o'quvchi)
 *    - exam: Exam (imtihon)
 *    - score: number (ball)
 *    - date: Date (sana)
 *
 * 8. Validatsiya qo'shing:
 *    - Admin faqat admin rolidagi foydalanuvchi yarata oladi
 *    - O'qituvchi faqat o'z fanidagi imtihonni yarata oladi
 *    - Ota-ona faqat o'z farzandlarining baholarini ko'ra oladi
 *    - Baho maksimal balldan oshmasligi kerak
 *
 * Masalan:
 * const admin = new Admin("A001", "Admin User");
 * const teacher = new Teacher("T001", "Ali Valiyev", "Matematika");
 * const student = new Student("S001", "Hasan Hasanov", 5);
 * const parent = new Parent("P001", "Vali Hasanov");
 *
 * // Admin yangi foydalanuvchi yaratadi
 * const newTeacher = admin.createUser({
 *     id: "T002",
 *     name: "Gulnora Qodirova",
 *     role: "teacher",
 *     subject: "Fizika"
 * });
 *
 * // O'qituvchi imtihon yaratadi
 * const mathExam = teacher.createExam(mathCourse, "1-chorak", 100);
 *
 * // O'qituvchi imtihonni baholaydi
 * teacher.gradeExam(mathExam, student, 85);
 *
 * // Ota-ona farzandining baholarini ko'radi
 * const grades = parent.viewChildGrades(student);
 * console.log(grades); // [Grade { exam: mathExam, score: 85 }]
 *
 * // O'quvchi o'rtacha bahosini ko'radi
 * console.log(student.getAverageGrade()); // 85
 */
