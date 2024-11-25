function calculateBMI(weight, height) {
	return weight / Math.pow(height, 2);
}

function checkBMICategory(weight, height) {
	const bmi = calculateBMI(weight, height);

	if (bmi <= 18.5) return 'Underweight';
	else if (bmi >= 18.5 && bmi < 24.9) return 'Normal';
	else if (bmi >= 25 && bmi < 29.9) return 'Overweight';
	else return 'Obese';
}

// BMI kategoriyalari:
// Underweight: < 18.5
// Normal: 18.5 - 24.9
// Overweight: 25 - 29.9
// Obese: 30+

// Examples:
// console.log(checkBMICategory(70, 1.7)); // Normal

console.log("Kent's BMI(" + calculateBMI(70, 1.7) + ') category is:', checkBMICategory(70, 1.7));
console.log(
	"Arslonbek's BMI(" + calculateBMI(80, 1.8) + ') category is:',
	checkBMICategory(80, 1.8)
);
console.log("Qozivoy's BMI(" + calculateBMI(90, 1.9) + ') category is:', checkBMICategory(90, 1.9));
console.log("Jasur's BMI(" + calculateBMI(65, 1.85) + ') category is:', checkBMICategory(65, 1.85));
/**
 * Kent: weight = 70, height = 1.7m, BMI = 24.2
 * Arslonbek: weight = 80, height = 1.8m
 * Qozivoy: weight = 90, height = 1.9m
 * Jasur: weight = 65, height = 1.85m
 *
 *
 */
