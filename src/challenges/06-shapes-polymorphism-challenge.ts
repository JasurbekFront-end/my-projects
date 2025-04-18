/**
 * Challenge 6: Shapes with Polymorphism
 *
 * Vazifa: Shakllar bilan polymorphismni namoyish eting
 *
 * Bu challenge da quyidagi narsalarni o'rganasiz:
 * 1. Abstract class yaratish
 * 2. Polymorphism tushunchasini qo'llash
 * 3. Method overriding
 * 4. Abstract metodlarni implementatsiya qilish
 *
 * Talablar:
 * 1. Abstract Shape classini yarating va quyidagi abstract metodni qo'shing:
 *    - calculateArea(): number - shakl maydonini hisoblash
 *
 * 2. Circle classini Shape dan meros oling va quyidagi xususiyat va metodlarni qo'shing:
 *    - radius: number (radius)
 *    - calculateArea(): number - doira maydonini hisoblash (πr²)
 *
 * 3. Rectangle classini Shape dan meros oling va quyidagi xususiyat va metodlarni qo'shing:
 *    - width: number (eni)
 *    - height: number (bo'yi)
 *    - calculateArea(): number - to'rtburchak maydonini hisoblash (width * height)
 *
 * 4. Polymorphismni namoyish eting:
 *    - Shape array yarating
 *    - Unda Circle va Rectangle objectlarini saqlang
 *    - Har bir shakl uchun calculateArea metodini chaqiring
 *
 * Masalan:
 * const shapes: Shape[] = [
 *     new Circle(5), // radius = 5
 *     new Rectangle(4, 6) // width = 4, height = 6
 * ];
 *
 * shapes.forEach(shape => {
 *     console.log(shape.calculateArea());
 * });
 * // 78.53981633974483 (π * 5²)
 * // 24 (4 * 6)
 */

// Sizning yechimingizni shu yerda yozing

abstract class Shape {
  abstract calculateArea(): number;
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  calculateArea(): number {
    const area = Math.PI * this.radius * this.radius;
    return Number(area.toFixed(2));
  }
}

class Rectangle extends Shape {
  constructor(
    public width: number,
    public height: number
  ) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];

shapes.forEach(shape => {
  console.log(shape.calculateArea());
});
