
export const startingDate = new Date('October 25, 2020')

export const daysPassed = (dStart = startingDate) => {
	const dt1 = dStart
	const dt2 = new Date()
	const dPassed = Math.floor(
		(
			Date.UTC(
				dt2.getFullYear(),
				dt2.getMonth(),
				dt2.getDate()
			)

			- Date.UTC(
				dt1.getFullYear(),
				dt1.getMonth(),
				dt1.getDate()
			)
		)
		/ (1000 * 60 * 60 * 24)
	);

	return dPassed
}