import React from "react"
import styles from "./Affair.module.css"

export type AffairType = {
    id: number
    name: string
    priority: PriorityType
    deleteAffairCallback: (id: number) => void
}
export type PriorityType = "high" | "low" | "middle"


function Affair(props: AffairType) {
    const {id, name, priority, deleteAffairCallback} = props
    const deleteCallback = () => deleteAffairCallback(id)
    // нихуя не понятно, но очень интересно, используй либо мап либо свитчкейс, сравнение делай только строгое, кейсов с приведением типов тебе не нужны на данном этапе
    // консоль логи в мастер не должны попадать, для приоритетов сделать енам

    const setColorPriority = (priority: PriorityType) => {
        switch (priority) {
            case "high":
                return styles.highPriority
            case "middle":
                return styles.middlePriority
            case "low":
                return styles.lowPpriority
            default:
                return styles.middlePriority
        }

    }
    const getColor = () => {
        const colorMap = {
            "high": styles.highPriority,
            "middle": styles.middlePriority,
            "low": styles.lowPpriority
        }
        return colorMap[priority]
    }


    return (

        <div className={styles.container}>
            <span className={styles.userName}>{name}</span>

            <span className={getColor()}>{priority.toUpperCase()}</span>
            <button className={styles.addButton} onClick={deleteCallback}>X</button>

        </div>

    )
}

export default Affair
