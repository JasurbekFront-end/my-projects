function calculateBMI(weight, height) {
	return weight / Math.pow(height, 2);
}

console.log('Kent BMI = ' + calculateBMI(70, 1.7));
console.log('Arslonbek BMI = ' + calculateBMI(70, 1.7));
console.log('Qozivoy BMI = ' + calculateBMI(90, 1.9));
console.log('Jasur BMI = ' + calculateBMI(65, 1.85));
// Examples:
/**
 * Kent: weight = 70, height = 1.7m -> "Kent BMI = 24.2"
 * Arslonbek: weight = 80, height = 1.8m -> "Arslonbek BMI = 27.2"
 * Qozivoy: weight = 90, height = 1.9m -> "Qozivoy BMI = 28.9"
 * Jasur: weight = 65, height = 1.85m -> "Jasur BMI = 24.6"
 *
 *
 */
