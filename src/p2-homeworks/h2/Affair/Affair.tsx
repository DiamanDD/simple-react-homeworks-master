import React from 'react'
import a from "./Affair.module.css"
export type affairType = {
    id: number
    name: string
    priority: string
    deleteAffairCallback: (id: number) => void
}

function Affair(props: affairType) {
    const {id, name, priority, deleteAffairCallback} = props
    const deleteCallback = () => deleteAffairCallback(id)
    console.log(priority);
    let prioryty=a.middlePriority
    if (priority=="high"){
        prioryty=a.highPriority
    }
    else if (priority=="low"){
        prioryty=a.lowPpriority
    }
    else {
        prioryty=a.middlePriority
    }

    return (

                <div  className={a.container}>
                    <span className={a.userName}>{name}</span>

                    <span className={prioryty}>{priority.toUpperCase()}</span>
                    <button  className={a.addButton} onClick={deleteCallback}>X</button>

                </div>

    )
}

export default Affair
