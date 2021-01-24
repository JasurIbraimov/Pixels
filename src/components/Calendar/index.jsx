// Base
import React from 'react'

// Components
import Days from '../Days'
// Styles
import styles from './Calendar.module.css'
const Calendar = ({ mood, year, onChangeDayStatus }) => {
	return (
		<div className={styles.calendar}>
			<ul className={styles.monthNameLayer}>
				{year.length !== 0 && year.map((month, i) => {
					return (
						<li key={i} className={styles.monthName}>
							{month.name}
						</li>
					)
				})}
			</ul>
			<ul className={styles.daysCountLayer}>
				{year.length !== 0 && year[0].days.map((day, i) => {
					return (
						<li key={i} className={styles.dayCount}>
							{day.day}
						</li>
					)
				})}
			</ul>

			<div className={styles.monthLayer}>
				{year.length !== 0 && year.map((month, index) => {
					return (
						<ul className={styles.month} key={index}>
							{year.length !== 0 && month.days.map((day, i) => {
								return (
									<Days
										onChangeDayStatus={onChangeDayStatus}
										day={day}
										mood={mood}
										key={i}
										month={month.name}
									/>
								)
							})}
						</ul>
					)
				})}
			</div>
		</div>
	)
}

export default Calendar
