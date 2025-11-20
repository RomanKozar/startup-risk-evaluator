function calculateRisk() {
	const k1 = parseFloat(document.getElementById('k1').value)
	const d1 = parseFloat(document.getElementById('d1').value)
	const k2 = parseFloat(document.getElementById('k2').value)
	const d2 = parseFloat(document.getElementById('d2').value)
	const k3 = parseFloat(document.getElementById('k3').value)
	const d3 = parseFloat(document.getElementById('d3').value)
	const k4 = parseFloat(document.getElementById('k4').value)
	const d4 = parseFloat(document.getElementById('d4').value)

	// Обчислення R для кожної групи
	const r1 = k1 * d1
	const r2 = k2 * d2
	const r3 = k3 * d3
	const r4 = k4 * d4

	// Агрегована оцінка ризику
	const rAggregate = Math.sqrt(r1 * r1 + r2 * r2 + r3 * r3 + r4 * r4) / 2

	// Визначення рівня безпеки
	let level, description
	if (rAggregate <= 0.21) {
		level = 'Незначний ступінь ризику'
		description =
			'Проект має дуже низький рівень ризику. Фінансування безпечне.'
	} else if (rAggregate <= 0.36) {
		level = 'Низький ступінь ризику'
		description =
			'Проект має низький рівень ризику. Рекомендується до фінансування.'
	} else if (rAggregate <= 0.67) {
		level = 'Середній ступінь ризику'
		description =
			'Проект має помірний рівень ризику. Потрібен детальний аналіз.'
	} else if (rAggregate <= 0.87) {
		level = 'Високий ступінь ризику'
		description =
			'Проект має високий рівень ризику. Фінансування потребує обережності.'
	} else {
		level = 'Граничний ступінь ризику'
		description =
			'Проект має критичний рівень ризику. Фінансування не рекомендується.'
	}

	document.getElementById(
		'resultValue'
	).textContent = `R = ${rAggregate.toFixed(4)}`
	document.getElementById(
		'resultDescription'
	).textContent = `${level}: ${description}`
	document.getElementById('result').classList.add('show')
}
