import React, {ChangeEvent} from "react"
import s from "./Greeting.module.css"

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: any //затипизируй
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    let disabled
    name == "" ? disabled = true : disabled = false
    let inputClass
    error == "" ? inputClass = s.noerror : inputClass = s.error
    // need to fix with (?:)

    return (
        <div className={s.container}>
            <input value={name} onChange={setNameCallback} className={`${inputClass} ${s.input}`}/>
            <span className={s.styleError}>{error}</span>
            <button onClick={addUser} disabled={disabled} className={s.styleButtonAddUser}>add</button>
            <span className={s.totalUserstyle}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
