import React from 'react'
import Affair from './Affair'
import {FilterType, newAffairsPropsType} from "./HW2";


export type AffairsPropsType = {
    data: newAffairsPropsType[]
    setFilter: (filterAff: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: newAffairsPropsType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            id={a._id}
            name={a.name}
            priority={a.priority}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))
    return (
        <div>
            {mappedAffairs}
            <button onClick={() => props.setFilter("all")}>All</button>
            <button onClick={() => props.setFilter("high")}>High</button>
            <button onClick={() => props.setFilter("middle")}>Middle</button>
            <button onClick={() => props.setFilter("low")}>Low</button>
        </div>
    )
}

export default Affairs
