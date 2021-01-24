// Base
import React, { useState, useEffect } from 'react'

// Components
import Calendar from './components/Calendar'
import Pallete from './components/Pallette'
// Styles
import styles from './App.module.css'
// CONTANTS
const year = new Array(12).fill({})
const days = new Array(31).fill({})
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]
const mappedYear = year.map((month, index) => {
	return {
		name: months[index],
		days: days.map((day, index) => {
			return {
				day: index + 1,
				fullDay: true,
				status: 'none',
			} 
		}) 
	}
})

const finalYear = mappedYear.map((month) => {
	const daysIndex = mappedYear.filter(month => month.name === 'February')[0].days.findIndex(day => day.day > 28)
	const neededDays =  mappedYear.filter(month => month.name === 'February')[0].days.filter(day => day.day > 28)
	if(month.name === 'February') {
		return {
			name: month.name,
			days: [
				...month.days.slice(0, daysIndex), 
				...neededDays.map(d => {
					return {
						day: d.day,
						status: d.status,
						fullDay: false
					}
				}),
				...month.days.slice(daysIndex + daysIndex, month.days.length), 
			]
		}
	} else if (month.name === 'April' || month.name === 'June' || month.name === 'September' || month.name === 'November') {
		return {
			name: month.name,
			days: [
				...month.days.slice(0, month.days.length - 1), 
				month.days[month.days.length] = {
					day: month.days[month.days.length - 1].day,
					status: month.days[month.days.length - 1].status,
					fullDay: false
				}
			]
		}
	} else {
		return month 
	}
 })


const App = () => {
	const [mood, setMood] = useState('')
	const [year, setYear] = useState(finalYear)

	const onChangeDayStatus = (pickedDay) => {
		if (pickedDay) {
			setYear((prevYear) => {
				const neededMonth = prevYear.filter(
					(month) => month.name === pickedDay.month
				)
				const monthIndex = prevYear.findIndex(
					(months) => months.name === pickedDay.month
				)
				const neededDay = neededMonth[0].days.filter(
					(day) => day.day === pickedDay.day.date
				)
				const dayIndex = neededMonth[0].days.findIndex(
					(days) => days.day === pickedDay.day.date
				)
				neededDay[0].status = pickedDay.day.status
				return [
					...prevYear.slice(0, monthIndex),
					{
						name: neededMonth[0].name,
						days: [
							...neededMonth[0].days.slice(0, dayIndex),
							...neededDay,
							...neededMonth[0].days.slice(
								dayIndex + 1,
								neededMonth[0].days.length
							),
						],
					},
					...prevYear.slice(monthIndex + 1, prevYear.length),
				]
			})
		}
	}
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<h1>2021</h1>
				<h2>Year in</h2>
				<span></span>
			</header>
			<div className={styles.content}>
				<Calendar
					onChangeDayStatus={onChangeDayStatus}
					mood={mood}
					year={year}
				/>
				<div className={styles.mood}>
					<Pallete onMoodChange={setMood} mood={mood} />
				</div>
			</div>
		</div>
	)
}

export default App
