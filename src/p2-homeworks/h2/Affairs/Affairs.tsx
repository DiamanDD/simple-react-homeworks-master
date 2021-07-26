import React from 'react'
import Affair from '../Affair/Affair'
import {FilterType, newAffairsPropsType} from "../HW2";
import  a from "./Affairs.module.css"
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
    //деструктуризацию делай
    const onClickSetFilterAll =()=>props.setFilter(All)
    const onClickSetFilterHigh =()=>props.setFilter(High)
    const onClickSetFilterMiddle =()=>props.setFilter(Middle)
    const onClickSetFilterLow =()=>props.setFilter(Low)
    const {data, deleteAffairCallback}=props

      //запятая после name для чего?
    const mappedAffairs = data.map(({_id,priority,name,}: newAffairsPropsType):JSX.Element => (

        <Affair
            key={_id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            id={_id}
            name={name}
            priority={priority}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))


     //что такое а? не называем одной буквой, кроме мест в циклах и переборах типо мапов
    return (
        <div className={a.container}>
            {mappedAffairs}
            <button className={a.btn} onClick={onClickSetFilterAll}>All</button>
            <button className={a.btnHight} onClick={onClickSetFilterHigh}>High</button>
            <button className={a.btnMiddle}  onClick={onClickSetFilterMiddle}>Middle</button>
            <button className={a.btnLow} onClick={onClickSetFilterLow}>Low</button>
        </div>
    )
}

export default Affairs
