import React, {useState} from 'react'
import Affairs from "./Affairs";

export type FilterType = 'all' | "high" | "middle" | "low"

export type newAffairsPropsType = {
    _id: number
    name: string
    priority: string
}

let defaultAffairs: newAffairsPropsType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'}

]

export const deleteAffair = (affairs: newAffairsPropsType[], _id: number): newAffairsPropsType[] => {
    return affairs.filter((t) => t._id !== _id)
}

function HW2() {
    let [affairs, setAffairs] = useState<newAffairsPropsType[]>(defaultAffairs)

    const [importanceOfAffairs, setFilter] = useState<FilterType>('all')

    if (importanceOfAffairs == "high") {
        affairs = affairs.filter((s) => (s.priority == importanceOfAffairs))
    } else if (importanceOfAffairs == "middle") {
        affairs = affairs.filter((s) => (s.priority == importanceOfAffairs))
    }
    if (importanceOfAffairs == "low") {
        affairs = affairs.filter((s) => (s.priority == importanceOfAffairs))
    }
    const filterAffairs = (filterAffairs: FilterType) => { // need to fix any
        setFilter(filterAffairs)
    }
    const deleteAffairCallback = (_id: number) => {
        const deletedAffair
            = deleteAffair(affairs, _id)
        setAffairs(deletedAffair)
    }
    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={affairs}
                setFilter={filterAffairs}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
