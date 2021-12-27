import React, { useState } from 'react'
import './CircularNavigation.css';

const CircularNavigation = () => {
    const [activeMenu, setActiveMenu] = useState(false)

    const clickMenu = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <div className="circular-navigation">
            <div className={`menu ${activeMenu ? 'active' : ''}`}>
                <div onClick={clickMenu} className="toggle">
                    <ion-icon name="add"></ion-icon>
                </div>
                <li style={{ '--i': 0 }}>
                    <a href="#">
                        <ion-icon name="home"></ion-icon>
                    </a>
                </li>
                <li style={{ '--i': 1 }}>
                    <a href="#">
                        <ion-icon name="person"></ion-icon>
                    </a>
                </li>
                <li style={{ '--i': 2 }}>
                    <a href="#">
                        <ion-icon name="settings"></ion-icon>
                    </a>
                </li>
                <li style={{ '--i': 3 }}>
                    <a href="#">
                        <ion-icon name="mail"></ion-icon>
                    </a>
                </li>
                <li style={{ '--i': 4 }}>
                    <a href="#">
                        <ion-icon name="key"></ion-icon>
                    </a>
                </li>
                <li style={{ '--i': 5 }}>
                    <a href="#">
                        <ion-icon name="videocam"></ion-icon>
                    </a>
                </li>
                <li style={{ '--i': 6 }}>
                    <a href="#">
                        <ion-icon name="logo-game-controller-b"></ion-icon>
                    </a>
                </li>
                <li style={{ '--i': 7 }}>
                    <a href="#">
                        <ion-icon name="camera"></ion-icon>
                    </a>
                </li>
            </div>
        </div>
    )
}

export default CircularNavigation
