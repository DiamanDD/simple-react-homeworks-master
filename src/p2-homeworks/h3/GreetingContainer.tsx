import React, {ChangeEvent, useState} from "react"
import Greeting from "./Greeting"
import {UserType} from "./HW3";
import {isString} from "util";
const  regExpString =/^[A-Za-zА-Яа-яЁё]/g
type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}


// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("") // need to fix any
    const [error, setError] = useState<any>("") // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
    }
    const addUser = () => {
        let stopeed = false
        for (const key of name) {

            if (key == "0" || key == "1" || key == "2" || key == "3" || key == "4" || key == "5" || key == "6" || key == "7" || key == "8" || key == "9") {
                stopeed = true
            }
        }

        console.log(name.match(regExpString));

        if (stopeed)return  setError("Имя не может содержать цифры")
        error&&setError("")
        addUserCallback((name.trim()[0].toUpperCase() + name.trim().slice(1)).trim())
        alert(`Hello ${name.trim()} !`)

    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}

        />
    )
}

export default GreetingContainer
