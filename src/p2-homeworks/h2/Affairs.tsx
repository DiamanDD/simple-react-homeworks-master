import React from 'react'
import Affair from './Affair'
import {FilterType, newAffairsPropsType} from "./HW2";

export const All="all"
export const High="high"
export const Middle="middle"
export const Low="low"


export type AffairsPropsType = {
    data: newAffairsPropsType[]
    setFilter: (filterAff: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const onClickSetFilterAll =()=>props.setFilter(All)
    const onClickSetFilterHigh =()=>props.setFilter(High)
    const onClickSetFilterMiddle =()=>props.setFilter(Middle)
    const onClickSetFilterLow =()=>props.setFilter(Low)
    const {data, deleteAffairCallback}=props


    const mappedAffairs = data.map(({_id,priority,name,}: newAffairsPropsType):JSX.Element => (

        <Affair
            key={_id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            id={_id}
            name={name}
            priority={priority}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))



    return (
        <div>
            {mappedAffairs}
            <button onClick={onClickSetFilterAll}>All</button>
            <button onClick={onClickSetFilterHigh}>High</button>
            <button onClick={onClickSetFilterMiddle}>Middle</button>
            <button onClick={onClickSetFilterLow}>Low</button>
        </div>
    )
}

export default Affairs
