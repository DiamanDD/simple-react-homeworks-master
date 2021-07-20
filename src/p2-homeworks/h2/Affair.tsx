import React from 'react'

export type affairType = {
    id: number
    name: string
    priority: string
    deleteAffairCallback: (id: number) => void
}

function Affair(props: affairType) {
    const {id, name, priority, deleteAffairCallback} = props
    const deleteCallback = () => deleteAffairCallback(id)

    return (
        <div>
            {
                <div>
                    <span>{name}</span>
                    ////
                    <span>{priority}</span>
                    <button onClick={deleteCallback}>X</button>

                </div>
            }
        </div>
    )
}

export default Affair
