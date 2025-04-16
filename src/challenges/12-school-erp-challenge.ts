/**
 * Challenge 12: School ERP System
 *
 * Vazifa: Asosiy Maktab Boshqaruv Tizimini yarating
 *
 * Bu challenge da quyidagi narsalarni o'rganasiz:
 * 1. Murakkab tizim yaratish
 * 2. Classlar o'rtasidagi munosabatlarni belgilash
 * 3. Rollarga asoslangan kirish nazorati
 * 4. CRUD operatsiyalarini amalga oshirish
 *
 * Talablar:
 * 1. City classini quyidagi xususiyatlar bilan yarating:
 *    - name: string (shahar nomi)
 *    - schools: School[] (maktablar)
 *    - addSchool(school: School): void - maktab qo'shish
 *
 * 2. School classini quyidagi xususiyatlar bilan yarating:
 *    - name: string (maktab nomi)
 *    - address: string (manzil)
 *    - teachers: Teacher[] (o'qituvchilar)
 *    - students: Student[] (o'quvchilar)
 *    - courses: Course[] (fanlar)
 *    - addTeacher(teacher: Teacher): void - o'qituvchi qo'shish
 *    - addStudent(student: Student): void - o'quvchi qo'shish
 *    - addCourse(course: Course): void - fan qo'shish
 *
 * 3. User abstract classini quyidagi xususiyat va metodlar bilan yarating:
 *    - id: string (ID)
 *    - name: string (ism)
 *    - role: string (rol)
 *    - abstract getInfo(): string - ma'lumot olish
 *
 * 4. Student classini User dan meros oling va quyidagi xususiyat va metodlarni qo'shing:
 *    - grade: number (sinf)
 *    - courses: Course[] (fanlar)
 *    - enrollCourse(course: Course): void - fanga yozilish
 *
 * 5. Teacher classini User dan meros oling va quyidagi xususiyat va metodlarni qo'shing:
 *    - subject: string (fan)
 *    - classes: Classroom[] (sinflar)
 *    - assignClass(classroom: Classroom): void - sinfga tayinlash
 *
 * 6. Course classini quyidagi xususiyatlar bilan yarating:
 *    - name: string (fan nomi)
 *    - teacher: Teacher (o'qituvchi)
 *    - students: Student[] (o'quvchilar)
 *    - addStudent(student: Student): void - o'quvchi qo'shish
 *
 * 7. Classroom classini quyidagi xususiyatlar bilan yarating:
 *    - number: string (sinf raqami)
 *    - teacher: Teacher (o'qituvchi)
 *    - students: Student[] (o'quvchilar)
 *    - addStudent(student: Student): void - o'quvchi qo'shish
 *
 * Masalan:
 * const city = new City("Toshkent");
 *
 * const school = new School("1-sonli maktab", "Yunusobod");
 * city.addSchool(school);
 *
 * const teacher = new Teacher("T001", "Ali Valiyev", "Matematika");
 * const student = new Student("S001", "Hasan Hasanov", 5);
 *
 * school.addTeacher(teacher);
 * school.addStudent(student);
 *
 * const math = new Course("Matematika", teacher);
 * school.addCourse(math);
 *
 * student.enrollCourse(math);
 * teacher.assignClass(new Classroom("5-A"));
 *
 * console.log(student.getInfo()); // Hasan Hasanov (Student)
 * console.log(teacher.getInfo()); // Ali Valiyev (Teacher)
 */

// Sizning yechimingizni shu yerda yozing
