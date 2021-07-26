import React, {useState} from "react"
import GreetingContainer from "./GreetingContainer"
import {v1} from "uuid";

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    let [users, setUsers] = useState<UserType[]>([
        {name: "Dima", _id: v1()}
    ])
    const addUserCallback = (name: string) => { // need to fix any
        let addUser = {name: name, _id: v1()}
        users = [...users, addUser]
        setUsers(users)
        console.log(users)

    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
