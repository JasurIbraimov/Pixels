import React from 'react'

// Styles
import styles from './Days.module.css'
const Days = ({
	day,
	month,
	mood,
	onChangeDayStatus,
}) => {
	let bgColor
	if (mood !== '') {
		bgColor =
		day.status === 'fun'
				? '#f1c40f'
				: day.status === 'active'
				? '#e74c3c'
				: day.status === 'lazy'
				? '#95a5a6'
				: day.status === 'stressed'
				? '#3498db'
				: day.status === 'calm'
				? '#27ae60'
				: ''
	} 
	const onSetPickedDay = (mood) => {
		if(day.fullDay) {
			console.log('jw')
			onChangeDayStatus({
				day: {
					date: day.day,
					status: mood,
					fullDay: day.fullDay
				},
				month})
		}
	}

	return (
		<li
			onClick={() => onSetPickedDay(mood)}
			className={styles.day}
			style={{
				backgroundColor: day.fullDay ? bgColor : '#000'
			}}
		></li>
	)
}

export default Days
