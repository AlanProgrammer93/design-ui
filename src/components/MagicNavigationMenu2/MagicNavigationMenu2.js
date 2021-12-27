import React, { useState } from 'react'
import './MagicNavigationMenu2.css';

const MagicNavigationMenu2 = () => {
    const [active, setActive] = useState(0);

    const addActive = (num) => {
        setActive(num)
    }

    return (
        <div className="MaginNavigation2">
            <div className="navigation2">
                <ul>
                    <li onClick={() => addActive(0)} className={`list2 ${active === 0 && 'active2'}`}>
                        <a href="#">
                            <span className="icon2">
                                <ion-icon name="home"></ion-icon>
                            </span>
                            <span className="text2">Home</span>
                        </a>
                    </li>
                    <li onClick={() => addActive(1)} className={`list2 ${active === 1 && 'active2'}`}>
                        <a href="#">
                            <span className="icon2">
                                <ion-icon name="person"></ion-icon>
                            </span>
                            <span className="text2">Profile</span>
                        </a>
                    </li>
                    <li onClick={() => addActive(2)} className={`list2 ${active === 2 && 'active2'}`}>
                        <a href="#">
                            <span className="icon2">
                                <ion-icon name="mail"></ion-icon>
                            </span>
                            <span className="text2">Message</span>
                        </a>
                    </li>
                    <li onClick={() => addActive(3)} className={`list2 ${active === 3 && 'active2'}`}>
                        <a href="#">
                            <span className="icon2">
                                <ion-icon name="camera"></ion-icon>
                            </span>
                            <span className="text2">Photos</span>
                        </a>
                    </li>
                    <li onClick={() => addActive(4)} className={`list2 ${active === 4 && 'active2'}`}>
                        <a href="#">
                            <span className="icon2">
                                <ion-icon name="settings"></ion-icon>
                            </span>
                            <span className="text2">Settings</span>
                        </a>
                    </li>
                    <div className="indicator2"></div>
                </ul>
            </div>
        </div>
    )
}

export default MagicNavigationMenu2
