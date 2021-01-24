// Base
import React, {useState} from 'react'

// Styles
import styles from './Pallette.module.css'

// CONSTANTS
const pallette = [
    {
        status: 'fun',
        label: [
            'Fun', 'Happy'
        ]
    },
    {
        status: 'active',
        label: [
            'Active', 'Productive'
        ]
    },
    {
        status: 'lazy',
        label: [
            'Lazy', 'Procratinate'
        ]
    },
    {
        status: 'stressed',
        label: [
            'Stressed', 'Sad'
        ]
    },
    {
        status: 'calm',
        label: [
            'Calm', 'Zen'
        ]
    },
    {
        status: 'none',
        label: [
            'Eraze', 'A mood'
        ]
    }
]

const Pallette = ({onMoodChange, mood}) => {
    return (
        <div className={styles.pallette}>
            <h2 className={styles.title}>Color Code</h2>
            <ul className={styles.mood}>
                {
                    pallette.map((pl, i) => {
                        return <li key={i} className={mood === pl.status ? styles.activeMood : ''} onClick={() => onMoodChange(pl.status)}>
                            <div className={styles[pl.status]}></div>
                            <span>
                                <p>{pl.label[0]}</p>
                                <p>{pl.label[1]}</p>
                            </span>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Pallette
