import React from 'react'
import Affair from '../Affair/Affair'
import {FilterType, newAffairsPropsType} from "../HW2";
import  styles from "./Affairs.module.css"
export const ALL="all"
export const HIGH="high"
export const MIDDLE="middle"
export const LOW="low"




export type AffairsPropsType = {
    data: newAffairsPropsType[]
    setFilter: (filterAff: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const {data, deleteAffairCallback,setFilter}=props

    const onClickSetFilterAll =()=>setFilter(ALL)
    const onClickSetFilterHigh =()=>setFilter(HIGH)
    const onClickSetFilterMiddle =()=>setFilter(MIDDLE)
    const onClickSetFilterLow =()=>setFilter(LOW)



    const mappedAffairs = data.map(({_id,priority,name}: newAffairsPropsType):JSX.Element => (

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
        <div className={styles.container}>
            {mappedAffairs}
            <button className={styles.btn} onClick={onClickSetFilterAll}>All</button>
            <button className={styles.btnHight} onClick={onClickSetFilterHigh}>High</button>
            <button className={styles.btnMiddle} onClick={onClickSetFilterMiddle}>Middle</button>
            <button className={styles.btnLow} onClick={onClickSetFilterLow}>Low</button>
        </div>
    )
}

export default Affairs
