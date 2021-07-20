import React from 'react'
import s from "./Message.module.css"

type MessageProps = {
    avatar: string
    name: string
    message: string;
    time: string
}

// Типизация что-возвращает функция??
function Message(messageData: MessageProps) {
    return (
        <div className={s.message}>
            <div className={s.messageImage}>
                <img src={messageData.avatar}/>
            </div>
            <div className={s.trianglebottomright}></div>
          {/*одинаковый стиль у блока и у сообщения?*/}
            <div className={s.blockMessage}>

                <div className={s.blockName}>{messageData.name}</div>
              {/*одинаковый стиль у блока и у сообщения?*/}
                <div className={s.blockMessage}>{messageData.message}</div>
                <div className={s.blockTime}>{messageData.time}</div>
            </div>
        </div>
    )
}

export default Message
