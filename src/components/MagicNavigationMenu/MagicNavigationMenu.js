import React, { useState } from 'react'
import './MagicNavigationMenu.css';

const MagicNavigationMenu = () => {
    const [active, setActive] = useState(0);

    const addActive = (num) => {
        setActive(num)
    }

    return (
        <div className="MaginNavigation">
            <div className="navigation">
                <ul>
                    <li onClick={() => addActive(0)} className={`list ${active === 0 && 'active'}`}>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="home"></ion-icon>
                            </span>
                            <span className="text">Home</span>
                        </a>
                    </li>
                    <li onClick={() => addActive(1)} className={`list ${active === 1 && 'active'}`}>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="person"></ion-icon>
                            </span>
                            <span className="text">Profile</span>
                        </a>
                    </li>
                    <li onClick={() => addActive(2)} className={`list ${active === 2 && 'active'}`}>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="mail"></ion-icon>
                            </span>
                            <span className="text">Message</span>
                        </a>
                    </li>
                    <li onClick={() => addActive(3)} className={`list ${active === 3 && 'active'}`}>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="camera"></ion-icon>
                            </span>
                            <span className="text">Photos</span>
                        </a>
                    </li>
                    <li onClick={() => addActive(4)} className={`list ${active === 4 && 'active'}`}>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="settings"></ion-icon>
                            </span>
                            <span className="text">Settings</span>
                        </a>
                    </li>
                    <div className="indicator"></div>
                </ul>
            </div>
        </div>
    )
}

export default MagicNavigationMenu
