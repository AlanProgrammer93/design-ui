import React, {useState} from 'react'
import './ChatStyle.css'

const ChatStyle = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <div className='ChatStyle'>
            <div className='barChats'>
                <div className='chat'>
                    {
                        clicked ? (
                            <p>mensajes</p>
                        ) : (
                            <div className='cuadro'>

                            </div>
                        )
                    }

                </div>
                <div className='chat'>
                    <p>mensajes</p>
                </div>
            </div>
        </div>
    )
}

export default ChatStyle
