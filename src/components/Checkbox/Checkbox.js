import React, { useState } from 'react'
import './Checkbox.css'

const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className='Checkbox'>
            <label>
                <input 
                    type="checkbox" 
                    onClick={() => setIsChecked(!isChecked)} 
                    checked={isChecked} 
                />
                <span>
                    <i></i>
                </span>
            </label>
        </div>
    )
}

export default Checkbox
